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
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
            Your Operating Layer for Email
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white">
            Your Critical Path
          </h1>
          <p className="mt-3 max-w-2xl text-white/65">
            EmailSimple has analyzed 47 threads and surfaced the 9 items that will impact your business today. 
            Focus here first, then check your regular inbox.
          </p>
          <div className="mt-4 flex gap-3">
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
