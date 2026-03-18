const plans = [
  {
    name: 'Monthly Plan',
    price: '$6.99',
    period: 'per month',
    description: 'No charges today. Cancel anytime.',
    trial: true,
    featured: false,
  },
  {
    name: 'Family Plan',
    price: '$89.99',
    period: 'per year · up to 4 members',
    description: 'Invite your people. Enjoy full access together. One plan, whole family.',
    trial: false,
    featured: true,
    badge: 'Best Value',
  },
  {
    name: 'Yearly Plan',
    price: '$59.99',
    period: 'per year',
    description: 'Everything included. Full access, full year.',
    trial: false,
    featured: false,
  },
];

export function PricingPreview() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="section-eyebrow mb-3">Bring Your People. The Table Is Set.</p>
          <h2 className="section-title mb-3">We Are Waiting for You</h2>
          <p className="font-display text-base font-semibold text-brand-navy sm:text-lg">
            Invite your people, enjoy 7 days of full access before your subscription begins
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-brand border bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                plan.featured
                  ? 'border-brand-burgundy border-2 shadow-button/20'
                  : 'border-brand-sand'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 right-4 rounded-pill bg-brand-burgundy px-3 py-1 font-ui text-[10px] font-bold uppercase tracking-wider text-white">
                  {plan.badge}
                </span>
              )}
              <h4 className="font-ui text-sm font-bold text-brand-burgundy">{plan.name}</h4>
              <p className="mt-1 font-display text-3xl font-black text-brand-navy">{plan.price}</p>
              <p className="mt-1 font-ui text-xs text-brand-navy/40">{plan.period}</p>
              <p className="mt-3 font-accent text-sm leading-relaxed text-brand-navy/50">{plan.description}</p>
              {plan.trial && (
                <span className="mt-3 inline-block rounded-pill bg-brand-burgundy/10 px-3 py-1 font-ui text-[10px] font-bold text-brand-burgundy">
                  7 days trial
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="#waitlist"
            className="btn-burgundy inline-flex items-center gap-2 px-10 py-4 text-base"
          >
            Try 7 Days Free
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <div className="mt-5 flex justify-center gap-6 font-ui text-xs text-brand-navy/50">
            <a href="/terms" className="underline-offset-2 hover:text-brand-navy hover:underline transition-colors">Terms of Use</a>
            <a href="/privacy" className="underline-offset-2 hover:text-brand-navy hover:underline transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
