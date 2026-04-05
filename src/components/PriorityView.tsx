type PriorityItem = {
  id: string;
  title: string;
  reason: string;
  score: number;
  priority: "High" | "Medium" | "Low";
  insights: {
    keyReason: string;
    suggestedAction: string;
    risks: string[];
    benefits: string[];
    context: string[];
  };
  factors: {
    urgency: number;
    importance: number;
    senderWeight: number;
    engagement: number;
    stakeholderCount: number;
    threadCount: number;
    staleness: number;
    confidence: number;
  };
};

const priorities: PriorityItem[] = [
  {
    id: "1",
    title: "Client contract needs approval",
    reason: "High urgency and blocking next steps.",
    score: 92,
    priority: "High",
    insights: {
      keyReason: "Contract approval is blocking $250k deal closure",
      suggestedAction: "Review and approve by EOD today",
      risks: ["Deal delay", "Client frustration", "Revenue impact"],
      benefits: ["Deal closure", "Strengthened relationship", "Revenue realization"],
      context: ["Client is strategic partner", "Deal has been in works for 3 months"]
    },
    factors: {
      urgency: 95,
      importance: 90,
      senderWeight: 85,
      engagement: 80,
      stakeholderCount: 5,
      threadCount: 3,
      staleness: 1,
      confidence: 92
    }
  },
  {
    id: "2",
    title: "Invoice thread awaiting response",
    reason: "Payment-related thread may stall.",
    score: 84,
    priority: "High",
    insights: {
      keyReason: "Payment thread requires response to avoid delays",
      suggestedAction: "Reply with payment confirmation",
      risks: ["Payment delay", "Service interruption"],
      benefits: ["Timely payment", "Client satisfaction"],
      context: ["Client is on net-30 terms", "Invoice is 5 days old"]
    },
    factors: {
      urgency: 84,
      importance: 80,
      senderWeight: 70,
      engagement: 75,
      stakeholderCount: 2,
      threadCount: 1,
      staleness: 5,
      confidence: 85
    }
  },
  {
    id: "3",
    title: "Recruiter follow-up",
    reason: "Opportunity thread resurfaced.",
    score: 76,
    priority: "Medium",
    insights: {
      keyReason: "Potential career opportunity worth exploring",
      suggestedAction: "Schedule intro call if interested",
      risks: ["Missed opportunity"],
      benefits: ["Career advancement"],
      context: ["From reputable tech company", "Initial contact was 2 weeks ago"]
    },
    factors: {
      urgency: 60,
      importance: 75,
      senderWeight: 65,
      engagement: 70,
      stakeholderCount: 1,
      threadCount: 1,
      staleness: 14,
      confidence: 80
    }
  },
  {
    id: "4",
    title: "Meeting confirmation request",
    reason: "Scheduling signal should be resolved.",
    score: 63,
    priority: "Low",
    insights: {
      keyReason: "Standard meeting coordination",
      suggestedAction: "Confirm availability",
      risks: ["Double-booking"],
      benefits: ["Calendar clarity"],
      context: ["Internal team meeting", "Proposed for next week"]
    },
    factors: {
      urgency: 50,
      importance: 60,
      senderWeight: 55,
      engagement: 65,
      stakeholderCount: 3,
      threadCount: 1,
      staleness: 2,
      confidence: 75
    }
  },
];

const priorityClasses: Record<PriorityItem["priority"], string> = {
  High: "border border-red-400/20 bg-red-500/10 text-red-200",
  Medium: "border border-amber-400/20 bg-amber-500/10 text-amber-200",
  Low: "border border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
};

export function PriorityView() {
  return (
    <section className="glass rounded-[28px] p-6">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
          Priority view
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          Ranked by what matters most
        </h2>
      </div>

      <div className="grid gap-4">
        {priorities.filter(item => item && item.insights && item.insights.keyReason).map((item) => (
          <article key={item.id} className="glass-soft rounded-[22px] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  {item.insights.keyReason}
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex gap-2 text-xs text-white/60">
                    <span>Urgency: {item.factors.urgency}</span>
                    <span>•</span>
                    <span>Importance: {item.factors.importance}</span>
                    <span>•</span>
                    <span>Stakeholders: {item.factors.stakeholderCount}</span>
                  </div>
                  <div className="text-xs text-white/60">
                    Suggested action: {item.insights.suggestedAction}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <div className="flex flex-col items-end gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${priorityClasses[item.priority]}`}
                  >
                    {item.priority}
                  </span>
                  <div className="relative w-20 h-2 bg-white/10 rounded-full">
                    <div 
                      className="absolute inset-y-0 left-0 bg-cyan-500 rounded-full"
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                    Score {item.score}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
