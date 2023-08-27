/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: { 
      backgroundImage: {
      'img-1': "url('./components/img-1.svg')",
      } 
    },
    fontFamily: { 'outfit': 'Outfit'}
    },
    plugins: [require('flowbite/plugin'),],
  }
  