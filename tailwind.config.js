
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
       lineColor:' #243B9E',
       blck: '#404040',
       lightTangerine: '#FFD2BC',
       descColor:' #444F7E',
       linkColor: '#1F2A5B',
       darkGray: '#404040',
       newsClr:' #132060',
       greenlime: '#E1FEF7',
       navbg:'#FFFBF9',
       timelinebg:'#FFF8F4'




   
    },
  
    backgroundImage: {
      'startups': "url('@/assets/speaker1.jpg')",
      'judges': "url('@/assets/speaker1.jpg')",
      'partners':"url('@/assets/networkbg.jpg')",

    }
   
  },
  },
  
}
