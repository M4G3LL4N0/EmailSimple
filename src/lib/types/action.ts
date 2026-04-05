export interface ExtractedAction {
  id: string;
  title: string;
  detail: string;
  status: "critical" | "due" | "pending" | "draft" | "completed";
  threadId: string;
  detectedAt: Date;
  completedAt?: Date;
  
  // New fields
  priority: PriorityLevel;
  confidence: number;
  stakeholders: {
    name: string;
    role: string;
    isBlocking: boolean;
  }[];
  estimatedTime: number; // in minutes
  requiredResources?: string[];
  relatedActions?: string[];
  opportunityValue?: number;
  riskOfDelay?: number;
  suggestedNextStep: string;
  lastUpdatedAt: Date;
}
