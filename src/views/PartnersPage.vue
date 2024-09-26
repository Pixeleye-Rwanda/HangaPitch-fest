<template>

    <div class="ml-12">
        <div class="space-y-4 mt-20">
            <p class="text-5xl font-rockinsoda text-navy">HANGA </p>
            <p class="text-5xl font-rockinsoda text-navy">IS ORGANIZED BY</p>
        </div>
    
 

    <!-- first section -->
    <div class="flex mt-28 space-x-36">
        <div class="space-y-8 fade-in" ref="item1">
          <img src="../assets/coat.svg">
          <hr class="border-t border-gray-300">
          <div class="space-y-2 w-[300px]">
            <p class="font-rockinsoda text-5xl text-navy">MINICT</p>
            <p class="text-lightblue text-lg font-gramatika ">The Ministry of ICT and Innovation</p>
          </div>
        </div>
    
        <div class="space-y-8 fade-in" ref="item2">
          <img src="../assets/rdb.svg" class="">
          <hr class="border-t border-gray-300">
          <div class="space-y-2 w-[300px]">
            <p class="font-rockinsoda text-5xl text-navy">RDB</p>
            <p class="text-lightblue font-gramatika text-lg ">Rwanda Development Board</p>
          </div>
        </div>
    
        <div class="space-y-8 fade-in mr-12" ref="item3">
          <img src="../assets/un.svg" class="">
          <hr class="border-t border-gray-300 ">
          <div class="space-y-2 w-[300px]">
            <p class="font-rockinsoda text-5xl text-navy">UNDP</p>
            <p class="text-lightblue text-lg font-gramatika">United Nations Development Programme in Rwanda</p>
          </div>
        </div>
        
      </div>

      <!-- second section -->
      <div class=" space-x-36 flex mt-12 ">
        <div class=" ">
          <div class="space-y-2 mt-28">
          <p class="text-6xl font-rockinsoda text-navy">BUILDING RWANDA'S</p>
          <p class="text-6xl font-rockinsoda text-navy">TECH-ECOSYSTEM</p>
        </div>

        <div class="mt-8">
          <div class=" text-justify space-y-8 w-[600px] ">
            <p class="text-navy font-gramatika text-lg">"We are delighted, as Jasiri, to be part of Hanga Pitchfest, 
               We believe in the power of entrepreneurship to transform our society and Hanga Pitchfest calls for action for
                those seeking to challenge the status quo and build solutions that will improve the lives of many." 
              - Aline Kabanda, East Africa Regional Director, Jasiri.</p>

      
       </div>
        </div>
      </div>

        <div class=" h-[400px] mt-32 flex-shrink-0">
          <img src="../assets/rwanda .svg" class="w-full h-full object-cover ">
        </div>

      </div>
     
     <!-- partnernship page  -->
     <div class="">
      <div class="font-rockinsoda text-navy text-6xl mt-32  ">
      <p>ALL PARTNERSHIPS</p>
      </div>

     
     
      

      <div class="grid grid-cols-1  mr-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mt-12 ">
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
      <div class="ml-12 mt-32">
    

        <div class=" mt-12 ml-16 overflow-hidden">
    
            <div ref="videoWrapper" class="flex space-x-8 overflow-x-auto overflow-x-hidden scroll-smooth">
    
            <!-- First text Block -->
            <div class="flex-shrink-0 flex flex-col space-y-2 w-[600px] h-[600px]">
                <div class="relative  flex w-full h-full">
    
            <div class="mt-24">
                <span class="font-rockinsoda text-tangerine text-7xl ml-2  ">"</span>
                <p class="text-navy text-2xl font-gramatika font-bold w-[60vh] -mt-8 p-4 text-justify text-center">
               With funding from Hanga, I was able to launch for our first international market.</p>
    
                <div class="flex space-x-2 ml-2 ">
                    <hr class=" w-[50px] border-2 mt-2 border-navy ">
                    <p class="font-rockinsoda text-navy text-2xl ">THERESA, DOPE INITIATIVES</p> 
                </div>
            </div>
            <div class="flex-shrink-0 h-[500px]">
                <img src="../assets/dope.jpg"  class="w-full object-cover ">
            </div>
            </div>
            </div>
                
        
    
            </div>
    
            <!-- Scroll Buttons -->
            <div class="float-left space-x-2  -mt-24 mr-12">
            <button @click="scrollLeft" 
                    class=" top-1/2 right-0 transform -translate-y-1/2 z-10 border-2  rounded-full p-4 bg-white text-navy focus:outline-none hover:bg-navy hover:text-white transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
            </button>
            
            <button @click="scrollRight" 
            class=" top-1/2 left-0 transform -translate-y-1/2 z-10 border-2  rounded-full p-4 bg-white text-navy focus:outline-none hover:bg-navy hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
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