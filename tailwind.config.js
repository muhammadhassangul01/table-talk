/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './integrations/**/*.html', './guides/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        espresso: '#171310',
        cream: '#FAF6F0',
      },
    },
  },
  plugins: [],
};