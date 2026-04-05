// Account and sync related types
export type ProviderType = 'gmail' | 'outlook' | 'imap';

export interface EmailAccount {
  id: string;
  userId: string;
  provider: ProviderType;
  email: string;
  displayName?: string;
  accessToken: string;
  refreshToken?: string;
  tokenExpiresAt?: Date;
  scopes: string[];
  isActive: boolean;
  lastSyncAt?: Date;
  syncStatus: 'idle' | 'syncing' | 'error';
  syncError?: string;
  syncState?: SyncState;
  providerConfig?: {
    daysToSync?: number; // How far back to sync initially
    syncInterval?: number; // Minutes between syncs
    batchSize?: number; // Max threads to request per batch
    maxRetries?: number; // Max retry attempts per thread
    labels?: string[]; // Labels to include/exclude
    filters?: string[]; // Advanced filters
  };
  onboarding?: {
    completedSteps: ('connect' | 'sync' | 'priority' | 'action' | 'followup')[];
    lastCompletedAt?: Date;
    intelligenceScore?: number; // 0-100 based on setup completeness
  };
  intelligence?: {
    priorityAccuracy?: number; // 0-100 based on user feedback
    actionItemAccuracy?: number;
    followupAccuracy?: number;
    averageResponseTime?: number; // In hours
    averageResolutionTime?: number; // In hours
    inboxHealthScore?: number; // 0-100 based on metrics
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface AccountConnection {
  id: string;
  userId: string;
  provider: ProviderType;
  email: string;
  status: 'pending' | 'connected' | 'disconnected' | 'error';
  capabilities: {
    realtime: boolean;
    batch: boolean;
    attachments: boolean;
    labels: boolean;
  };
  constraints: {
    rateLimit: number; // calls per minute
    quota: number; // MB per day
  };
  connectedAt: Date;
  lastSyncAt?: Date;
  syncState: {
    cursor?: string;
    checkpoint?: string;
    expiresAt?: Date;
  };
}

export interface SyncJob {
  id: string;
  accountId: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
  startedAt: Date;
  completedAt?: Date;
  threadsProcessed: number;
  messagesProcessed: number;
  errors: SyncError[];
}

export interface SyncError {
  threadId?: string;
  messageId?: string;
  error: string;
  timestamp: Date;
}
