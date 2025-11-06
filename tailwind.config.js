import { defineConfig } from 'tailwindcss'

export default defineConfig({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hive: {
          gold: '#f59e0b',
          goldLight: '#fbbf24',
          goldDark: '#b45309',
          navy: '#0f172a',
          slate: '#1e293b',
        },
      },
    },
  },
  plugins: [],
})
