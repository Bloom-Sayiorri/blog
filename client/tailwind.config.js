/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      bg: '#1d1a39',
      soft: '#e8bcb9',
      darkBlue: '#384358',
      light: '#fbe4d8',
      dashboard: '#86abcf',
    },
    body: {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}

