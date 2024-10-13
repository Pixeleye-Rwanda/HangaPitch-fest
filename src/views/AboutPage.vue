<template>
    <div class="overflow-hidden sm:overflow-x-hidden">
      <div class="min-h-screen">

        <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px]">
          <div class="absolute inset-0 bg-black opacity-30"></div>
          <img src="../assets/aboutus.jpg" alt="Background" class="h-full w-full object-cover">
          
          <Navbar class="absolute top-0 left-0 w-full"/>
        
          <div class="font-rockinsoda absolute  text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl top-2/4 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:2/4 text-center sm:text-left" ref="text">
            <p v-for="(line, index) in heroText" :key="index" class="hero-text" :style="{ animationDelay: `${index * 0.8}s` }">
              {{ line }}
            </p>
          </div>

          <div class="absolute top-3/4 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:2/4 sm:text-left">
           
            <p v-for="(line, index) in baseText" :key="index" class="hero-text font-gramatika text-white text-2xl" :style="{ animationDelay: `${index * 0.8}s` }" >
              {{ line }}
            </p>
        
         
             
          </div>

    
    
        </div>

          <!-- second section -->
           <div ref="observerElement">
          <div class="ml-4 sm:ml-8 md:ml-12 lg:ml-12 xl:ml-20 mt-10 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20">
            <p class="text-darknavy font-gramatika text-sm sm:text-base md:text-lg lg:text-xl fade-in xl:text-2xl">
              Empowerment is central to Hanga's mission, focusing on enabling
            </p>
          
            <p class="text-darknavy font-gramatika text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl fade-in">
              individuals and communities.
            </p>
          </div>
          </div>
          

           <!-- third section  -->
            <div ref="observerElement1">
           <div className="flex flex-col lg:mr-4 lg:ml-12 lg:flex-row sm:mt-12 lg:mt-24 w-full px-4 lg:px-8 xl:px-8 py-12  mx-auto">
            <transition name="fade-slide-left" appear v-if="isVisible1">
            <div className="lg:w-1/3 space-y-4 lg:mt-16 mb-8 lg:mb-0 lg:pr-8 self-start">
              <p className="text-3xl md:text-4xl lg:text-7xl xl:text-8xl font-rockinsoda text-navy">FUELING</p>
              <p className="text-3xl md:text-4xl lg:text-7xl xl:text-8xl font-rockinsoda text-navy">INNOVATION</p>
            </div>
          </transition>
            <div className="lg:w-3/5 space-y-8 self-start">

              <transition name="fade-slide-up" v-if="isVisible1" appear >
              <p className="text-navy text-justify font-gramatika text-sm md:text-base lg:text-xl 2xl:text-2xl">
                Hanga PitchFest offers a platform for tech-entrepreneurs to present 
                their groundbreaking work to a wide audience, including potential investors, 
                technology company founders, and private sector business leaders.
              </p>
            </transition>
             <transition name="fade-slide-up" v-if="isVisible1" appear >

              <p className="text-navy text-justify font-gramatika text-sm md:text-base lg:text-xl 2xl:text-2xl">
                Selected startups have the opportunity to connect with Angel investors, 
                venture capitalists, and other key stakeholders who can provide 
                the necessary funding and support to scale their businesses.
              </p>
              </transition>

             <transition name="fade-slide-up" v-if="isVisible1" appear >

              <p className="text-navy text-justify  font-gramatika text-sm md:text-base lg:text-xl 2xl:text-2xl">
                Our all-day event includes innovators' showcases, masterclasses for 
                entrepreneurs, live music performances, and a live pitching competition 
                for the top 5 startups.
              </p>
              </transition>
            </div>
          </div>
        </div>

            <!-- section four  -->
            <div class="relative w-full flex-shrink-0 mt-20">
              <img src="../assets/malik.jpg" class="w-full max-h-[700px] h-[50vh] sm:h-[100px] lg:h-[600px] object-cover">
              <div class="absolute inset-0 bg-abtcolor"></div>
            </div>

             <!-- section five  -->
              <div ref="observerElement2">
             <div class="ml-4 mr-4 xl:mt-4 2xl:-mt-12 mlg:mr-10 md:ml-12 flex flex-col md:flex-row lg:space-x-16 items-start justify-between">
              <div class="flex-1  mt-12 xl:mt-2 2xl:mt-60 md:mt-8 max-w-full md:max-w-[50%]">
                <transition name="fade-slide-up" appear v-if="isVisible2">
                <div class="space-y-2  md:mt-28 ">
                  <p class="text-4xl md:text-8xl font-rockinsoda text-navy">HEAR FROM OUR </p>
                  <p class="text-4xl md:text-8xl font-rockinsoda text-navy">SPONSORS</p>
                </div>
              </transition>
            
                <div class="mt-10">
                  <transition name="fade-slide-left" appear  v-if="isVisible2">
                  <div class="text-justify space-y-12 w-full">
                    <p class="text-navy font-gramatika text-lg md:text-md">
                      "We are delighted, as Jasiri, to be part of Hanga Pitchfest. We believe in the power of entrepreneurship to transform our society, and Hanga Pitchfest calls for action for those seeking to challenge the status quo and build solutions that will improve the lives of many." 
                      - Aline Kabanda, East Africa Regional Director, Jasiri.
                    </p>
            
                    <p class="text-navy font-gramatika text-lg md:text-md">
                      “We have always been partners with the government on the journey of building a resilient knowledge-based economy, and it is exciting that over the last 3 years Hanga Pitchfest has been shining a light on innovators. We hope this stirs up more innovators as well as partners to build the digital economy we all are proud of.” - ICT Chamber
                    </p>
            
                    <p class="text-navy font-gramatika text-lg md:text-md">
                      "Partnership with Hanga PitchFest is a must, as it is the only way to support young upcoming entrepreneurs. Having an entrepreneurial mindset is the only way to solve problems worldwide. This will help the youth to move from a survival mentality to thriving and building their country, continent, and the world at large!" - Choose Kigali
                    </p>
                  </div>
                </transition>
                </div>
              </div>
             <transition name="fade-slide-up" appear v-if="isVisible2">
              <div class="flex-1 h-[300px] sm:mt-10 md:h-auto  md:mt-32 xl:mt-36 2xl:mt-52 max-w-full md:max-w-[50%]">
                <img src="../assets/speakerP.jpg" class="w-full mt-10 h-full  object-cover">
              </div>
            </transition>
            </div>
          </div>
            

              <!-- section six  -->
              <div class="relative h-auto min-h-[600px]"> 
                <div class="mt-24 sm:mt-32 bg-cover h-full" :style="{ backgroundImage: `url(${require('@/assets/notched.svg')})`}">
                  <div class="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between">
                    <!-- Text Section -->
                    <div class="space-y-8 sm:space-y-10 lg:space-y-16 mt-20 sm:mt-32 lg:mt-26 ml-4 sm:ml-8 md:ml-12 p-4 sm:p-6 md:p-8 w-full lg:w-9/12 text-left">
                     
                        <div class=" slide-up  h-[430px] w-[470px] flex-shrink-0" ref="texty">
                    
                          <p class="font-rockinsoda text-4xl ml-32 mt-10 absolute text-white ">FUELING INNOVATION</p>
                      <img src="../assets/rwanda.svg" alt="" class="-mt-12 w-full h-full object-cover ">
                      <img src="../assets/2021.svg "  class="absolute top-40 left-44 h-32 w-32">

  
                    
                      </div>
                      <div class=" slide-up w-9/12" ref="texts">
            
                        <p class="text-lg sm:text-2xl md:text-3xl lg:text-2xl text-white font-gramatika">The largest in-person technology event in Rwanda designed to ignite & 
                          inspire innovation.</p>
                      </div>
                 
                    </div>
                    <!-- Image Section -->
                    <div class="text-white mt-40 p-4 sm:p-6 md:p-8  lg:justify-end lg:flex-shrink-0 w-full lg:w-auto lg:max-w-[50%] flex justify-center">
                      <div class="absolute w-full left-0 w-1/3 h-auto left-[60%] mr-20">
                        
                        <div class="space-y-4 text-justify " >
                          <p class="font-gramatika text-7xl font-bold ">Rwf 600 M</p>
                          <p class="font-gramatika text-lg font-normal ">In investments</p>
                        </div>
                      
                        <hr class="w-[500px] border-lineColor mt-8 mb-8 ">
                          <div class="flex space-x-16 ">
                        <div class=""  v-for="(item, index) in statsItems" :key="index">
      
                         <div class="text-justify space-y-4  ">
                          <div class="flex space-x-2">
                          <p ref="countUp" class="font-gramatika text-6xl">{{ item.currentValue }} </p>
                          <p class="text-6xl">{{ item.suffix }}</p>
                        </div>
                          <p>{{ item.description }}</p>
                        </div>
                      </div>
      
                        
                        </div>
                     
      
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            <!-- section 7 -->
             <div ref="observerElement3">
            <div class="mt-24 md:mt-36 pl-4 md:pl-12 pr-4 w-full">
              <transition name="fade-slide-left" appear v-if="isVisible3">
                <div>
              <h1 class="font-rockinsoda text-navy text-4xl md:text-5xl" >HANGA IS</h1>
              <h1 class="font-rockinsoda text-navy text-4xl md:text-5xl">ORGANIZED BY</h1>
            </div>
            </transition>
              <div class="flex flex-wrap mt-12 md:mt-16 w-full">
                <transition appear name="fade-slide-up" v-if="isVisible3">
                <div class="h-[180px] md:h-[230px] w-full md:w-1/3 ">
                  <img src="../assets/coat.svg" class="w-full h-full object-contain border border-tangerine p-4 md:p-10">
                </div>
              </transition>

              <transition appear name="fade-slide-up" v-if="isVisible3">

                <div class="h-[180px] md:h-[230px] w-full md:w-1/3">
                 <a href="https://rdb.rw/" target="_blank"><img src="../assets/flag.svg" class="w-full h-full object-contain border border-tangerine p-4 md:p-10"></a> 
                </div>
                </transition>

                <transition appear name="fade-slide-up" v-if="isVisible3">

                <div class="h-[180px] md:h-[230px] w-full md:w-1/3">
                  <a href="https://www.undp.org/" target="_blank"><img src="../assets/undp.svg" class="w-full h-full object-contain border border-tangerine p-4 md:p-10"></a>                  
                </div>
                </transition>
              </div>
            </div>
          </div>
            
            
            
            


            <!-- section 8------ -->
            <div class="ml-0 lg:ml-12 mt-24">
              <div>
                
                <h1 class="font-rockinsoda text-navy text-5xl fade-in ">EVENT HIGHLIGHTS</h1>
                <p class="font-gramatika text-navy text-xl mt-4 fade-in">Watch our past thrilling events highlights</p>
              </div>
          
              <!-- Scrollable Videos Section -->
              <div class="relative mt-12 overflow-hidden">
             
                <!-- Videos Wrapper--->
                <div ref="videoWrapper" class="flex space-x-8 overflow-x-auto overflow-x-hidden scroll-smooth">
                  <!-- First Video Block -->
                  <div class="flex-shrink-0 flex flex-col space-y-4 w-[600px] h-[600px]">
                    <div class="relative w-full h-full">
                      <iframe
                        class="absolute top-0 left-0 w-full h-full object-cover"
                        src="https://www.youtube.com/embed/fTGd2cavRys"
                        title="'Loopa' is the Winner of Hanga Pitchfest 2023 || Awarded by President Kagame"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                      </iframe>
                    </div>
                    <div class="space-y-2">
                      <p class="font-rockinsoda text-black text-5xl fade-in">Hanga 2023</p>
                      <p class="font-rockinsoda text-black text-3xl fade-in">Oct 23</p>
                    </div>
                  </div>
          
                  <!-- Second Video Block -->
                  <div class="flex-shrink-0 flex flex-col space-y-4 w-[600px] h-[600px]">
                    <div class="relative w-full h-full">
                      <iframe
                        class="absolute top-0 left-0 w-full h-full object-cover"
                        src="https://www.youtube.com/embed/C9PCtKYnOus"
                        title="'Loopa' is the Winner of Hanga Pitchfest 2023 || Awarded by President Kagame"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                      </iframe>
                    </div>
                    <div class="space-y-2">
                      <p class="font-rockinsoda text-black text-5xl fade-in">Hanga 2022</p>
                      <p class="font-rockinsoda text-black text-3xl fade-in">Oct 22</p>
                    </div>
                  </div>
          
                  <!-- Third Video Block -->
                  <div class="flex-shrink-0 flex flex-col space-y-4 w-[600px] h-[600px]">
                    <div class="relative w-full h-full">
                      <iframe
                        class="absolute top-0 left-0 w-full h-full object-cover"
                        src="https://www.youtube.com/embed/CngbrG36R2I"
                        title="'Loopa' is the Winner of Hanga Pitchfest 2023 || Awarded by President Kagame"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                      </iframe>
                    </div>
                    <div class="space-y-2">
                      <p class="font-rockinsoda text-black text-5xl fade-in">Hanga 2021</p>
                      <p class="font-rockinsoda text-black text-3xl fae-in ">Oct 21</p>
                    </div>
                  </div>
                </div>
          
                <!-- Scroll Buttons -->
                 <div class="float-right space-x-2 mr-8">
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

             <!-- section 9 --->
              <div ref="observerElement4">
             <div class="mt-20  pl-4 md:pl-12 pr-4 w-full" v-if="isVisible4" >
              
                <transition appear name="fade-slide-up">
                  <div>
                <h1 class="font-rockinsoda text-navy text-4xl md:text-5xl">EVENT GALLERY</h1>
                </div>
              </transition>
              
              <div class="mt-8 space-y-4 md:space-y-0">
                <!-- First row of images -->
                 <transition name="slide-left" appear v-if="isVisible4">
                <div class="flex flex-wrap justify-start w-full">
                  <div class="h-[180px] md:h-[215px] w-1/2  md:w-1/5">
                    <img src="../assets/1.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/2.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/3.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/4.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px]  w-1/2  md:w-1/5">
                    <img src="../assets/5.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:hidden w-1/2 md:w-1/5">
                    <img src="../assets/3.jpg" class="w-full h-full object-cover">
                  </div>
                </div>
              </transition>
                <!-- Second row of images -->
                <transition name="slide-right" appear v-if="isVisible4">

                <div class="flex flex-wrap justify-start w-full">
                  <div class="h-[180px] md:h-[215px]  w-1/2 md:w-1/5">
                    <img src="../assets/6.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/7.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/8.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/9.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/10.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:hidden w-1/2 md:w-1/5">
                    <img src="../assets/8.jpg" class="w-full h-full object-cover">
                  </div>
                </div>
                </transition>

                <!-- Third row of images -->
                <transition name="slide-left" appear v-if="isVisible4">

                <div class="flex flex-wrap justify-start w-full">
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/11.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/12.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/13.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/14.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/15.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:hidden w-1/2 md:w-1/5">
                    <img src="../assets/12.jpg" class="w-full h-full object-cover">
                  </div>
                </div>
                </transition>
                <!-- Fourth row of images -->
                <transition name="slide-right" appear v-if="isVisible4">

                <div class="flex flex-wrap justify-start w-full">
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/17.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/18.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/19.png" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/20.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/21.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:hidden w-1/2 md:w-1/5">
                    <img src="../assets/18.jpg" class="w-full h-full object-cover">
                  </div>
                </div>
                </transition>
                <!-- Fifth row of images -->
                <transition name="slide-left" appear v-if="isVisible4">

                <div class="flex flex-wrap justify-start w-full">
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/22.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/23.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/24.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/14.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                    <img src="../assets/26.jpg" class="w-full h-full object-cover">
                  </div>
                  <div class="h-[180px]  md:hidden  w-1/2 md:w-1/5">
                    <img src="../assets/23.jpg" class="w-full h-full object-cover">
                  </div>
                </div>
                </transition>
            
                <!-- Follow button -->
                <transition name="fade-slide-up" appear v-if="isVisible4">

                <div class="flex items-center justify-center mt-2">
                  <button class="font-gramatika text-black text-md bg-white  absolute p-2 rounded-md py-2 px-4 shadow-md"><a href="https://www.instagram.com/hangapitchfest/" target="_blank">Follow us on Instagram</a></button>
                </div>
                </transition>
              </div>
            
            </div>
          </div>
            

            <!-- Newsletter signup section -->

      <NewsLetter/>
    
      <!-- Footer section -->
      
    
      <FooterPage/>
