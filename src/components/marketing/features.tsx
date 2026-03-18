const features = [
  {
    num: '01',
    icon: '📍',
    iconBg: 'bg-brand-burgundy/10',
    title: 'Plug Into Kosher',
    description: 'Discover kosher gems around you on a live map. Filter by type, distance, price, and certification. Scan kosher labels with your camera.',
    tags: ['Map view', 'Ratings', 'Scanner', 'Filters'],
  },
  {
    num: '02',
    icon: '📅',
    iconBg: 'bg-brand-gold-pale',
    title: 'Jewish Vibes Calendar',
    description: "From Shabbat to showcases, it's all here. Browse holidays and events, RSVP to dinners, stay in rhythm with Jewish life.",
    tags: ['Holidays', 'RSVP', 'Reminders'],
  },
  {
    num: '03',
    icon: '🕯️',
    iconBg: 'bg-brand-burgundy/10',
    title: 'The Simcha Table',
    description: 'For your Jewish celebrations. Find go-to vendors for catering, photography, decor, and music — Shabbat, simchas, weddings, and bar mitzvahs.',
    tags: ['Vendors', 'Reviews', 'Packages'],
  },
  {
    num: '04',
    icon: '✨',
    iconBg: 'bg-brand-navy/5',
    title: 'Daily Nudges',
    description: 'Time to unplug for Shabbat. Torah insights, Yiddish word of the day, Jewish life hacks — small moments, big meaning.',
    tags: ['Torah', 'Yiddish', 'Life hacks'],
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="section-eyebrow mb-3">Everything You Need</p>
          <h2 className="section-title mb-5">
            From Shabbat to Showcases,
            <br className="hidden sm:block" />
            It&apos;s All Here
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.num}
              className="group relative overflow-hidden rounded-brand border border-brand-sand bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              {/* Top accent line on hover */}
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-brand-gold to-brand-burgundy opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Number */}
              <span className="absolute right-5 top-4 font-display text-4xl font-light text-brand-gold-pale">
                {f.num}
              </span>

              {/* Icon */}
              <div className={`mb-4 grid h-12 w-12 place-items-center rounded-brand-sm text-xl ${f.iconBg}`}>
                {f.icon}
              </div>

              <h3 className="font-display text-lg font-bold text-brand-navy">{f.title}</h3>
              <p className="mt-2 font-accent text-sm leading-relaxed text-brand-navy/50">{f.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {f.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-pill border border-brand-sand bg-brand-parchment px-2.5 py-1 font-ui text-[11px] font-semibold text-brand-navy"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
