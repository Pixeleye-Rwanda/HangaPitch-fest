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
                <button id="dropdownInit" @click="toogleNavBg"  :class="navBg ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">
      
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
    <div  :class="navBg ? 'bg-navbg hidden md:flex items-center p-6 bg-navbg ' : 'bg-transparent hidden md:flex items-center p-6 bg-transparent '" >
      <router-link to="/" class="ml-16">
        <img :src="navBg ? whiteLogo : blackLogo" class="h-8 md:h-10" alt="Logo">
      </router-link>

      <ul class="flex mx-auto items-center space-x-6">
        <li  :class="navBg ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'" >
          <router-link to="/about-us">About Us</router-link>
        </li>
        <li  :class="navBg ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">
          <router-link to="/network">Our Network</router-link>
        </li>
        <li  :class="navBg ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">
          <router-link to="/pitch"> Pitch at Hanga </router-link>
        </li>


        <div class=" relative flex items-center">
          <button id="dropdownInit" @click="toogleNavBg"  :class="navBg ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">

            Initiatives <i class="fa fa-chevron-down" aria-hidden="true"></i>

          </button>


          <div v-show="isDropdownInitVisible" class="absolute flex  shadow-lg bg-white ">

          </div>

        </div>


      <li :class="navBg ? 'text-navy' : 'text-white font-gramatika font-semibold underline-animation'">
          <!-- <router-link to="/timeline"> Timeline</router-link>  -->
          <!-- Dropdown -->
        <div v-if="navBg" class="absolute z-50 left-0 w-full bg-navbg mt-10 mb-16 shadow-lg" >
        <hr class="w-auto border-gray-200 border-t-2 mt-8">
        <ul class="w-full flex px-20 space-x-12">
          <div class="w-[70vh] p-4 mt-4 ">
            <div class="space-y-10">
              <p class="font-rockinsoda text-navy text-2xl">HANGA SEXUAL REPRODUCTIVE HEALTH</p>
              <p class="font-gramatika">Championing tech-enabled startups solving key issues in SRH.</p>
              <router-link to="/srh">
              <button class="mr-8 mt-6 py-4 px-10 font-gramatika bg-tangerine text-white font-semibold ">
                Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </button> 
            </router-link>
            </div>

          </div>
          <div class="border-l-2 border-gray-200 h-auto"></div>

          <div class="w-[70vh] p-4 mt-4">
            <div class="space-y-2">
              <p class="font-rockinsoda text-navy text-2xl">HANGA HUB</p>
              <p class="font-gramatika">Tech-enabled innovation & incubation hubs shaping digital employment in Rwanda, led by MINICT, The European Union (EU) and RISA.</p>
              <router-link to="/hub">
              <button class="mr-8 mt-6 py-4 px-10 font-gramatika bg-tangerine text-white font-semibold ">
                Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </button> 
            </router-link>
            </div>
          </div>
          <div class="border-l-2 border-gray-200 h-auto"></div>

          <div class="w-[70vh] p-4 mt-4 mr-10">
            <div class="space-y-10">
              <p class="font-rockinsoda text-navy text-2xl" >HANGA AGRITECH</p>
              <p class="font-gramatika">Driving financial and technical support to  technology enabled startups in agriculture.</p>
              <router-link to="/agritech">
              <button class="mr-8 mt-6 py-4 px-10 font-gramatika bg-tangerine text-white font-semibold ">
                Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
              </button> 
            </router-link>
            </div>
          </div>
        </ul>
      </div>
        </li>
      </ul>

      <button
        :class="navBg?'mr-4 p-4 px-6 font-gramatika bg-tangerine text-white font-semibold hover:bg-tangerine hover:text-white' :'mr-4 p-4 px-6 font-gramatika bg-white text-black font-semibold hover:bg-tangerine hover:text-white'">
        <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" target="_blank">Apply Now</a>
      </button>

      <div class="relative inline-block mr-24 text-left">
        <button id="dropdownButton" @click="toggleDropdown"
          :class="navBg ? 'p-2 px-4 border border-tangerine font-gramatika text-tangerine font-semibold hover:bg-tangerine hover:text-white':'p-2 px-4 border font-gramatika text-white font-semibold hover:bg-tangerine hover:text-white'">
          <div class="flex items-center py-2">
            <p>EN</p>
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>
        <ul v-show="isDropdownVisible" class="absolute mt-2 w-30 shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Kinyarwanda</a></li>
          <li><a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</a></li>
        </ul>
      </div>
      <hr :class="navBg?'w-auto border-t-10 border-tangerine ':'hidden'">
      <div class=""></div>
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
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },

    toogleDropdownInit() {
      this.isDropdownInitVisible = !this.isDropdownInitVisible;
    },

    toogleNavBg(){
    this.navBg =! this.navBg

    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
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
</style>