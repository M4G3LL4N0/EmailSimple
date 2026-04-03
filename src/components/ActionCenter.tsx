import { FC, useState, useEffect } from 'react';
import { ExtractedAction } from '@/lib/types/email';
import { extractActions } from '@/lib/extraction/actions';
import { MOCK_EMAILS } from '@/lib/mock-emails';
import { Skeleton } from '@/components/ui/skeleton';

export const ActionCenter: FC = () => {
  const [actions, setActions] = useState<ExtractedAction[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate async data loading
    const timer = setTimeout(() => {
      setActions(
        MOCK_EMAILS.flatMap(email => extractActions(email))
          .sort((a, b) => b.priority - a.priority)
      );
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = (id: string) => {
    setActions(prev => 
      prev.map(action => 
        action.id === id ? { ...action, status: 'completed' } : action
      )
    );
  };

  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Action Center
      </h2>

      <div className="grid gap-3.5">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="glass-soft rounded-[22px] p-4.5">
              <Skeleton className="h-5 w-3/4 mb-3" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))
        ) : actions.length === 0 ? (
          <div className="glass-soft rounded-[22px] p-6 text-center text-muted">
            <div className="text-[17px] mb-2">No actions found</div>
            <p className="text-[14px]">
              Actions will appear here when detected in your emails
            </p>
          </div>
        ) : (
          actions.map((action) => {
            const email = MOCK_EMAILS.find(e => e.id === action.messageId);
            return (
              <div key={action.id} className="glass-soft rounded-[22px] p-4.5">
              <div className="flex items-center justify-between gap-4">
                <h3 className="m-0 text-[17px] leading-[1.2] tracking-tight">
                  {action.text}
                </h3>
                {action.status === 'pending' && (
                  <button
                    onClick={() => handleComplete(action.id)}
                    className="text-[12px] uppercase tracking-wider text-blue-2 hover:text-blue-1"
                  >
                    Mark Complete
                  </button>
                )}
              </div>
              <div className="mt-2 text-blue-2 text-[13px]">
                {action.owner ? `Assigned to ${action.owner} • ` : ''}
                Status: {action.status}
              </div>
              <div className="mt-2.5 text-muted text-[14px] leading-[1.7]">
                From: {email?.from}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
