export function FollowUpRisk() {
  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Follow-up Risk
      </h2>
      
      <div className="grid gap-3.5">
        {[
          {
            title: "Client Proposal",
            days: "2 days overdue",
            risk: "High"
          },
          {
            title: "Vendor Contract",
            days: "1 day overdue",
            risk: "Medium"
          },
          {
            title: "Team Meeting Notes",
            days: "Due today",
            risk: "Low"
          }
        ].map((item) => (
          <div
            key={item.title}
            className="glass-soft rounded-[22px] p-4.5"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="m-0 text-[17px] leading-[1.2] tracking-tight">
                {item.title}
              </h3>
              <span className={`text-[12px] uppercase tracking-wider ${
                item.risk === 'High' ? 'text-red-400' : 
                item.risk === 'Medium' ? 'text-gold' : 'text-blue-2'
              }`}>
                {item.risk} risk
              </span>
            </div>
            <div className="mt-2 text-blue-2 text-[13px]">
              {item.days}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
