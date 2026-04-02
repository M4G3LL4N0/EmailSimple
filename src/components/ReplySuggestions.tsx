export function ReplySuggestions() {
  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Reply Suggestions
      </h2>
      
      <div className="grid gap-3.5">
        {[
          {
            title: "Client Meeting Request",
            suggestion: "I'm available Thursday at 2pm. Does that work for you?",
            status: "Pending reply"
          },
          {
            title: "Budget Approval",
            suggestion: "I've reviewed the numbers and everything looks good to proceed.",
            status: "Needs confirmation"
          },
          {
            title: "Project Update",
            suggestion: "Here's the latest status report. Let me know if you have any questions.",
            status: "Ready to send"
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
              <span className="text-gold text-[12px] uppercase tracking-wider">
                Suggested
              </span>
            </div>
            <p className="mt-2.5 text-muted text-[14px] leading-[1.7]">
              {item.suggestion}
            </p>
            <div className="mt-2 text-blue-2 text-[13px]">
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
