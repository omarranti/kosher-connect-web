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
  return (
    <html lang="en" className="min-h-full">
      <body className="min-h-full overflow-x-hidden">{children}</body>
    </html>
  );
}
