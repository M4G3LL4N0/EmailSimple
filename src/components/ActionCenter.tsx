type ActionItem = {
  id: string;
  title: string;
  detail: string;
  status: "critical" | "due" | "pending" | "draft" | "completed";
  priority: PriorityLevel;
  threadId: string;
  dueAt?: Date;
  stakeholders: {
    name: string;
    role: string;
    isBlocking: boolean;
  }[];
  estimatedTime: number; // minutes
  suggestedNextStep: string;
  lastUpdatedAt: Date;
};

const actions: ActionItem[] = [
  {
    id: "1",
    title: "Reply to contract approval thread",
    detail: "High-value thread waiting on your confirmation.",
    status: "Due now",
  },
  {
    id: "2",
    title: "Send invoice follow-up",
    detail: "Payment-related conversation has gone quiet.",
    status: "Pending",
  },
  {
    id: "3",
    title: "Draft response to recruiter",
    detail: "Opportunity thread resurfaced and needs a quick answer.",
    status: "Draft reply",
  },
];

const statusClasses: Record<ActionItem["status"], string> = {
  "Due now": "border border-red-400/20 bg-red-500/10 text-red-200",
  Pending: "border border-amber-400/20 bg-amber-500/10 text-amber-200",
  "Draft reply": "border border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
};

export function ActionCenter() {
  return (
    <section className="glass rounded-[28px] p-6">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
          Action center
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          Next actions
        </h2>
      </div>

      <div className="grid gap-4">
        {actions.map((item) => (
          <article key={item.id} className="glass-soft rounded-[22px] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  {item.detail}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusClasses[item.status]}`}
              >
                {item.status}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
