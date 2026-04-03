export interface PriorityScore {
  id: string;
  /** Thread subject */
  title: string;
  /** Reason for priority */
  reason: string;
  /** 0-100 priority score */
  score: number;
  /** Binned priority level */
  priority: "High" | "Medium" | "Low";
  /** Related email thread ID */
  threadId: string;
  /** Priority factors */
  factors: {
    urgency?: number;
    importance?: number;
    senderWeight?: number;
  };
}
