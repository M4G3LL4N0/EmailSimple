// Sync orchestration service
import { EmailProvider } from '@/lib/providers/email-provider';
import { SyncJob, SyncError } from '@/lib/types/sync';
import { SupabaseClient } from '@supabase/supabase-js';

export class SyncService {
  constructor(private supabase: SupabaseClient) {}
  
  async startSync(accountId: string): Promise<SyncJob> {
    // Create sync job record
    const { data: job, error } = await this.supabase
      .from('sync_jobs')
      .insert({
        account_id: accountId,
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
  
  private async upsertThread(accountId: string, thread: any) {
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
        labels: thread.labels,
        sync_status: thread.syncStatus,
        synced_at: thread.syncedAt?.toISOString()
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
          sync_status: 'idle'
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
