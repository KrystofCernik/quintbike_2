/** @type {import('tailwindcss').Config} */
const theme = require('./theme.js')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      ...theme
    },
  },
  plugins: [],
}
