<template>
  <div class="overflow-x-hidden">
    <div class="min-h-screen">
      <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px]">
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <img src="../assets/bghome.jpg" alt="Background" class="h-full w-full object-cover">
        
        <NavBar class="absolute top-0 left-0 w-full" />
      
        <div class="font-rockinsoda absolute text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl top-1/3 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:top-1/4 text-center sm:text-left" ref="text">
          <p>THE LARGEST IN-PERSON</p>
          <p>TECHNOLOGY EVENT IN</p>
          <p>RWANDA</p>
        </div>
      </div>
      
      

      <div class="absolute top-2/3 left-4 sm:left-12 lg:left-20  xl:left-26 ">
        <div class="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
          <button class="p-3 px-6 font-gramatika bg-white text-black font-semibold hover:bg-tangerine hover:text-white">
            Apply Now
          </button>
          <button class="p-3 px-6 font-gramatika border text-white font-semibold hover:bg-tangerine hover:text-black flex items-center space-x-2">
            <span>Impact video</span>
            <i class="fa fa-play-circle" aria-hidden="true"></i>
          </button>
        </div>
        <img src="../assets/gvticons.svg" class="mt-8 max-w-full xl:mt-12" alt="Government Icons">
      </div>
      

     

      <div class="w-full bg-white">

        <div class="w-full px-4 sm:px-20 mt-32 ">
          <p class="font-rockinsoda text-navy text-4xl sm:text-5xl md:text-7xl">IGNITING AND INSPIRING</p>
          <p class="font-rockinsoda text-navy text-4xl sm:text-5xl md:text-7xl">INNOVATION</p>
        </div>

        <div class="flex flex-col md:flex-row lg:ml-16 sm:ml-0 mt-20">
          <!-- Left Section with Main Image and Text -->
          <div class="w-full md:w-2/3 mb-4 md:mb-0 px-4">
            <img src="../assets/students.jpg" alt="Students" class="w-full h-auto rounded-lg shadow-md mb-4">
            <p class="font-gramatika text-darknavy text-sm sm:text-base mb-4">
              We believe in empowering innovators solving some of the dire challenges in the Rwandan community and abroad
            </p>
            <button class="mr-8 mt-6 p-2 px-8 font-gramatika bg-tangerine text-white font-semibold zoom-in button-hover" ref="button">
              Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>          
          </div>
      
          <!-- Right Side with Vertically Stacked Images -->
          <div class="w-full md:w-1/3 space-y-4 px-4 mr-6">
            <img src="../assets/speaker.png" alt="Speaker" class="w-full h-auto rounded-lg shadow-md">
            <img src="../assets/audience.jpg" alt="Audience" class="w-full h-auto rounded-lg shadow-md">
          </div>
        </div>
      </div>
      
      

      <div class="flex flex-wrap justify-center   lg:justify-between gap-y-12 gap-x-8 lg:gap-x-16 px-4 lg:px-20 mt-48">
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
      <div class="relative h-[400px] sm:h-[500px] md:h-[600px] mt-20"> 
        <div class="absolute text-white p-4 sm:p-8 mt-10 sm:mt-20 w-full">
          <img src="../assets/notched.svg" alt="" class="w-full">
          <img src="../assets/Vector 6.png" class="absolute top-0 mt-12 sm:mt-24 left-1/2 sm:left-[57%] w-1/2 sm:w-1/3 h-auto slide-up" ref="img2">
        </div>
    
        <div class="absolute mt-36 sm:mt-72 mx-4 sm:mx-12 p-4 sm:p-8 text-left">
          <div class="slide-up" ref="texty">
            <h2 class="text-4xl sm:text-5xl md:text-6xl text-white font-rockinsoda mb-4">Pitch Your Idea for</h2>
            <h2 class="text-4xl sm:text-5xl md:text-6xl text-white font-rockinsoda mb-4">Funding</h2>
          </div>
          <div class="slide-up" ref="texts">
            <p class="text-base sm:text-lg md:text-xl mb-1 text-white font-gramatika">
              The largest in-person technology event in Rwanda
            </p>
            <p class="text-base sm:text-lg md:text-xl mb-1 text-white font-gramatika">
              designed to ignite & inspire innovation, Hanga
            </p>
            <p class="text-base sm:text-lg md:text-xl mb-6 text-white font-gramatika">
              Pitchfest is returning for its fourth edition.
            </p>
          </div>
    
          <button class="bg-tangerine text-white py-2 px-6 hover:bg-orange-500 slide-up button-hover" ref="button3">
            Learn more <i class="fa fa-chevron-right h-2 w-2" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    
      <!-- Fifth section -->
      <div class="mx-4 sm:mx-12 mt-72">
        <h1 class="font-rockinsoda text-navy text-4xl sm:text-5xl">WHERE LEADERS INSPIRE</h1>
        <h1 class="font-rockinsoda text-navy text-4xl sm:text-5xl">YOUR NEXT BIG LEAP</h1>
    
        <div class="flex flex-col md:flex-row gap-4 mb-32 mt-20"> 
          <div class="flex-1 space-y-4">
            <div class="relative h-[320px]">
              <img src="../assets/mrspeaker.jpg" class="h-full w-full object-cover">
              <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                <div class="-space-y-10 mt-36">
                  <span class="font-rockinsoda text-tangerine text-5xl ml-2">"</span>
                  <p class="text-white text-sm font-gramatika p-4 text-justify text-center">
                    Hanga Pitchfest 
                    a two-fold approach. We are nurturing the rich talents and innovation of our young people,
                    while recognizing the contributions of talented 
                    innovators to socio-economic development of our country and the world
                  </p>
                </div>
              
                <div class="flex space-x-2 ml-2">
                  <hr class="w-[50px] border-2 mt-2">
                  <p class="font-rockinsoda text-white text-xl">Francis Gatare</p> 
                </div>
              </div>
            </div>
            <div class="relative h-[320px]">
              <img src="../assets/whiteman.jpg" class="h-full w-full object-cover">
              <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                <div class="-space-y-10 mt-36">
                  <span class="font-rockinsoda text-tangerine text-5xl ml-2">"</span>
                  <p class="text-white text-sm font-gramatika p-4 text-justify text-center">
                    "There have been, in my opinion, too much talking. We need to act now, 
                    but I believe especially it is very 
                    important to invest in young people here. The time is now.
                  </p>
                </div>
              
                <div class="flex space-x-2 ml-2">
                  <hr class="w-[50px] border-2 mt-2">
                  <p class="font-rockinsoda text-white text-xl">Flemming besenbacher</p> 
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative flex-2 h-[655px] mt-4 md:mt-0">
            <img src="../assets/paula.jpg" class="w-full h-full object-cover">
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
              <div class="absolute bottom-0 inset-x-0 p-4">
                <div class="-space-y-10">
                  <span class="font-rockinsoda text-tangerine text-5xl ml-2">"</span>
                  <p class="text-white text-base sm:text-lg font-gramatika p-4 text-justify text-center">
                    Today is a celebration of talent, ambitions and the boundless opportunities 
                    that arise when passion, creativity, determination and
                    the resolve to be self-reliant converge to push the boundaries of innovation.
                  </p>
                </div>
                
                <div class="flex space-x-2 ml-2">
                  <hr class="w-[50px] border-2 mt-2">
                  <p class="font-rockinsoda text-white text-xl">Paula Ingabire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div> 

  <!-- Section ten -->
  <div class="mx-4 sm:mx-8">
    <div class="mt-10">
      <h1 class="ml-4 font-rockinsoda text-3xl sm:text-4xl md:text-5xl text-navy">HANGA ON INSTAGRAM</h1>
    </div>

    <div class="flex flex-wrap justify-center gap-4 mt-12">
      <div class="flex-shrink-0 space-y-2 w-full sm:w-auto">
        <div class="h-[300px] sm:h-[400px] w-full sm:w-[350px]">
          <img src="../assets/insta1.jpg" class="w-full h-full object-cover">
        </div>
        <div class="h-[150px] sm:h-[200px] w-full sm:w-[350px]">
          <img src="../assets/insta2.jpg" class="w-full h-full object-cover" >
        </div>
      </div>

      <div class="flex-shrink-0 space-y-2 w-full sm:w-auto">
        <div class="h-[200px] sm:h-[300px] w-full sm:w-[250px]">
          <img src="../assets/insta4.jpg" class="w-full h-full object-cover" >
        </div>
        <div class="h-[150px] sm:h-[200px] w-full sm:w-[250px]">
          <img src="../assets/insta5.jpg" class="w-full h-full object-cover">
        </div>
      </div>
    
      <div class="flex-shrink-0 space-y-2 w-full sm:w-auto">
        <div class="h-[200px] sm:h-[300px] w-full sm:w-[250px]">
          <img src="../assets/mrspeaker.jpg" class="w-full h-full object-cover">
        </div>
        <div class="h-[200px] sm:h-[290px] w-full sm:w-[250px]">
          <img src="../assets/bghome.jpg" class="w-full h-full object-cover">
        </div>
      </div>
    
      <div class="flex-shrink-0 space-y-2 w-full sm:w-auto">
        <div class="h-[200px] sm:h-[300px] w-full sm:w-[250px]">
          <img src="../assets/insta3.jpg" class="w-full h-full object-cover">
        </div>
        <div class="h-[180px] sm:h-[270px] w-full sm:w-[250px]">
          <img src="../assets/vr.jpg" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </div>

  <!-- Section eleven -->
  <div class="mt-24 flex items-center justify-center">
    <img src="../assets/Frame 320.png" class="max-w-full h-auto">
  </div>

  <div class="relative">
    <!---------section 12------->
    <div class="h-[400px] relative z-10 -mb-48  "> 
      <div class="absolute w-full left-0 right-0 mt-20">
        <img src="../assets/footersvg.svg" alt="" class="w-full h-auto block">
        <img src="../assets/hanga elements_illustration 2.svg" class="absolute top-0 mt-24 left-[57%] w-1/3 h-auto">
      </div>
      
      <div class="absolute mt-44 ml-2 p-8 text-left">
        <h2 class="text-6xl text-white font-rockinsoda mb-4">NEVER MISS</h2>
        <h2 class="text-6xl text-white font-rockinsoda mb-4">A HIGHLIGHT FROM HANGA</h2>
        <p class="text-lg mb-1 text-white text-xl font-gramatika">
          Get the latest trends from Hanga and beyond with our weekly
        </p>
        <p class="text-lg mb-1 text-white text-xl font-gramatika">
          roundup.
        </p>
        
        <div class=" -ml-6 p-4 rounded flex">
          <input
            type="email"
            placeholder="Your email address"
            class="bg-ftcolor text-gray-400 placeholder-gray-500 focus:outline-none px-12 py-2 rounded-l w-[300px]"
          />
          <button class="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r">
            <i class="fa fa-chevron-right" aria-hidden="true"></i>


          </button>
        </div>
        
      </div>
    </div>
    
    <!------section 13 (Footer)--------- -->
    <div class="relative z-0 mt-[400px]">
      <FooterPage/>
    </div>
  </div>
  
  </div>
</template>

<script>
import NavBar from '@/components/Navbar.vue';
import FooterPage from '@/components/footerPage.vue';
export default {
  name: 'HomePage',
  components: {
    NavBar,
    FooterPage
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
      ]
    };
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


  @media (max-width: 640px) {
    .slide-up,
    .zoom-in,
    .fade-in {
      transform: none;
      opacity: 1;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .slide-up,
    .zoom-in,
    .fade-in {
      transition-duration: 1.5s;
    }
  }

  @media (min-width: 1025px) {
    .slide-up,
    .zoom-in,
    .fade-in {
      transition-duration: 2s;
    }
  }
</style>