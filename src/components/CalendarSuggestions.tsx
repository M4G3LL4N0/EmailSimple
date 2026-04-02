export function CalendarSuggestions() {
  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Calendar Suggestions
      </h2>
      
      <div className="grid gap-3.5">
        {[
          {
            title: "Team Sync Meeting",
            time: "Thu 10:00 AM - 11:00 AM",
            status: "Suggested time"
          },
          {
            title: "Client Presentation",
            time: "Fri 2:00 PM - 3:00 PM",
            status: "Proposed slot"
          },
          {
            title: "Budget Review",
            time: "Next Mon 9:00 AM - 10:00 AM",
            status: "Available time"
          }
        ].map((event) => (
          <div
            key={event.title}
            className="glass-soft rounded-[22px] p-4.5"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="m-0 text-[17px] leading-[1.2] tracking-tight">
                {event.title}
              </h3>
              <span className="text-gold text-[12px] uppercase tracking-wider">
                Suggested
              </span>
            </div>
            <div className="mt-2 text-blue-2 text-[13px]">
              {event.time}
            </div>
            <p className="mt-2.5 text-muted text-[14px] leading-[1.7]">
              {event.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
