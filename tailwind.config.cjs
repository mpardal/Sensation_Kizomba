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
      colors: {
        "primary": {
          "50": "#ffe35d",
          "100": "#ffd953",
          "200": "#f9cf49",
          "300": "#efc53f",
          "400": "#e5bb35",
          "500": "#dbb12b",
          "600": "#d1a721",
          "700": "#c79d17",
          "800": "#bd930d",
          "900": "#b38903"
        },
        "secondary": {
          "50": "#5ee8af",
          "100": "#54dea5",
          "200": "#4ad49b",
          "300": "#40ca91",
          "400": "#36c087",
          "500": "#2cb67d",
          "600": "#22ac73",
          "700": "#18a269",
          "800": "#0e985f",
          "900": "#048e55"
        },
        "error": {
          "50": "#ff8a8a",
          "100": "#ff8080",
          "200": "#ff7676",
          "300": "#f86c6c",
          "400": "#ee6262",
          "500": "#e45858",
          "600": "#da4e4e",
          "700": "#d04444",
          "800": "#c63a3a",
          "900": "#bc3030"
        }
      }
    },
  },
  plugins: [],
}

