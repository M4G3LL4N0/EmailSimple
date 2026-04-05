export function PriorityVisualization() {
  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Priority Heatmap
      </h2>
      <p className="mb-6 text-sm text-white/65">
        Our AI analyzes 23 factors including stakeholder importance, deadlines, and response patterns to surface what truly matters.
      </p>
      <div className="mb-6 glass-soft rounded-[16px] p-4 text-sm">
        <div className="flex items-center gap-2 text-blue-400">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Priority scores update in real-time as new emails arrive</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="text-muted">High Priority</div>
          <div className="text-red-400">3 items</div>
        </div>
        
        <div className="h-2 rounded-full bg-[rgba(255,255,255,0.06)]">
          <div
            className="h-full rounded-full bg-red-400"
            style={{ width: '30%' }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-muted">Medium Priority</div>
          <div className="text-gold">5 items</div>
        </div>
        
        <div className="h-2 rounded-full bg-[rgba(255,255,255,0.06)]">
          <div
            className="h-full rounded-full bg-gold"
            style={{ width: '50%' }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="text-muted">Low Priority</div>
          <div className="text-blue-2">2 items</div>
        </div>
        
        <div className="h-2 rounded-full bg-[rgba(255,255,255,0.06)]">
          <div
            className="h-full rounded-full bg-blue-2"
            style={{ width: '20%' }}
          />
        </div>
      </div>
    </section>
  );
}
