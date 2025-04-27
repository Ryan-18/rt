/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f8faf8',
          100: '#e8efe8',
          200: '#d1e0d1',
          300: '#afc5af',
          400: '#85a385',
          500: '#658465',
          600: '#526852',
          700: '#435243',
          800: '#394439',
          900: '#313831',
        },
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
    },
  },
  plugins: [],
};