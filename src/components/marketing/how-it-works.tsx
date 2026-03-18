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
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute -right-40 -top-48 h-[500px] w-[500px] rounded-full bg-brand-gold/8 blur-[120px]" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-[300px] w-[300px] rounded-full bg-brand-burgundy/5 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="section-eyebrow mb-3 !text-brand-gold">How It Works</p>
        <h2 className="font-display text-3xl font-bold text-brand-parchment sm:text-4xl md:text-5xl">
          Three Steps to
          <br />
          Community Vibes
        </h2>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {/* Connecting line (desktop only) */}
          <div className="pointer-events-none absolute left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] top-12 hidden h-px sm:block">
            <div className="h-full w-full border-t-2 border-dashed border-brand-gold/20" />
          </div>

          {steps.map((s) => (
            <div key={s.num} className="relative text-center">
              {/* Step circle */}
              <div className="relative mx-auto mb-6">
                <div className="mx-auto grid h-[88px] w-[88px] place-items-center rounded-full border-2 border-brand-gold/30 bg-brand-gold/5 backdrop-blur-sm">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-b from-brand-gold/20 to-brand-gold/5">
                    <s.Icon className="h-6 w-6 text-brand-gold" strokeWidth={1.8} />
                  </div>
                </div>
                {/* Step number badge */}
                <span className="absolute -right-1 -top-1 grid h-7 w-7 place-items-center rounded-full bg-brand-gold font-ui text-xs font-bold text-brand-navy shadow-gold">
                  {s.num}
                </span>
              </div>

              <h3 className="font-display text-lg font-semibold text-brand-parchment">{s.title}</h3>
              <p className="mx-auto mt-2.5 max-w-[260px] font-accent text-sm leading-relaxed text-white/50">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
