/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgb(11, 55, 151)',
        customBlueLight: 'rgb(234, 244, 251)',
        customgray: 'rgb(244, 244, 244)',
      },
    },
  },
  plugins: [],
}