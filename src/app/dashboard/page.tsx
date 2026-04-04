import { PageShell } from "@/components/PageShell";
import { DailyBrief } from "@/components/DailyBrief";
import { PriorityView } from "@/components/PriorityView";
import { DeadlineTimeline } from "@/components/DeadlineTimeline";
import { ActionCenter } from "@/components/ActionCenter";
import { FollowUpRadar } from "@/components/FollowUpRadar";
import { AIReplyAssist } from "@/components/AIReplyAssist";

export default function DashboardPage() {
  return (
    <PageShell>
      <div className="container py-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
            EmailSimple Dashboard
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white">
            Inbox intelligence
          </h1>
          <p className="mt-3 max-w-2xl text-white/65">
            A clean command layer for priorities, deadlines, follow-ups, and actions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <DailyBrief />
          <PriorityView />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <DeadlineTimeline />
            <ActionCenter />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FollowUpRadar />
            <AIReplyAssist />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
