export interface PriorityFactors {
  /** 1-100 based on deadline proximity */
  urgency: number;
  /** 1-100 based on strategic value */
  importance: number;
  /** 1-100 based on sender's org hierarchy */
  senderWeight: number;
  /** 1-100 based on your past engagement */
  engagement: number;
  /** 1-100 multiplier for related projects */
  projectMultiplier?: number;
  /** Number of people CC'd/impacted */
  stakeholderCount: number;
  /** Number of related threads */
  threadCount: number;
  /** Days since last action */
  staleness: number;
  /** Confidence score of analysis */
  confidence: number;
}

export interface PriorityInsight {
  /** Key reason for priority */
  reason: string;
  /** Suggested action */
  action: string;
  /** Potential risks */
  risks: string[];
  /** Potential benefits */
  benefits: string[];
  /** Related context */
  context: string[];
}

export interface PriorityScore {
  id: string;
  threadId: string;
  /** Thread subject with key context */
  title: string;
  /** Concise explanation */
  reason: string;
  /** Key reason for priority ranking */
  keyReason: string;
  /** 1-100 computed score */
  score: number;
  /** Assigned level */
  level: PriorityLevel;
  /** Breakdown of factors */
  factors: PriorityFactors;
  /** When this evaluation occurred */
  evaluatedAt: Date;
  /** Related entities */
  relations: {
    actions?: string[];
    deadlines?: string[];
    followups?: string[];
  };
}

export interface PrioritySummary {
  /** Last updated timestamp */
  updatedAt: Date;
  /** Total threads evaluated */
  totalThreads: number;
  /** Breakdown by priority level */
  byLevel: Record<PriorityLevel, number>;
  /** Highest priority threads */
  critical: PriorityScore[];
  /** Recommendations needing review */
  reviews: PriorityScore[];
}
