/**
 * AI-generated reply suggestion for an email thread
 */
export interface ReplySuggestion {
  id: string;
  /** Related thread ID */
  threadId: string;
  /** Context used to generate the reply */
  context: string;
  /** Suggested reply text */
  draft: string;
  /** Tone of the reply */
  tone: 'professional' | 'friendly' | 'urgent' | 'conciliatory';
  /** Length of the reply */
  length: 'short' | 'medium' | 'long';
  /** Suggested next action */
  nextAction?: string;
  /** Confidence score of the suggestion */
  confidence: number;
  /** When this suggestion was generated */
  generatedAt: Date;
}
