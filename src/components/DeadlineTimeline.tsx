import { FC } from 'react';
import { ExtractedDeadline } from '@/lib/types/email';
import { extractDeadlines } from '@/lib/extraction/deadlines';
import { MOCK_EMAILS } from '@/lib/mock-emails';

export const DeadlineTimeline: FC = () => {
  const deadlines = MOCK_EMAILS.flatMap(email => extractDeadlines(email))
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());

  const groupDeadlines = (deadlines: ExtractedDeadline[]) => {
    const now = new Date();
    return {
      overdue: deadlines.filter(d => d.dueDate < now),
      today: deadlines.filter(d => 
        d.dueDate.getDate() === now.getDate() &&
        d.dueDate.getMonth() === now.getMonth() &&
        d.dueDate.getFullYear() === now.getFullYear()
      ),
      upcoming: deadlines.filter(d => d.dueDate > now && d.dueDate.getTime() - now.getTime() < 7 * 24 * 60 * 60 * 1000),
      later: deadlines.filter(d => d.dueDate.getTime() - now.getTime() >= 7 * 24 * 60 * 60 * 1000)
    };
  };

  const grouped = groupDeadlines(deadlines);

  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Deadline Timeline
      </h2>

      <div className="space-y-4">
        {Object.entries(grouped).map(([group, items]) => (
          items.length > 0 && (
            <div key={group}>
              <div className="text-blue-2 text-[13px] font-medium mb-2 capitalize">
                {group.replace(/([A-Z])/g, ' $1').trim()} ({items.length})
              </div>
              <div className="space-y-2">
                {items.map(deadline => {
                  const email = MOCK_EMAILS.find(e => e.id === deadline.messageId);
                  return (
                    <div key={deadline.id} className="glass-soft rounded-[18px] p-3.5">
                      <div className="flex items-center justify-between">
                        <div className="text-[15px]">{deadline.text}</div>
                        <div className="text-muted text-[13px]">
                          {deadline.dueDate.toLocaleDateString()}
                        </div>
                      </div>
                      <div className="text-muted text-[13px] mt-1">
                        From: {email?.from}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        ))}
      </div>
    </section>
  );
};
