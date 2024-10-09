<template>
    <div class="overflow-hidden sm:overflow-x-hidden">
      <div class="min-h-screen">

        <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px]">
          <div class="absolute inset-0 bg-black opacity-30"></div>
          <img src="../assets/aboutus.jpg" alt="Background" class="h-full w-full object-cover">
          
          <Navbar class="absolute top-0 left-0 w-full"/>
        
          <div class="font-rockinsoda absolute text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl top-2/4 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:2/4 sm:text-left" ref="text">
            <p>LEADING INNOVATION</p>
            <p>AT THE FOREFRONT</p>
          </div>

          <div class="absolute top-3/4 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:2/4 sm:text-left">
           
                
         <p class="font-gramatika text-white text-2xl">Our mission is to discover and nurture Rwanda's most </p>
          <p class="font-gramatika text-white text-2xl"> innovative tech-enabled startups</p>
             
          </div>

    
    
        </div>

          <!-- second section -->
          <div class="ml-4 sm:ml-8 md:ml-12 lg:ml-12 xl:ml-20 mt-10 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20">
            <p class="text-darknavy font-gramatika text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Empowerment is central to Hanga's mission, focusing on enabling
            </p>
            <p class="text-darknavy font-gramatika text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              individuals and communities.
            </p>
          </div>
          

           <!-- third section  -->
           <div className="flex flex-col lg:mr-4 lg:ml-12 lg:flex-row sm:mt-12 lg:mt-24 w-full px-4 lg:px-8 xl:px-8 py-12  mx-auto">
            <div className="lg:w-1/3 space-y-4 lg:mt-16 mb-8 lg:mb-0 lg:pr-8 self-start">
              <p className="text-3xl md:text-4xl lg:text-7xl xl:text-8xl font-rockinsoda text-navy">FUELING</p>
              <p className="text-3xl md:text-4xl lg:text-7xl xl:text-8xl font-rockinsoda text-navy">INNOVATION</p>
            </div>
            <div className="lg:w-3/5 space-y-8 self-start">
              <p className="text-navy text-justify font-gramatika text-sm md:text-base lg:text-xl 2xl:text-2xl">
                Hanga PitchFest offers a platform for tech-entrepreneurs to present 
                their groundbreaking work to a wide audience, including potential investors, 
                technology company founders, and private sector business leaders.
              </p>
              <p className="text-navy text-justify font-gramatika text-sm md:text-base lg:text-xl 2xl:text-2xl">
                Selected startups have the opportunity to connect with Angel investors, 
                venture capitalists, and other key stakeholders who can provide 
                the necessary funding and support to scale their businesses.
              </p>
              <p className="text-navy text-justify  font-gramatika text-sm md:text-base lg:text-xl 2xl:text-2xl">
                Our all-day event includes innovators' showcases, masterclasses for 
                entrepreneurs, live music performances, and a live pitching competition 
                for the top 5 startups.
              </p>
            </div>
          </div>

            <!-- section four  -->
            <div class="relative w-full flex-shrink-0 mt-20">
              <img src="../assets/malik.jpg" class="w-full max-h-[700px] h-[50vh] sm:h-[100px] lg:h-[600px] object-cover">
              <div class="absolute inset-0 bg-abtcolor"></div>
            </div>

             <!-- section five  -->
             <div class="ml-4 mr-4 xl:mt-4 2xl:-mt-12 mlg:mr-10 md:ml-12 flex flex-col md:flex-row lg:space-x-16 items-start justify-between">
              <div class="flex-1  mt-12 xl:mt-2 2xl:mt-60 md:mt-8 max-w-full md:max-w-[50%]">
                <div class="space-y-2  md:mt-28 ">
                  <p class="text-4xl md:text-7xl font-rockinsoda text-navy">HEAR FROM OUR </p>
                  <p class="text-4xl md:text-7xl font-rockinsoda text-navy">SPONSORS</p>
                </div>
            
                <div class="mt-10">
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
                </div>
              </div>
            
              <div class="flex-1 h-[300px] sm:mt-10 md:h-auto  md:mt-32 xl:mt-36 2xl:mt-52 max-w-full md:max-w-[50%]">
                <img src="../assets/speakerP.jpg" class="w-full mt-10 h-full  object-cover">
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
                      <div class="absolute w-full left-0 w-1/3 h-auto left-[60%]">
                        <div class="space-y-4 text-justify ">
                          <p class="font-gramatika text-8xl font-bold ">Rwf 600 M</p>
                          <p class="font-gramatika text-lg font-normal ">In investments</p>
                        </div>
                        <hr class="w-[500px] border-lineColor mt-8 mb-8 ">
      
                        <div class="flex space-x-16">
      
                         <div class="text-justify space-y-4">
                          <p class="font-gramatika text-7xl" >130+</p>
                          <p>Startups</p>
                         </div>
      
                         <div class="text-justify space-y-4">
                        <p class="font-gramatika  text-7xl" > 20+ </p>
                        <p>Hanga SRH</p>
                        </div>
      
                         <div class="text-justify space-y-4">
                          <p class="font-gramatika text-7xl">190+</p>
                          <p>Hanga hubs</p>
      
                         </div>
                        </div>
      
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <!-- section 7 -->
            <div class="mt-24 md:mt-36 pl-4 md:pl-12 pr-4 w-full">
              <h1 class="font-rockinsoda text-navy text-6xl md:text-7xl">HANGA IS</h1>
              <h1 class="font-rockinsoda text-navy text-6xl md:text-7xl">ORGANIZED BY</h1>
            
              <div class="flex flex-wrap mt-12 md:mt-16 w-full">
                <div class="h-[180px] md:h-[230px] w-full md:w-1/3">
                  <a href="https://www.minict.gov.rw/" target="_blank"><img src="../assets/coat.svg" class="w-full h-full object-contain border border-tangerine p-4 md:p-10"></a>
                </div>
                <div class="h-[180px] md:h-[230px] w-full md:w-1/3">
                 <a href="https://rdb.rw/" target="_blank"><img src="../assets/flag.svg" class="w-full h-full object-contain border border-tangerine p-4 md:p-10"></a> 
                </div>
                <div class="h-[180px] md:h-[230px] w-full md:w-1/3">
                  <a href="https://www.undp.org/" target="_blank"><img src="../assets/undp.svg" class="w-full h-full object-contain border border-tangerine p-4 md:p-10"></a>                  
                </div>
              </div>
            </div>
            
            
            
            


            <!-- section 8------ -->
            <div class="ml-0 lg:ml-12 mt-24">
              <div>
                <h1 class="font-rockinsoda text-navy text-7xl">EVENT HIGHLIGHTS</h1>
                <p class="font-gramatika text-navy text-xl mt-4">Watch our past thrilling events highlights</p>
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
                      <p class="font-rockinsoda text-black text-5xl">Hanga 2023</p>
                      <p class="font-rockinsoda text-black text-3xl">Oct 23</p>
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
                      <p class="font-rockinsoda text-black text-5xl">Hanga 2022</p>
                      <p class="font-rockinsoda text-black text-3xl">Oct 22</p>
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
                      <p class="font-rockinsoda text-black text-5xl">Hanga 2021</p>
                      <p class="font-rockinsoda text-black text-3xl">Oct 21</p>
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
             <div class="mt-12  pl-4 md:pl-12 pr-4 w-full">
              <div>
                <h1 class="font-rockinsoda text-navy text-5xl md:text-7xl">EVENT GALLERY</h1>
              </div>
              <div class="mt-8 space-y-4 md:space-y-0">
                <!-- First row of images -->
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
                <!-- Second row of images -->
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
                <!-- Third row of images -->
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
                <!-- Fourth row of images -->
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
                <!-- Fifth row of images -->
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
                
                <!-- Follow button -->
                <div class="flex items-center justify-center mt-2">
                  <button class="font-gramatika text-black text-md bg-white  absolute p-2 rounded-md py-2 px-4 shadow-md"><a href="https://www.instagram.com/hangapitchfest/" target="_blank">Follow us on Instagram</a></button>
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
          entry.target.classList.add('fade-in-visible-animation');
          entry.target.classList.add('slide-up-visible-animation');


 
        }
      });
    });

      
    // Observe all elements with the zoom-in class
    const elements = this.$refs;
    for (let key in elements) {
      if (elements[key]) {
        observer.observe(elements[key]);
      }
    }
  
    // Observe both the text and button elements
    observer.observe(this.$refs.text);
    observer.observe(this.$refs.texty);




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
</style>