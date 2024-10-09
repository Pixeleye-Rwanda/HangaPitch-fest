<template>
  <div class="overflow-x-hidden">
    <div class="min-h-screen">
      <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px]">
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <img src="../assets/bghome.jpg" alt="Background" class="h-full w-full object-cover">
        
        <NavBar class="absolute top-0 left-0 w-full" />
      
        <div class="font-rockinsoda absolute text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl top-1/3 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:top-1/4 text-center sm:text-left" ref="text">
          <p>THE LARGEST IN-PERSON</p>
          <p>TECHNOLOGY EVENT IN</p>
          <p>RWANDA</p>
        </div>


        <div class="absolute top-2/3 left-4 sm:left-12 lg:left-20  xl:left-26 ">
          <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            <button class="py-4 px-6 font-gramatika bg-white text-black font-semibold hover:bg-tangerine hover:text-white">
             <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" target="_blank">Apply Now</a> 
            </button>
            <button class="p-3 px-6 font-gramatika border text-white font-semibold hover:bg-tangerine hover:text-black flex items-center space-x-2">
              <span>Impact video</span>
              <i class="fa fa-play-circle" aria-hidden="true"></i>
            </button>
          </div>
          <img src="../assets/gvticons.svg" class="mt-8 max-w-full xl:mt-12" alt="Government Icons">
        </div>
      </div>  

      <div class="w-full bg-white lg:ml-16 sm:ml-0  ">

        <div class="w-full px-4  mt-32 ">
          <p class="font-rockinsoda text-navy text-4xl sm:text-5xl md:text-7xl">IGNITING AND INSPIRING</p>
          <p class="font-rockinsoda text-navy text-4xl sm:text-5xl md:text-7xl">INNOVATION</p>
        </div>

        <div class="flex flex-col md:flex-row mt-20">
          <!-- Left Section with Main Image and Text -->
          <div class="w-full md:w-2/3 mb-4 md:mb-0 px-4">
            <img src="../assets/students.jpg" alt="Students" class="w-full h-auto " ref="leftContent">
            <p class="font-gramatika mt-8 text-darknavy text-lg sm:text-xl " ref="text1">
              We believe in empowering innovators solving some of the dire
            </p>
            <p class="font-gramatika text-darknavy text-lg sm:text-xl" ref="text2">
              challenges in the Rwandan community and abroad
            </p>
            <button class="mr-8 mt-6 py-4 px-10 font-gramatika bg-tangerine text-white font-semibold  button-hover" ref="button">
              <router-link to="/about-us">
                <a href="" class="text-white font-gramatika"> Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
              </router-link>
            </button>          
          </div>
      
          <!-- Right Side with Vertically Stacked Images -->
          <div class="w-full md:w-1/3 space-y-4 px-4 lg:mr-28 sm:mr-0">
            <img src="../assets/speaker.png" alt="Speaker" class="w-full h-auto " ref="image1">
            <img src="../assets/audience.jpg" alt="Audience" class="w-full h-auto " ref="image2">
          </div>
        </div>
      </div>
      
      

      <div class="flex flex-wrap justify-center  lg:mr-4 sm:mr-0 lg:justify-between gap-y-12 gap-x-8 lg:gap-x-16 px-4 lg:px-20 mt-48">
        <div class="w-full sm:w-1/2 lg:w-1/4 fade-in space-y-4 text-center lg:text-left" ref="item1">
          <img src="../assets/Component 1.png" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0">
          <hr class="border-t border-gray-300  mx-auto lg:mx-0">
          <div>
            <p class="font-rockinsoda text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy">130+</p>
            <p class="text-lightblue font-gramatika text-xl sm:text-2xl">Startups</p>
          </div>
        </div>
      
        <div class="w-full sm:w-1/2 lg:w-1/4 fade-in space-y-4 text-center lg:text-left" ref="item2">
          <img src="../assets/Component 1 (1).png" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0">
          <hr class="border-t border-gray-300  mx-auto lg:mx-0">
          <div>
            <p class="font-rockinsoda text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy">10,000+</p>
            <p class="text-lightblue font-gramatika text-xl sm:text-2xl">Attendees</p>
          </div>
        </div>
      
        <div class="w-full sm:w-1/2 lg:w-1/4 fade-in space-y-4 text-center lg:text-left" ref="item3">
          <img src="../assets/Component 1 (2).png" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0">
          <hr class="border-t border-gray-300  mx-auto lg:mx-0">
          <div>
            <p class="font-rockinsoda text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy">RWF600M</p>
            <p class="text-lightblue font-gramatika text-xl sm:text-2xl">Invested in tech startups</p>
          </div>
        </div>
      </div>


      
      <!-- Fourth section -->
      <div class="relative h-auto min-h-[600px]"> 
        <div class="mt-20 py-16  sm:mt-32 bg-cover h-full" :style="{ backgroundImage: `url(${require('@/assets/notched.svg')})`}">
          <div class="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between">
            <!-- Text Section -->
            <div class="space-y-8 sm:space-y-10 lg:space-y-16 mt-20 sm:mt-32 lg:mt-26 ml-4 sm:ml-8 md:ml-12 p-4 sm:p-6 md:p-8 w-full lg:w-7/12 text-left">
              <div class="slide-up" ref="texty">
                <h2 class="text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 3xl:text-8xl text-white font-rockinsoda mb-4">
                  Pitch Your Idea for
                </h2>
                <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl 3xl:text-8xl text-white font-rockinsoda mb-4">
                  Funding
                </h2>
              </div>
              <div class="slide-up" ref="texts">
                <p class="text-xl sm:text-2xl md:text-3xl lg:text-2xl text-white font-gramatika">
                  The largest in-person technology event in Rwanda designed to ignite & inspire innovation, Hanga Pitchfest is returning for its fourth edition.
                </p>
              </div>
              <button class="bg-tangerine text-white text-md sm:text-xl py-3 sm:py-4 px-8 sm:px-12 hover:bg-orange-500 slide-up button-hover" ref="button3">
                <router-link to="/about-us">
                  <a href="" class="text-white font-gramatika"> Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
                </router-link>
              </button>
            </div>
            <!-- Image Section -->
            <div class="text-white mt-12 p-4 sm:p-6 md:p-8  lg:justify-end lg:flex-shrink-0 w-full lg:w-auto lg:max-w-[40%] flex justify-center">
              <img src="../assets/Vector 6.png" class="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none h-auto object-contain slide-up" ref="img2">
            </div>
          </div>
        </div>
      </div>
      
      
      <!-- Fifth section -->
      <div class="ml-4 mr-4 sm:ml-6  mt-32 ">
        <h1 class="font-rockinsoda text-navy text-7xl">WHERE LEADERS INSPIRE</h1>
        <h1 class="font-rockinsoda text-navy text-7xl">YOUR NEXT BIG LEAP</h1>
      
        <div class="flex flex-col lg:flex-row gap-6 mb-20 mt-20">

          <div class="flex-1 md:w-1/2 lg:flex-[1.3] space-y-6"> 
          
            <div class="relative aspect-w-16 h-[60vh] aspect-h-10"> 
              <img src="../assets/mrspeaker.jpg" class="w-full h-full object-cover">
              <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">         
                   <div class="absolute bottom-0 inset-x-0 p-4 text-center">
                  <p class="text-white text-lg text-justify  font-gramatika p-2">
                    <span class="font-rockinsoda text-tangerine text-5xl ml-2">"</span>

                    Hanga Pitchfest a two-fold approach. We are nurturing the rich talents and innovation of our young people,
                    while recognizing the contributions of talented innovators to socio-economic development.
                  </p>
                  <div class="flex space-x-2 ml-2">
                    <hr class="w-[50px] border-2 mt-2">
                    <p class="font-rockinsoda text-white text-2xl">Francis Gatare</p>
                  </div>
                </div>
              </div>
            </div>
      
            <!-- Second Image Block -->
            <div class="relative aspect-w-16 h-[60vh] aspect-h-10"> <!-- Increase aspect ratio -->
              <img src="../assets/whiteman.jpg" class="w-full h-full object-cover">
              <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">       
                         <div class="absolute bottom-0 inset-x-0 p-4 ">
                  <p class="text-white text-lg text-justify font-gramatika p-2">
                    <span class="font-rockinsoda text-tangerine text-5xl ml-2">"</span>

                    There have been, in my opinion, too much talking. We need to act now, 
                    but I believe it is very important to invest in young people here. The time is now.”
                  </p>
                  <div class="flex space-x-2 ml-2">
                    <hr class="w-[50px] border-2 mt-2">
                    <p class="font-rockinsoda text-white text-2xl">Flemming Besenbacher</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <!-- Right Column (Single Large Image) -->
          <div class="relative md:w-full lg:w-3/4 flex-1 lg:flex-[2] aspect-w-16 aspect-h-10 lg:h-auto"> <!-- Increase flex size for this section -->
            <img src="../assets/paula.jpg" class="w-full h-full min-h-[400px]  object-cover">
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">       
              <div class="absolute bottom-0 inset-x-0 p-4 text-center">
                
                <p class="text-white text-justify text-xl font-gramatika p-2">
                  <span class="font-rockinsoda text-tangerine text-5xl ml-2">"</span>
                  Today is a celebration of talent, ambitions and the boundless opportunities that arise 
                  when passion, creativity, determination and the resolve to be self-reliant converge to push the boundaries of innovation.
                </p>
                <div class="flex space-x-2 ml-2">
                  <hr class="w-[50px] border-2 mt-2">
                  <p class="font-rockinsoda text-white text-2xl">Paula Ingabire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    

      <!---------- section six------------ -->
      <div class="px-4  ml-2 sm:px-6 lg:px-12 py-12 lg:py-24">
        <div class="flex flex-col lg:flex-row lg:space-x-8">
          <div class="mb-8 lg:mt-44 sm:mt-20 lg:mb-0 lg:w-1/3">
            <h1 class="font-rockinsoda text-3xl sm:text-6xl text-navy">CHECK OUR INITIATIVES</h1>
            <p class="font-gramatika text-lg sm:text-2xl text-navy mt-2">
              Hanga drives innovation in Rwanda and beyond through strategic initiatives.
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:w-2/3">
            <div class="relative w-full sm:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[85vh]">
              <img src="../assets/hubs.jpg" class="w-full h-full object-cover">
              <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                <div class="absolute bottom-8 left-8">
                  <p class="text-white font-rockinsoda text-4xl sm:text-5xl">HANGA HUBS</p>
                  <div class="mt-4">
                    <p class="text-white font-gramatika text-lg">Addressing the obstacles & gaps limiting early-stage startups.</p>
                    <router-link to="/hub">
                      <a href="" class="text-white font-gramatika underline"> Learn more </a>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="relative w-full sm:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[85vh]">
              <img src="../assets/srs.jpg" class="w-full h-full object-cover">
              <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                <div class="absolute bottom-8 left-8">
                  <p class="text-white font-rockinsoda text-3xl sm:text-5xl">HANGA SRH</p>
                  <div class="mt-4">
                    <p class="text-white font-gramatika">Revolutionizing Sexual and Reproductive Health in Africa.</p>
                    <router-link to="/srh">
                      <a href="" class="text-white font-gramatika underline">Learn more</a>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--------section seven------->
      <div class="relative w-full mt-8 md:mt-16 lg:mt-8 mb-3">
        <img src="../assets/Group .jpg" alt="" class="w-full h-[350px] md:h-80 lg:h-[800px] object-cover">
        <div class="absolute inset-0 flex flex-col mt-32 justify-center px-4 md:px-8 lg:px-12">
          <p class="font-rockinsoda text-white text-3xl md:text-4xl lg:text-7xl mb-4">DON'T MISS OUT</p>
          <div class="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div class="w-full md:w-2/3 lg:w-3/4">
              <p class="text-white font-gramatika text-base md:text-lg lg:text-2xl">
                The largest in-person technology event in Rwanda <br> designed to ignite & inspire innovation, 
                Hanga Pitch <br> Fest is returning for its fourth edition
              </p>
            </div>
            <div class="w-full md:w-1/3 lg:w-1/4 flex justify-start md:justify-end">
              <button class="font-gramatika  text-white  text-xl border rounded-full px-8 py-4 hover:bg-tangerine transition duration-300">
                <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" target="_blank"> Apply Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <!------ section eight ------->
      <div class="space-y-12 mt-32">
        <div class="px-4 mb-20 sm:px-6 md:px-8 lg:px-12 mt-8 md:mt-12 lg:mt-16">
          <div class="relative">
            <h1 class="font-rockinsoda text-4xl sm:text-5xl md:text-7xl text-navy mb-4">LATEST ON OUR BLOG</h1>
            <div class="font-gramatika text-base sm:text-lg md:text-2xl text-lightblue mb-6 md:mb-0">
              <p>Get updates on the latest stories within Rwanda's</p>
              <p>flourishing tech innovation ecosystem.</p>
            </div>
            <button class="bg-tangerine text-white text-xl mt-16 px-8 py-4 hover:bg-orange-500 transition duration-300 w-full sm:w-auto md:absolute md:top-0 md:right-0">
              <router-link to="/blogs">
                <a href="" class="text-white font-gramatika"> Read more <i class="fa fa-chevron-right" aria-hidden="true"></i></a>
              </router-link>
            </button>
          </div>
        </div>


        <div class="px-4 sm:px-6 md:px-8 lg:px-12 mt-8 md:mt-12 lg:mt-16">
          <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <!-- First Card -->
            <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/2 flex-shrink-0">
              <img src="../assets/stad.jpg" class="w-full h-full object-cover">
              <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">                <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                  <button class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">STARTUPS</button>
                  <div>
                    <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA 2024</h2>
                    <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in Rwanda designed to ignite & inspire innovation.</p>
                    <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
                  </div>
                </div>
              </div>
            </div>
        
            <!-- Second Card -->
            <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/2 flex-shrink-0">
              <img src="../assets/vr.jpg" class="w-full h-full object-cover">
              <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">                <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <button class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 mr-2 mb-2 w-fit">STARTUPS</button>
                    <button class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 sm:px-4 w-fit">INVESTMENT</button>
                  </div>
                  <div>
                    <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA 2024</h2>
                    <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in Rwanda designed to ignite & inspire innovation.</p>
                    <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      

      </div>

      <!--------- section nine ---------->
      <div class="lg:-mb-10">
        <div class="mt-24 ml-8 space-x-2">
          <h1 class="font-rockinsoda text-7xl text-navy">2023</h1>
          <h1 class="font-rockinsoda text-7xl text-navy">NOTABLE SPEAKERS</h1>
        </div>
        <div
          class="relative overflow-x-auto whitespace-nowrap scrollbar-hide mt-16 ml-0 lg:ml-12"
          ref="scrollContainer"
          style="height: 800px;"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
        >
          <div class="flex" :style="{ width: `${individuals.length * 800}px` }">
            <template v-for="(_, loopIndex) in 1">
              <div
                v-for="(individual, index) in individuals"
                :key="`${loopIndex}-${index}`"
                class="relative h-[100vh] w-[80vh] inline-block"
              >
                <img :src="individual.image" class="w-full h-full object-cover" />
                <div class="absolute inset-0" :style="{ background: individual.gradient }"></div>
                <div class="text-5xl font-rockinsoda text-white absolute inset-0 flex items-center justify-center">
                  <div class="space-y-4">
                    <div class="mt-96">
                      <p class="text-center">{{ individual.name }}</p>
                    </div>
                    <div>
                      <p class="text-white font-gramatika text-2xl text-center" v-html="individual.title"></p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>

    <!--------- section 10 -------->
    <div class="ml-4 mr-4 sm:ml-8 sm:mr-8  lg:ml-8 lg:mr-8">
      <div class="mt-16 sm:mt-24 lg:mt-32">
        <h1 class="font-rockinsoda text-3xl sm:text-4xl lg:text-7xl text-navy">
          HANGA ON INSTAGRAM
        </h1>
      </div>
      <div class="mt-8 sm:mt-12">
        <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
          <!-- Column 1 -->
          <div class="w-full sm:w-1/2 lg:w-1/4 space-y-4">
            <div class="h-[400px] sm:h-[300px] lg:h-[400px]">
              <img src="../assets/insta1.jpg" class="w-full h-full object-cover">
            </div>
            <div class="h-[300px] sm:h-[350px] lg:h-[300px]">
              <img src="../assets/insta2.jpg" class="w-full h-full object-cover">
            </div>
          </div>
          
          <!-- Column 2 -->
          <div class="w-full sm:w-1/2 lg:w-1/4 space-y-4">
            <div class="h-[400px] sm:h-[325px] lg:h-[400px]">
              <img src="../assets/insta4.jpg" class="w-full h-full object-cover">
            </div>
            <div class="h-[200px] sm:h-[150px] lg:h-[200px]">
              <img src="../assets/insta5.jpg" class="w-full h-full object-cover">
            </div>
          </div>
          
          <!-- Column 3 -->
          <div class="w-full sm:w-1/2 lg:w-1/4 space-y-4">
            <div class="h-[400px] sm:h-[425px] lg:h-[400px]">
              <img src="../assets/mrspeaker.jpg" class="w-full h-full object-cover">
            </div>
            <div class="h-[300px] sm:h-[350px] lg:h-[300px]">
              <img src="../assets/bghome.jpg" class="w-full h-full object-cover">
            </div>
          </div>
          
          <!-- Column 4 -->
          <div class="w-full sm:w-1/2 lg:w-1/4 space-y-4">
            <div class="h-[300px] sm:h-[225px] lg:h-[300px]">
              <img src="../assets/insta3.jpg" class="w-full h-full object-cover">
            </div>
            <div class="h-[300px] sm:h-[250px] lg:h-[300px]">
              <img src="../assets/vr.jpg" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </div>
    </div>

      <!-----section 11------>
      <div class="mt-24 flex items-center justify-center ">
        <img src="../assets/Frame 320.png" >
      </div>

        <!-- Newsletter signup section -->

      <NewsLetter/>
    
      <!-- Footer section -->
      
    
      <FooterPage/>

      </div>
      </div>


    
  
