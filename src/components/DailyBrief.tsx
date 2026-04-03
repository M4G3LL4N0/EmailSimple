import { FC } from 'react';
import { DailyBrief } from '@/lib/extraction/brief';
import { generateDailyBrief } from '@/lib/extraction/brief';
import { MOCK_EMAILS } from '@/lib/mock-emails';

export const DailyBrief: FC = () => {
  const brief = generateDailyBrief(MOCK_EMAILS);
  
  const getPriorityLabel = (priority: number) => {
    if (priority > 0.8) return 'Critical';
    if (priority > 0.6) return 'High';
    return 'Medium';
  };

  const items = [
    ...brief.topPriorities.map(item => ({
      type: 'priority' as const,
      data: item,
    })),
    ...brief.urgentDeadlines.map(item => ({
      type: 'deadline' as const,
      data: item,
    })),
    ...brief.pendingActions.map(item => ({
      type: 'action' as const,
      data: item,
    })),
  ].sort((a, b) => {
    // Sort by priority/urgency
    if (a.type === 'priority' && b.type !== 'priority') return -1;
    if (a.type !== 'priority' && b.type === 'priority') return 1;
    return 0;
  }).slice(0, 4); // Show top 4 items

  return (
    <section className="glass rounded-[32px] p-7 border border-[rgba(255,255,255,0.1)]">
      <div className="flex items-center justify-between mb-5">
        <div>
          <div className="text-muted text-[13px]">Today's briefing</div>
          <div className="mt-1.5 text-[28px] font-bold tracking-tight">
            Good morning
          </div>
        </div>
        <div className="glass-soft px-3.5 py-2.5 rounded-[16px] text-blue-2 text-[14px]">
          7 items need attention
        </div>
      </div>

      <div className="grid gap-3.5">
        {items.map((item) => (
          <div
            key={item.title}
            className="glass-soft rounded-[22px] p-4.5"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="m-0 text-[17px] leading-[1.2] tracking-tight">
                {item.type === 'priority' 
                  ? `Priority: ${item.data.reasons[0]}`
                  : item.type === 'deadline'
                    ? `Deadline: ${item.data.text}`
                    : `Action: ${item.data.text}`
                }
              </h3>
              <span className={`whitespace-nowrap text-[12px] uppercase tracking-wider ${
                item.type === 'priority' && item.data.score > 0.8 ? 'text-red-400' : 'text-gold'
              }`}>
                {item.type === 'priority' 
                  ? getPriorityLabel(item.data.score)
                  : item.type === 'deadline'
                    ? 'Due Soon'
                    : 'Action Needed'
                }
              </span>
            </div>
            <div className="mt-2 text-blue-2 text-[13px]">
              {item.type === 'priority' 
                ? `Thread: ${MOCK_EMAILS.find(e => e.threadId === item.data.threadId)?.subject}`
                : item.type === 'deadline'
                  ? `Due: ${item.data.dueDate.toLocaleDateString()}`
                  : `Status: ${item.data.status}`
              }
            </div>
            <p className="mt-2.5 text-muted text-[14px] leading-[1.7]">
              {item.type === 'priority'
                ? item.data.reasons.join(', ')
                : item.type === 'deadline'
                  ? `From: ${MOCK_EMAILS.find(e => e.id === item.data.messageId)?.from}`
                  : `Owner: ${item.data.owner || 'You'}`
              }
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
