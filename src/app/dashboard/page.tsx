import { PageShell } from "@/components/PageShell";
import { PriorityView } from "@/components/dashboard/PriorityView";
import { DeadlineTimeline } from "@/components/dashboard/DeadlineTimeline";
import { cn } from "@/lib/utils";
import { ActionCenter } from "@/components/dashboard/ActionCenter";
import { FollowUpRadar } from "@/components/dashboard/FollowUpRadar";
import { AIReplyAssist } from "@/components/dashboard/AIReplyAssist";
import { SmartScheduler } from "@/components/dashboard/SmartScheduler";

// Mock data for build
interface PriorityCounts {
  critical: number;
  high: number;
  medium: number;
  low: number;
}

interface ActionCounts {
  all: number;
}

interface DeadlineCounts {
  urgent: number;
}

const priorities: PriorityCounts = {
  critical: 3,
  high: 5,
  medium: 2,
  low: 1
};

const actions: ActionCounts = {
  all: 5
};

const deadlines: DeadlineCounts = {
  urgent: 2
};

export default function DashboardPage() {
  return (
    <PageShell>
      <div className="container py-10">
        {/* Command Center Header */}
        <div className={cn(
          "backdrop-blur-lg bg-white/5 rounded-[28px] p-6 mb-8",
          "border border-white/10 shadow-lg"
        )}>
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <p className="text-xs uppercase tracking-[0.16em] text-red-400">
                  Operational Dashboard
                </p>
              </div>
            
              <div className="flex items-end gap-4">
                <h1 className="text-3xl font-semibold tracking-tight text-white">
                  Inbox Command Center
                </h1>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                    {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                    {process.env.NEXT_PUBLIC_APP_VERSION ?? 'v2.1.0'}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-sm text-white/75 max-w-2xl">
                <span className="font-medium">Current focus:</span> {priorities.critical} critical items, {actions.all} pending actions, and {deadlines.urgent} upcoming deadlines requiring attention today.
              </p>
          
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className={cn(
                  "backdrop-blur-sm bg-white/[0.03] rounded-xl p-4 border-l-4 border-red-500",
                  "border border-white/5"
                )}>
                  <p className="text-xs uppercase tracking-wider text-white/60 mb-2">
                    Critical Items
                  </p>
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="mt-1 text-xs text-white/60">
                    Immediate attention needed
                  </p>
                </div>
                <div className="glass-soft rounded-xl p-4 border-l-4 border-amber-500">
                  <p className="text-xs uppercase tracking-wider text-white/60 mb-2">
                    High Value
                  </p>
                  <p className="text-2xl font-bold text-white">5</p>
                  <p className="mt-1 text-xs text-white/60">
                    Strategic impacts
                  </p>
                </div>
                <div className="glass-soft rounded-xl p-4 border-l-4 border-green-500">
                  <p className="text-xs uppercase tracking-wider text-white/60 mb-2">
                    Time Saved
                  </p>
                  <p className="text-2xl font-bold text-white">2.1h</p>
                  <p className="mt-1 text-xs text-white/60">
                    Today's projected savings  
                  </p>
                </div>
              </div>
            </div>
          
            <div className="flex flex-col gap-3 min-w-[200px]">
              <div className={cn(
                "backdrop-blur-sm bg-white/[0.03] rounded-lg p-3 text-center",
                "border border-white/5"
              )}>
                <p className="text-xs text-white/60">Last sync</p>
                <p className="text-sm font-medium mt-1">2 min ago</p>
              </div>
              <button className="secondary-btn w-full py-2 text-sm">
                Sync Now
              </button>
              <button className="secondary-btn w-full py-2 text-sm">
                View Full Inbox
              </button>
            </div>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className={cn(
              "backdrop-blur-sm bg-white/[0.03] rounded-[20px] p-4",
              "border border-white/5"
            )}>
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

        <div className="grid grid-cols-1 gap-8">
          {/* Executive Summary */}
          <div className={cn(
            "backdrop-blur-lg bg-white/5 rounded-[28px] p-6",
            "border border-white/10 shadow-lg"
          )}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                  Your Email Command Center
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight">
                  Today's Critical Path
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <div className={cn(
                  "backdrop-blur-sm bg-white/[0.03] rounded-full px-4 py-2 text-sm",
                  "border border-white/5"
                )}>
                  <span className="text-white/75">Last sync:</span> 2 min ago
                </div>
                <button className="secondary-btn px-4 py-2 text-sm">
                  Sync Now
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={cn(
                "backdrop-blur-sm bg-white/[0.03] rounded-[20px] p-4 border-l-4 border-red-500/80",
                "border border-white/5"
              )}>
                <p className="text-sm text-white/75">Urgent Priorities</p>
                <p className="mt-1 text-xl font-semibold">3 Items</p>
                <p className="mt-2 text-xs text-white/60">
                  Contracts, payments, deadlines
                </p>
              </div>
              <div className={cn(
                "backdrop-blur-sm bg-white/[0.03] rounded-[20px] p-4 border-l-4 border-amber-500/80",
                "border border-white/5"
              )}>
                <p className="text-sm text-white/75">Pending Actions</p>
                <p className="mt-1 text-xl font-semibold">5 Items</p>
                <p className="mt-2 text-xs text-white/60">
                  Replies, approvals, follow-ups
                </p>
              </div>
              <div className={cn(
                "backdrop-blur-sm bg-white/[0.03] rounded-[20px] p-4 border-l-4 border-cyan-500/80",
                "border border-white/5"
              )}>
                <p className="text-sm text-white/75">Time Saved</p>
                <p className="mt-1 text-xl font-semibold">2.1 hrs</p>
                <p className="mt-2 text-xs text-white/60">
                  Today's estimated savings
                </p>
              </div>
            </div>
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-7">
            {/* Left Column - Intelligence Core */}
            <div className="lg:col-span-5 grid gap-8">
              <PriorityView />
            </div>

            {/* Right Column - Action Tools */}
            <div className="lg:col-span-2 grid gap-8">
              <ActionCenter />
              <FollowUpRadar />
              <DeadlineTimeline />
              <SmartScheduler />
              <AIReplyAssist />
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
