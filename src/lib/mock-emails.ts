import { EmailMessage } from '@/lib/types/email';

export const MOCK_EMAILS: EmailMessage[] = [
  {
    id: '1',
    threadId: 'thread-1',
    from: 'ceo@company.com',
    to: ['me@company.com'],
    subject: 'Q1 Budget Approval Needed',
    body: 'Hi team, I need you to review and approve the Q1 budget by Friday. This is urgent as we have the board meeting next week. Please assign this to finance team if you can.',
    date: new Date('2026-04-01T09:00:00'),
    isRead: false,
  },
  {
    id: '2',
    threadId: 'thread-2',
    from: 'marketing@company.com',
    to: ['me@company.com', 'team@company.com'],
    subject: 'New Campaign Feedback',
    body: 'Could you provide feedback on the new marketing assets by tomorrow? We need to finalize them for the launch. Also, please send me the latest metrics when you get a chance.',
    date: new Date('2026-04-02T11:30:00'),
    isRead: true,
  },
  {
    id: '3',
    threadId: 'thread-3',
    from: 'client@external.com',
    to: ['me@company.com'],
    subject: 'Contract Review',
    body: 'Following up on our conversation last week - do you have any updates on the contract review? We need to move forward with this by April 15th.',
    date: new Date('2026-04-02T14:15:00'),
    isRead: false,
  },
];
