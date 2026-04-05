export function PriorityVisualization() {
  return (
    <section className="glass rounded-[28px] p-6">
      <h2 className="text-[22px] font-bold tracking-tight mb-5">
        Priority Heatmap
      </h2>
      <p className="mb-6 text-sm text-white/65">
        Visualized by impact and urgency scores across all threads
      </p>
      
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
