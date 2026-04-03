import { DailyBrief } from "@/components/DailyBrief";
import { PriorityView } from "@/components/dashboard/PriorityView";
import { DeadlineTimeline } from "@/components/dashboard/DeadlineTimeline";
import { ActionCenter } from "@/components/dashboard/ActionCenter";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_28%),linear-gradient(180deg,#061018_0%,#05070b_45%,#030405_100%)] text-white">
      <div className="container py-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
            EmailSimple Dashboard
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white">
            Inbox intelligence
          </h1>
          <p className="mt-3 max-w-2xl text-white/65">
            A clean command layer for priorities, deadlines, and actions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="md:col-span-2">
            <DailyBrief />
          </div>

          <div className="md:col-span-2">
            <PriorityView />
          </div>

          <DeadlineTimeline />
          <ActionCenter />
        </div>
      </div>
    </main>
  );
}
