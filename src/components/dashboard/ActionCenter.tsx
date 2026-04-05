const actions = [
  "Reply to contract approval thread",
  "Add Thursday schedule request to calendar",
  "Send invoice follow-up response",
];

export function ActionCenter() {
  return (
    <section className="glass rounded-[28px] p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-white/45">
        Action center
      </p>
      <h2 className="mt-2 text-xl font-semibold text-white">Next actions</h2>

      <div className="mt-5 grid gap-3">
        {actions.map((action) => (
          <div key={action} className="glass-soft rounded-[18px] p-4 text-white/80">
            {action}
          </div>
        ))}
      </div>
    </section>
  );
}
