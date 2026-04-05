// Base email provider interface and types
export interface EmailProvider {
  // Authentication
  authenticate(): Promise<AuthResult>;
  refreshToken(): Promise<void>;
  
  // Thread operations
  listThreads(options?: ThreadListOptions): Promise<ThreadSummary[]>;
  getThread(threadId: string): Promise<NormalizedThread>;
  getThreadsSince(since: Date): Promise<ThreadSummary[]>;
  
  // Message operations
  getMessage(messageId: string): Promise<NormalizedMessage>;
  
  // Webhook support for real-time updates
  setupWebhook?(config: WebhookConfig): Promise<WebhookInfo>;
  verifyWebhook?(payload: unknown): Promise<boolean>;
  
  // Provider metadata
  readonly provider: 'gmail' | 'outlook' | 'imap';
  readonly accountId: string;
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
