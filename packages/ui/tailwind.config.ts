import type { Config } from 'tailwindcss';
import sharedConfig from '@akturanilyas/tailwind-config';

const config: Pick<Config, 'prefix' | 'presets' | 'content' | 'theme'> = {
  content: ['./src/**/*.tsx', './src/**/*.style.ts'],
  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.625rem', '0.75rem'],
        '3xs': ['0.5rem', '0.5rem'],
      },
      colors: {
        primary: {
          DEFAULT: '#4662EB',
        },
        secondary: {
          DEFAULT: '#911478',
        },
      },
      transitionProperty: {
        transform: 'transform',
      },
      transform: {
        'rotate-180': 'rotate(180deg)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  presets: [sharedConfig],
};

export default config;
