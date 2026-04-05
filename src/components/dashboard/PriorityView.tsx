const priorities = [
  {
    title: "Client contract needs approval",
    reason: "High urgency • sender waiting on confirmation",
    score: 92,
  },
  {
    title: "Reply to recruiter follow-up",
    reason: "Opportunity thread resurfaced",
    score: 84,
  },
  {
    title: "Invoice thread needs response",
    reason: "Payment-related conversation may stall",
    score: 79,
  },
];

export function PriorityView() {
  return (
    <section className="glass rounded-[28px] p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
            Priority view
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
            Ranked by what matters most
          </h2>
        </div>
      </div>

      <div className="grid gap-4">
        {priorities.map((item) => (
          <article key={item.title} className="glass-soft rounded-[22px] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/65">{item.reason}</p>
              </div>
              <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                {item.score}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
