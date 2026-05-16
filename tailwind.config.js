/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        bg2: '#111118',
        bg3: '#16161f',
        surface: '#1c1c28',
        border: 'rgba(255,255,255,0.07)',
        accent: '#7c6af7',
        accent2: '#e05f8e',
        'accent-glow': 'rgba(124, 106, 247, 0.25)',
        text: '#f0eeff',
        text2: '#9893b8',
        text3: '#605c7e',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
