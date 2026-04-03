export interface DailyBriefItem {
  id: string;
  /** Brief headline */
  title: string;
  /** Metadata like due date */
  meta: string;
  /** Detailed context */
  body: string;
  /** Urgency level */
  priority: "High" | "Medium" | "Low";
  /** Related entity type */
  type: "action" | "deadline" | "followup";
  /** Related entity ID */
  relatedId: string;
}

export interface DailyBrief {
  /** Generated at timestamp */
  generatedAt: Date;
  /** Number of flagged items */
  itemCount: number;
  /** Brief items to display */
  items: DailyBriefItem[];
}
