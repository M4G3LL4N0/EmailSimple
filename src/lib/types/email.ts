// Normalized email data model
export interface EmailParticipant {
  id: string; // Provider-specific ID if available
  address: string;
  name?: string;
  isInternal?: boolean;
  role: "sender" | "recipient" | "cc" | "bcc";
  importance?: number; // 0-100 sender importance score
  metadata?: {
    isPrimary?: boolean;
    isMe?: boolean;
    isDomainVerified?: boolean;
    isEmailVerified?: boolean;
    providerSpecific?: Record<string, unknown>; // Raw provider data
  };
}

export interface NormalizedParticipant extends EmailParticipant {
  normalizedAt: Date;
  normalizationVersion: string;
}

export interface EmailAttachment {
  id: string;
  filename: string;
  mimeType: string;
  size: number;
  url?: string;
  isInline?: boolean;
  contentId?: string;
}

export interface EmailHeader {
  name: string;
  value: string;
}

export interface EmailMessage {
  id: string;
  threadId: string;
  from: EmailParticipant;
  to: EmailParticipant[];
  cc?: EmailParticipant[];
  bcc?: EmailParticipant[];
  subject: string;
  body: string;
  /** Date received */
  date: Date;
  isRead: boolean;
  /** List of labels/tags */
  labels: string[];
  /** Attachments if any */
  attachments?: EmailAttachment[];
  /** Metadata for processing */
  metadata: {
    processing: {
      hasActionItems?: boolean;
      hasDeadlines?: boolean;
      requiresFollowUp?: boolean;
      processedAt?: Date;
      /** Confidence scores for extraction */
      confidence?: {
        actionItems?: number;
        deadlines?: number;
        followUp?: number;
      };
    };
    provider: {
      labels?: string[];
      categories?: string[];
      importance?: number;
      spamScore?: number;
      headers?: Record<string, string>;
    };
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
  /** Status tracking */
  status: {
    /** Whether thread has been archived */
    archived?: boolean;
    /** Whether thread has been snoozed */
    snoozedUntil?: Date;
    /** Whether thread has been marked as done */
    done?: boolean;
  };
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
    /** Intelligence metrics */
    intelligence: {
      /** Confidence score for priority (0-100) */
      priorityConfidence: number;
      /** Confidence score for action items (0-100) */
      actionItemConfidence: number;
      /** Confidence score for follow-up (0-100) */
      followupConfidence: number;
      /** Predicted response time (in hours) */
      predictedResponseTime?: number;
      /** Predicted resolution time (in hours) */
      predictedResolutionTime?: number;
      /** Risk score (0-100) */
      riskScore?: number;
      /** Importance score (0-100) */
      importanceScore?: number;
      /** Urgency score (0-100) */
      urgencyScore?: number;
      /** Relationship score (0-100) */
      relationshipScore?: number;
    };
  };
}
