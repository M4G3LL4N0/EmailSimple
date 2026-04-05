export interface ExtractedDeadline {
  id: string;
  title: string;
  dueAt: Date;
  threadId: string;
  isDone: boolean;
  
  // New fields
  priority: PriorityLevel;
  confidence: number;
  deadlineType: "contract" | "payment" | "meeting" | "deliverable" | "approval";
  stakeholders: {
    name: string;
    role: string;
    isBlocking: boolean;
  }[];
  consequences: string[];
  requiredPreparation?: string[];
  bufferTime: number; // in hours
  isRecurring: boolean;
  recurrencePattern?: string;
  suggestedNextStep: string;
  lastUpdatedAt: Date;
}
