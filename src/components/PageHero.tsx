interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  cta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
}

export function PageHero({
  title,
  subtitle,
  eyebrow,
  cta,
  secondaryCta
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-[120px] pb-[100px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 hero-grid opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,11,23,0.85)] to-[rgba(7,11,23,0.99)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--glow),_transparent_60%)] opacity-[0.4]" />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,_var(--glow),_transparent_50%)] opacity-50 blur-[50px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_var(--glow-gold),_transparent_50%)] opacity-40 blur-[70px] pointer-events-none" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-[800px] mx-auto text-center">
          {eyebrow && (
            <div className="eyebrow mb-6">
              <span className="eyebrow-dot animate-pulse" />
              {eyebrow}
            </div>
          )}
          <h1 className="text-[clamp(3rem,8vw,5rem)] leading-[0.95] tracking-tight font-bold">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted text-[1.15rem] leading-[1.7] mt-6 max-w-[600px] mx-auto tracking-[-0.01em]">
              {subtitle}
            </p>
          )}
          {(cta || secondaryCta) && (
            <div className="flex gap-4 mt-8 justify-center">
              {cta && (
                <Link 
                  href={cta.href} 
                  className="primary-btn px-8 py-4 hover:bg-blue-500/90 transition-all duration-200 hover:shadow-[0_6px_24px_rgba(103,183,255,0.3)] font-medium tracking-[-0.01em]"
                >
                  {cta.text}
                </Link>
              )}
              {secondaryCta && (
                <Link 
                  href={secondaryCta.href} 
                  className="secondary-btn px-8 py-4 hover:bg-white/10 transition-all duration-200 border border-white/10 hover:border-white/20 font-medium tracking-[-0.01em]"
                >
                  {secondaryCta.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
