import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const criticalCSS = `
:root{
  --color-navy:#1B3A5C;--color-cream:#FDF6EC;--color-gold:#C5A55A;--color-burgundy:#8B2252;
  --color-cream-deep:#F5E6D0;--color-burgundy-light:#A83068;--color-navy-light:#2A4F75;
  --font-display:'Bodoni Moda',serif;--font-accent:'Crimson Pro',serif;--font-ui:'Josefin Sans',sans-serif;
}
html{min-height:100%;-webkit-text-size-adjust:100%;}
body{min-height:100%;overflow-x:hidden;margin:0;background-color:#FDF6EC;color:#111;
  font-family:'Josefin Sans',sans-serif;-webkit-font-smoothing:antialiased;}
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
.font-display{font-family:'Bodoni Moda',serif !important;}
.font-accent{font-family:'Crimson Pro',serif !important;}
.font-ui{font-family:'Josefin Sans',sans-serif !important;}
.btn-burgundy{display:inline-flex;align-items:center;justify-content:center;padding:0.75rem 1.5rem;
  border-radius:100px;font-family:'Josefin Sans',sans-serif;font-weight:500;font-size:0.875rem;
  text-transform:uppercase;letter-spacing:0.05em;color:#fff;background-color:#8B2252;
  border:none;cursor:pointer;text-decoration:none;}
.btn-brand{display:inline-flex;align-items:center;justify-content:center;padding:0.75rem 1.5rem;
  border-radius:100px;font-family:'Josefin Sans',sans-serif;text-decoration:none;
  border:1px solid rgba(255,255,255,0.2);color:#fff;}
.section-eyebrow{font-family:'Josefin Sans',sans-serif;font-size:0.75rem;font-weight:300;
  text-transform:uppercase;letter-spacing:0.2em;color:#C5A55A;}
.section-title{font-family:'Bodoni Moda',serif;font-size:1.875rem;font-weight:700;color:#1B3A5C;}
.section-subtitle{font-family:'Crimson Pro',serif;font-size:1.125rem;font-style:italic;color:#4b5563;}
  `.replace(/\n/g, ' ').trim();

  return (
    <html lang="en" className="min-h-full">
      <head>
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Josefin+Sans:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
