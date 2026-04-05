const marketOpportunities = [
  "AI email assistants",
  "Productivity SaaS",
  "Executive workflow tools",
  "Inbox automation",
  "Task and calendar integration",
  "Enterprise communication intelligence",
];

export function MarketOpportunity() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl">
          <p className="eyebrow">Market opportunity</p>
          <h2 className="section-title mt-4">
            Email is still the operating system of work.
          </h2>
          <p className="section-copy mt-6">
            Critical decisions, deadlines, approvals, and follow-ups still live
            inside email. EmailSimple turns that constant stream into structured
            intelligence.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {marketOpportunities.map((opp) => (
            <div key={opp} className="glass-soft rounded-[18px] p-4 text-center">
              <span className="text-sm text-white/80">{opp}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
