import { 
  PageShell,
  DailyBrief,
  PriorityView,
  DeadlineTimeline,
  ActionCenter,
  FollowUpRadar,
  AIReplyAssist
} from "@/components";

export default function DashboardPage() {
  return (
    <PageShell>
      <div className="container py-10">
        {/* Top Summary Strip */}
        <div className="glass rounded-[28px] p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                Your Operating Layer for Email
              </p>
              <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white">
                Your Critical Path
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="glass-soft rounded-[16px] px-4 py-2 text-sm">
                <span className="text-white/75">Analyzed:</span> 47 threads
              </div>
              <div className="glass-soft rounded-[16px] px-4 py-2 text-sm">
                <span className="text-white/75">Impact:</span> 9 items
              </div>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-soft rounded-[20px] p-4">
              <p className="text-sm text-white/75">Most Urgent</p>
              <p className="mt-1 text-lg font-semibold text-white">
                Client Contract Approval
              </p>
              <p className="mt-1 text-sm text-white/60">
                Due today • 3 stakeholders
              </p>
            </div>
            <div className="glass-soft rounded-[20px] p-4">
              <p className="text-sm text-white/75">Highest Risk</p>
              <p className="mt-1 text-lg font-semibold text-white">
                Invoice Reminder
              </p>
              <p className="mt-1 text-sm text-white/60">
                2 days overdue • $4,500
              </p>
            </div>
            <div className="glass-soft rounded-[20px] p-4">
              <p className="text-sm text-white/75">Next Action</p>
              <p className="mt-1 text-lg font-semibold text-white">
                Schedule Meeting
              </p>
              <p className="mt-1 text-sm text-white/60">
                2 participants • Time-sensitive
              </p>
            </div>
          </div>
          
          <div className="mt-6 flex gap-3">
            <button className="primary-btn">Take the Tour</button>
            <button className="secondary-btn">Watch Demo</button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <DailyBrief />

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-7">
            <div className="lg:col-span-4 grid gap-8">
              <PriorityView />
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <FollowUpRadar />
                <DeadlineTimeline />
              </div>
            </div>

            <div className="lg:col-span-3 grid gap-8">
              <ActionCenter />
              <AIReplyAssist />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
