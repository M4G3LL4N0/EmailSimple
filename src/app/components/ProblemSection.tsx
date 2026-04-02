export function ProblemSection() {
  return (
    <section className="py-[72px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,17,31,0.9)] to-[rgba(7,17,31,0.5)]" />
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              The $1T Email Problem
            </div>
            <h2 className="section-title mt-5">
              Email overload is the silent killer of productivity
            </h2>
            <p className="section-copy mt-4">
              Despite decades of "inbox zero" hacks, professionals still waste hours daily scanning emails instead of doing meaningful work. The tools haven't evolved to match how we actually use email today.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {problemStats.map((stat) => (
                <div key={stat.value} className="glass-soft rounded-[24px] p-5">
                  <p className="metric-value text-blue-2">{stat.value}</p>
                  <div className="metric-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-[28px] p-6">
            <h3 className="text-[20px] font-bold mb-4">
              Why existing solutions fail:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400">✖</span>
                <span>Summarizers miss actions and deadlines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">✖</span>
                <span>Priority filters don't understand context</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">✖</span>
                <span>No integration with calendars/tasks</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">✖</span>
                <span>Team workflows are completely ignored</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
