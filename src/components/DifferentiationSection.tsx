const differentiators = [
  {
    icon: "⚡",
    title: "Action, not just summary",
    description:
      "EmailSimple surfaces what matters, what is due, and what needs action next.",
  },
  {
    icon: "🧠",
    title: "Priority intelligence",
    description:
      "Messages are ranked by urgency, relevance, and likely consequence.",
  },
  {
    icon: "📅",
    title: "Calendar-ready workflow",
    description:
      "Deadlines and scheduling signals are extracted into a cleaner operating layer.",
  },
];

export function DifferentiationSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Why EmailSimple</p>
          <h2 className="section-title mt-4">
            Built to simplify decisions, not add more inbox noise.
          </h2>
          <p className="section-copy mt-6">
            Most inbox tools help you read faster. EmailSimple helps you know
            what matters and what should happen next.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="glass rounded-[32px] p-8 hover:bg-white/[0.03] transition-all hover:transform hover:scale-[1.01]">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-1)] to-[var(--accent-2)] mb-6 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 text-[0.9375rem] leading-7 text-white/75 max-w-[280px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
