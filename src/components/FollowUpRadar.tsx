import { FC } from 'react';
import { EmailMessage } from '@/lib/types/email';
import { MOCK_EMAILS } from '@/lib/mock-emails';
import { detectFollowUps } from '@/lib/extraction/followups';

export const FollowUpRadar: FC = () => {
  const followUps = detectFollowUps(MOCK_EMAILS);

  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Follow-Up Radar
      </h2>

      <div className="grid gap-3.5">
        {followUps.map((followUp) => {
          const email = MOCK_EMAILS.find(e => e.threadId === followUp.threadId);
          return (
            <div key={followUp.threadId} className="glass-soft rounded-[22px] p-4.5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="m-0 text-[17px] leading-[1.2] tracking-tight">
                  {email?.subject}
                </h3>
                <span className={`text-[12px] uppercase tracking-wider ${
                  followUp.urgency === 'high' ? 'text-red-400' : 
                  followUp.urgency === 'medium' ? 'text-gold' : 'text-blue-2'
                }`}>
                  {followUp.urgency}
                </span>
              </div>
              <div className="mt-2 text-blue-2 text-[13px]">
                Last message: {followUp.lastMessageDate.toLocaleDateString()}
              </div>
              <div className="mt-2.5 text-muted text-[14px] leading-[1.7]">
                {followUp.isResponseExpected 
                  ? 'Response expected from you'
                  : 'Conversation at risk of stalling'}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
