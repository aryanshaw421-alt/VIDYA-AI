/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        vidya: {
          blue: '#0055FE',
          'blue-light': '#EFF6FF',
          'blue-dark': '#0040C1',
          'blue-royal': '#1E40AF',
          'blue-ice': '#F0F7FF',
          navy: '#0A1128',
          amber: '#F59E0B',
          purple: '#6366F1',
          emerald: '#10B981',
          rose: '#F43F5E',
          slate: '#F8FAFC',
          border: '#E2E8F0',
          darkBg: '#050A18',
          darkSurface: '#0B132B',
          darkBorder: '#1C2541',
          darkMuted: '#94A3B8'
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Avenir', 'Helvetica Neue', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        editorial: ['Playfair Display', 'Georgia', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      boxShadow: {
        'soft': '0 2px 20px -3px rgba(0, 85, 254, 0.06), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 25px -2px rgba(10, 17, 40, 0.05)',
        'card-dark': '0 4px 25px -2px rgba(0, 0, 0, 0.5)',
        'glow-blue': '0 0 30px -4px rgba(0, 85, 254, 0.35)',
        'glow-royal': '0 0 35px -5px rgba(30, 64, 175, 0.4)',
        'glow-purple': '0 0 25px -4px rgba(99, 102, 241, 0.35)'
      }
    },
  },
  plugins: [],
}
