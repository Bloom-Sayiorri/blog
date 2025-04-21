/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'bg': '#1d1a39',
        'soft': '#e8bcb9',
        'darkBlue': '#384358',
        'light': '#fbe4d8',
        'dashboard': '#86abcf',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

