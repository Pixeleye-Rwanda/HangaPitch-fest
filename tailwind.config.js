
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
      navy:'#243163',
      darknavy:'#030C37',
      ftcolor:'#343E75',
      lightblue:'#9198B1',
       abtcolor:'#02092994',
       lineColor:' #243B9E'


   
    },
    clipPath: {
      'custom': 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)', // adjust this to match the shape in your design
    }
  },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}
