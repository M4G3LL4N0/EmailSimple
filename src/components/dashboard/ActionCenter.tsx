const actions = [
  {
    text: "Approve client contract (5 min)",
    context: "Legal team waiting • Due today",
    action: "Sign and return"
  },
  {
    text: "Reschedule Thursday meeting (2 min)", 
    context: "Time conflict detected • 2 participants",
    action: "Propose new time"
  },
  {
    text: "Process overdue invoice (3 min)",
    context: "$4,500 payment • Vendor follow-up",
    action: "Approve payment"
  }
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
