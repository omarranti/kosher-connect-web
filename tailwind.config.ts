import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-brand-navy', 'bg-brand-cream', 'bg-brand-gold', 'bg-brand-burgundy', 'bg-brand-cream/80',
    'text-brand-navy', 'text-brand-gold', 'text-white',
    'font-display', 'font-accent', 'font-ui',
    'animate-soft-breathe',
  ],
  theme: {
    extend: {
      // ═══════════════════════════════════════
      // KOSHER CONNECT — Heritage Luxe Tokens
      // ═══════════════════════════════════════
      colors: {
        brand: {
          navy: {
            DEFAULT: '#1B3A5C',
            deep: '#122840',
            light: '#2A4F75',
          },
          gold: {
            DEFAULT: '#C5A55A',
            light: '#D4B86A',
            pale: '#F0E4C8',
            shimmer: '#E8D5A0',
          },
          burgundy: {
            DEFAULT: '#8B2252',
            light: '#A83068',
            soft: 'rgba(139,34,82,0.08)',
          },
          cream: {
            DEFAULT: '#FDF6EC',
            deep: '#F5E6D0',
          },
          sand: '#EDE0CF',
          parchment: '#F8F0E3',
        },
        semantic: {
          red: '#C4384B',
          green: '#4A9B6E',
          'green-soft': '#E8F5EE',
        },
      },
      fontFamily: {
        display: ['Bodoni Moda', 'serif'],
        accent: ['Crimson Pro', 'serif'],
        ui: ['Josefin Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': ['36px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['28px', { lineHeight: '1.15', fontWeight: '700' }],
        'h3': ['20px', { lineHeight: '1.25', fontWeight: '600' }],
        'subtitle': ['17px', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['15px', { lineHeight: '1.6', fontWeight: '400' }],
        'ui-label': ['13px', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.05em' }],
        'caption': ['11px', { lineHeight: '1.4', fontWeight: '400', letterSpacing: '0.025em' }],
        'eyebrow': ['9px', { lineHeight: '1.4', fontWeight: '300', letterSpacing: '0.25em' }],
      },
      borderRadius: {
        'brand': '20px',
        'brand-sm': '16px',
        'pill': '100px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(27, 58, 92, 0.06)',
        'card-hover': '0 20px 48px rgba(27, 58, 92, 0.08)',
        'button': '0 8px 24px rgba(139, 34, 82, 0.25)',
        'gold': '0 8px 24px rgba(197, 165, 90, 0.3)',
      },
      animation: {
        'gentle-float': 'gentle-float 3s ease-in-out infinite',
        'spring-pop': 'spring-pop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'soft-breathe': 'soft-breathe 4s ease infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out both',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'spring-pop': {
          '0%': { transform: 'scale(0.95)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        'soft-breathe': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'brand-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'brand-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
