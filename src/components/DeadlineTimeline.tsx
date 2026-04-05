type DeadlineItem = {
  id: string;
  title: string;
  due: string;
  urgency: "Today" | "Tomorrow" | "This week";
};

const deadlines: DeadlineItem[] = [
  {
    id: "1",
    title: "Send contract revisions",
    due: "Today · 4:00 PM",
    urgency: "Today",
  },
  {
    id: "2",
    title: "Review pricing deck",
    due: "Tomorrow · 10:00 AM",
    urgency: "Tomorrow",
  },
  {
    id: "3",
    title: "Confirm Thursday meeting",
    due: "This week · Thursday",
    urgency: "This week",
  },
];

const urgencyClasses: Record<DeadlineItem["urgency"], string> = {
  Today: "border border-red-400/20 bg-red-500/10 text-red-200",
  Tomorrow: "border border-amber-400/20 bg-amber-500/10 text-amber-200",
  "This week": "border border-cyan-400/20 bg-cyan-500/10 text-cyan-200",
};

export function DeadlineTimeline() {
  return (
    <section className="glass rounded-[28px] p-6">
      <div className="mb-5">
        <p className="text-xs uppercase tracking-[0.18em] text-white/45">
          Deadline timeline
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
          Upcoming deadlines
        </h2>
      </div>

      <div className="grid gap-4">
        {deadlines.map((item) => (
          <article key={item.id} className="glass-soft rounded-[22px] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{item.due}</p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${urgencyClasses[item.urgency]}`}
              >
                {item.urgency}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
