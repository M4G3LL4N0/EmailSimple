// Sync state and progress types
export interface SyncState {
  accountId: string;
  lastSyncToken?: string; // Provider-specific token (e.g., Gmail history ID)
  lastFullSyncAt: Date;
  isRunning: boolean;
  pendingThreads: number;
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
