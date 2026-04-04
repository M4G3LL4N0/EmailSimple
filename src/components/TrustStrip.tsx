export function TrustStrip() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,11,23,0.95)] to-[rgba(7,11,23,0.85)]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_70%)] blur-[120px]" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow mx-auto">
            <span className="eyebrow-dot bg-emerald-400" />
            Why EmailSimple Wins
          </div>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white">
            Beyond summarization - real workflow automation
          </h2>
          <p className="mt-4 text-lg leading-7 text-white/75">
            We don't just shorten your emails - we extract what matters and put it where it belongs in your workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[
            {
              icon: "📋",
              title: "Automated Action Tracking",
              description: "Extract action items and track them in your project tools",
              gradient: "from-emerald-400 to-teal-400"
            },
            {
              icon: "⭐️",
              title: "Priority Scoring",
              description: "Assign priority scores based on impact and urgency",
              gradient: "from-violet-400 to-indigo-400"
            },
            {
              icon: "👥",
              title: "Shared Inbox Management",
              description: "Delegate ownership and track accountability",
              gradient: "from-cyan-400 to-blue-400"
            }
          ].map((feature) => (
            <div
              key={feature.title}
              className="glass rounded-[32px] p-8 text-center hover:bg-white/[0.03] transition-colors"
            >
              <div className={`text-[32px] mb-6 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-lg leading-7 text-white/75">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