</template>

<script>
import NavBar from '@/components/Navbar.vue';
import FooterPage from '@/components/footerPage.vue';
import NewsLetter from '@/components/NewsLetter.vue';
export default {
  name: 'HomePage',
  components: {
    NavBar,
    FooterPage,
    NewsLetter
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
      },{ threshold: 0.5 });
    });

      
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

    // Observe both the text and button elements
    observer.observe(this.$refs.text);
    observer.observe(this.$refs.texty);

    observer.observe(this.$refs.texts);
    observer.observe(this.$refs.img2);


      // For mouse support (if you want to implement it)
      const handleMouseMove = (event) => {
      if (event.buttons) {
        this.$refs.scrollContainer.scrollLeft -= event.movementX; // Adjust scroll based on mouse movement
      }
    };
    
    this.$refs.scrollContainer.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    this.$refs.scrollContainer.addEventListener('mouseleave', () => {
      this.$refs.scrollContainer.removeEventListener('mousemove', handleMouseMove);
    });


  },
  data() {
    return {
      individuals: [
        {
          name: 'Paul Kagame',
          title: 'President of the<br>Republic of Rwanda',
          image: require('@/assets/Kagame.jpg'),
          gradient: 'linear-gradient(to bottom, rgba(1, 9, 48, 0.05) 0%, rgba(1, 9, 48, 0.2) 50%, rgba(1, 9, 48, 0.8) 100%)'
        },
        {
          name: 'Paula Ingabire',
          title: 'Minister of MINICT and<br>Innovation',
          image: require('@/assets/ingabire.jpg'),
          gradient: 'linear-gradient(to bottom, rgba(1, 9, 48, 0.02) 0%, rgba(1, 9, 48, 0.15) 50%, rgba(1, 9, 48, 0.9) 100%)'
        },
        {
          name: 'Francis Gatare',
          title: 'CEO of Rwanda<br>Development Board',
          image: require('@/assets/ceo.jpg'),
          gradient: 'linear-gradient(to bottom, rgba(1, 9, 28, 0.02) 0%, rgba(1, 9, 28, 0.15) 30%, rgba(1, 9, 28, 0.8) 100%)'
        }
      ],
      startX: 0,

    };
  },

  methods: {
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      const distance = this.startX - event.touches[0].clientX;
      this.$refs.scrollContainer.scrollLeft += distance;
      this.startX = event.touches[0].clientX;
    },
  },

  beforeUnmount() {
    this.$refs.scrollContainer.removeEventListener('mousemove', this.handleMouseMove);
  }

}



</script>

<style>
.scrollbar-hide {
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; 
}

  .slide-up {
    transform: translateY(20px);
    opacity: 0;
    transition: all 2s ease-in-out;
  }

  .slide-up-visible {
    transform: translateY(0);
    opacity: 1;
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

  .fade-in-animation {
    opacity: 0;
    transition: opacity 1.2s ease-in-out;
  }

  .fade-in-visible-animation {
    opacity: 1;
  }

  .slide-up-animation {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }

  .slide-up-visible-animation {
    opacity: 1;
    transform: translateY(0);
  }

  .hover-image {
    position: relative;
    overflow: hidden;
  }

  .hover-image img {
    transition: transform 0.5s ease;
  }

  .hover-image:hover img {
    transform: scale(1.05);
  }

  .hover-overlay {
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .hover-image:hover .hover-overlay {
    opacity: 1;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
</style>