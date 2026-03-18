import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Crimson_Pro, Josefin_Sans } from 'next/font/google';
import '@/styles/globals.css';

const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['300', '400', '500', '600', '700'],
});

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
  weight: ['200', '300', '400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
  'https://kosherconnect.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kosher Connect — Your Jewish Community Hub',
    template: '%s | Kosher Connect',
  },
  description:
    'Discover kosher restaurants, community events, and celebration vendors. From Shabbat to simchas — find your people.',
  keywords: [
    'kosher restaurants',
    'jewish community',
    'kosher food',
    'shabbat dinner',
    'simcha vendors',
    'jewish events',
    'kosher near me',
  ],
  openGraph: {
    title: 'Kosher Connect — Your Jewish Community Hub',
    description:
      'Discover kosher restaurants, community events, and celebration vendors.',
    url: 'https://kosherconnect.com',
    siteName: 'Kosher Connect',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kosher Connect',
    description: 'Your Jewish Community Hub',
  },
};

const fontVars = `${bodoniModa.variable} ${crimsonPro.variable} ${josefinSans.variable}`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const criticalCSS = `
:root{
  --color-navy:#1B3A5C;--color-cream:#FDF6EC;--color-gold:#C5A55A;--color-burgundy:#8B2252;
  --color-cream-deep:#F5E6D0;--color-burgundy-light:#A83068;--color-navy-light:#2A4F75;
}
html{min-height:100%;-webkit-text-size-adjust:100%;}
body{min-height:100%;overflow-x:hidden;margin:0;background-color:#FDF6EC;color:#111;
  font-family:var(--font-ui),sans-serif;-webkit-font-smoothing:antialiased;}
body.min-h-full{min-height:100%;}
.bg-brand-navy{background-color:#1B3A5C !important;}
.bg-brand-cream{background-color:#FDF6EC !important;}
.bg-brand-cream\\/80{background-color:rgba(253,246,236,0.8) !important;}
.bg-brand-gold\\/10{background-color:rgba(197,165,90,0.1) !important;}
.bg-brand-burgundy\\/10{background-color:rgba(139,34,82,0.1) !important;}
.bg-brand-cream-deep{background-color:#F5E6D0 !important;}
.bg-brand-burgundy{background-color:#8B2252 !important;}
.text-white{color:#fff !important;}
.text-brand-navy{color:#1B3A5C !important;}
.text-brand-gold{color:#C5A55A !important;}
.text-brand-gold\\/70{color:rgba(197,165,90,0.7) !important;}
.text-white\\/50{color:rgba(255,255,255,0.5) !important;}
.font-display{font-family:var(--font-display),serif !important;}
.font-accent{font-family:var(--font-accent),serif !important;}
.font-ui{font-family:var(--font-ui),sans-serif !important;}
.btn-burgundy{display:inline-flex;align-items:center;justify-content:center;padding:0.75rem 1.5rem;
  border-radius:100px;font-family:var(--font-ui),sans-serif;font-weight:500;font-size:0.875rem;
  text-transform:uppercase;letter-spacing:0.05em;color:#fff;background-color:#8B2252;
  border:none;cursor:pointer;text-decoration:none;}
.btn-brand{display:inline-flex;align-items:center;justify-content:center;padding:0.75rem 1.5rem;
  border-radius:100px;font-family:var(--font-ui),sans-serif;text-decoration:none;
  border:1px solid rgba(255,255,255,0.2);color:#fff;}
.section-eyebrow{font-family:var(--font-ui),sans-serif;font-size:0.75rem;font-weight:300;
  text-transform:uppercase;letter-spacing:0.2em;color:#C5A55A;}
.section-title{font-family:var(--font-display),serif;font-size:1.875rem;font-weight:700;color:#1B3A5C;}
.section-subtitle{font-family:var(--font-accent),serif;font-size:1.125rem;font-style:italic;color:#4b5563;}
  `.replace(/\n/g, ' ').trim();

  return (
    <html lang="en" className={`min-h-full ${fontVars}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      </head>
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