</div>
        
    </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
import FooterPage from '@/components/footerPage.vue';
import NewsLetter from '@/components/NewsLetter.vue';
export default{
    name:"AboutUs",
    components:{
            Navbar,
            FooterPage,
            NewsLetter
        },

        data(){

          return{
            heroText: [
        'LEADING INNOVATION',
        'AT THE FOREFRONT',
        
      ],

      baseText:[
          'Our mission is to discover and nurture Rwandas most ',
        'innovative tech-enabled startups'
      ],

      statsItems: [
        {  finalValue: 130, currentValue: 0, suffix: '+', description: 'Startups' },
        {  finalValue: 20, currentValue: 0, suffix: '+', description: 'Hanga SRH' },
        { finalValue: 190, currentValue: 0, suffix: '+', description: 'Hanga Hubs' },
      ],
      startX: 0,

      isVisible:false,
      isVisible1:false,
      isVisible2:false,
      isVisible3:false,
      isVisible4:false,
          }

        },

        methods: {
    scrollLeft() {
      this.$refs.videoWrapper.scrollBy({ left: -500, behavior: 'smooth' });
    },
    scrollRight() {
      this.$refs.videoWrapper.scrollBy({ left: 500, behavior: 'smooth' });
    },

    initiativeAnimations() {
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
      }
    });
  });

  observer.observe(this.$refs.observerElement);
},
missoutAnimations(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible1 = true;
      }
    });
  });

  observer.observe(this.$refs.observerElement1);
},
initScrollAnimations() {
      const fadeElements = document.querySelectorAll('.fade-in');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      }, { threshold: 0.1 });

      fadeElements.forEach(el => observer.observe(el));
    },

