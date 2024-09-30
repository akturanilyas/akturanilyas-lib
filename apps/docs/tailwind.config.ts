import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./stories/**/*.{js,jsx,ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        'gradient-animation': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
      },
      animation: {
        'gradient-animation': 'gradient-animation 5s ease infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
