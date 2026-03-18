import { Check, Star } from "lucide-react";

interface Plan {
  name: string;
  price: string;
  period: string;
  savings: string | null;
  description: string;
  features: string[];
  trial: boolean;
  featured: boolean;
  badge?: string;
}

const plans: Plan[] = [
  {
    name: 'Monthly Plan',
    price: '$6.99',
    period: 'per month',
    savings: null,
    description: 'No commitment. Cancel anytime during your free trial.',
    features: ['Full app access', '7-day free trial', 'Cancel anytime'],
    trial: true,
    featured: false,
  },
  {
    name: 'Yearly Plan',
    price: '$49.99',
    period: 'per year',
    savings: 'Save 40% vs. monthly',
    description: 'Everything included. Full access, full year — just $4.17/mo.',
    features: ['Full app access', 'Priority features', 'Save 40%', 'Annual billing'],
    trial: false,
    featured: true,
    badge: 'Most Popular',
  },
  {
    name: 'Family Plan',
    price: '$79.99',
    period: 'per year · up to 4 members',
    savings: 'Best value for families',
    description: 'Invite your people. Full access for up to 4 family members on one plan.',
    features: ['Up to 4 members', 'Shared family access', 'Priority features', 'Annual billing'],
    trial: false,
    featured: false,
    badge: 'Best for Families',
  },
];

export function PricingPreview() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-brand-gold-pale/30 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="section-eyebrow mb-3">Bring Your People. The Table Is Set.</p>
          <h2 className="section-title mb-4">We Are Waiting for You</h2>
          <p className="mx-auto max-w-lg font-accent text-base leading-relaxed text-brand-navy/50 sm:text-lg">
            Every plan starts with a 7-day free trial — no charges until you decide.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-brand bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover ${
                plan.featured
                  ? 'border-2 border-brand-burgundy ring-4 ring-brand-burgundy/5 sm:-mt-3 sm:mb-[-12px] sm:pb-10'
                  : 'border border-brand-sand/60'
              }`}
            >
              {/* Featured plan top gradient */}
              {plan.featured && (
                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-brand-burgundy via-brand-gold to-brand-burgundy" />
              )}

              {plan.badge && (
                <span className={`absolute -top-3.5 right-5 inline-flex items-center gap-1.5 rounded-pill px-4 py-1.5 font-ui text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${
                  plan.featured ? 'bg-brand-burgundy shadow-button/20' : 'bg-brand-navy'
                }`}>
                  {plan.featured && <Star className="h-3 w-3 fill-current" />}
                  {plan.badge}
                </span>
              )}

              <h4 className="font-ui text-sm font-bold text-brand-burgundy">{plan.name}</h4>
              <p className="mt-3 font-display text-4xl font-black tracking-tight text-brand-navy">{plan.price}</p>
              <p className="mt-1 font-ui text-xs text-brand-navy/40">{plan.period}</p>
              {plan.savings && (
                <p className="mt-2 inline-flex items-center gap-1 rounded-pill bg-brand-gold-pale/40 px-3 py-1 font-ui text-xs font-semibold text-brand-gold">{plan.savings}</p>
              )}
              <p className="mt-4 font-accent text-sm leading-relaxed text-brand-navy/50">{plan.description}</p>

              {/* Feature list */}
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span className={`grid h-5 w-5 flex-shrink-0 place-items-center rounded-full ${
                      plan.featured ? 'bg-brand-burgundy/10' : 'bg-brand-gold-pale/60'
                    }`}>
                      <Check className={`h-3 w-3 ${plan.featured ? 'text-brand-burgundy' : 'text-brand-gold'}`} strokeWidth={2.5} />
                    </span>
                    <span className="font-ui text-xs text-brand-navy/60">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.trial && (
                <span className="mt-6 inline-block rounded-pill bg-brand-burgundy/8 px-3.5 py-1.5 font-ui text-[10px] font-bold text-brand-burgundy">
                  7-day free trial
                </span>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="#waitlist"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-pill bg-brand-burgundy px-10 py-4 font-ui text-base font-medium uppercase tracking-wider text-white shadow-button transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-burgundy-light hover:shadow-lg"
          >
            Try 7 Days Free
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <div className="mt-6 flex justify-center gap-6 font-ui text-xs text-brand-navy/40">
            <a href="/terms" className="underline-offset-2 hover:text-brand-navy hover:underline transition-colors">Terms of Use</a>
            <span className="text-brand-sand">·</span>
            <a href="/privacy" className="underline-offset-2 hover:text-brand-navy hover:underline transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </section>
  );
}