blogAnimations() {
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      this.isVisible2 = true; 
    }
  });
}, {
  threshold: 0.5  
});

observer.observe(this.$refs.observerElement2);
},
initCountUpAnimation() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.animateValue(entry.target, 0, parseInt(entry.target.dataset.value), 2000);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      this.$refs.countUp.forEach((el, index) => {
        el.dataset.value = this.statsItems[index].finalValue;
        observer.observe(el);
      });
    },

    animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        obj.innerHTML = currentValue;
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    },

galleryAnimations() {
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      this.isVisible3 = true; 
    }
  });
}, {
  threshold: 0.5  
});

observer.observe(this.$refs.observerElement3);
},

iconsAnimations() {
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      this.isVisible4 = true; 
    }
  });
}, {
  threshold: 0.5  
});

observer.observe(this.$refs.observerElement4);
},
  },

  mounted() {
    this.initiativeAnimations();
    this.missoutAnimations();
    this.initScrollAnimations();
    this.initCountUpAnimation();
    this.blogAnimations();
    this.galleryAnimations();
    this.iconsAnimations();
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

      
 
  
    // Observe both the text and button elements
    observer.observe(this.$refs.text);
    observer.observe(this.$refs.texty);
    observer.observe(this.$refs.texts);




  },

}


</script>

