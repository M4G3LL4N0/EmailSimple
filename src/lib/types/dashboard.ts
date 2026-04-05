import { EmailThread } from "./email";
import { PrioritySummary, PriorityScore } from "./priority";
import { ExtractedDeadline } from "./deadline";
import { ExtractedAction } from "./action";
import { FollowUpSignal } from "./followup";
import { DailyBrief } from "./brief";
import { ReplySuggestion } from "./replies";

/**
 * Canonical dashboard data structure
 * Represents the complete output of the email intelligence pipeline
 */
export interface DashboardData {
  /** When this data was generated */
  generatedAt: Date;
  
  /** Email threads being analyzed */
  threads: EmailThread[];
  
  /** Priority analysis results */
  priorities: {
    /** Summary statistics */
    summary: PrioritySummary;
    /** Individual thread scores */
    scores: PriorityScore[];
  };
  
  /** Extracted deadlines */
  deadlines: ExtractedDeadline[];
  
  /** Identified actions */
  actions: ExtractedAction[];
  
  /** Follow-up signals */
  followUps: FollowUpSignal[];
  
  /** Daily brief items */
  dailyBrief: DailyBrief;
  
  /** Reply suggestions */
  replySuggestions: ReplySuggestion[];
  
  /** Metadata about the analysis */
  meta: {
    /** Total threads processed */
    totalThreads: number;
    /** Total messages processed */
    totalMessages: number;
    /** Analysis duration in ms */
    analysisDuration: number;
    /** Confidence score of analysis */
    confidence: number;
  };
}
