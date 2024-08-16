import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';

const config: Pick<Config, 'prefix' | 'presets' | 'content' | 'theme'> = {
  content: ['./src/**/*.tsx', './src/**/*.style.ts'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4662EB',
        },
        secondary: {
          DEFAULT: '#911478',
        },
      },
    },
  },
  presets: [sharedConfig],
};

export default config;
