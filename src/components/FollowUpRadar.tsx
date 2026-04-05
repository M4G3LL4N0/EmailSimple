type FollowUpItem = {
  id: string;
  title: string;
  detail: string;
  age: string;
  risk: "High" | "Medium" | "Low";
};

const followUps: FollowUpItem[] = [
  {
    id: "1",
    title: "Client contract thread",
    detail: "Waiting on your confirmation before they can proceed.",
    age: "Last message · 2 hours ago",
    risk: "High",
  },
  {
    id: "2",
    title: "Invoice reminder",
    detail: "Payment-related thread has not been acknowledged.",
    age: "Last message · 1 day ago",
    risk: "High",
  },
  {
    id: "3",
    title: "Recruiter follow-up",
    detail: "Opportunity thread resurfaced and may go cold without reply.",
    age: "Last message · 2 days ago",
    risk: "Medium",
  },
  {
    id: "4",
    title: "Meeting confirmation",
    detail: "Proposed time was sent but not yet confirmed.",
    age: "Last message · 3 days ago",
    risk: "Low",
  },
];

const riskClasses: Record<FollowUpItem["risk"], string> = {
  High: "border border-red-400/20 bg-red-500/10 text-red-200",
  Medium: "border border-amber-400/20 bg-amber-500/10 text-amber-200",
  Low: "border border-emerald-400/20 bg-emerald-500/10 text-emerald-200",
};

export function FollowUpRadar() {
  return (
    <section className="glass rounded-[28px] p-6">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
          Follow-up radar
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          Threads at risk of slipping
        </h2>
      </div>

      <div className="grid gap-4">
        {followUps.map((item) => (
          <article key={item.id} className="glass-soft rounded-[22px] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">
                  {item.detail}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.14em] text-white/40">
                  {item.age}
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${riskClasses[item.risk]}`}
              >
                {item.risk}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
