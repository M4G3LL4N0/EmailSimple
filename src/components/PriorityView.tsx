import { FC } from 'react';
import { ThreadPriority } from '@/lib/types/email';
import { MOCK_EMAILS } from '@/lib/mock-emails';
import { calculateThreadPriorities } from '@/lib/extraction/priority';

export const PriorityView: FC = () => {
  const priorities = calculateThreadPriorities(MOCK_EMAILS);

  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Priority View
      </h2>

      <div className="grid gap-3.5">
        {priorities.slice(0, 5).map((priority) => {
          const email = MOCK_EMAILS.find(e => e.threadId === priority.threadId);
          return (
            <div key={priority.threadId} className="glass-soft rounded-[22px] p-4.5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="m-0 text-[17px] leading-[1.2] tracking-tight">
                  {email?.subject}
                </h3>
                <span className={`text-[12px] uppercase tracking-wider ${
                  priority.score > 0.8 ? 'text-red-400' : 
                  priority.score > 0.6 ? 'text-gold' : 'text-blue-2'
                }`}>
                  {priority.score > 0.8 ? 'Critical' : 
                   priority.score > 0.6 ? 'High' : 'Medium'}
                </span>
              </div>
              <div className="mt-2 text-blue-2 text-[13px]">
                From: {email?.from}
              </div>
              <div className="mt-2.5 text-muted text-[14px] leading-[1.7]">
                <div className="font-medium mb-1">Why this matters:</div>
                <ul className="list-disc list-inside space-y-1">
                  {priority.reasons.map((reason, i) => (
                    <li key={i}>{reason}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
