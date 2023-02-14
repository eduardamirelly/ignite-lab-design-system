/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        100: '#E1E1E6',
        200: '#C4C4CC',
      },
      cyan: {
        500: '#81D8F7',
        300: '#98E1FB',
      },
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
