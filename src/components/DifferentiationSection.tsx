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
            <div key={item.title} className="glass rounded-[28px] p-6 text-center">
              <div className="mb-4 text-[32px]">{item.icon}</div>
              <h3 className="text-[20px] font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
