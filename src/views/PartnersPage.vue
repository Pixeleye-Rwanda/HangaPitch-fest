<template>

    <div class="ml-0 lg:ml-12">

      <div class=" font-rockinsoda text-navy text-5xl mt-32 text-center lg:text-left lg:text-7xl">
        <p>HANGA</p>
        <p>IS ORGANIZED BY</p>
        </div>
       
    
 

    <!-- first section -->
    <div class="flex flex-wrap justify-center  lg:mr-4 sm:mr-0 lg:justify-between gap-y-12 gap-x-8 lg:gap-x-16 px-4 lg:px-2 mt-24">
      <div class="w-full sm:w-1/2 lg:w-1/4 fade-in space-y-4 text-center lg:text-left" ref="item1">
        <img src="../assets/coat.svg" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0">
        <hr class="border-t border-gray-300  mx-auto lg:mx-0">
        <div>
          <p class="font-rockinsoda text-3xl sm:text-6xl md:text-7xl lg:text-4xl text-navy">MINICT</p>
          <p class="text-lightblue font-gramatika text-lg sm:text-xl">The Ministry of ICT and Innovation</p>
        </div>
      </div> 
    
      <div class="w-full sm:w-1/2 lg:w-1/4 fade-in mt-0 lg:mt-16 space-y-4 text-center lg:text-left" ref="item2">
        <img src="../assets/rdb.svg" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0">
        <hr class="border-t border-gray-300  mx-auto lg:mx-0">
        <div>
          <p class="font-rockinsoda text-3xl sm:text-4xl md:text-3xl lg:text-4xl text-navy">RDB</p>
          <p class="text-lightblue font-gramatika text-lg sm:text-xl">Rwanda Development Board</p>
        </div>
      </div>
    
      <div class="w-full sm:w-1/2 lg:w-1/4 fade-in space-y-4 text-center lg:text-left" ref="item3">
        <img src="../assets/undp.svg" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0">
        <hr class="border-t border-gray-300  mx-auto lg:mx-0">
        <div>
          <p class="font-rockinsoda text-3xl sm:text-6xl md:text-7xl lg:text-4xl text-navy">UNDP</p>
          <p class="text-lightblue font-gramatika text-lg sm:text-xl">United Nations Development Programme in Rwanda</p>
        </div>
      </div>
    </div>


      <!-- second section -->
      <div class="ml-4 mr-4 xl:mt-4 2xl:-mt-12 mlg:mr-10 md:ml-2 flex flex-col md:flex-row lg:space-x-16 items-start justify-between">
        <div class="flex-1  mt-12 xl:mt-2 2xl:mt-60 md:mt-8 max-w-full md:max-w-[50%]">
          <div class="space-y-2  md:mt-48 ">
            <p class="text-4xl md:text-7xl font-rockinsoda text-navy">BUILDING RWANDA'S </p>
            <p class="text-4xl md:text-7xl font-rockinsoda text-navy">ECOSYSTEM</p>
          </div>
      
          <div class="mt-10">
            <div class="text-justify space-y-12 w-full">
              <p class="text-navy font-gramatika text-lg md:text-md">
                "We are delighted, as Jasiri, to be part of Hanga Pitchfest, 
                We believe in the power of entrepreneurship to transform our society and Hanga Pitchfest calls for action for
                 those seeking to challenge the status quo and build solutions that will improve the lives of many." 
               - Aline Kabanda, East Africa Regional Director, Jasiri.
              </p>
      
            
            </div>
          </div>
        </div>
      
        <div class="flex-1 h-[300px] sm:mt-10 md:h-auto  md:mt-10 xl:mt-36 2xl:mt-52 max-w-full md:max-w-[50%]">
          <img src="../assets/rwanda .svg" class="w-full mt-10 h-full  object-cover">
        </div>
      </div>
     
     <!-- partnernship page  -->
     <div class="">
      <div class=" font-rockinsoda text-navy text-5xl mt-32 text-center lg:text-left lg:text-6xl">
        <p>ALL PARTNERSHIPS</p>
        </div>

     
     
      

      <div class="grid grid-cols-2 ml-4 lg:ml-0  mr-4 lg:mr-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mt-12 ">
      <ul v-for="startup in filteredStartups" :key="startup.name" class=" border border-lightTangerine  p-4  h-[28vh]  ">
          <div class="flex items-center justify-center">
          <li>
          
          <img :src="startup.logo" alt="Logo" class="w-full h-12 mt-6  mb-4" />
          <h3 class="text-lg text-center font-gramatika text-navy text-lg mt-4 " >{{ startup.name }}</h3>
      </li>
      </div>

      </ul>

      </div>
      
      
  </div>
      <!-- next section -->
      <div class="ml-4 md:ml-12 mt-12 md:mt-32">
        <div class="mt-8 md:mt-12 md:ml-16 overflow-hidden">
          <div ref="videoWrapper" class="flex space-x-4 md:space-x-8 overflow-x-auto scroll-smooth">
            <!-- First text Block -->
            <div class="flex-shrink-0   flex  flex-col md:flex-row space-y-2 w-[300px] h-[400px] md:w-[600px] md:h-[600px]">
              <div class="relative flex flex-col md:flex-row w-full h-full">
                <div class="mt-8 md:mt-24">
                  <span class="font-rockinsoda text-tangerine text-5xl md:text-7xl ml-2">"</span>
                  <p class="text-navy text-lg md:text-2xl font-gramatika font-bold w-[40vh] md:w-[60vh] -mt-6 md:-mt-8 p-2 md:p-4 text-center">
                    With funding from Hanga, I was able to launch for our first international market.
                  </p>
                  <div class="flex space-x-2 ml-2">
                    <hr class="w-[30px] md:w-[50px] border-2 mt-2 border-navy">
                    <p class="font-rockinsoda text-navy text-lg md:text-2xl">THERESA, DOPE INITIATIVES</p>
                  </div>
                </div>
                <div class="flex-shrink-0 h-[300px]  md:h-[500px]">
                  <img src="../assets/dope.jpg" class="w-full h-full object-cover">
                </div>
              </div>
            </div>
          </div>
      
          <!-- Scroll Buttons -->
          <div class="flex justify-between items-center -mt-12 md:-mt-24 space-x-2 pr-4 md:pr-12">
            <button @click="scrollLeft" 
                    class="border-2 rounded-full p-3 md:p-4 bg-white text-navy focus:outline-none hover:bg-navy hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 md:w-6 md:h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button @click="scrollRight" 
                    class="border-2 rounded-full p-3 md:p-4 bg-white text-navy focus:outline-none hover:bg-navy hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 md:w-6 md:h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
        
       

    </div>
