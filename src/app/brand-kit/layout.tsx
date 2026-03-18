import type { Metadata } from 'next';
import './brand-kit.css';

export const metadata: Metadata = {
  title: 'Brand Kit — Kosher Connect',
  description:
    'Official Heritage Luxe brand guidelines: logo, colors, typography, components, voice, and quality checklist.',
};

export default function BrandKitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
