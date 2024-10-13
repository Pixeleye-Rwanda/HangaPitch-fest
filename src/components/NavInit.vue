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
        <img src="../assets/SRH (1).svg" class="w-24 h-auto" alt="Logo">
      </router-link>
    </div>

    <transition name="slide-fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <div v-show="isMenuOpen" class="fixed h-[200px] w-full bg-tangerine p-4 z-40">
        <button @click="toggleMenu" class="absolute top-4 right-4 text-white text-3xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ul class="mt-16 space-y-4">
          <li><router-link to="/" class="text-white block hover:text-gray-300" @click="toggleMenu">Hanga Pitch</router-link></li>
          <li><router-link to="/faq" class="text-white block hover:text-gray-300" @click="toggleMenu">FAQ</router-link></li>
          <li>  <button
            :class="[navBg?'text-white':'text-navy',' font-gramatika text-white text-md font-semibold ']">
            <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" target="_blank"  >Apply Now</a>
          </button>
            </li>
        </ul>
      </div>
    </transition>

    <!-- Navbar for Larger Screens -->
    <div :class="navBg ? 'bg-navy' : 'bg-transparent'" class="hidden md:flex items-center p-4 justify-between">
      <div class="">
      <router-link to="/" class="ml-24 ">
        <img :src="navBg ? whiteLogo : blackLogo" class="h-8 md:h-12" alt="Logo">
      </router-link>
  </div>
  <div class="mr-12">
      <ul class="flex mx-auto items-center space-x-6">
        <li  :class="navBg ? 'text-white' : 'text-navy font-gramatika font-semibold underline-animation'" >
          <router-link to="/">Hanga Pitch</router-link>
        </li>
        <li  :class="navBg ? 'text-white' : 'text-navy font-gramatika font-semibold underline-animation'">
          <router-link to="/faq">FAQ</router-link>
        </li> 
        <button
        :class="[navBg?'text-white':'text-navy','mr-4 p-4 px-6 font-gramatika text-navy text-md font-semibold ']">
        <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" target="_blank"  >Apply Now</a>
      </button>
        
      </ul>
  </div>
    </div>
  
  </div>
</template>

<script>

export default {
  name: "NavInit",
  
  data() {
    return {
      isDropdownVisible: false,
      isMenuOpen: false,
      isDropdownInitVisible: false,
      blackLogo: require('@/assets/SRH.svg'), 
      whiteLogo: require('@/assets/SRH (1).svg'), 
      navBg: false,
    };
  },
  mounted() {
  this.checkNavBg();
},
  watch: {
    $route() {
    this.checkNavBg();
  }
},
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },

    toogleDropdownInit() {
      this.isDropdownInitVisible = !this.isDropdownInitVisible;
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    checkNavBg() {
    if (this.$route.path === '/faq') {
      this.navBg = true;
    } else {
      this.navBg = false; 
  }
  },
}


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
