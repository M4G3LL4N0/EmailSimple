const useCases = [
  {
    title: "Founders",
    description: "Stay on top of investor, customer, hiring, and legal threads.",
  },
  {
    title: "Operators",
    description: "Track deadlines, approvals, handoffs, and follow-ups without inbox overload.",
  },
  {
    title: "Professionals",
    description: "Turn email into a clear daily brief with priorities and actions.",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Use cases</p>
          <h2 className="section-title mt-4">Built for people whose inbox drives real outcomes.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {useCases.map((item) => (
            <div key={item.title} className="glass rounded-[28px] p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
