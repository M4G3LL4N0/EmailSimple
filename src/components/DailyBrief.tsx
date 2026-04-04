type BriefItem = {
  id: string;
  title: string;
  meta: string;
  body: string;
  priority: "High" | "Medium" | "Low";
};

const briefItems: BriefItem[] = [
  {
    id: "1",
    title: "Client contract needs approval",
    meta: "Due today • High priority",
    body: "The sender is waiting on your confirmation before moving forward.",
    priority: "High",
  },
  {
    id: "2",
    title: "Schedule request for Thursday",
    meta: "Calendar suggestion • Medium priority",
    body: "A thread contains a proposed meeting time that should be reviewed.",
    priority: "Medium",
  },
  {
    id: "3",
    title: "Invoice follow-up missing response",
    meta: "2 days old • Needs reply",
    body: "A payment-related conversation may stall if you do not respond soon.",
    priority: "High",
  },
  {
    id: "4",
    title: "Recruiter reached back out",
    meta: "Opportunity • Medium priority",
    body: "A career-related thread resurfaced and likely deserves quick attention.",
    priority: "Medium",
  },
];

const priorityClasses: Record<BriefItem["priority"], string> = {
  High: "bg-red-500/15 text-red-200 border border-red-400/20",
  Medium: "bg-amber-500/15 text-amber-200 border border-amber-400/20",
  Low: "bg-emerald-500/15 text-emerald-200 border border-emerald-400/20",
};

export function DailyBrief() {
  return (
    <section className="glass rounded-[28px] p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
            Today&apos;s brief
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
            What matters now
          </h2>
        </div>

        <div className="glass-soft rounded-[16px] px-4 py-2 text-sm text-white/75">
          {briefItems.length} items flagged
        </div>
      </div>

      <div className="grid gap-4">
        {briefItems.map((item) => (
          <article
            key={item.id}
            className="glass-soft rounded-[22px] p-5 transition hover:bg-white/[0.07]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-cyan-200/80">{item.meta}</p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${priorityClasses[item.priority]}`}
              >
                {item.priority}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-white/68">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
