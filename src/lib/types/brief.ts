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
  status: "new" | "seen" | "completed" | "dismissed";
}

export type PriorityLevel = 
  "critical" | "high" | "medium" | "low" | "monitoring";

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
