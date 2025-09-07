/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': {transform: 'scale(5)'},
          '33%': {transform: 'scale(4.2)'},
          '66%': {transform: 'scale(0.9)'},
          '100%': {transform: 'scale(10)'},
        },
      },
      animation:{
        blob: 'blob 10s infinite'
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg,  rgb(204,0,187,0.15)'
      }
    },
  },
  plugins: [],
}