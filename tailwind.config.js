
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
      lightblue:'#9198B1'
   
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
