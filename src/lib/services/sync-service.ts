// Sync orchestration service
import { EmailProvider } from '@/lib/providers/email-provider';
import { SyncJob, SyncError, SyncState } from '@/lib/types/sync';
import { SupabaseClient } from '@supabase/supabase-js';

export class SyncService {
  private syncStateCache = new Map<string, SyncState>();
  
  constructor(private supabase: SupabaseClient) {}

  async getSyncState(accountId: string): Promise<SyncState> {
    if (this.syncStateCache.has(accountId)) {
      return this.syncStateCache.get(accountId)!;
    }
    
    const { data, error } = await this.supabase
      .from('sync_state')
      .select('*')
      .eq('account_id', accountId)
      .single();
    
    if (error) throw error;
    
    this.syncStateCache.set(accountId, data);
    return data;
  }

  async updateSyncState(accountId: string, state: Partial<SyncState>) {
    const existing = await this.getSyncState(accountId);
    const updated = { ...existing, ...state };
    
    const { error } = await this.supabase
      .from('sync_state')
      .upsert(updated)
      .eq('account_id', accountId);
    
    if (error) throw error;
    
    this.syncStateCache.set(accountId, updated);
  }
  
  async startSync(accountId: string, syncType: 'full' | 'delta' = 'delta'): Promise<SyncJob> {
    // Get provider instance
    const provider = this.providerRegistry.get(accountId);
    if (!provider) throw new Error(`No provider registered for account ${accountId}`);

    // Start sync session with provider
    const session = await provider.startSync(syncType);
    
    // Create sync job record
    const { data: job, error } = await this.supabase
      .from('sync_jobs')
      .insert({
        account_id: accountId,
        session_id: session.id,
        type: syncType,
        status: 'running',
        started_at: new Date().toISOString()
      })
      .select()
      .single();
    
    if (error) throw error;
    
    // Run sync in background (could be a queue job)
    this.runSync(accountId, job.id).catch(console.error);
    
    return job;
  }
  
  private async runSync(accountId: string, jobId: string) {
    try {
      const account = await this.getAccount(accountId);
      const provider = this.getProvider(account);
      
      // Get threads since last sync
      const since = account.lastSyncAt || new Date(0);
      const threadSummaries = await provider.getThreadsSince(since);
      
      for (const summary of threadSummaries) {
        try {
          const fullThread = await provider.getThread(summary.providerThreadId);
          await this.upsertThread(accountId, fullThread);
        } catch (err: any) {
          await this.recordError(jobId, { 
            threadId: summary.providerThreadId, 
            error: err.message 
          });
        }
      }
      
      // Update job and account
      await this.completeSync(jobId, accountId);
    } catch (error: any) {
      await this.failSync(jobId, error.message);
    }
  }
  
  private async upsertThread(accountId: string, thread: NormalizedThread) {
    // First normalize the thread data
    const normalizedThread = {
      ...thread,
      labels: thread.labels.map(label => ({
        name: label,
        normalizedAt: new Date().toISOString()
      })),
      participants: thread.participants.map(participant => ({
        ...participant,
        normalizedAt: new Date().toISOString(),
        normalizationVersion: '1.0'
      })),
      messages: thread.messages.map(message => ({
        ...message,
        normalizedAt: new Date().toISOString(),
        normalizationVersion: '1.0'
      }))
    };

    // Upsert thread and its messages/participants in a transaction
    const { data: threadData, error: threadError } = await this.supabase
      .from('threads')
      .upsert({
        account_id: accountId,
        provider: thread.provider,
        provider_thread_id: thread.provider_thread_id,
        subject: thread.subject,
        last_activity: thread.lastActivity.toISOString(),
        unread: thread.unread,
        labels: normalizedThread.labels,
        sync_status: thread.syncStatus,
        synced_at: thread.syncedAt?.toISOString(),
        normalized_at: new Date().toISOString(),
        normalization_version: '1.0'
      }, {
        onConflict: 'account_id, provider_thread_id'
      })
      .select()
      .single();
    
    if (threadError) throw threadError;
    
    // Upsert messages
    for (const message of thread.messages) {
      const { error: messageError } = await this.supabase
        .from('messages')
        .upsert({
          thread_id: threadData.id,
          account_id: accountId,
          provider: message.provider,
          provider_message_id: message.providerMessageId,
          from_address: message.from.address,
          from_name: message.from.name,
          to_addresses: message.to.map(p => p.address),
          cc_addresses: message.cc?.map(p => p.address) || [],
          bcc_addresses: message.bcc?.map(p => p.address) || [],
          subject: message.subject,
          body: message.body,
          body_html: message.bodyHtml,
          date: message.date.toISOString(),
          labels: message.labels,
          has_attachments: message.attachments?.length > 0 || false
        }, {
          onConflict: 'account_id, provider_message_id'
        });
      
      if (messageError) throw messageError;
    }
    
    // Upsert participants
    const allParticipants = new Map<string, { address: string; name?: string; type: string }>();
    thread.messages.forEach(msg => {
      // From
      const fromKey = `${msg.from.address}|from`;
      if (!allParticipants.has(fromKey)) {
        allParticipants.set(fromKey, { address: msg.from.address, name: msg.from.name, type: 'from' });
      }
      // To
      msg.to.forEach(p => {
        const key = `${p.address}|to`;
        if (!allParticipants.has(key)) {
          allParticipants.set(key, { address: p.address, name: p.name, type: 'to' });
        }
      });
      // Cc
      msg.cc?.forEach(p => {
        const key = `${p.address}|cc`;
        if (!allParticipants.has(key)) {
          allParticipants.set(key, { address: p.address, name: p.name, type: 'cc' });
        }
      });
      // Bcc
      msg.bcc?.forEach(p => {
        const key = `${p.address}|bcc`;
        if (!allParticipants.has(key)) {
          allParticipants.set(key, { address: p.address, name: p.name, type: 'bcc' });
        }
      });
    });
    
    const participantInserts = Array.from(allParticipants.values()).map(p => ({
      thread_id: threadData.id,
      address: p.address,
      name: p.name,
      type: p.type
    }));
    
    // Delete existing participants for this thread and insert new ones
    await this.supabase.from('participants').delete().eq('thread_id', threadData.id);
    if (participantInserts.length > 0) {
      const { error: participantError } = await this.supabase
        .from('participants')
        .insert(participantInserts);
      if (participantError) throw participantError;
    }
  }
  
