import Link from 'next/link';
import { TrustStrip } from './TrustStrip';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[140px] pb-[120px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-grid opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,11,23,0.85)] to-[rgba(7,11,23,0.99)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--glow),_transparent_60%)] opacity-[0.4]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,_var(--glow),_transparent_50%)] opacity-50 blur-[50px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_var(--glow-gold),_transparent_50%)] opacity-40 blur-[70px] pointer-events-none" />
      </div
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div>
            <div className="eyebrow mb-6">
              <span className="eyebrow-dot animate-pulse" />
              Inbox clarity, without inbox chaos
            </div>

            <h1 className="mb-8 text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.95] tracking-tight max-w-[840px] font-bold">
              Your inbox,
              <br />
              simplified into
              <br />
              what matters.
            </h1>

            <p className="text-muted text-[1.15rem] leading-[1.7] max-w-[600px] tracking-[-0.01em]">
              EmailSimple turns overwhelming email into a clean daily brief with
              priorities, deadlines, replies, follow-ups, and calendar-ready
              actions so you can stop scanning everything and start handling the
              few things that count.
            </p>

            <div className="flex gap-4 mt-10">
              <Link 
                href="#waitlist" 
                className="primary-btn px-8 py-4 hover:bg-blue-500/90 transition-all duration-200 hover:shadow-[0_6px_24px_rgba(103,183,255,0.3)] font-medium tracking-[-0.01em]"
              >
                Join the Waitlist
              </Link>
              <Link 
                href="/dashboard" 
                className="secondary-btn px-8 py-4 hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-white/20 font-medium tracking-[-0.01em]"
              >
                See the Product
              </Link>
            </div>

            <TrustStrip />
          </div>

          <DashboardPreview />
        </div>

        <ValueMetrics />
      </div>
    </section>
  );
}
