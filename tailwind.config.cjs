/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', '-apple-system', 'sans-serif'],
        body: ['Roboto', '-apple-system', 'sans-serif'],
      },
      minHeight: {
        'app': 'calc(100vh - 64px)',
      },
    },
  },
  plugins: [],
}

