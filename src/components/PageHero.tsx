import Link from "next/link";
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

        {/* Feature comparison table */}
        <div className="mt-24">
          <h3 className="text-xl font-semibold text-center mb-8">Detailed feature comparison</h3>
          <div className="overflow-x-auto glass rounded-[32px] p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="pb-4 pr-6">Feature</th>
                  <th className="pb-4 px-6 text-center">Starter</th>
                  <th className="pb-4 px-6 text-center">Pro</th>
                  <th className="pb-4 px-6 text-center">Team</th>
                  <th className="pb-4 pl-6 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ['Email priority scoring', '✓', '✓', '✓', '✓'],
                  ['AI reply suggestions', 'Basic', 'Advanced', 'Advanced', 'Custom'],
                  ['Sync history', '7 days', '30 days', '1 year', 'Unlimited'],
                  ['Collaboration tools', '✗', 'Limited', '✓', '✓✓'],
                  ['Support', 'Community', 'Priority', 'Dedicated', '24/7'],
                  ['Security', 'Standard', 'Standard', 'Enhanced', 'Enterprise']
                ].map(([feature, ...tiers]) => (
                  <tr key={feature as string} className="hover:bg-white/5">
                    <td className="py-4 pr-6">{feature}</td>
                    <td className="py-4 px-6 text-center">{tiers[0]}</td>
                    <td className="py-4 px-6 text-center">{tiers[1]}</td>
                    <td className="py-4 px-6 text-center">{tiers[2]}</td>
                    <td className="py-4 pl-6 text-center">{tiers[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ROI calculator */}
        <div className="mt-16 glass rounded-[32px] p-8">
          <h3 className="text-xl font-semibold mb-6">See how much time you'll save</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p>The average professional spends:</p>
              <ul className="mt-4 space-y-3">
                <li>- 3 hrs/day processing email</li>
                <li>- 20 mins/message composing replies</li>
                <li>- 1 hr/day on unnecessary emails</li>
              </ul>
            </div>
            <div className="bg-black/20 p-6 rounded-[24px]">
              <p className="mb-4">With EmailSimple Pro you could save:</p>
              <p className="text-2xl font-bold">10+ hours per week</p>
              <p className="mt-2 text-sm text-white/60">That's a ~20% productivity boost</p>
              <a href="#" className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300">
                Calculate your savings →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