</template>

<script>
export  default{
    name:"PartnersPage",
    mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up-visible');
          entry.target.classList.add('zoom-in-visible');
          entry.target.classList.add('fade-in-visible');
          entry.target.classList.add('fade-in-visible-animation');
          entry.target.classList.add('slide-up-visible-animation');



        }
      });
    });

      
    
     // Observe all elements with the fade-in class
    const items = [this.$refs.item1, this.$refs.item2, this.$refs.item3];
    items.forEach(item => {
      observer.observe(item);
    }); 

  },

  data(){
                
                return{
                    startups:[
                    { name: 'Pesa Choice', logo: require('../assets/partners/pesa.svg') },
                    { name: 'Startups In Rwanda',  logo: require('../assets/partners/startup.svg') },
                    { name: 'Airtel', logo: require('../assets/partners/airtel.svg') },
                    { name: 'AMI',  logo: require('../assets/partners/ami.svg') },
                    { name: 'Bank of Kigali', logo: require('../assets/partners/bk.svg') },
                    { name: 'Bag', logo: require('../assets/partners/bag.svg') },
                    { name: 'BPN', logo: require('../assets/partners/bpn.svg') },
                    { name: 'AOS', logo: require('../assets/partners/aos.svg') },
                    { name: 'Canal Box', logo: require('../assets/partners/canal.svg') },
                    { name: 'CMU', logo: require('../assets/partners/cmu.svg') },
                    { name: 'AOS', logo: require('../assets/partners/aos.svg') },
                    { name: 'Ejo Heza', logo: require('../assets/partners/ejo.svg') },
                    { name: 'ESP', logo: require('../assets/partners/esp.svg') },
                    { name: 'European Union', logo: require('../assets/partners/europe.svg') },
                    { name: 'ICT chamber', logo: require('../assets/partners/ict.svg') },
                    { name: 'GIZ', logo: require('../assets/partners/Giz.svg') },
                    { name: 'Igihe', logo: require('../assets/partners/igihe.svg') },
                    { name: 'Jasiri', logo: require('../assets/partners/jasiri.svg') },
                    { name: 'QT', logo: require('../assets/partners/qt.svg') },
                    { name: 'Mastercard Foundation', logo: require('../assets/partners/mc.svg') },
                    { name: 'JICA', logo: require('../assets/partners/jica.svg') },
                    { name: 'RISA', logo: require('../assets/partners/risa.svg') },
                    { name: 'WOMEN UN', logo: require('../assets/partners/un.svg') },
                    { name: 'Pindo', logo: require('../assets/partners/pindo.svg') },
                    { name: 'KT Rwanda Networks', logo: require('../assets/partners/kt.svg') },
                    { name: 'KudiBooks', logo: require('../assets/partners/kudi.svg') },
                    { name: 'RDB', logo: require('../assets/partners/rdb.svg') },
                    { name: 'RSSB', logo: require('../assets/partners/rssb.svg') },
                    { name: 'UNDP', logo: require('../assets/partners/undp.svg') },























                   

                    ],
                  
                };
                
                },
                
                computed:{
                
                    filteredStartups() {
                    return this.startups.filter(startup => {
                    const startupMatch = startup.name;
                    
                    return startupMatch;
                });
                }
                
            },

}
</script>

<style>

.fade-in {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .fade-in-visible {
    opacity: 1;
  }

  .fade-in:nth-child(1) {
    transition-delay: 0.3s;
  }

  .fade-in:nth-child(2) {
    transition-delay: 0.6s;
  }

  .fade-in:nth-child(3) {
    transition-delay: 0.9s;
  }

</style>