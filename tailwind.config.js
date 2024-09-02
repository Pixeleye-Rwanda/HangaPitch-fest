
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 

      fontFamily: {
        gramatika: ['Gramatika', 'sans-serif'],
        rockinsoda: ['Rockinsoda', 'serif'],
    },
    colors: {
      tangerine: '#F45001',
   
    },
  },
  },
  plugins: [],
}
