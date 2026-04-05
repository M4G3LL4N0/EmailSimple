// Normalized email data model
export interface EmailParticipant {
  address: string;
  name?: string;
  isInternal?: boolean;
  role?: "sender" | "recipient" | "cc" | "bcc";
  importance?: number; // 0-100 sender importance score
}

export interface EmailMessage {
  id: string;
  threadId: string;
  from: EmailParticipant;
  to: {
    address: string;
    name?: string;
  }[];
  subject: string;
  body: string;
  /** Date received */
  date: Date;
  isRead: boolean;
  /** List of labels/tags */
  labels: string[];
  /** Metadata for processing */
  metadata?: {
    hasActionItems?: boolean;
    hasDeadlines?: boolean;
    requiresFollowUp?: boolean;
  };
}

export interface EmailThread {
  id: string;
  /** Most recent message */
  latestMessage: EmailMessage;
  /** All messages in chronological order */
  messages: EmailMessage[];
  /** Thread priority score */
  priorityScore?: number;
  /** Summary/abstract of thread */
  summary?: string;
}
