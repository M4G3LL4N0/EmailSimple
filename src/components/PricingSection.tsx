import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    price: { monthly: '$0', annually: '$0' },
    description: 'Perfect for individuals getting started with email productivity',
    features: [
      'Basic priority detection',
      'Daily email brief',
      'Core reply suggestions',
      'Limited sync history (7 days)',
      'Email tracking',
      'Community support'
    ],
    mostPopular: false,
  },
  {
    name: 'Pro',
    id: 'tier-pro',
    href: '#',
    price: { monthly: '$29', annually: '$299' },
    description: 'For professionals who need advanced email management',
    features: [
      'Advanced priority detection',
      'AI-powered reply suggestions',
      '30-day sync history',
      'Follow-up reminders',
      'Calendar integration',
      'Priority support'
    ],
    mostPopular: true,
  },
  {
    name: 'Team',
    id: 'tier-team',
    href: '#',
    price: { monthly: '$99', annually: '$999' },
    description: 'Collaborative features for growing teams',
    features: [
      'Everything in Pro',
      'Shared inbox & delegation',
      'Team analytics dashboard',
      'Collaborative reply drafting',
      'Custom approval workflows',
      'Priority support (4hr response)',
      'Centralized billing',
      'Team member onboarding',
      'Security controls'
    ],
    mostPopular: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: 'Custom',
    description: 'For organizations with complex email needs',
    features: [
      'Everything in Team',
      'Unlimited sync history',
      'Custom integrations',
      'SLA guarantees',
      'Advanced security',
      'Dedicated onboarding'
    ],
    mostPopular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title mt-4">
            Simple pricing for every stage of growth
          </h2>
          <p className="section-copy mt-6">
            Whether you're an individual or a growing team, we have a plan that fits your needs.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="glass rounded-[32px] p-8 text-center"
            >
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-4 text-sm text-white/60">{tier.description}</p>
              
              <div className="mt-8">
                {typeof tier.price === 'string' ? (
                  <p className="text-4xl font-bold">{tier.price}</p>
                ) : (
                  <>
                    <p className="text-4xl font-bold">{tier.price.monthly}</p>
                    <p className="mt-2 text-sm text-white/60">Billed annually at {tier.price.annually}</p>
                  </>
                )}
              </div>

              <ul className="mt-8 space-y-3 text-left">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className="mt-8 block w-full rounded-lg bg-blue-500 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-blue-600"
              >
                Get started
              </a>
            </div>
          ))}
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
  )
}
