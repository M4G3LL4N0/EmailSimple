export interface ExtractedAction {
  /** Unique ID for tracking */
  id: string;
  /** Action text "Send contract revisions" */
  title: string;
  /** Context/instructions for action */
  detail: string;
  /** Status determines UI treatment */
  status: "Due now" | "Pending" | "Draft reply";
  /** Related email thread ID */
  threadId: string;
  /** Original detection timestamp */
  detectedAt: Date;
  /** When action was completed */
  completedAt?: Date;
}
