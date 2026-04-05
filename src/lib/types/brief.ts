export interface BriefItemBase {
  id: string;
  title: string;
  /** Formatted as "Due X hours ago" or "Due in X days" */
  dueMeta: string;
  /** Exact timestamp for sorting */
  dueAt: Date;
  /** Detailed context markdown */
  context: string;
  priority: PriorityLevel;
  status: BriefItemStatus;
  /** Related thread/message IDs */
  relatedIds: {
    threadId?: string;
    messageId?: string;
    emailId?: string;
  };
  /** Metadata for rendering */
  meta: {
    /** Whether this is a recurring item */
    isRecurring?: boolean;
    /** Whether this requires approval */
    requiresApproval?: boolean;
    /** Whether this involves external parties */
    hasExternalParties?: boolean;
    /** Confidence score for this item (0-100) */
    confidence?: number;
    /** Risk level */
    riskLevel?: 'low' | 'medium' | 'high';
    /** Tags for categorization */
    tags?: string[];
  };
}

export const PRIORITY_LEVELS = ["critical", "high", "medium", "low", "monitoring"] as const;
export type PriorityLevel = typeof PRIORITY_LEVELS[number];

export type BriefItemStatus = "new" | "seen" | "completed" | "dismissed";
export interface BriefItemStats {
  overdueCount: number;
  completedToday: number;
  deadlineCount: number;
  followUpCount: number;
  actionItemCount: number;
}

export interface ActionBriefItem extends BriefItemBase {
  type: "action";
  decisionRequired: boolean;
  /** People awaiting this action */
  stakeholders: string[];
}

export interface DeadlineBriefItem extends BriefItemBase {
  type: "deadline";
  /** Government, internal, client, etc */
  deadlineType: string;
  /** URL to source document if available */
  referenceUrl?: string;
}

export interface FollowUpBriefItem extends BriefItemBase {
  type: "followup";
  lastFollowUpSent?: Date;
  followUpCount: number;
}

export type DailyBriefItem = 
  | ActionBriefItem 
  | DeadlineBriefItem 
  | FollowUpBriefItem;

export interface DailyBrief {
  generatedAt: Date;
  /** Total count including completed/dismissed */
  totalItems: number;
  /** Only actionable items */
  activeItems: DailyBriefItem[];
  /** Completed/dismissed today */
  resolvedItems: DailyBriefItem[];
  /** Stats for dashboard summary */
  stats: {
    byPriority: Record<PriorityLevel, number>;
    byType: {
      action: number;
      deadline: number;
      followup: number;
    };
    overdue: number;
  };
}