<style>

.slide-up {
  transform: translateY(20px);
  opacity: 0;
  transition: all 2s ease-in-out;
}

.button-hover {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button-hover:hover {
  transform: scale(1.05); 
}


.scrollbar-hide {
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; 
}

  

.hero-text {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
}

.hero-button {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 1.5s;
}

.hero-image {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
  animation-delay: 2s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }

  
}

.fade-in {
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
}

.fade-in-visible {
  opacity: 1;
}

.slide-up-enter-active,
.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 0.7s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0); /* Ensure Y-axis is reset to 0 */
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0); /* Reset X-axis */
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0); /* Reset X-axis */
}
/* General Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.fade-enter, 
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Fade and Slide Up */
.fade-slide-up-enter-active {
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.fade-slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Fade and Slide Left */
.fade-slide-left-enter-active {
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1); /* Even slower and more natural */
}
.fade-slide-left-enter-from {
  opacity: 0;
  transform: translateX(-80px);
}
.fade-slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Fade and Slide Right */
.fade-slide-right-enter-active {
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1); /* Even slower and more natural */
}
.fade-slide-right-enter-from {
  opacity: 0;
  transform: translateX(80px);
}
.fade-slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Zoom In */
.zoom-enter-active {
  transition: all 0.7s ease;
}
.zoom-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: opacity 1.1s ease-in-out, transform 1.1s ease-in-out;
}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fade-slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(80px);
}


</style>