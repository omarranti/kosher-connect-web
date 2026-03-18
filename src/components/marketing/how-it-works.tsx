import { UserPlus, Smartphone, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Step {
  num: number;
  Icon: LucideIcon;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    num: 1,
    Icon: UserPlus,
    title: 'Join the Waitlist',
    description: "Sign up below and be the first to know when we launch on the App Store.",
  },
  {
    num: 2,
    Icon: Smartphone,
    title: 'Get Early Access',
    description: "We'll invite you to the beta via TestFlight so you can explore before everyone else.",
  },
  {
    num: 3,
    Icon: MapPin,
    title: 'Plug Into Your Community',
    description: "Discover what's popping around you — kosher spots, events, people, and vibes.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 sm:py-32">
      {/* Background accents */}
      <div className="pointer-events-none absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full bg-brand-gold/8 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-burgundy/5 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="section-eyebrow mb-3 !text-brand-gold">How It Works</p>
        <h2 className="font-display text-3xl font-bold text-brand-parchment sm:text-4xl md:text-5xl">
          Three Steps to
          <br />
          <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent">Community Vibes</span>
        </h2>

        <div className="relative mt-20 grid gap-10 sm:grid-cols-3 sm:gap-6">
          {/* Connecting line (desktop only) */}
          <div className="pointer-events-none absolute left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] top-[44px] hidden sm:block">
            <div className="h-[2px] w-full bg-gradient-to-r from-brand-gold/30 via-brand-gold/15 to-brand-gold/30" />
          </div>

          {steps.map((s) => (
            <div key={s.num} className="group relative text-center">
              {/* Step circle with gradient ring */}
              <div className="relative mx-auto mb-8">
                {/* Outer glow ring */}
                <div className="absolute -inset-2 mx-auto rounded-full bg-gradient-to-b from-brand-gold/20 to-transparent opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative mx-auto grid h-[88px] w-[88px] place-items-center rounded-full border-2 border-brand-gold/20 bg-brand-navy-deep/80 backdrop-blur-sm transition-all duration-300 group-hover:border-brand-gold/40">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-brand-gold/15 to-brand-gold/5 transition-transform duration-300 group-hover:scale-110">
                    <s.Icon className="h-6 w-6 text-brand-gold" strokeWidth={1.8} />
                  </div>
                </div>
                {/* Step number badge */}
                <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-brand-gold to-brand-gold-light font-ui text-xs font-bold text-brand-navy shadow-gold">
                  {s.num}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-brand-parchment">{s.title}</h3>
              <p className="mx-auto mt-3 max-w-[260px] font-accent text-sm leading-relaxed text-white/40">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
