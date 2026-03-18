export type LogoVariant = 'light' | 'dark' | 'gold-bg';

const basePaths = {
  light: {
    fill: '#1B3A5C',
    stroke: '#1B3A5C',
    flame: '#C5A55A',
    flameOpacity: 1,
    baseStroke: '#C5A55A',
  },
  dark: {
    fill: '#FFFFFF',
    stroke: '#FFFFFF',
    flame: '#C5A55A',
    flameOpacity: 1,
    baseStroke: '#C5A55A',
  },
  'gold-bg': {
    fill: '#1B3A5C',
    stroke: '#1B3A5C',
    flame: '#1B3A5C',
    flameOpacity: 0.6,
    baseStroke: '#1B3A5C',
  },
};

export function LogoIcon({ variant = 'light', className }: { variant?: LogoVariant; className?: string }) {
  const c = basePaths[variant];
  const flameFill = variant === 'gold-bg' ? '#FFF' : undefined;
  const flameOpacity = variant === 'gold-bg' ? 0.75 : 1;
  return (
    <svg viewBox="0 0 72 68" fill="none" className={className} aria-hidden>
      <path d="M36 10 C36 10 38 6 36 4 C34 6 36 10 36 10Z" fill={c.flame} />
      <circle cx="36" cy="4" r="2.5" fill={c.flame} opacity={c.flameOpacity} />
      <rect x="34.5" y="10" width="3" height="26" rx="1.5" fill={c.fill} />
      <path d="M22 16 C22 16 28 18 34.5 24" stroke={c.stroke} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M14 22 C14 22 24 24 34.5 30" stroke={c.stroke} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M50 16 C50 16 44 18 37.5 24" stroke={c.stroke} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M58 22 C58 22 48 24 37.5 30" stroke={c.stroke} strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <circle cx="22" cy="14" r="2.2" fill={flameFill ?? c.flame} opacity={flameOpacity} />
      <circle cx="14" cy="20" r="2.2" fill={flameFill ?? c.flame} opacity={flameOpacity} />
      <circle cx="50" cy="14" r="2.2" fill={flameFill ?? c.flame} opacity={flameOpacity} />
      <circle cx="58" cy="20" r="2.2" fill={flameFill ?? c.flame} opacity={flameOpacity} />
      <path d="M24 36 L48 36 L44 42 L28 42 Z" fill={c.fill} />
      <path d="M24 50 Q30 46 36 48 Q42 46 48 50" stroke={c.baseStroke} strokeWidth="1.4" fill="none" strokeLinecap="round" opacity={variant === 'gold-bg' ? 0.4 : 1} />
      <path d="M20 58 Q36 64 52 58" stroke={c.stroke} strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}
