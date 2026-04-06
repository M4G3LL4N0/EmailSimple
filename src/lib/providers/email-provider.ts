// Base email provider interface and types
export interface EmailProvider<Config = any> {
  // Connection management
  connect(config?: Config): Promise<ConnectionStatus>;
  disconnect(): Promise<void>;
  getConnectionHealth(): Promise<ConnectionHealth>;
  refreshToken(): Promise<void>;

  // Sync operations
  startSync(options: {
    type: 'full' | 'delta';
    since?: Date;
    labels?: string[];
    maxThreads?: number;
  }): Promise<SyncSession>;
  
  getSyncStatus(sessionId: string): Promise<SyncStatus>;
  cancelSync(sessionId: string): Promise<void>;

  // Thread operations
  getThreads(options: {
    after?: Date;
    before?: Date;
    labels?: string[];
    limit?: number;
    pageToken?: string;
  }): Promise<{
    threads: NormalizedThread[];
    nextPageToken?: string;
    estimatedTotal?: number;
  }>;

  getThread(threadId: string): Promise<NormalizedThread>;
  getThreadsById(threadIds: string[]): Promise<NormalizedThread[]>;

  // Intelligence extraction
  extractFromThread(threadId: string): Promise<{
    priorities?: PriorityScore[];
    actions?: ExtractedAction[];
    deadlines?: ExtractedDeadline[];
    followUps?: FollowUpSignal[];
  }>;

  // Webhooks
  setupWebhook?(config: WebhookConfig): Promise<WebhookSetup>;
  verifyWebhook?(payload: unknown): Promise<boolean>;
  listWebhooks?(): Promise<WebhookInfo[]>;
  deleteWebhook?(webhookId: string): Promise<void>;

  // Metadata
  readonly provider: string;
  readonly accountId: string;
  readonly capabilities: {
    realtime: boolean;
    batch: boolean;
    attachments: boolean;
    labels: boolean;
    intelligence: boolean;
  };
  readonly limits: {
    rateLimit: number;
    quota: number;
    maxBatchSize: number;
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
