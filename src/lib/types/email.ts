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
  /** Metadata for dashboard processing */
  meta: {
    /** Number of participants */
    participantCount: number;
    /** Number of messages */
    messageCount: number;
    /** Days since last message */
    daysSinceLastMessage: number;
    /** Whether thread contains attachments */
    hasAttachments: boolean;
    /** Whether thread contains calendar invites */
    hasCalendarInvites: boolean;
    /** Whether thread contains action items */
    hasActionItems: boolean;
    /** Whether thread contains deadlines */
    hasDeadlines: boolean;
    /** Whether thread requires follow-up */
    requiresFollowUp: boolean;
  };
}
