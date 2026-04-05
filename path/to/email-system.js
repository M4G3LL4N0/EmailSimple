// EmailSystem - Core pipeline and extraction logic
// Handles inbox data flow from pipeline to dashboard
export interface EmailData {
  threads: Thread[];
  priorities: Priority[];
  deadlines: Deadline[];
  actions: Action[];
  followUps: FollowUp[];
  dailyBrief: DailyBrief[];
  replySuggestions: ReplySuggestion[];
}

export interface Thread {
  id: string;
  provider: string;
  subject: string;
  messages: Message[];
  unread: boolean;
  lastActivity: Date;
}

export interface Message {
  id: string;
  threadId: string;
  content: string;
  bodyHtml?: string;
  date: Date;
  labels: string[];
  attachments?: Attachment[];
}

export interface Priority {
  id: string;
  priorityLevel: 'high' | 'medium' | 'low';
  reason: string;
  urgency: 'high' | 'medium' | 'low';
}

export interface Action {
  id: string;
  type: string;
  content: string;
  metadata: Metadata;
}

export interface FollowUp {
  id: string;
  priority: string;
  target: string;
  createdAt: Date;
}

export interface Deadline {
  id: string;
  dueDate: Date;
  status: 'pending' | 'completed' | 'overdue';
}

export interface ReplySuggestion {
  id: string;
  text: string;
  suggestedBy: string;
  confidence: number;
}

export interface Attachment {
  id: string;
  filename: string;
  mimeType: string;
  size: number;
  url?: string;
}

export interface EmailThread {
  id: string;
  provider: string;
  subject: string;
  participants: EmailParticipant[];
  messages: Message[];
  unread: boolean;
  lastActivity: Date;
}

export interface EmailParticipant {
  id: string;
  name: string;
  email: string;
  type: string;
}

export interface Metadata {
  title: string;
  description: string;
}

export interface SyncStatus {
  status: 'sync' | 'pending' | 'completed';
  lastSync: Date;
}

export interface SyncJob {
  id: string;
  accountId: string;
  status: 'pending' | 'completed';
  createdAt: Date;
}

export interface Account {
  id: string;
  email: string;
  provider: string;
  createdAt: Date;
}

export interface AccountThread {
  id: string;
  provider: string;
  subject: string;
  participants: EmailParticipant[];
  messages: Message[];
  unread: boolean;
  lastActivity: Date;
}

export interface AccountSummary {
  accountId: string;
  name: string;
  email: string;
  provider: string;
  totalMessages: number;
  totalActions: number;
  totalFollowUps: number;
  lastSync: Date;
}

export interface DailyBrief {
  id: string;
  summary: string;
}

export type EmailPipelineOutput = {
  priorities: Priority[];
  deadlines: Deadline[];
  actions: Action[];
  followUps: FollowUp[];
  dailyBrief: DailyBrief[];
  replySuggestions: ReplySuggestion[];
};

export async function processInboxData(data: any): Promise<EmailPipelineOutput> {
  // Mock pipeline processing
  const priorities = data.threads.map(thread => ({
    id: thread.id,
    priorityLevel: thread.priority as 'high' | 'medium' | 'low',
    reason: thread.subject,
    urgency: thread.deadlines?.length > 0 ? 'high' : 'medium'
  }));
  
  const deadlines = data.threads.map(thread => {
    if (thread.deadlines) {
      return {
        id: thread.deadlines.id,
        dueDate: thread.deadlines.date,
        status: thread.deadlines.status
      };
    }
    return null;
  }).filter(Boolean);
  
  const actions = data.threads.map(thread => ({
    id: thread.id,
    type: thread.priority === 'high' ? 'action' : 'follow_up',
    content: thread.priority === 'high' ? 'Urgent action required' : 'Review this',
    metadata: { priority: thread.priority }
  }));
  
  const followUps = data.threads.map(thread => ({
    id: thread.id,
    priority: thread.priority === 'high' ? 'critical' : 'medium',
    target: thread.subject,
    createdAt: new Date(Date.now() + Math.random() * 86400000)
  }));
  
  const dailyBrief = data.threads.map(thread => ({
    id: thread.id,
    summary: thread.messages.filter(msg => msg.unread).map(msg => `${msg.subject} - ${msg.date.toLocaleDateString()}`).join(' | ')
  }));
  
  const replySuggestions = data.threads.flatMap(thread => {
    return data.threads
      .filter(msg => msg.unread)
      .map(msg => {
        const text = msg.content;
        if (msg.priority === 'high') {
          return {
            id: msg.id,
            text: text,
            suggestedBy: 'AI',
            confidence: 0.9
          };
        }
        if (msg.priority === 'medium') {
          return {
            id: msg.id,
            text: `${msg.subject} - ${msg.date.toLocaleDateString()}`,
            suggestedBy: 'AI',
            confidence: 0.7
          };
        }
        return null;
      })
      .filter(Boolean);
  });
  
  return {
    priorities,
    deadlines,
    actions,
    followUps,
    dailyBrief,
    replySuggestions
  };
}
