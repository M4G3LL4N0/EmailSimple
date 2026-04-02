export function MarketOpportunity() {
  return (
    <section className="py-[42px] relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <div className="eyebrow mx-auto">
            <span className="eyebrow-dot" />
            Market Opportunity
          </div>
          <h2 className="section-title mt-5">
            The $1.2T productivity drain
          </h2>
          <p className="section-copy mt-4">
            EmailSimple addresses the massive and growing problem of workplace productivity loss due to email overload.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="glass rounded-[28px] p-6">
            <h3 className="text-[20px] font-bold mb-4">
              Why now:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-blue-2">•</span>
                <span>AI can now reliably extract actions and deadlines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-2">•</span>
                <span>Remote work increased email volume 47% since 2020</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-2">•</span>
                <span>Teams need better ways to coordinate via email</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-2">•</span>
                <span>Workers demand tools that reduce cognitive load</span>
              </li>
            </ul>
          </div>

          <div className="glass rounded-[28px] p-6">
            <h3 className="text-[20px] font-bold mb-4">
              Key opportunities:
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {marketOpportunities.map((opp) => (
                <div 
                  key={opp}
                  className="glass-soft rounded-[18px] p-4 text-center"
                >
                  {opp}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
