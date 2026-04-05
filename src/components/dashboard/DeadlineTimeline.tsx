const deadlines = [
  { title: "Send contract revisions", due: "Today, 4:00 PM" },
  { title: "Review pricing deck", due: "Tomorrow, 10:00 AM" },
  { title: "Confirm Thursday meeting", due: "Tomorrow, 2:00 PM" },
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
