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
  providerId: string;
  providerMessageId: string;
  from: EmailParticipant;
  to: EmailParticipant[];
  cc?: EmailParticipant[];
  bcc?: EmailParticipant[];
  subject: string;
  body: {
    text: string;
    html?: string;
  };
  date: Date;
  isRead: boolean;
  metadata: {
    isArchived: boolean;
    isStarred: boolean;
    isSpam: boolean;
    isTrash: boolean;
    size: number; // bytes
    headers: Record<string, string>;
  };
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
  providerThreadId: string;
  accountId: string;
  subject: string;
  participants: EmailParticipant[];
  messages: EmailMessage[];
  labels: string[];
  unread: boolean;
  lastActivity: Date;
  syncStatus: 'synced' | 'pending' | 'error';
  syncedAt?: Date;
  
  // Decision context
  decisionContext: {
    priorityLevel: 'critical' | 'important' | 'informational';
    priorityScore: number; // 0-100
    urgencyLevel: 'immediate' | 'urgent' | 'soon' | 'eventual';
    consequenceLevel: 'high' | 'medium' | 'low';
    confidenceScore: number; // 0-1
    classificationReason: string;
    nextSteps: string[];
    hasAttachments: boolean;
    hasDeadlineKeywords: boolean;
    actionRequired: boolean;
    stakeholders: {
      name: string;
      role: string;
      isBlocking: boolean;
    }[];
    intelligenceSignals: string[];
  };
}
