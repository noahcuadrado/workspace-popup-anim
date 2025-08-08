/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sora': ['Sora', '-apple-system', 'Roboto', 'Helvetica', 'sans-serif'],
        'bungee': ['Bungee', 'cursive'],
      },
      colors: {
        black: '#000',
        'grapefit': {
          400: '#B382C8',
          600: '#8E44AD',
          1000: '#2F1639',
        },
        'blackmode': {
          100: '#E7E7E7',
          200: '#D0D0D0',
          300: '#B9B9B9',
          800: '#454545',
          900: '#2E2E2E',
          1000: '#171717',
          1100: '#000',
        },
      },
    },
  },
  plugins: [],
}
