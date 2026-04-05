export function ProblemSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">The problem</p>
            <h2 className="section-title mt-4">
              Too many emails look important until the wrong one gets missed.
            </h2>
            <p className="section-copy mt-6">
              Deadlines, approvals, follow-ups, and scheduling signals get buried
              inside noisy threads. EmailSimple turns that chaos into a clean
              operating layer.
            </p>
          </div>

          <div className="glass rounded-[28px] p-6">
            <div className="grid gap-4">
              <div className="glass-soft rounded-[20px] p-4">“Can you send this by Thursday?”</div>
              <div className="glass-soft rounded-[20px] p-4">“Following up on this…”</div>
              <div className="glass-soft rounded-[20px] p-4">“Does Tuesday at 2 work?”</div>
              <div className="glass-soft rounded-[20px] p-4">“Need your approval before we proceed.”</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
