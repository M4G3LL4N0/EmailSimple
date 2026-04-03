export interface FollowUpSignal {
  id: string;
  /** Thread subject */
  title: string;
  /** Why follow-up is needed */
  detail: string;
  /** How stale the thread is */
  age: string;
  /** Risk level */
  risk: "High" | "Medium" | "Low";
  /** Actual last message timestamp */
  lastMessageAt: Date;
  /** Related email thread ID */
  threadId: string;
  /** Last action taken */
  lastAction?: string;
}
