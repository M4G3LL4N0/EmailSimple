// Base email provider interface and types
export interface EmailProvider {
  // Authentication
  authenticate(): Promise<AuthResult>;
  refreshToken(): Promise<void>;
  validateCredentials(): Promise<boolean>;
  
  // Sync operations
  getDeltaSync(options: DeltaSyncOptions): Promise<DeltaSyncResult>;
  getFullSync(options: FullSyncOptions): Promise<FullSyncResult>;
  
  // Thread operations
  getThread(threadId: string): Promise<NormalizedThread>;
  getThreads(filter: ThreadFilter): Promise<ThreadSummary[]>;
  batchGetThreads(threadIds: string[]): Promise<NormalizedThread[]>;
  
  // Message operations  
  getMessage(messageId: string): Promise<NormalizedMessage>;
  batchGetMessages(messageIds: string[]): Promise<NormalizedMessage[]>;
  
  // Sync state
  getSyncState(): Promise<SyncState>;
  updateSyncState(state: Partial<SyncState>): Promise<void>;
  
  // Webhooks
  setupWebhook?(config: WebhookConfig): Promise<WebhookInfo>;
  verifyWebhook?(payload: unknown): Promise<boolean>;
  
  // Normalization
  normalizeThread(raw: any): NormalizedThread;
  normalizeMessage(raw: any): NormalizedMessage;
  normalizeParticipant(raw: any): EmailParticipant;
  normalizeLabels(raw: any): string[];
  normalizeAttachments(raw: any): Attachment[];
  
  // Metadata
  readonly provider: 'gmail' | 'outlook' | 'imap';
  readonly accountId: string;
  readonly capabilities: {
    deltaSync: boolean;
    fullSync: boolean;
    webhooks: boolean;
    batchOperations: boolean;
  };
}

export interface AuthResult {
  accessToken: string;
  refreshToken?: string;
  expiresIn: number;
  scopes: string[];
}

export interface ThreadListOptions {
  maxResults?: number;
  pageToken?: string;
  query?: string;
  labelIds?: string[];
}

export interface ThreadSummary {
  id: string;
  providerThreadId: string;
  subject: string;
  snippet: string;
  participants: EmailParticipant[];
  lastMessageDate: Date;
  messageCount: number;
  labels: string[];
  unread: boolean;
}

export interface NormalizedThread {
  id: string;
  provider: string;
  providerThreadId: string;
  accountId: string;
  subject: string;
  participants: EmailParticipant[];
  messages: NormalizedMessage[];
  labels: string[];
  unread: boolean;
  lastActivity: Date;
  syncStatus: 'synced' | 'pending' | 'error';
  syncedAt?: Date;
}

export interface NormalizedMessage {
  id: string;
  providerMessageId: string;
  threadId: string;
  from: EmailParticipant;
  to: EmailParticipant[];
  cc?: EmailParticipant[];
  bcc?: EmailParticipant[];
  subject: string;
  body: string;
  bodyHtml?: string;
  date: Date;
  labels: string[];
  attachments?: Attachment[];
}

export interface Attachment {
  id: string;
  filename: string;
  mimeType: string;
  size: number;
  url?: string;
}

export interface WebhookConfig {
  url: string;
  secret: string;
  events: ('thread' | 'message' | 'label')[];
}

export interface WebhookInfo {
  id: string;
  url: string;
  secret: string;
  events: string[];
  expiration: Date;
}
