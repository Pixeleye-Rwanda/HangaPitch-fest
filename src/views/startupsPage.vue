    <template>
  <div class="">
        <div class="w-full mt-28 ml-0 md:ml-6  ">

    
            <div class="flex flex-col md:flex-row ">
              <!-- Left Section with Main Image and Text -->
              <div class="w-full md:w-2/3 mb-4 md:mb-0 px-4">
                <img src="../assets/speaker1.jpg" alt="Students" class="w-full h-auto  zoom-in" ref="leftContent">
                <p class="font-gramatika mt-8 text-darknavy text-lg sm:text-xl zoom-in" ref="text1">
                    The largest in-person technology event in Rwanda designed to ignite &                  
                    inspire innovation, Hanga Pitchfest is returning for its fourth edition.</p>               
                <button class="mr-8 mt-6 p-2 px-8 font-gramatika bg-tangerine text-white font-semibold zoom-in button-hover" ref="button">
                  Pitch at hanga <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </button>          
              </div>
          
              <!-- Right Side with Vertically Stacked Images -->
              <div class="w-full md:w-1/3 space-y-4 px-4 lg:mr-12 sm:mr-0">
                <img src="../assets/speaker2.jpg" alt="Speaker" class="w-full h-auto zoom-in" ref="image1">
                <img src="../assets/audience.jpg" alt="Audience" class="w-full h-auto zoom-in" ref="image2">
              </div>
            </div>

          </div>

        <!-- third section -->
        <div class="flex flex-wrap justify-center  lg:mr-4 sm:mr-0 lg:justify-between gap-y-20 gap-x-8 lg:gap-x-20  px-4 lg:px-10 mt-24 lg:mt-48">
            <div class="w-full sm:w-1/2 lg:w-1/4 fade-in space-y-4 text-center lg:text-left" ref="item1">
                <img src="../assets/1line.png" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0" >
                    <hr class="border-t border-gray-300">
                    <div class="space-y-2">
                        <p class="font-rockinsoda text-5xl text-navy">GET FUNDING</p>
              
                        
                        <p class="text-lightblue  text-lg font-gramatika mt-4 text-justify">At Hanga, you will secure
                        the essential funding you need
                        to elevate your startup and turn your innovative ideas into reality.</p>
                        
              
                    </div>
                
            </div>
          
            <div class="w-full sm:w-1/2 lg:w-1/4 fade-in space-y-4 text-center lg:text-left" ref="item2">
                <img src="../assets/2line.png" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0" >
                <hr class="border-t border-gray-300">
                <div class="space-y-2">
                    <p class="font-rockinsoda text-5xl text-navy">MINICT</p>
                    
                    <p class="text-lightblue text-lg font-gramatika mt-4">Join Hanga to network with industry giants, 
                    potential investors, and like-minded entrepreneurs for collaboration and growth</p>
                
                </div>
            </div>
          
            <div class="w-full sm:w-1/2 lg:w-1/3 fade-in space-y-4 text-center lg:text-left" ref="item3">
                <img src="../assets/3line.png" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0" >
                <hr class="border-t border-gray-300">
                <div class="space-y-2 ">
                    <p class="font-rockinsoda text-5xl text-navy">ACCESS MENTORS</p>
          
                    
                    <p class="text-lightblue text-lg font-gramatika">Tap into Hanga’s mentorship pool.
                    Learn from the best to
                    hone your business strategies and achieve lasting success.</p>
                
                </div>
            </div>
          </div>
          

        <!--fourth section -->
        <FilteredStarups  />
      
        <!-- fith section -->
        <div class="relative h-auto min-h-[600px]"> 
            <div class="mt-10 py-16 sm:mt-32 bg-cover h-full" :style="{ backgroundImage: `url(${require('@/assets/notched.svg')})`}">
              <div class="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between">
                <!-- Text Section -->
                <div class="space-y-8 sm:space-y-10 lg:space-y-16 mt-20 sm:mt-32 lg:mt-26 ml-4 sm:ml-8 md:ml-6 p-4 sm:p-6 md:p-8 w-full lg:w-7/12 text-left">
                  <div class="slide-up" ref="texty">
                    <h2 class="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 3xl:text-8xl text-white font-rockinsoda mb-4">
                        JOIN OUR STARTUP
                    </h2>
                    <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl 3xl:text-8xl text-white font-rockinsoda mb-4">
                        NETWORK
                    </h2>
                  </div>
                  <div class="slide-up" ref="texts">
                    <img src="../assets/Group 63.svg" class="mt-28 slide-up" ref="textis">
                  </div>

                </div>
                <!-- Image Section -->
                <div class="text-white mt-32 p-4 sm:p-6 md:p-8  lg:justify-end lg:flex-shrink-0 w-full lg:w-auto lg:max-w-[40%] flex justify-center">
                    <div class="">
                    <p class="text-2xl mb-1 w-[80vh] text-white text-2xl font-gramatika">
                        The largest in-person technology event in Rwanda designed to ignite & inspire innovation.
                        The largest in-person technology event in Rwanda designed to ignite & inspire innovation.
                    </p>

                    <button class="bg-tangerine text-white py-2 mt-12 px-6 hover:bg-orange-500 slide-up button-hover " ref="button3">
                        Pitch at hanga <i class="fa fa-chevron-right h-2 w-2" aria-hidden="true"></i>
                
                    </button>
                </div>
                
                </div>
                
              </div>
              
            </div>
          </div>

        <!-- section six -->
        <div class="ml-4 md:ml-12 mt-12 md:mt-32">
            <div class="mt-8 md:mt-12 md:ml-16 overflow-hidden">
              <div ref="videoWrapper" class="flex space-x-4 md:space-x-8 overflow-x-auto scroll-smooth">
                <!-- First text Block -->
                <div class="flex-shrink-0   flex  flex-col md:flex-row space-y-2 w-[300px] h-[400px] md:w-[600px] md:h-[600px]">
                  <div class="relative flex flex-col md:flex-row w-full h-full">
                    <div class="mt-8 md:mt-24">
                      <span class="font-rockinsoda text-tangerine text-5xl md:text-7xl ml-2">"</span>
                      <p class="text-navy text-lg md:text-2xl font-gramatika font-bold w-[40vh] md:w-[60vh] -mt-6 md:-mt-8 p-2 md:p-4 text-center">
                        Winning Hanga Pitchfest has been a game-changer for Lifesten Health.It propelled us into the spotlight and opened doors to 
                        investors and esteemed clients, who were captivated by the impact that we could create together.
                      </p>
                      <div class="flex space-x-2 ml-2">
                        <hr class="w-[30px] md:w-[50px] border-2 mt-2 border-navy">
                        <p class="font-rockinsoda text-navy text-lg md:text-2xl">Peace Ndoli, Lifesten Health</p>
                      </div>
                    </div>
                    <div class="flex-shrink-0 h-[300px] mt-10 lg:mt-0 md:h-[500px]">
                      <img src="../assets/Group 41.svg" class="w-full h-full object-cover">
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
    import FilteredStarups from '@/components/FilteredStarups.vue';

    export default{
        name:"startupsPage",
        components:{
          FilteredStarups
        },
        methods: {
            scrollLeft() {
            this.$refs.videoWrapper.scrollBy({ left: -500, behavior: 'smooth' });
            },
            scrollRight() {
            this.$refs.videoWrapper.scrollBy({ left: 500, behavior: 'smooth' });
            }
        },

               

                
            mounted() {
                const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                    entry.target.classList.add('slide-up-visible');
                    entry.target.classList.add('zoom-in-visible');
                    entry.target.classList.add('fade-in-visible');
                
                    }
                })
                });
                 
                
    const targetId = this.$route.hash.substring(1);
    const target = document.getElementById(targetId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

                // Observe all elements with the zoom-in class
                const elements = this.$refs;
                for (let key in elements) {
                if (elements[key]) {
                    observer.observe(elements[key]);
                }
                }
                // Observe all elements with the fade-in class
            const items = [this.$refs.item1, this.$refs.item2, this.$refs.item3];
            items.forEach(item => {
                observer.observe(item);
            });
            }
            
            
            
            }
    </script>

    <style>
    .slide-up {
        transform: translateY(20px);
        opacity: 0;
        transition: all 2s ease-in-out;
    }

    .slide-up-visible {
        transform: translateY(0);
        opacity: 1;
    }
    .zoom-in {
        transform: scale(0.95);
        opacity: 0;
        transition: transform 1s ease-in-out, opacity 0.90s ease-in-out;
    }

    .zoom-in-visible {
        transform: scale(1);
        opacity: 1;
    }

    .button-hover {
        transition: background-color 0.3s ease, transform 0.3s ease;
    }

    .button-hover:hover {
        transform: scale(1.05); 
    }

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