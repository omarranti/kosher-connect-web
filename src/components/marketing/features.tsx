import { MapPin, CalendarDays, Flame, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  num: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  accentGradient: string;
  title: string;
  description: string;
  tags: string[];
}

const features: Feature[] = [
  {
    num: '01',
    Icon: MapPin,
    iconBg: 'bg-gradient-to-br from-brand-burgundy/15 to-brand-burgundy/5',
    iconColor: 'text-brand-burgundy',
    accentGradient: 'from-brand-burgundy/80 to-brand-burgundy-light/80',
    title: 'Plug Into Kosher',
    description: 'Discover kosher gems around you on a live map. Filter by type, distance, price, and certification. Scan kosher labels with your camera.',
    tags: ['Map view', 'Ratings', 'Scanner', 'Filters'],
  },
  {
    num: '02',
    Icon: CalendarDays,
    iconBg: 'bg-gradient-to-br from-brand-gold-pale to-brand-gold-pale/40',
    iconColor: 'text-brand-gold',
    accentGradient: 'from-brand-gold to-brand-gold-light',
    title: 'Jewish Vibes Calendar',
    description: "From Shabbat to showcases, it's all here. Browse holidays and events, RSVP to dinners, stay in rhythm with Jewish life.",
    tags: ['Holidays', 'RSVP', 'Reminders'],
  },
  {
    num: '03',
    Icon: Flame,
    iconBg: 'bg-gradient-to-br from-brand-burgundy/15 to-brand-burgundy/5',
    iconColor: 'text-brand-burgundy',
    accentGradient: 'from-brand-burgundy/80 to-brand-gold/80',
    title: 'The Simcha Table',
    description: 'For your Jewish celebrations. Find go-to vendors for catering, photography, decor, and music — Shabbat, simchas, weddings, and bar mitzvahs.',
    tags: ['Vendors', 'Reviews', 'Packages'],
  },
  {
    num: '04',
    Icon: Sparkles,
    iconBg: 'bg-gradient-to-br from-brand-navy/8 to-brand-navy/3',
    iconColor: 'text-brand-navy',
    accentGradient: 'from-brand-navy to-brand-navy-light',
    title: 'Daily Nudges',
    description: 'Time to unplug for Shabbat. Torah insights, Yiddish word of the day, Jewish life hacks — small moments, big meaning.',
    tags: ['Torah', 'Yiddish', 'Life hacks'],
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-brand-parchment py-24 sm:py-32">
      {/* Background accents */}
      <div className="pointer-events-none absolute left-0 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-brand-gold-pale/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[200px] w-[200px] translate-x-1/2 rounded-full bg-brand-burgundy/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="section-eyebrow mb-3">Everything You Need</p>
          <h2 className="section-title mb-4">
            From Shabbat to Showcases,
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-brand-gold to-brand-gold-light bg-clip-text text-transparent"> It&apos;s All Here</span>
          </h2>
          <p className="mx-auto max-w-lg font-accent text-base leading-relaxed text-brand-navy/40 sm:text-lg">
            Four pillars of Jewish life, beautifully connected in one app.
          </p>
        </div>

        {/* Bento grid: first card spans 2 cols on desktop */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <div
              key={f.num}
              className={`group relative overflow-hidden rounded-brand border border-brand-sand/60 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                i === 0 ? 'sm:col-span-2 sm:flex sm:items-start sm:gap-10' : ''
              }`}
            >
              {/* Top accent line — gradient on hover */}
              <div className={`absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r ${f.accentGradient} scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100`} />

              {/* Number watermark */}
              <span className={`absolute right-6 top-5 font-display font-light text-brand-gold-pale/50 transition-colors duration-300 group-hover:text-brand-gold-pale ${
                i === 0 ? 'text-7xl' : 'text-5xl'
              }`}>
                {f.num}
              </span>

              {/* Icon */}
              <div className={`mb-5 grid place-items-center rounded-2xl ${f.iconBg} transition-transform duration-300 group-hover:scale-110 ${
                i === 0 ? 'h-16 w-16 sm:mb-0 sm:flex-shrink-0' : 'h-14 w-14'
              }`}>
                <f.Icon className={`${i === 0 ? 'h-7 w-7' : 'h-6 w-6'} ${f.iconColor}`} strokeWidth={1.8} />
              </div>

              <div className={i === 0 ? 'flex-1' : ''}>
                <h3 className={`font-display font-bold text-brand-navy ${i === 0 ? 'text-2xl' : 'text-xl'}`}>{f.title}</h3>
                <p className={`mt-2.5 font-accent leading-relaxed text-brand-navy/50 ${i === 0 ? 'max-w-xl text-base' : 'text-sm'}`}>{f.description}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill border border-brand-sand/60 bg-brand-parchment/60 px-3 py-1 font-ui text-[11px] font-semibold text-brand-navy/60 transition-colors duration-200 group-hover:border-brand-gold-pale group-hover:bg-brand-gold-pale/30 group-hover:text-brand-navy/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
