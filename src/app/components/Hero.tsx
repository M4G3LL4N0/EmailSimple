export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[160px] pb-[140px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,11,23,0.95)] to-[rgba(7,11,23,0.85)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--glow),_transparent_70%)] opacity-20" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.15),_transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_70%)] blur-[120px]" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="eyebrow mx-auto">
            <span className="eyebrow-dot bg-emerald-400" />
            Inbox clarity, without inbox chaos
          </div>
          <h1 className="mt-6 text-6xl font-semibold tracking-[-0.04em] text-white">
            Your inbox, simplified into what matters
          </h1>
          <p className="mt-6 text-xl leading-8 text-white/75 max-w-2xl mx-auto">
            EmailSimple turns overwhelming email into a clean daily brief with priorities, deadlines, replies, follow-ups, and calendar-ready actions
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="#waitlist"
              className="primary-btn h-14 px-8 hover:bg-emerald-500/90 transition-colors"
            >
              Join the Waitlist
            </Link>
            <Link
              href="/dashboard"
              className="secondary-btn h-14 px-8 hover:bg-white/10 transition-colors"
            >
              See the Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
