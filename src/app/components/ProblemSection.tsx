export function ProblemSection() {
  return (
    <section className="relative overflow-hidden py-[72px]">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          
          <div>
            <p className="eyebrow">The problem</p>
            <h2 className="section-title mt-4">
              Too many emails look important until the wrong one gets missed.
            </h2>
            <p className="section-copy mt-6">
              Deadlines, approvals, follow-ups, and scheduling signals are buried
              inside threads. Everything feels urgent — until something important
              slips through.
            </p>

            <ul className="space-y-4 mt-6">
              <li className="flex items-start gap-3">
                <span className="text-red-400">●</span>
                Hidden deadlines get missed
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">●</span>
                Important threads get buried
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">●</span>
                Follow-ups fall through
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400">●</span>
                Everything feels equally urgent
              </li>
            </ul>
          </div>

          <div className="glass-soft rounded-[28px] p-6">
            <div className="space-y-4">
              <div className="glass-soft rounded-[20px] p-4">
                “Can you send this by Thursday?”
              </div>
              <div className="glass-soft rounded-[20px] p-4">
                “Following up on this…”
              </div>
              <div className="glass-soft rounded-[20px] p-4">
                “Let’s meet Tuesday at 2?”
              </div>
              <div className="glass-soft rounded-[20px] p-4">
                “Just checking in…”
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
