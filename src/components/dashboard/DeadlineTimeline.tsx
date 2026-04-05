const deadlines = [
  { 
    title: "Send contract revisions to Acme Corp", 
    due: "Today, 4:00 PM",
    urgency: "high",
    context: "Legal team blocked • Final review complete"
  },
  { 
    title: "Review Q2 pricing deck", 
    due: "Tomorrow, 10:00 AM",
    urgency: "medium",
    context: "Sales team presentation prep • 3 slides need approval"
  },
  { 
    title: "Confirm Thursday leadership meeting",
    due: "Tomorrow, 2:00 PM", 
    urgency: "medium",
    context: "5 execs attending • Catering needs final numbers"
  },
];

export function DeadlineTimeline() {
  return (
    <section className="glass rounded-[28px] p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-white/45">
        Deadline timeline
      </p>
      <h2 className="mt-2 text-xl font-semibold text-white">Upcoming deadlines</h2>

      <div className="mt-5 grid gap-4">
        {deadlines.map((item) => (
          <div key={item.title} className="glass-soft rounded-[20px] p-4">
            <div className="text-sm text-white/50">{item.due}</div>
            <div className="mt-2 text-base font-semibold text-white">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
