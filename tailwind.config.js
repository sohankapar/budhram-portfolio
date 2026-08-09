/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1E33',
          deep: '#081526',
          light: '#122C4A',
        },
        concrete: {
          DEFAULT: '#9BA1AB',
          light: '#D8DBE0',
          dark: '#6B7280',
        },
        charcoal: '#1A1D21',
        safety: {
          DEFAULT: '#FF5A1F',
          dim: '#D6491A',
        },
        steel: '#4A5568',
        paper: '#F5F5F2',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        blueprint:
          'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
        'blueprint-dark':
          'linear-gradient(rgba(11,30,51,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,30,51,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '32px 32px',
        'grid-lg': '64px 64px',
      },
    },
  },
  plugins: [],
};
