/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        navy: '#24364d',
        gold: '#c3a03f',
        paper: '#f2f4f8'
      },
      boxShadow: {
        soft: '0 12px 40px rgba(36, 54, 77, 0.08)'
      }
    }
  },
  plugins: []
};
