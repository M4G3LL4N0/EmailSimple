import { FC } from 'react';
import { ExtractedAction } from '@/lib/types/email';
import { extractActions } from '@/lib/extraction/actions';
import { MOCK_EMAILS } from '@/lib/mock-emails';

export const ActionItems: FC = () => {
  // Process emails to extract actions
  const actions: ExtractedAction[] = MOCK_EMAILS.flatMap(email => 
    extractActions(email)
  ).sort((a, b) => b.priority - a.priority);

  const getPriorityLabel = (priority: number) => {
    if (priority > 0.8) return 'Critical';
    if (priority > 0.6) return 'High';
    if (priority > 0.4) return 'Medium';
    return 'Low';
  };

  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Action Items
      </h2>

      <div className="grid gap-3.5">
        {items.map((item) => (
          <div
            key={item.title}
            className="glass-soft rounded-[22px] p-4.5"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="m-0 text-[17px] leading-[1.2] tracking-tight">
                {item.text}
              </h3>
              <span className={`text-[12px] uppercase tracking-wider ${
                item.priority > 0.8 ? 'text-red-400' : 
                item.priority > 0.6 ? 'text-gold' : 'text-blue-2'
              }`}>
                {getPriorityLabel(item.priority)}
              </span>
            </div>
            <div className="mt-2 text-blue-2 text-[13px]">
              {item.owner ? `Assigned to ${item.owner} • ` : ''}
              {item.status}
            </div>
            <p className="mt-2.5 text-muted text-[14px] leading-[1.7]">
              From: {MOCK_EMAILS.find(e => e.id === item.messageId)?.from}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
