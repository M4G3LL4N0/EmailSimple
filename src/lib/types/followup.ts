export interface FollowUpSignal {
  id: string;
  title: string;
  detail: string;
  lastMessageAt: Date;
  threadId: string;
  lastAction?: string;
  
  // New fields
  priority: PriorityLevel;
  confidence: number;
  risk: "critical" | "high" | "medium" | "low";
  daysStale: number;
  followUpCount: number;
  relationshipValue: number;
  opportunityCost: number;
  suggestedResponseTime: number; // in hours
  suggestedNextStep: string;
  relatedThreads?: string[];
  lastUpdatedAt: Date;
}
