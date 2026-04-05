import { EmailMessage } from "../types/email";
import { faker } from "@faker-js/faker";
import { PriorityLevel } from "../types/brief";

interface MockEmailOptions {
  /** Days ago the email was sent */
  daysAgo?: number;
  /** Priority level to influence content */
  priority?: PriorityLevel;
  /** Type of email to generate */
  type?: 'deadline' | 'action' | 'followup' | 'general';
}

export async function generateMockEmails(count = 50): Promise<EmailMessage[]> {
  const emails: EmailMessage[] = [];
  
  for (let i = 0; i < count; i++) {
    const type = getRandomType();
    emails.push(createMockEmail({
      type,
      priority: getPriorityForType(type),
      daysAgo: faker.number.int({min: 0, max: 14})
    }));
  }

  return emails;
}

function getRandomType(): 'deadline' | 'action' | 'followup' | 'general' {
  const types = ['deadline', 'action', 'followup', 'general'];
  return types[Math.floor(Math.random() * types.length)] as any;
}

function getPriorityForType(type: string): PriorityLevel {
  const typeToPriority: Record<string, PriorityLevel> = {
    deadline: 'high',
    action: 'medium',
    followup: 'high', 
    general: 'low'
  };
  return typeToPriority[type] || 'medium';
}

function createMockEmail(options: MockEmailOptions): EmailMessage {
  const { daysAgo = 0, type = 'general', priority = 'medium' } = options;
  const now = new Date();
  const receivedAt = new Date(now.setDate(now.getDate() - daysAgo));
  
  const baseEmail = {
    id: faker.string.uuid(),
    threadId: faker.string.uuid(),
    from: {
      email: faker.internet.email(),
      name: faker.person.fullName()
    },
    to: [{
      email: 'user@example.com',
      name: 'EmailSimple User'
    }],
    subject: '',
    body: '',
    receivedAt
  };

  switch(type) {
    case 'deadline':
      return {
        ...baseEmail,
        subject: `Deadline: ${faker.company.buzzPhrase()} - ${faker.date.soon({days: 3}).toLocaleDateString()}`,
        body: `This is a reminder that the ${faker.company.buzzPhrase()} deliverable is due on ${faker.date.soon({days: 3}).toLocaleDateString()}. Please submit your work via ${faker.internet.url()}`,
        cc: randomCcList()
      };
    case 'action':
      return {
        ...baseEmail,
        subject: `Action required: ${faker.company.buzzPhrase()}`,
        body: `Can you please review the attached ${faker.company.buzzPhrase()} and let me know if you have any feedback? We need to make a decision by ${faker.date.soon({days: 2}).toLocaleDateString()}.`,
        cc: randomCcList()
      };
    case 'followup':
      return {
        ...baseEmail,
        subject: `Following up: ${faker.company.buzzPhrase()}`,
        body: `Just checking in on this - any update on the ${faker.company.buzzPhrase()}? Let me know if you need anything from me to move this forward.`,
        cc: randomCcList()
      };
    default:
      return {
        ...baseEmail,
        subject: faker.company.buzzPhrase(),
        body: faker.lorem.paragraphs(2),
        cc: Math.random() > 0.7 ? randomCcList() : undefined
      };
  }
}

function randomCcList() {
  return Array.from({length: faker.number.int({min: 1, max: 5})}).map(() => ({
    email: faker.internet.email(),
    name: faker.person.fullName()
  }));
}
