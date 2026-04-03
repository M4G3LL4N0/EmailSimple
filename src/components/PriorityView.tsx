type PriorityItem = {
  id: string;
  title: string;
  reason: string;
  score: number;
  priority: "High" | "Medium" | "Low";
};

const priorities: PriorityItem[] = [
  {
    id: "1",
    title: "Client contract needs approval",
    reason: "High urgency and blocking next steps.",
    score: 92,
    priority: "High",
  },
  {
    id: "2",
    title: "Invoice thread awaiting response",
    reason: "Payment-related thread may stall.",
    score: 84,
    priority: "High",
  },
  {
    id: "3",
    title: "Recruiter follow-up",
    reason: "Opportunity thread resurfaced.",
    score: 76,
    priority: "Medium",
  },
  {
    id: "4",
    title: "Meeting confirmation request",
    reason: "Scheduling signal should be resolved.",
    score: 63,
    priority: "Low",
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
        {priorities.map((item) => (
          <article key={item.id} className="glass-soft rounded-[22px] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  {item.reason}
                </p>
              </div>

              <div className="flex flex-col items-end gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${priorityClasses[item.priority]}`}
                >
                  {item.priority}
                </span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  Score {item.score}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