  private async recordError(jobId: string, error: SyncError) {
    // Append error to sync_jobs.errors array
    const { data: job } = await this.supabase
      .from('sync_jobs')
      .select('errors')
      .eq('id', jobId)
      .single();
    
    const errors = job?.errors || [];
    errors.push({ ...error, timestamp: new Date().toISOString() });
    
    await this.supabase
      .from('sync_jobs')
      .update({ 
        errors,
        error_count: errors.length
      })
      .eq('id', jobId);
  }
  
  private async completeSync(jobId: string, accountId: string) {
    const now = new Date().toISOString();
    
    // Calculate intelligence metrics
    const { data: threads } = await this.supabase
      .from('threads')
      .select('meta->intelligence')
      .eq('account_id', accountId);
    
    const intelligenceMetrics = threads?.reduce((acc, thread) => {
      if (thread.meta?.intelligence) {
        acc.priorityConfidence += thread.meta.intelligence.priorityConfidence || 0;
        acc.actionItemConfidence += thread.meta.intelligence.actionItemConfidence || 0;
        acc.followupConfidence += thread.meta.intelligence.followupConfidence || 0;
        acc.count++;
      }
      return acc;
    }, { priorityConfidence: 0, actionItemConfidence: 0, followupConfidence: 0, count: 0 });
    
    const averagePriorityConfidence = intelligenceMetrics.count > 0 
      ? intelligenceMetrics.priorityConfidence / intelligenceMetrics.count
      : 0;
    const averageActionItemConfidence = intelligenceMetrics.count > 0
      ? intelligenceMetrics.actionItemConfidence / intelligenceMetrics.count
      : 0;
    const averageFollowupConfidence = intelligenceMetrics.count > 0
      ? intelligenceMetrics.followupConfidence / intelligenceMetrics.count
      : 0;
    
    await Promise.all([
      this.supabase
        .from('sync_jobs')
        .update({
          status: 'completed',
          completed_at: now
        })
        .eq('id', jobId),
      this.supabase
        .from('accounts')
        .update({
          last_sync_at: now,
          sync_status: 'idle',
          intelligence: {
            priorityAccuracy: averagePriorityConfidence,
            actionItemAccuracy: averageActionItemConfidence,
            followupAccuracy: averageFollowupConfidence
          }
        })
        .eq('id', accountId)
    ]);
  }
  
  private async failSync(jobId: string, errorMessage: string) {
    await this.supabase
      .from('sync_jobs')
      .update({
        status: 'failed',
        completed_at: new Date().toISOString()
      })
      .eq('id', jobId);
  }
  
  private async getAccount(accountId: string) {
    const { data, error } = await this.supabase
      .from('accounts')
      .select('*')
      .eq('id', accountId)
      .single();
    if (error) throw error;
    return data;
  }
  
  private getProvider(account: any): EmailProvider {
    // Factory method to get the right provider based on account.provider
    // Would import and instantiate the appropriate provider class
    // For now, throw error as design phase
    throw new Error('Provider factory not implemented - design phase');
  }
}
