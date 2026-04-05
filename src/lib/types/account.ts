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
  syncState?: {
    lastSyncToken?: string;
    lastHistoryId?: string;
    lastFullSyncAt?: Date;
    pendingThreads: number;
    processedThreads: number;
    totalThreads: number;
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
  connectedAt?: Date;
  lastSyncAt?: Date;
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
