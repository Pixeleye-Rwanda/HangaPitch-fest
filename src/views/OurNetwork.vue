<template>
  <div class="overflow-hidden">
    <div class="h-screen sm:-mb-10  md:-mb-48 lg:mb-0 relative">
      <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px]">
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <img :src="currentBgImage" alt="Background" class="h-full w-full object-cover">
        
        <Navbar class="absolute top-0 left-0 w-full"/>

        <div ref="observerElement" >

      <transition name="fade-slide-up" appear v-if="isVisible">
        <div class="font-rockinsoda absolute  text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl top-2/4 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:2/4 text-center sm:text-left" ref="text">
          <p>{{ currentTitleLine1 }}</p>
          <p>{{ currentTitleLgitine2 }}</p>     
        </div>
      </transition>

      <transition name="fade-slide-right" appear v-if="isVisible">
    
        <div class="absolute top-3/4  text-white left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:2/4 text-center sm:text-left">
         
              
          <p>{{headline}}</p>
           
        </div>

      </transition>
      </div>

        

      </div>




      <!-- Navbar network   -->
      <div ref="stickyDiv" :class="['h-[9vh] bg-tangerine transition-all duration-800 ease-in-out  w-full', isSticky ? 'fixed top-0 left-0 w-full z-50 shadow-md' : 'absolute',
      ]">
        <div class="flex ">
          <div class="ml-2 lg:ml-12 text-md lg:text-xl">
            <h1 class="font-gramatika font-bold text-white mt-8 lg:mt-4 ">OUR NETWORK</h1>
          </div>

          <ul class="flex  flex-wrap gap-2 lg:gap-10 ml-auto mt-8 lg:mt-4  mr-4  lg:mr-12">
            <li class="font-gramatika text-white text-lg cursor-pointer"
              :class="{ 'underline underline-offset-4 ': currentSection === 'startups' & currentComponent === 'StartupsPage', }"
              @click="setContent('startups')">
              Startups
            </li>
            <li class="font-gramatika text-white text-lg cursor-pointer"
              :class="{ 'underline underline-offset-4 ': currentSection === 'judges' }" @click="setContent('judges')">
              Judges
            </li>
            <li class="font-gramatika text-white text-lg cursor-pointer"
              :class="{ 'underline underline-offset-4 ': currentSection === 'partners' }" @click="setContent('partners')">
              Partners
            </li>
          </ul>
        </div>
      </div>

    </div>



    <!-- Dynamic Content Section -->
    <component :is="currentComponent" class="mt-[9vh]" />

    <NewsLetter />
    <FooterPage />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterPage from '@/components/footerPage.vue';
import StartupsPage from '@/views/startupsPage.vue';
import JudgesPage from '@/views/JudgesPage.vue';
import PartnersPage from '@/views/PartnersPage.vue';
import NewsLetter from '@/components/NewsLetter.vue';

export default {
  name: 'OurNetwork',
  components: {
    Navbar,
    FooterPage,
    StartupsPage,
    JudgesPage,
    PartnersPage,
    NewsLetter
  },
  data() {
    return {
      currentComponent: 'StartupsPage',
      currentBgImage: require('@/assets/networkbg.jpg'),
      currentTitleLine1: 'STARTUPS',
      currentTitleLine2: 'FUNDED BY HANGA',
      headline:'',
      isSticky: false, 
      originalOffsetTop: 0, 
      isVisible:false,


     

    };
  },

  mounted() {
    this.initiativeAnimations();
    this.originalOffsetTop = this.$refs.stickyDiv.getBoundingClientRect().top + window.scrollY;
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {

      this.isSticky = window.scrollY > this.originalOffsetTop;
    },
    setContent(section) {
      this.isVisible = false;
      
      setTimeout(() => {
        this.currentSection = section; 

      if (section === 'startups') {
        this.currentComponent = 'StartupsPage';
        this.currentBgImage = require('@/assets/networkbg.jpg');
        this.currentTitleLine1 = 'STARTUPS';
        this.currentTitleLine2 = 'FUNDED BY HANGA';
        this.headline = ''
      } else if (section === 'judges') {
        this.currentComponent = 'JudgesPage';
        this.currentBgImage = require('@/assets/aboutus.jpg');
        this.currentTitleLine1 = 'EXPERTS AT';
        this.currentTitleLine2 = ' HANGA';
        this.headline = "Our mission is to discover and nurture Rwanda's most innovative tech-enabled startups"

      } else if (section === 'partners') {
        this.currentComponent = 'PartnersPage';
        this.currentBgImage = require('@/assets/partners.jpg');
        this.currentTitleLine1 = 'PARTERNSHIPS';
        this.currentTitleLine2 = ' WITH HANGA';
        this.headline = "Our mission is to discover and nurture Rwanda's most innovative tech-enabled startups."

      }  this.isVisible = true; 
    }, 300); 
    }
  ,
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
};

</script>
<style>

.fixed {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

}

.transition-all {
  transition: all 0.30s ease-in-out;
}

.hero-text {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.8s ease forwards;
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
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1); /* Even slower and more natural */

}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(80px);
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
  transform: translateX(-50px);
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
  transform: translateX(50px);
}
.fade-slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}

</style>
