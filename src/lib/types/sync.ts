// Sync state and progress types
export interface SyncState {
  accountId: string;
  providerToken?: string; // Provider-specific sync token
  fullSyncToken?: string; // For full sync checkpointing
  syncMode: 'full' | 'delta';
  status: 'idle' | 'syncing' | 'paused' | 'error';
  lastSyncAt?: Date;
  lastSuccessfulSyncAt?: Date;
  syncWindow: {
    start: Date;
    end: Date;
  };
  statistics: {
    totalThreads: number;
    processedThreads: number;
    failedThreads: number;
    messageCount: number;
    attachmentCount: number;
  };
  rateLimiting: {
    lastRateLimitAt?: Date;
    rateLimitResetAt?: Date;
    remainingRequests: number;
  };
  error?: SyncError;
}

export interface SyncProgress {
  jobId: string;
  accountId: string;
  totalThreads: number;
  processedThreads: number;
  totalMessages: number;
  processedMessages: number;
  currentThread?: string;
  errors: number;
  startedAt: Date;
}
