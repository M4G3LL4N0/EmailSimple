import { FC, useState } from 'react';
import { EmailMessage } from '@/lib/types/email';
import { MOCK_EMAILS } from '@/lib/mock-emails';

export const AIReplyAssist: FC = () => {
  const [selectedEmail, setSelectedEmail] = useState<EmailMessage | null>(null);
  const [reply, setReply] = useState('');

  const handleGenerateReply = () => {
    if (selectedEmail) {
      // Simulate AI-generated reply
      setReply(`Hi ${selectedEmail.from.split('@')[0]},\n\nThank you for your message. I'll look into this and get back to you soon.\n\nBest regards,\n[Your Name]`);
    }
  };

  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        AI Reply Assist
      </h2>

      <div className="space-y-4">
        <select
          className="glass-soft w-full p-3 rounded-[18px] text-[15px]"
          onChange={(e) => setSelectedEmail(MOCK_EMAILS.find(email => email.id === e.target.value) || null)}
        >
          <option value="">Select an email to reply to</option>
          {MOCK_EMAILS.map(email => (
            <option key={email.id} value={email.id}>
              {email.subject} - {email.from}
            </option>
          ))}
        </select>

        {selectedEmail && (
          <div className="glass-soft rounded-[18px] p-4">
            <div className="text-[15px] mb-2">{selectedEmail.body}</div>
            <button
              onClick={handleGenerateReply}
              className="primary-btn w-full"
            >
              Generate Reply
            </button>
          </div>
        )}

        {reply && (
          <div className="glass-soft rounded-[18px] p-4">
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              className="w-full bg-transparent text-[15px] min-h-[120px]"
            />
            <button
              className="secondary-btn w-full mt-3"
              onClick={() => navigator.clipboard.writeText(reply)}
            >
              Copy to Clipboard
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
