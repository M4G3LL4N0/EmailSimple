export interface ExtractedDeadline {
  id: string;
  /** Deadline description */
  title: string;
  /** Formatted due datetime */
  due: string;
  /** Relative urgency */
  urgency: "Today" | "Tomorrow" | "This week";
  /** Absolute due date */
  dueAt: Date;
  /** Related email thread ID */
  threadId: string;
  /** Completion flag */
  isDone: boolean;
}
