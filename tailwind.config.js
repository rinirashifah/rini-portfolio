/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      colors: {
        hot:          '#e91e8c',
        gold:         '#ffd700',
        blush:        '#ffb3dc',
        'pink-light':  '#fff0f7',
        'pink-border': '#ffd6ec',
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
}
