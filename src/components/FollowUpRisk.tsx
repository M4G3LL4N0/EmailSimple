export function FollowUpRisk() {
  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Follow-up Radar
      </h2>
      <p className="mb-6 text-sm text-white/65">
        We monitor 14 risk factors including response delays, stakeholder seniority, and contractual obligations to prevent missed opportunities.
      </p>
      <div className="flex items-center gap-2 mb-6 text-xs text-white/45">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span>Risk levels adjust automatically based on thread activity</span>
      </div>
      
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
