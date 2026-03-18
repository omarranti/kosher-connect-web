import { LogoIcon } from './logo-svg';

export default function BrandKitPage() {
  return (
    <div className="brand-kit">
      {/* Cover */}
      <header className="cover">
        <div className="cover-inner">
          <div className="cover-eyebrow">Official Brand Guidelines</div>
          <div className="cover-logo">
            <LogoIcon variant="dark" />
          </div>
          <div className="cover-wordmark">
            <span className="k">KOSHER</span> <span className="c">Connect</span>
          </div>
          <div className="cover-tagline">Your Jewish Community Hub</div>
          <div className="cover-meta">Brand Kit v2.0 · Heritage Luxe · March 2026</div>
        </div>
      </header>

      {/* 01 — Logo System */}
      <section>
        <div className="container">
          <div className="sec-number">01</div>
          <div className="sec-label">Logo System</div>
          <h2 className="sec-title">Primary Mark</h2>
          <p className="sec-desc">
            The menorah icon paired with the Bodoni + Crimson wordmark. The mark represents warmth (golden flames), tradition (menorah), and community (connecting arcs at the base).
          </p>

          <div className="logo-grid">
            <div className="logo-card light">
              <div className="card-env" style={{ color: 'var(--text-light)' }}>On White</div>
              <div className="lockup">
                <LogoIcon variant="light" />
                <div className="lockup-text">
                  <div className="wm"><span className="k" style={{ color: 'var(--navy)' }}>KOSHER</span> <span className="c" style={{ color: 'var(--gold)' }}>Connect</span></div>
                  <div className="tl" style={{ color: 'var(--text-med)' }}>Your Jewish Community Hub</div>
                </div>
              </div>
            </div>
            <div className="logo-card dark">
              <div className="card-env" style={{ color: 'rgba(255,255,255,0.35)' }}>On Dark</div>
              <div className="lockup">
                <LogoIcon variant="dark" />
                <div className="lockup-text">
                  <div className="wm"><span className="k" style={{ color: '#FFFFFF' }}>KOSHER</span> <span className="c" style={{ color: 'var(--gold)' }}>Connect</span></div>
                  <div className="tl" style={{ color: 'rgba(255,255,255,0.65)' }}>Your Jewish Community Hub</div>
                </div>
              </div>
            </div>
            <div className="logo-card gold-bg">
              <div className="card-env" style={{ color: 'rgba(27,58,92,0.35)' }}>On Gold</div>
              <div className="lockup">
                <LogoIcon variant="gold-bg" />
                <div className="lockup-text">
                  <div className="wm"><span className="k" style={{ color: 'var(--navy)' }}>KOSHER</span> <span className="c" style={{ color: '#FFFFFF' }}>Connect</span></div>
                  <div className="tl" style={{ color: 'rgba(27,58,92,0.7)' }}>Your Jewish Community Hub</div>
                </div>
              </div>
            </div>
          </div>

          <div className="horiz-grid">
            <div className="horiz-card light">
              <LogoIcon variant="light" />
              <div>
                <div className="hwm"><span className="k" style={{ color: 'var(--navy)' }}>KOSHER</span> <span className="c" style={{ color: 'var(--gold)' }}>Connect</span></div>
                <div className="htl" style={{ color: 'var(--text-med)' }}>Your Jewish Community Hub</div>
              </div>
            </div>
            <div className="horiz-card dark">
              <LogoIcon variant="dark" />
              <div>
                <div className="hwm"><span className="k" style={{ color: '#FFF' }}>KOSHER</span> <span className="c" style={{ color: 'var(--gold)' }}>Connect</span></div>
                <div className="htl" style={{ color: 'rgba(255,255,255,0.65)' }}>Your Jewish Community Hub</div>
              </div>
            </div>
          </div>

          <div className="sec-label" style={{ marginTop: 48, marginBottom: 20 }}>Icon Mark Only</div>
          <div className="icon-only-row">
            <div className="icon-only-card" style={{ background: 'var(--white)', border: '1px solid rgba(197,165,90,0.12)', borderRadius: 20 }}>
              <LogoIcon variant="light" />
              <div className="icon-only-label" style={{ color: 'var(--text-med)' }}>App Icon</div>
            </div>
            <div className="icon-only-card" style={{ background: 'var(--navy)', borderRadius: 20 }}>
              <LogoIcon variant="dark" />
              <div className="icon-only-label" style={{ color: 'rgba(255,255,255,0.4)' }}>Favicon</div>
            </div>
            <div className="icon-only-card" style={{ background: 'var(--burgundy)', borderRadius: 20 }}>
              <LogoIcon variant="dark" />
              <div className="icon-only-label" style={{ color: 'rgba(255,255,255,0.4)' }}>Social</div>
            </div>
            <div className="icon-only-card" style={{ background: 'linear-gradient(135deg,var(--gold),var(--gold-light))', borderRadius: 20 }}>
              <LogoIcon variant="gold-bg" />
              <div className="icon-only-label" style={{ color: 'var(--navy)' }}>Premium</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 02 — Color System */}
      <section>
        <div className="container">
          <div className="sec-number">02</div>
          <div className="sec-label">Color System</div>
          <h2 className="sec-title">Palette</h2>
          <p className="sec-desc">
            Three primary anchors — navy for authority, gold for warmth, burgundy for action — supported by a family of creams, sands, and semantic colors.
          </p>
          <div className="sec-label" style={{ marginBottom: 16 }}>Primary</div>
          <div className="color-primary-row">
            <div className="color-card"><div className="color-swatch color-swatch-big" style={{ background: 'var(--navy)' }} /><div className="color-info"><div className="color-name">Royal Navy</div><div className="color-hex">#1B3A5C</div><div className="color-role">Primary brand color — headers, navigation, body text, authority</div></div></div>
            <div className="color-card"><div className="color-swatch color-swatch-big" style={{ background: 'var(--gold)' }} /><div className="color-info"><div className="color-name">Warm Gold</div><div className="color-hex">#C5A55A</div><div className="color-role">Accent — highlights, icons, &quot;Connect&quot; wordmark, premium elements</div></div></div>
            <div className="color-card"><div className="color-swatch color-swatch-big" style={{ background: 'var(--burgundy)' }} /><div className="color-info"><div className="color-name">Deep Burgundy</div><div className="color-hex">#8B2252</div><div className="color-role">Action — primary CTAs, active states</div></div></div>
          </div>
          <div className="sec-label" style={{ marginTop: 40, marginBottom: 16 }}>Neutrals &amp; Backgrounds</div>
          <div className="color-secondary-row">
            <div className="color-card"><div className="color-swatch" style={{ background: 'var(--cream)' }} /><div className="color-info"><div className="color-name">Cream</div><div className="color-hex">#FDF6EC</div><div className="color-role">Page background</div></div></div>
            <div className="color-card"><div className="color-swatch" style={{ background: 'var(--cream-deep)' }} /><div className="color-info"><div className="color-name">Warm Sand</div><div className="color-hex">#F5E6D0</div><div className="color-role">Card surfaces, nudges</div></div></div>
            <div className="color-card"><div className="color-swatch" style={{ background: 'var(--parchment)' }} /><div className="color-info"><div className="color-name">Parchment</div><div className="color-hex">#F8F0E3</div><div className="color-role">Subtle elevation</div></div></div>
            <div className="color-card"><div className="color-swatch" style={{ background: 'var(--gold-pale)' }} /><div className="color-info"><div className="color-name">Pale Gold</div><div className="color-hex">#F0E4C8</div><div className="color-role">Tags, pills, badges</div></div></div>
            <div className="color-card"><div className="color-swatch" style={{ background: 'var(--white)' }} /><div className="color-info"><div className="color-name">White</div><div className="color-hex">#FFFFFF</div><div className="color-role">Cards, dialogs</div></div></div>
          </div>
          <div className="sec-label" style={{ marginTop: 40, marginBottom: 16 }}>Semantic</div>
          <div className="color-semantic-row">
            <div className="color-card"><div className="color-swatch" style={{ background: 'var(--red)' }} /><div className="color-info"><div className="color-name">Accent Red</div><div className="color-hex">#C4384B</div><div className="color-role">Likes, alerts, hot tags</div></div></div>
            <div className="color-card"><div className="color-swatch" style={{ background: 'var(--green)' }} /><div className="color-info"><div className="color-name">Sage Green</div><div className="color-hex">#4A9B6E</div><div className="color-role">Open status, success</div></div></div>
            <div className="color-card"><div className="color-swatch" style={{ background: 'var(--navy-deep)' }} /><div className="color-info"><div className="color-name">Navy Deep</div><div className="color-hex">#122840</div><div className="color-role">Dark mode, overlays</div></div></div>
            <div className="color-card"><div className="color-swatch" style={{ background: 'var(--burgundy-light)' }} /><div className="color-info"><div className="color-name">Burgundy Light</div><div className="color-hex">#A83068</div><div className="color-role">Hover/active CTA state</div></div></div>
          </div>
          <div className="sec-label" style={{ marginTop: 56, marginBottom: 16 }}>Approved Pairings</div>
          <div className="pair-grid">
            <div className="pair-card" style={{ background: 'var(--navy)' }}>
              <div className="pair-label" style={{ color: 'rgba(255,255,255,0.4)' }}>Navy + Gold</div>
              <div className="pair-text" style={{ color: 'var(--gold)' }}>Heritage</div>
            </div>
            <div className="pair-card" style={{ background: 'var(--cream-deep)' }}>
              <div className="pair-label" style={{ color: 'var(--text-light)' }}>Sand + Navy</div>
              <div className="pair-text" style={{ color: 'var(--navy)' }}>Community</div>
            </div>
            <div className="pair-card" style={{ background: 'var(--burgundy)' }}>
              <div className="pair-label" style={{ color: 'rgba(255,255,255,0.4)' }}>Burgundy + White</div>
              <div className="pair-text" style={{ color: '#FFFFFF' }}>Action</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 03 — Typography */}
      <section>
        <div className="container">
          <div className="sec-number">03</div>
          <div className="sec-label">Typography</div>
          <h2 className="sec-title">Type System</h2>
          <p className="sec-desc">
            A three-font hierarchy: Bodoni Moda commands attention, Crimson Pro adds warmth and editorial personality, and Josefin Sans provides clean utility for UI and labels.
          </p>
          <div className="type-grid">
            <div className="type-card">
              <div className="type-role">Display</div>
              <div className="type-sample" style={{ fontFamily: "'Bodoni Moda',serif", fontSize: '48px', fontWeight: 700, lineHeight: 1.05 }}>Bodoni Moda</div>
              <div className="type-meta">Screen titles, feature names, marketing headlines. The extreme thick/thin contrast gives every headline a fashion-editorial gravitas.</div>
              <div className="type-weights">
                <span className="tw" style={{ fontFamily: "'Bodoni Moda'", fontWeight: 500 }}>Medium</span>
                <span className="tw" style={{ fontFamily: "'Bodoni Moda'", fontWeight: 600 }}>SemiBold</span>
                <span className="tw" style={{ fontFamily: "'Bodoni Moda'", fontWeight: 700 }}>Bold</span>
                <span className="tw" style={{ fontFamily: "'Bodoni Moda'", fontWeight: 900 }}>Black</span>
              </div>
            </div>
            <div className="type-card">
              <div className="type-role">Accent / Body</div>
              <div className="type-sample" style={{ fontFamily: "'Crimson Pro',serif", fontSize: '44px', fontWeight: 400, fontStyle: 'italic', lineHeight: 1.1 }}>Crimson Pro</div>
              <div className="type-meta">Taglines, &quot;Connect&quot; in the logo, body copy, quotes, descriptions. Italic weights feel handwritten and personal.</div>
              <div className="type-weights">
                <span className="tw" style={{ fontFamily: "'Crimson Pro'", fontWeight: 300, fontStyle: 'italic' }}>Light Italic</span>
                <span className="tw" style={{ fontFamily: "'Crimson Pro'", fontWeight: 400 }}>Regular</span>
                <span className="tw" style={{ fontFamily: "'Crimson Pro'", fontWeight: 600, fontStyle: 'italic' }}>SemiBold Italic</span>
                <span className="tw" style={{ fontFamily: "'Crimson Pro'", fontWeight: 700 }}>Bold</span>
              </div>
            </div>
            <div className="type-card">
              <div className="type-role">UI / Labels</div>
              <div className="type-sample" style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '40px', fontWeight: 400, lineHeight: 1.15 }}>Josefin Sans</div>
              <div className="type-meta">Buttons, navigation, captions, tags, meta information. Geometric letterforms with subtle vintage elegance.</div>
              <div className="type-weights">
                <span className="tw" style={{ fontFamily: "'Josefin Sans'", fontWeight: 200 }}>ExtraLight</span>
                <span className="tw" style={{ fontFamily: "'Josefin Sans'", fontWeight: 300 }}>Light</span>
                <span className="tw" style={{ fontFamily: "'Josefin Sans'", fontWeight: 400 }}>Regular</span>
                <span className="tw" style={{ fontFamily: "'Josefin Sans'", fontWeight: 600 }}>SemiBold</span>
              </div>
            </div>
          </div>
          <div className="scale-card">
            <div className="type-role" style={{ marginBottom: 24 }}>Type Scale</div>
            <div className="scale-row">
              <span className="scale-label">H1 · 36px</span>
              <span style={{ fontFamily: "'Bodoni Moda',serif", fontSize: '36px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.1 }}>Daily Nudges</span>
            </div>
            <div className="scale-row">
              <span className="scale-label">H2 · 28px</span>
              <span style={{ fontFamily: "'Bodoni Moda',serif", fontSize: '28px', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.15 }}>The Simcha Table</span>
            </div>
            <div className="scale-row">
              <span className="scale-label">H3 · 20px</span>
              <span style={{ fontFamily: "'Bodoni Moda',serif", fontSize: '20px', fontWeight: 600, color: 'var(--navy)' }}>Events You&apos;ll Wanna Hit</span>
            </div>
            <div className="scale-row">
              <span className="scale-label">Subtitle · 17px</span>
              <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: '17px', fontWeight: 400, fontStyle: 'italic', color: 'var(--text-med)' }}>From Shabbat to simchas, find your go-to vendors</span>
            </div>
            <div className="scale-row">
              <span className="scale-label">Body · 15px</span>
              <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: '15px', fontWeight: 400, color: 'var(--text-body)' }}>Community Vibes Inside — discover kosher restaurants, events, and celebrations near you.</span>
            </div>
            <div className="scale-row">
              <span className="scale-label">UI · 13px</span>
              <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '13px', fontWeight: 500, color: 'var(--text-med)', letterSpacing: '1px', textTransform: 'uppercase' }}>Search This Area</span>
            </div>
            <div className="scale-row">
              <span className="scale-label">Caption · 11px</span>
              <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '11px', fontWeight: 400, color: 'var(--text-light)', letterSpacing: '0.5px' }}>0.8 miles · Open · ★ 5.0</span>
            </div>
            <div className="scale-row">
              <span className="scale-label">Eyebrow · 9px</span>
              <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: '9px', fontWeight: 300, color: 'var(--gold)', letterSpacing: '4px', textTransform: 'uppercase' }}>Your Jewish Community Hub</span>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 04 — Components */}
      <section>
        <div className="container">
          <div className="sec-number">04</div>
          <div className="sec-label">Components</div>
          <h2 className="sec-title">Buttons, Tags &amp; Cards</h2>
          <p className="sec-desc">A component library built with pill shapes, generous letter-spacing, and the Heritage Luxe font hierarchy throughout.</p>
          <div className="sec-label" style={{ marginBottom: 16 }}>Buttons</div>
          <div className="btn-row">
            <button type="button" className="btn btn-burgundy">Try 7 Days Free</button>
            <button type="button" className="btn btn-navy">Search This Area</button>
            <button type="button" className="btn btn-gold">Scan Kosher Label</button>
            <button type="button" className="btn btn-outline">View All</button>
            <button type="button" className="btn btn-ghost btn-sm">Shabbat</button>
            <button type="button" className="btn btn-ghost btn-sm">Wedding</button>
            <button type="button" className="btn btn-ghost btn-sm">Simcha</button>
          </div>
          <div className="sec-label" style={{ marginBottom: 16 }}>Tags &amp; Badges</div>
          <div className="tag-row">
            <span className="tag" style={{ background: 'var(--green-soft)', color: 'var(--green)' }}>● Open</span>
            <span className="tag" style={{ background: 'var(--gold-pale)', color: 'var(--navy)' }}>🔥 This Week</span>
            <span className="tag" style={{ background: 'var(--burgundy-soft)', color: 'var(--burgundy)' }}>🍽 Food</span>
            <span className="tag" style={{ background: 'rgba(27,58,92,0.06)', color: 'var(--navy)' }}>🎉 Event</span>
            <span className="tag" style={{ background: 'var(--gold)', color: '#FFF' }}>⭐ Best Value</span>
            <span className="tag" style={{ background: 'rgba(196,56,75,0.08)', color: 'var(--red)' }}>7 days trial</span>
            <span className="tag" style={{ background: 'var(--navy)', color: 'var(--gold)' }}>🎓 Workshops</span>
          </div>
          <div className="sec-label" style={{ marginBottom: 16 }}>Card Patterns</div>
          <div className="card-demo-grid">
            <div className="demo-card">
              <div className="demo-card-img">
                <svg viewBox="0 0 40 40" fill="none"><rect x="8" y="12" width="24" height="16" rx="4" stroke="#1B3A5C" strokeWidth="1.5" /><circle cx="16" cy="20" r="3" stroke="#C5A55A" strokeWidth="1.5" /></svg>
              </div>
              <div className="demo-card-body">
                <div className="demo-card-title">Dinner Rachel&apos;s</div>
                <div className="demo-card-sub">The everything bagel reimagined</div>
                <div className="demo-card-meta">★ 5.0 · 0.8 miles · <span style={{ color: 'var(--green)' }}>Open</span></div>
              </div>
            </div>
            <div className="demo-card">
              <div className="demo-card-img" style={{ background: 'linear-gradient(135deg, var(--navy), var(--navy-light))' }}>
                <svg viewBox="0 0 40 40" fill="none"><rect x="10" y="8" width="20" height="24" rx="3" stroke="#C5A55A" strokeWidth="1.5" /><path d="M10 16 L30 16" stroke="#C5A55A" strokeWidth="1.5" /></svg>
              </div>
              <div className="demo-card-body">
                <div className="demo-card-title">Challah Baking Workshop</div>
                <div className="demo-card-sub">Sunday · 2:00 PM</div>
                <div className="demo-card-meta">🎉 Event · 1.2 miles</div>
              </div>
            </div>
            <div className="demo-card">
              <div className="demo-card-img" style={{ background: 'linear-gradient(135deg, var(--gold-pale), var(--cream-deep))' }}>
                <svg viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="10" stroke="#1B3A5C" strokeWidth="1.5" /><path d="M16 20 L24 20" stroke="#1B3A5C" strokeWidth="1.5" strokeLinecap="round" /><path d="M20 16 L20 24" stroke="#1B3A5C" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
              <div className="demo-card-body">
                <div className="demo-card-title">Kosh Catering</div>
                <div className="demo-card-sub">Full-service for your simcha</div>
                <div className="demo-card-meta">★ 5.0 · All included · 0.8 miles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 05 — Iconography */}
      <section>
        <div className="container">
          <div className="sec-number">05</div>
          <div className="sec-label">Iconography</div>
          <h2 className="sec-title">Icon System</h2>
          <p className="sec-desc">Clean 2px line icons with rounded caps. Gold accents mark focal points. Jewish motifs integrated subtly — menorah, challah, candles.</p>
          <div className="icon-showcase">
            <div className="icon-tile">
              <svg viewBox="0 0 36 36" fill="none"><rect x="34.5" y="8" width="3" height="14" rx="1.5" fill="#1B3A5C" transform="translate(-16,0)" /><path d="M12 12 C12 12 15 13 18.5 17" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /><path d="M24 12 C24 12 21 13 17.5 17" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="10.5" r="1.8" fill="#C5A55A" /><circle cx="18" cy="6" r="1.8" fill="#C5A55A" /><circle cx="24" cy="10.5" r="1.8" fill="#C5A55A" /><path d="M14 22 L22 22 L21 26 L15 26 Z" fill="#1B3A5C" /></svg>
              <div className="icon-tile-label">Home</div>
            </div>
            <div className="icon-tile">
              <svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="16" r="8" stroke="#1B3A5C" strokeWidth="1.8" fill="none" /><circle cx="18" cy="16" r="2.5" fill="#C5A55A" /><path d="M18 24 L18 30" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /><path d="M13 30 L23 30" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /></svg>
              <div className="icon-tile-label">Hotspots</div>
            </div>
            <div className="icon-tile">
              <svg viewBox="0 0 36 36" fill="none"><rect x="8" y="6" width="20" height="24" rx="3" stroke="#1B3A5C" strokeWidth="1.8" fill="none" /><path d="M8 14 L28 14" stroke="#1B3A5C" strokeWidth="1.8" /><circle cx="14" cy="10" r="1.5" fill="#C5A55A" /><circle cx="22" cy="10" r="1.5" fill="#C5A55A" /><rect x="12" y="18" width="4" height="4" rx="1" fill="#C5A55A" /></svg>
              <div className="icon-tile-label">Daily</div>
            </div>
            <div className="icon-tile">
              <svg viewBox="0 0 36 36" fill="none"><rect x="8" y="10" width="20" height="18" rx="3" stroke="#1B3A5C" strokeWidth="1.8" fill="none" /><path d="M8 16 L28 16" stroke="#1B3A5C" strokeWidth="1.8" /><path d="M14 6 L14 10" stroke="#C5A55A" strokeWidth="1.8" strokeLinecap="round" /><path d="M22 6 L22 10" stroke="#C5A55A" strokeWidth="1.8" strokeLinecap="round" /><circle cx="14" cy="22" r="2" fill="#C5A55A" /></svg>
              <div className="icon-tile-label">Events</div>
            </div>
            <div className="icon-tile">
              <svg viewBox="0 0 36 36" fill="none"><circle cx="18" cy="13" r="5" stroke="#1B3A5C" strokeWidth="1.8" fill="none" /><path d="M9 30 C9 23 12 20 18 20 C24 20 27 23 27 30" stroke="#1B3A5C" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>
              <div className="icon-tile-label">Profile</div>
            </div>
            <div className="icon-tile">
              <svg viewBox="0 0 36 36" fill="none"><path d="M18 28 C13 23 6 19 6 13 C6 9 9 5 13 5 C16 5 18 7 18 7 C18 7 20 5 23 5 C27 5 30 9 30 13 C30 19 23 23 18 28Z" stroke="#C4384B" strokeWidth="1.8" fill="none" /></svg>
              <div className="icon-tile-label">Like</div>
            </div>
            <div className="icon-tile">
              <svg viewBox="0 0 36 36" fill="none"><path d="M7 18 L16 28 L16 23 C24 23 28 26 30 32 C30 20 24 16 16 16 L16 11 Z" stroke="#1B3A5C" strokeWidth="1.8" fill="none" strokeLinejoin="round" /></svg>
              <div className="icon-tile-label">Share</div>
            </div>
            <div className="icon-tile">
              <svg viewBox="0 0 36 36" fill="none"><path d="M10 4 L26 4 L26 32 L18 24 L10 32 Z" stroke="#1B3A5C" strokeWidth="1.8" fill="none" strokeLinejoin="round" /></svg>
              <div className="icon-tile-label">Save</div>
            </div>
            <div className="icon-tile">
              <svg viewBox="0 0 36 36" fill="none"><path d="M6 12 L6 6 L12 6" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /><path d="M24 6 L30 6 L30 12" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /><path d="M30 24 L30 30 L24 30" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /><path d="M12 30 L6 30 L6 24" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /><rect x="12" y="12" width="12" height="12" rx="2" stroke="#C5A55A" strokeWidth="1.2" fill="none" /></svg>
              <div className="icon-tile-label">Scan</div>
            </div>
            <div className="icon-tile">
              <svg viewBox="0 0 36 36" fill="none"><path d="M6 10 L30 10" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /><path d="M10 18 L26 18" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /><path d="M14 26 L22 26" stroke="#1B3A5C" strokeWidth="1.8" strokeLinecap="round" /><circle cx="22" cy="10" r="2.5" fill="#C5A55A" /><circle cx="14" cy="18" r="2.5" fill="#C5A55A" /></svg>
              <div className="icon-tile-label">Filter</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 06 — Motion */}
      <section>
        <div className="container">
          <div className="sec-number">06</div>
          <div className="sec-label">Motion</div>
          <h2 className="sec-title">Animation Principles</h2>
          <p className="sec-desc">Movement should feel like candlelight — gentle, warm, and alive. Never mechanical or jarring. Three core timing curves cover all interactions.</p>
          <div className="motion-grid">
            <div className="motion-card">
              <div className="motion-demo motion-ease" />
              <div className="motion-name">Gentle Ease</div>
              <div className="motion-spec">ease-in-out · 300–400ms</div>
              <div style={{ fontFamily: "'Crimson Pro'", fontSize: 13, fontStyle: 'italic', color: 'var(--text-med)', marginTop: 8 }}>Hover states, card lifts, fades</div>
            </div>
            <div className="motion-card">
              <div className="motion-demo motion-spring" />
              <div className="motion-name">Spring Pop</div>
              <div className="motion-spec">cubic-bezier(0.34, 1.56, 0.64, 1) · 200ms</div>
              <div style={{ fontFamily: "'Crimson Pro'", fontSize: 13, fontStyle: 'italic', color: 'var(--text-med)', marginTop: 8 }}>Button taps, like hearts, toasts</div>
            </div>
            <div className="motion-card">
              <div className="motion-demo motion-fade" />
              <div className="motion-name">Soft Breathe</div>
              <div className="motion-spec">ease · 800–1200ms</div>
              <div style={{ fontFamily: "'Crimson Pro'", fontSize: 13, fontStyle: 'italic', color: 'var(--text-med)', marginTop: 8 }}>Loading shimmer, skeleton states, confetti</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 07 — Voice & Tone */}
      <section>
        <div className="container">
          <div className="sec-number">07</div>
          <div className="sec-label">Voice &amp; Tone</div>
          <h2 className="sec-title">Brand Personality</h2>
          <p className="sec-desc">We speak like your most connected friend in the community — someone who knows every great restaurant, every upcoming event, and always has room at the table.</p>
          <div className="voice-grid">
            <div className="voice-card" style={{ background: 'var(--navy)', color: '#FFF' }}>
              <div className="voice-trait" style={{ color: 'rgba(255,255,255,0.4)' }}>Warm &amp; Inviting</div>
              <div className="voice-quote">&quot;What&apos;s up, friends? Here&apos;s what&apos;s popping in your neighborhood.&quot;</div>
            </div>
            <div className="voice-card" style={{ background: 'linear-gradient(135deg,var(--gold),var(--gold-light))', color: 'var(--navy)' }}>
              <div className="voice-trait" style={{ color: 'rgba(27,58,92,0.4)' }}>Community-First</div>
              <div className="voice-quote">&quot;Bring your people. The table is set.&quot;</div>
            </div>
            <div className="voice-card" style={{ background: 'var(--cream-deep)', color: 'var(--navy)' }}>
              <div className="voice-trait" style={{ color: 'var(--text-light)' }}>Playfully Jewish</div>
              <div className="voice-quote">&quot;Oy, so many choices! Zoom in to get picky.&quot;</div>
            </div>
            <div className="voice-card" style={{ background: 'var(--burgundy)', color: '#FFF' }}>
              <div className="voice-trait" style={{ color: 'rgba(255,255,255,0.4)' }}>Action-Oriented</div>
              <div className="voice-quote">&quot;You&apos;re 1 step away from Kosher magic.&quot;</div>
            </div>
            <div className="voice-card" style={{ background: 'var(--white)', color: 'var(--navy)', border: '1px solid rgba(197,165,90,0.12)' }}>
              <div className="voice-trait" style={{ color: 'var(--gold)' }}>Celebratory</div>
              <div className="voice-quote">&quot;You&apos;re in. Let&apos;s welcome Shabbat together.&quot;</div>
            </div>
            <div className="voice-card" style={{ background: 'var(--navy-deep)', color: '#FFF' }}>
              <div className="voice-trait" style={{ color: 'rgba(255,255,255,0.3)' }}>Calm &amp; Grounding</div>
              <div className="voice-quote">&quot;Time to unplug for Shabbat.&quot;</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 08 — Guidelines */}
      <section>
        <div className="container">
          <div className="sec-number">08</div>
          <div className="sec-label">Guidelines</div>
          <h2 className="sec-title">Do&apos;s &amp; Don&apos;ts</h2>
          <p className="sec-desc">Rules that protect the brand&apos;s warm, premium, community-centered personality across every touchpoint.</p>
          <div className="dodont-grid">
            <div className="do-card">
              <h4>✓ Do</h4>
              <ul className="rule-list">
                <li><span className="rule-dot" style={{ background: 'var(--green)' }} />Use Bodoni Moda for emotional, aspirational headlines</li>
                <li><span className="rule-dot" style={{ background: 'var(--green)' }} />Pair Crimson Pro italic for warm subtitles and body text</li>
                <li><span className="rule-dot" style={{ background: 'var(--green)' }} />Mix Hebrew and English naturally in content</li>
                <li><span className="rule-dot" style={{ background: 'var(--green)' }} />Use warm, golden-hour photography with candlelight</li>
                <li><span className="rule-dot" style={{ background: 'var(--green)' }} />Keep rounded corners consistent (16–20px)</li>
                <li><span className="rule-dot" style={{ background: 'var(--green)' }} />Apply the 60/25/15 color ratio (navy/gold/burgundy)</li>
                <li><span className="rule-dot" style={{ background: 'var(--green)' }} />Use confetti/celebration particles for festive moments</li>
                <li><span className="rule-dot" style={{ background: 'var(--green)' }} />Maintain generous spacing — let elements breathe</li>
              </ul>
            </div>
            <div className="dont-card">
              <h4>✗ Don&apos;t</h4>
              <ul className="rule-list">
                <li><span className="rule-dot" style={{ background: 'var(--red)' }} />Use sharp corners or boxy, rigid layouts</li>
                <li><span className="rule-dot" style={{ background: 'var(--red)' }} />Use cold blues, pure grays, or neon accent colors</li>
                <li><span className="rule-dot" style={{ background: 'var(--red)' }} />Stretch, rotate, recolor, or apply effects to the logo</li>
                <li><span className="rule-dot" style={{ background: 'var(--red)' }} />Use more than the three brand fonts on any screen</li>
                <li><span className="rule-dot" style={{ background: 'var(--red)' }} />Place gold text on cream backgrounds (low contrast)</li>
                <li><span className="rule-dot" style={{ background: 'var(--red)' }} />Use clinical, corporate, or overly formal language</li>
                <li><span className="rule-dot" style={{ background: 'var(--red)' }} />Use stock photography that feels staged or generic</li>
                <li><span className="rule-dot" style={{ background: 'var(--red)' }} />Place the logo on busy backgrounds without an overlay</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 09 — Spacing */}
      <section>
        <div className="container">
          <div className="sec-number">09</div>
          <div className="sec-label">Spacing &amp; Layout</div>
          <h2 className="sec-title">Spatial System</h2>
          <p className="sec-desc">An 8px base grid ensures consistent rhythm. Every margin, padding, and gap should be a multiple of 8. This creates a calm, breathable hierarchy that matches the Heritage Luxe personality.</p>
          <div className="spacing-grid">
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 40, border: '1px solid rgba(0,0,0,0.04)' }}>
              <div className="type-role" style={{ marginBottom: 24 }}>Spacing Scale (8px base)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  { size: 4, label: 'xs — icon gaps, inline spacing' },
                  { size: 8, label: 'sm — tight spacing, tag padding' },
                  { size: 16, label: 'md — card padding, component gaps' },
                  { size: 24, label: 'lg — section gaps, grid gutters' },
                  { size: 32, label: 'xl — card internal, modal padding' },
                  { size: 48, label: '2xl — section margins' },
                  { size: 96, label: '3xl — page section padding' },
                ].map(({ size, label }) => (
                  <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: Math.min(size, 32), height: size === 48 || size === 96 ? 20 : Math.min(size, 32), background: 'var(--gold)', borderRadius: size <= 8 ? size / 2 : 4, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Josefin Sans'", fontSize: 12, color: 'var(--text-med)', width: 50 }}>{size}px</span>
                    <span style={{ fontFamily: "'Crimson Pro'", fontSize: 14, fontStyle: 'italic', color: 'var(--text-light)' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ background: 'var(--white)', borderRadius: 20, padding: 40, border: '1px solid rgba(0,0,0,0.04)' }}>
                <div className="type-role" style={{ marginBottom: 20 }}>Border Radius</div>
                <div style={{ display: 'flex', gap: 20, alignItems: 'flex-end' }}>
                  {[
                    { r: 8, name: 'Inputs' },
                    { r: 16, name: 'Cards' },
                    { r: 20, name: 'Panels' },
                    { r: '50%', name: 'Pills, Avatars' },
                  ].map(({ r, name }) => (
                    <div key={name} style={{ textAlign: 'center' }}>
                      <div style={{ width: 48, height: 48, background: 'var(--gold-pale)', borderRadius: typeof r === 'number' ? r : 24, margin: '0 auto 8px' }} />
                      <span style={{ fontSize: 11, color: 'var(--text-light)' }}>{typeof r === 'number' ? `${r}px` : 'Full'}</span><br /><span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'var(--white)', borderRadius: 20, padding: 40, border: '1px solid rgba(0,0,0,0.04)' }}>
                <div className="type-role" style={{ marginBottom: 20 }}>Responsive Breakpoints</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {['Mobile', 'Tablet', 'Desktop', 'Wide'].map((name, i) => (
                    <div key={name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 3 ? '1px solid rgba(0,0,0,0.04)' : undefined }}>
                      <span style={{ fontFamily: "'Josefin Sans'", fontSize: 12, fontWeight: 500, color: 'var(--navy)' }}>{name}</span>
                      <span style={{ fontFamily: "'Josefin Sans'", fontSize: 12, color: 'var(--text-light)' }}>{[375, 768, 1024, 1440][i]}px</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 10 — Accessibility */}
      <section>
        <div className="container">
          <div className="sec-number">10</div>
          <div className="sec-label">Accessibility</div>
          <h2 className="sec-title">WCAG AA Compliance</h2>
          <p className="sec-desc">Every color pairing must meet minimum 4.5:1 contrast for normal text and 3:1 for large text. These are the approved high-contrast pairings.</p>
          <div className="a11y-grid">
            {[
              { bg: 'var(--navy)', title: 'Aa', sub: 'White on Navy', ratio: '12.6:1 ✓ AAA' },
              { bg: 'var(--cream)', title: 'Aa', sub: 'Navy on Cream', ratio: '10.2:1 ✓ AAA', border: true },
              { bg: 'var(--burgundy)', title: 'Aa', sub: 'White on Burgundy', ratio: '6.8:1 ✓ AA' },
              { bg: 'var(--white)', title: 'Aa', sub: 'Body on White', ratio: '10.9:1 ✓ AAA', border: true },
              { bg: 'var(--gold)', title: 'Aa', sub: 'Navy on Gold', ratio: '5.1:1 ✓ AA' },
              { bg: 'var(--cream-deep)', title: 'Aa', sub: 'Burgundy on Sand', ratio: '5.4:1 ✓ AA', border: true },
            ].map((item) => (
              <div key={item.sub} style={{ background: item.bg, borderRadius: 16, padding: 24, border: item.border ? '1px solid rgba(0,0,0,0.06)' : undefined }}>
                <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 20, fontWeight: 700, color: item.bg === 'var(--navy)' || item.bg === 'var(--burgundy)' ? '#FFFFFF' : item.bg === 'var(--gold)' ? 'var(--navy)' : 'var(--text-body)', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 11, color: item.bg === 'var(--navy)' || item.bg === 'var(--burgundy)' ? 'rgba(255,255,255,0.6)' : 'var(--text-med)', letterSpacing: '1px' }}>{item.sub}</div>
                <div style={{ marginTop: 12, padding: '4px 10px', background: 'rgba(74,155,110,0.2)', borderRadius: 6, display: 'inline-block', fontSize: 10, color: item.bg === 'var(--navy)' || item.bg === 'var(--burgundy)' ? '#7CD4A0' : 'var(--green)', fontWeight: 600, letterSpacing: '1px' }}>{item.ratio}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--white)', borderRadius: 20, padding: 40, border: '1px solid rgba(0,0,0,0.04)' }}>
            <div className="type-role" style={{ marginBottom: 20 }}>Accessibility Requirements</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>Focus States</div>
                <ul className="rule-list">
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />All interactive elements must have visible focus rings</li>
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />Focus ring: 2px solid var(--gold), 2px offset</li>
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />Never remove outline — restyle it instead</li>
                </ul>
              </div>
              <div>
                <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>Motion &amp; Reduced Motion</div>
                <ul className="rule-list">
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />Respect prefers-reduced-motion: reduce</li>
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />Confetti/celebration particles must be toggleable</li>
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />No auto-playing animations longer than 5 seconds</li>
                </ul>
              </div>
              <div>
                <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>Touch Targets</div>
                <ul className="rule-list">
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />Minimum touch target: 44 × 44px</li>
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />Spacing between targets: minimum 8px</li>
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />Bottom nav icons: 48 × 48px with labels</li>
                </ul>
              </div>
              <div>
                <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 8 }}>RTL / Hebrew Support</div>
                <ul className="rule-list">
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />Support dir=&quot;rtl&quot; for Hebrew content blocks</li>
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />Mirror layouts for full-Hebrew screens</li>
                  <li><span className="rule-dot" style={{ background: 'var(--gold)' }} />Use logical properties (inline-start/end)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 11 — Effects */}
      <section>
        <div className="container">
          <div className="sec-number">11</div>
          <div className="sec-label">Effects &amp; Shadows</div>
          <h2 className="sec-title">Elevation System</h2>
          <p className="sec-desc">Warm shadows with gold-tinted undertones — never cold grays. Each level creates a gentle lift that feels like parchment layered on a Shabbat table.</p>
          <div className="effects-grid">
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 32, textAlign: 'center', border: '1px solid rgba(197,165,90,0.08)' }}>
              <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>Level 0</div>
              <div style={{ fontFamily: "'Josefin Sans'", fontSize: 11, color: 'var(--text-light)', letterSpacing: '1px' }}>Flat / Resting</div>
              <div style={{ fontFamily: "'Josefin Sans'", fontSize: 10, color: 'var(--text-muted)', marginTop: 8 }}>border: 1px solid rgba(197,165,90,0.1)</div>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 32, textAlign: 'center', boxShadow: '0 2px 8px rgba(27,58,92,0.06), 0 1px 3px rgba(197,165,90,0.04)' }}>
              <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>Level 1</div>
              <div style={{ fontFamily: "'Josefin Sans'", fontSize: 11, color: 'var(--text-light)', letterSpacing: '1px' }}>Subtle Lift</div>
              <div style={{ fontFamily: "'Josefin Sans'", fontSize: 10, color: 'var(--text-muted)', marginTop: 8 }}>Cards, dropdowns</div>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 32, textAlign: 'center', boxShadow: '0 8px 24px rgba(27,58,92,0.08), 0 2px 8px rgba(197,165,90,0.06)' }}>
              <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>Level 2</div>
              <div style={{ fontFamily: "'Josefin Sans'", fontSize: 11, color: 'var(--text-light)', letterSpacing: '1px' }}>Hover / Active</div>
              <div style={{ fontFamily: "'Josefin Sans'", fontSize: 10, color: 'var(--text-muted)', marginTop: 8 }}>Hover states, popovers</div>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 32, textAlign: 'center', boxShadow: '0 20px 48px rgba(27,58,92,0.1), 0 4px 16px rgba(197,165,90,0.08)' }}>
              <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 16, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>Level 3</div>
              <div style={{ fontFamily: "'Josefin Sans'", fontSize: 11, color: 'var(--text-light)', letterSpacing: '1px' }}>Floating</div>
              <div style={{ fontFamily: "'Josefin Sans'", fontSize: 10, color: 'var(--text-muted)', marginTop: 8 }}>Modals, sheets, toasts</div>
            </div>
          </div>
          <div className="two-col-grid">
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 36, border: '1px solid rgba(0,0,0,0.04)' }}>
              <div className="type-role" style={{ marginBottom: 16 }}>Backdrop / Overlay</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                  <span style={{ fontFamily: "'Crimson Pro'", fontSize: 14, color: 'var(--text-body)' }}>Modal overlay</span>
                  <span style={{ fontFamily: "'Josefin Sans'", fontSize: 12, color: 'var(--text-light)' }}>rgba(18,40,64, 0.5) + blur(8px)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                  <span style={{ fontFamily: "'Crimson Pro'", fontSize: 14, color: 'var(--text-body)' }}>Image scrim</span>
                  <span style={{ fontFamily: "'Josefin Sans'", fontSize: 12, color: 'var(--text-light)' }}>linear-gradient(transparent, rgba(18,40,64,0.7))</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                  <span style={{ fontFamily: "'Crimson Pro'", fontSize: 14, color: 'var(--text-body)' }}>Glass panel</span>
                  <span style={{ fontFamily: "'Josefin Sans'", fontSize: 12, color: 'var(--text-light)' }}>rgba(253,246,236,0.85) + blur(16px)</span>
                </div>
              </div>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 36, border: '1px solid rgba(0,0,0,0.04)' }}>
              <div className="type-role" style={{ marginBottom: 16 }}>Transitions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[
                  ['Hover (color, bg)', '150ms ease'],
                  ['Card lift', '300ms ease-out'],
                  ['Modal entrance', '400ms cubic-bezier(0.34, 1.56, 0.64, 1)'],
                  ['Page transitions', '500ms ease-in-out'],
                ].map(([label, val]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: label !== 'Page transitions' ? '1px solid rgba(0,0,0,0.04)' : undefined }}>
                    <span style={{ fontFamily: "'Crimson Pro'", fontSize: 14, color: 'var(--text-body)' }}>{label}</span>
                    <span style={{ fontFamily: "'Josefin Sans'", fontSize: 12, color: 'var(--text-light)' }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* 12 — Pre-Delivery Checklist */}
      <section>
        <div className="container">
          <div className="sec-number">12</div>
          <div className="sec-label">Quality Assurance</div>
          <h2 className="sec-title">Pre-Delivery Checklist</h2>
          <p className="sec-desc">Inspired by the UI/UX Pro Max validation framework — every screen must pass these checks before shipping.</p>
          <div className="checklist-grid">
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 36, border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 18, fontWeight: 600, color: 'var(--navy)', marginBottom: 16 }}>Visual Integrity</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['No emojis as icons — use SVG icon system (Lucide or custom)', 'cursor: pointer on all clickable elements', 'All images have alt text (Hebrew + English)', 'No placeholder/lorem ipsum text shipped', 'Only brand fonts used (Bodoni / Crimson / Josefin)'].map((text) => (
                  <label key={text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: "'Crimson Pro'", fontSize: 14, color: 'var(--text-body)', cursor: 'pointer' }}>
                    <input type="checkbox" style={{ marginTop: 3, accentColor: 'var(--gold)' }} readOnly />
                    {text}
                  </label>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 36, border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 18, fontWeight: 600, color: 'var(--navy)', marginBottom: 16 }}>Interaction Quality</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Hover states with smooth transitions (150–300ms)', 'Focus states visible for keyboard navigation', 'prefers-reduced-motion respected', 'Loading states / skeleton screens for async content', 'Empty states designed (no results, no events, etc.)'].map((text) => (
                  <label key={text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: "'Crimson Pro'", fontSize: 14, color: 'var(--text-body)', cursor: 'pointer' }}>
                    <input type="checkbox" style={{ marginTop: 3, accentColor: 'var(--gold)' }} readOnly />
                    {text}
                  </label>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 36, border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 18, fontWeight: 600, color: 'var(--navy)', marginBottom: 16 }}>Accessibility</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Text contrast minimum 4.5:1 (WCAG AA)', 'Touch targets minimum 44 × 44px', 'Semantic HTML (headings, landmarks, aria-labels)', 'Screen reader tested for core user flows', 'RTL layout tested for Hebrew-heavy screens'].map((text) => (
                  <label key={text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: "'Crimson Pro'", fontSize: 14, color: 'var(--text-body)', cursor: 'pointer' }}>
                    <input type="checkbox" style={{ marginTop: 3, accentColor: 'var(--gold)' }} readOnly />
                    {text}
                  </label>
                ))}
              </div>
            </div>
            <div style={{ background: 'var(--white)', borderRadius: 20, padding: 36, border: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 18, fontWeight: 600, color: 'var(--navy)', marginBottom: 16 }}>Responsive &amp; Performance</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {['Tested at 375px, 768px, 1024px, 1440px', 'Images use lazy loading + WebP/AVIF formats', 'Fonts preloaded with display: swap', 'No layout shift on load (CLS < 0.1)', 'Dark mode consideration (future roadmap)'].map((text) => (
                  <label key={text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: "'Crimson Pro'", fontSize: 14, color: 'var(--text-body)', cursor: 'pointer' }}>
                    <input type="checkbox" style={{ marginTop: 3, accentColor: 'var(--gold)' }} readOnly />
                    {text}
                  </label>
                ))}
              </div>
            </div>
          </div>
          <div className="antipatterns">
            <div style={{ fontFamily: "'Bodoni Moda'", fontSize: 18, fontWeight: 600, color: 'var(--red)', marginBottom: 16 }}>Anti-Patterns to Avoid</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {['AI purple/pink gradients — not our brand', 'Neon accents or electric blues', 'Harsh box shadows with pure black', 'System fonts (Arial, Helvetica, Inter)', 'Skeleton loaders without warm tint', 'Cold gray backgrounds (#F5F5F5)', 'Auto-playing video without user consent', 'Truncated Hebrew text without ellipsis'].map((text) => (
                <div key={text} style={{ fontFamily: "'Crimson Pro'", fontSize: 14, color: 'var(--text-body)', padding: '6px 0' }}>✗ {text}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider-gold" />

      {/* Footer */}
      <footer className="footer">
        <div style={{ marginBottom: 12 }}>
          <span style={{ fontFamily: "'Bodoni Moda',serif", fontSize: 28, fontWeight: 700, color: '#FFF', letterSpacing: '1.5px' }}>KOSHER</span>
          <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 28, fontWeight: 600, fontStyle: 'italic', color: 'var(--gold)', letterSpacing: '-0.5px' }}> Connect</span>
        </div>
        <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: 10, fontWeight: 400, letterSpacing: '4px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase' }}>Heritage Luxe Brand Kit · v2.1 Enhanced · March 2026</div>
      </footer>
    </div>
  );
}
