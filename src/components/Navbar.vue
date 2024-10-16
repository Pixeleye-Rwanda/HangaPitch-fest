<template>
  <div>
    <!-- Burger Menu for Small Screens -->
    <div class="md:hidden flex items-center justify-between p-4 bg-tangerine fixed top-0 inset-x-0 z-50">
      <button @click="toggleMenu" class="text-white focus:outline-none">
        <svg class="w-8 h-8 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke="currentColor" :class="{ 'rotate-45': isMenuOpen, 'rotate-0': !isMenuOpen }">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <router-link to="/" class="mx-auto">
        <img src="../assets/logo.svg" class="w-24 h-auto" alt="Logo">
      </router-link>
    </div>

    <transition name="slide-fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-show="isMenuOpen" class="fixed h-[340px] w-full bg-tangerine p-4 z-40">
        <button @click="toggleMenu" class="absolute top-4 right-4 text-white text-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul class="mt-16 space-y-4">
          <li><router-link to="/about-us" class="text-white block hover:text-gray-300" @click="toggleMenu">About
              Us</router-link></li>
          <li><router-link to="/network" class="text-white block hover:text-gray-300" @click="toggleMenu">Our
              Network</router-link></li>
          <li><router-link to="/pitch" class="text-white block hover:text-gray-300" @click="toggleMenu">Pitch
              at Hanga</router-link></li>

          <!-- <li><router-link to="/timeline" class="text-white block hover:text-gray-300"
              @click="toggleMenu">Timeline</router-link></li> -->
              
                <button id="dropdownInit"  @click="toogleNavBg"  :class="navBg ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">
      
                  Initiatives <i class="fa fa-chevron-down" aria-hidden="true"></i>
      
                </button>
      
      
                <div v-show="isDropdownInitVisible" class="absolute flex  shadow-lg bg-white ">
      
                </div>
      
              
              <li :class="navBg ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">
                <!-- Dropdown -->
                <div v-if="navBg" class="absolute  -mt- z-50 left-0 w-full bg-navbg mt-4 shadow-lg max-h-[60vh] overflow-y-auto">
                  <ul class="w-full flex flex-col lg:flex-row ml-2 lg:ml-24 space-y-4 lg:space-y-0 lg:space-x-12">
                    <!-- First Section -->
                    <div class="w-full lg:w-[40vh] p-4  ">
                      <div class="space-y-6 lg:space-y-10">
                        <p class="font-rockinsoda text-navy text-xl lg:text-2xl">HANGA SEXUAL REPRODUCTIVE HEALTH</p>
                        <p class="font-gramatika text-sm lg:text-base">Championing tech-enabled startups solving key issues in SRH.</p>
                        <router-link to="/srh">
                          <button class="mr-4 lg:mr-8 mt-4 lg:mt-6 p-2 px-6 lg:px-8 font-gramatika bg-tangerine text-white font-semibold">
                            Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </button>
                        </router-link>
                      </div>
                    </div>
              
                    <!-- Divider -->
                    <div class="hidden lg:block border-l-2 border-gray-200 h-auto"></div>
              
                    <!-- Second Section -->
                    <div class="w-full lg:w-[40vh] p-4 mt-4">
                      <div class="space-y-6 lg:space-y-10">
                        <p class="font-rockinsoda text-navy text-xl lg:text-2xl">HANGA HUB</p>
                        <p class="font-gramatika text-sm lg:text-base">Tech-enabled innovation & incubation hubs shaping digital employment in Rwanda, led by MINICT, The European Union (EU), and RISA.</p>
                        <router-link to="/hub">
                          <button class="mr-4 lg:mr-8 mt-4 lg:mt-6 p-2 px-6 lg:px-8 font-gramatika bg-tangerine text-white font-semibold">
                            Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </button>
                        </router-link>
                      </div>
                    </div>
              
                    <!-- Divider -->
                    <div class="hidden lg:block border-l-2 border-gray-200 h-auto"></div>
              
                    <!-- Third Section -->
                    <div class="w-full lg:w-[40vh] p-4 mt-4 lg:mr-10">
                      <div class="space-y-6 lg:space-y-10">
                        <p class="font-rockinsoda text-navy text-xl lg:text-2xl">HANGA AGRITECH</p>
                        <p class="font-gramatika text-sm lg:text-base">Driving financial and technical support to technology-enabled startups in agriculture.</p>
                        <router-link to="/agritech">
                          <button class="mr-4 lg:mr-8 mt-4 lg:mt-6 p-2 px-6 lg:px-8 font-gramatika bg-tangerine text-white font-semibold">
                            Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
                          </button>
                        </router-link>
                      </div>
                    </div>
                  </ul>
                </div>
              </li>

          <li>
            <button id="dropdownButton" @click="toggleDropdown" class="text-white font-semibold">
              <div class="flex items-center">
                <p>EN</p>
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            <ul v-show="isDropdownVisible" class="mt-2 w-30 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kinyarwanda</a></li>
              <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </transition>

    <!-- Navbar for Larger Screens -->
    <div 
    :class="[
      (navBg || isInitiativesClicked) ? 'bg-white fixed top-0 w-full z-50 shadow-lg' : 'bg-transparent absolute top-0 w-full',
      'transition-all duration-600', navClass(), 'hidden md:block'
    ]"
  >     
  
  <div :class="navBg || isInitiativesClicked ? 'bg-navbg flex items-center p-6' : 'bg-transparent flex items-center p-6'">
        <router-link to="/" class="ml-16">
          <img :src="navBg || isInitiativesClicked ? whiteLogo : blackLogo" class="h-8 md:h-10" alt="Logo">
        </router-link>

        <!-- Navbar Links -->
        <ul class="flex mx-auto items-center space-x-6 ">
          <li :class="navBg || isInitiativesClicked ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation '">
            <router-link to="/about-us" class="hover:text-tangerine transition-colors duration-300">About Us</router-link>
          </li>
          <li :class="navBg || isInitiativesClicked ?'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">
            <router-link to="/network" class="hover:text-tangerine transition-colors duration-300">Our Network</router-link>
          </li>
          <li :class="navBg|| isInitiativesClicked  ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">
            <router-link to="/pitch" class="hover:text-tangerine transition-colors duration-300">Pitch at Hanga</router-link>
          </li>
          <!-- Dropdown Example -->
          <div class="relative flex items-center">
            <button @click="toggleInitiatives" :class="navBg ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">
              Initiatives <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </button>
          </div>

          <li :class="navBg || isInitiativesClicked ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">
            <router-link to="/timeline"> Timeline</router-link> 
            <!-- Dropdown -->
           
            <div ref="observerElement">
          <div v-if="isInitiativesClicked" class="absolute z-50 left-0 w-full bg-navbg mt-10 mb-16 shadow-lg" >
          <hr class="w-auto border-gray-200 border-t-2 mt-8">
          <ul class="w-full flex px-20 space-x-12">
            <div class="w-[70vh] p-4 mt-4 ">
             
              <div class="space-y-10">
                
                <div>
                  <transition name="fade-slide-up" appear v-if="isVisible" >
                <p class="font-rockinsoda text-navy text-2xl">HANGA SEXUAL REPRODUCTIVE HEALTH</p>
              </transition>
                   
              <transition name="fade-slide-left" appear v-if="isVisible">
                <p class="font-gramatika">Championing tech-enabled startups solving key issues in SRH.</p>
              </transition>

              </div>
                 
              <transition name="fade-slide-left" appear v-if="isVisible">
                <router-link to="/srh">
                <button class="mr-8 mt-6 p-2 px-8 font-gramatika bg-tangerine text-white font-semibold button-hover ">
                  Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </button> 
              </router-link>
            </transition>
            
              </div>
  
            </div>
            <div class="border-l-2 border-gray-200 h-auto"></div>
  
            <div class="w-[70vh] p-4 mt-4">
              <div class="space-y-2">
                <transition name="fade-slide-up" appear v-if="isVisible" >
                <p class="font-rockinsoda text-navy text-2xl">HANGA HUB</p>
                </transition>

                <transition name="fade-slide-left" appear v-if="isVisible" >
                <p class="font-gramatika">Tech-enabled innovation & incubation hubs shaping digital employment in Rwanda, led by MINICT, The European Union (EU) and RISA.</p>
                </transition>

                <router-link to="/hub">
                <button class="mr-8 mt-6 p-2 px-8 font-gramatika bg-tangerine text-white font-semibold button-hover ">
                  Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </button> 
              </router-link>
              </div>
            </div>
            <div class="border-l-2 border-gray-200 h-auto"></div>
  
            <div class="w-[70vh] p-4 mt-4 mr-10">
              <div class="space-y-10">
                <transition name="fade-slide-up" appear v-if="isVisible" >
                <p class="font-rockinsoda text-navy text-2xl" >HANGA AGRITECH</p>
                </transition>

                <transition name="fade-slide-left" appear v-if="isVisible" >
                <p class="font-gramatika">Driving financial and technical support to  technology enabled startups in agriculture.</p>
                </transition>

                <router-link >
                <button class="mr-8 mt-6 p-2 px-8 font-gramatika bg-tangerine text-white font-semibold  button-hover">
                  Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </button> 
              </router-link>
              </div>
            </div>
          </ul>
        </div>
      </div>
          </li>
        </ul>

        <!-- Apply Now Button -->
        <button :class="navBg|| isInitiativesClicked  ? 'mr-4 p-4 px-6 font-gramatika bg-tangerine text-white font-semibold hover:bg-tangerine hover:text-white' : 'mr-4 p-4 px-6 font-gramatika bg-white text-black font-semibold hover:bg-tangerine hover:text-white'">
          <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" target="_blank">Apply Now</a>
        </button>

        <!-- Language Dropdown -->
        <div class="relative inline-block mr-24 text-left">
          <button id="dropdownButton" @click="toggleDropdown" :class="navBg ? 'p-2 px-4 border border-tangerine font-gramatika text-tangerine font-semibold hover:bg-tangerine hover:text-white' : 'p-2 px-4 border font-gramatika text-white font-semibold hover:bg-tangerine hover:text-white'">
            <div class="flex items-center py-2">
              <p>EN</p>
              <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          <ul v-show="isDropdownVisible" class="absolute mt-2 w-30 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kinyarwanda</a></li>
            <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</a></li>
          </ul>
        </div>
      </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: "NavBar",
  
  data() {
    return {
      isDropdownVisible: false,
      isMenuOpen: false,
      isDropdownInitVisible: false,
      whiteLogo: require('@/assets/hanga.svg'), 
      blackLogo: require('@/assets/logo.svg'), 
      navBg: false,
      isInitiativesClicked: false,
      isLargeScreen: true,
      isVisible:false
    };
  },



  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.closeDropdownOnScroll);
    window.addEventListener('resize', this.handleResize);
    this.initiativeAnimations();

  },
  beforeUnmount() {   
     window.removeEventListener('scroll', this.handleScroll);
     window.removeEventListener('scroll', this.closeDropdownOnScroll);
     window.removeEventListener('resize', this.handleResize);


  },
  
  methods: {


    navClass() {
      if (this.$route.path === '/contact') {
        return this.navBg; 
      } else {
        return ''; 
      }
    },
    linkClass(route) {
      if (this.$route.path === route || this.$route.path === '/contact') {
        return 'text-blue-500 font-bold'; // Active or clicked link color
      } 
      return 'text-black';
    },

    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },

    toogleDropdownInit() {
      this.isDropdownInitVisible = !this.isDropdownInitVisible;
    },

    toogleNavBg(){
    this.navBg =! this.navBg

    },
    isNetworkPage() {
      return this.$route.name === 'OurNetwork'; // or use path: this.$route.path === '/our-network'
    },

    toggleInitiatives() {
    this.isInitiativesClicked = !this.isInitiativesClicked;
    if (this.isInitiativesClicked) {
      this.navBg = true; 
    }else{
      this.navBg = false;
    }
  },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    handleScroll() {
  if (this.isLargeScreen) {
    if (window.scrollY > 300) {
      this.navBg = true;
    } else if (!this.isInitiativesClicked) {
      this.navBg = false;
    }

    // For specific routes
    if (this.$route.path === '/contact' || this.$route.path === '/blogs' || this.$route.path === '/news' || this.$route.path === '/faq') {
      this.navBg = true;
    } else if (this.$route.path === '/network') {
      this.navBg = false;
    }
  }
  else {
    this.navBg = false; 
  }
},


handleResize() {
  this.isLargeScreen = window.innerWidth >= 768; 
  if (!this.isLargeScreen) {
    this.navBg = false; 
  }
},

    
    toggleInitiativesDropdown() {
    this.isInitiativesDropdownVisible = !this.isInitiativesDropdownVisible;
  },
  closeDropdownOnScroll() {
    this.isInitiativesDropdownVisible = false;
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

   

  },
  


}
</script>

<style>
.rotate-45 {
  transform: rotate(45deg);
}
.zoom-in {
  transform: scale(0.95);
  opacity: 0;
  transition: transform 1s ease-in-out, opacity 0.90s ease-in-out;
}
.button-hover {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button-hover:hover {
  transform: scale(1.05); 
}


.rotate-0 {
  transform: rotate(0deg);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.opacity-0 {
  opacity: 0;
}

.hover\:text-gray-300 {
  transition: color 0.3s ease;
}

.text-gray-300:hover {
  color: #e2e8f0;
}
.underline-animation {
  position: relative;
}

.underline-animation::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width 0.3s ease-in-out;
}

.underline-animation:hover::after {
  width: 100%;
}

.router-link-active::after {
  width: 100%;
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
