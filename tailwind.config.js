/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'HeroBG': 'url("../src/assets/Herobg6.png")'
      },
      fontFamily: {
        sans: ['Inter, sans-serif'], 
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}