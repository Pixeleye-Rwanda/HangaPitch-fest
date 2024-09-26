<template>
  <div class="overflow-hidden">
    <div class="h-screen relative">
      <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px]">
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <img :src="currentBgImage" alt="Background" class="h-full w-full object-cover">
        
        <Navbar class="absolute top-0 left-0 w-full"/>
      
        <div class="font-rockinsoda absolute  text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl top-2/4 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:2/4 text-center sm:text-left" ref="text">
          <p>{{ currentTitleLine1 }}</p>
          <p>{{ currentTitleLine2 }}</p>
          
        </div>

        <div class="absolute top-3/4  text-white left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:2/4 text-center sm:text-left">
         
              
          <p>{{headline}}</p>
           
        </div>

  
  
      </div>

        <!-- Navbar network page  -->
    <div class="h-[9vh] w-full bg-tangerine ">
      <div class="flex ">
        <div class="ml-12 text-xl">
          <h1 class="font-gramatika text-white mt-4">OUR NETWORK</h1>
        </div>

        <ul class="flex space-x-16 ml-auto mt-4 mr-12">
          <li class="font-gramatika text-white text-lg cursor-pointer" 
          :class="{'underline underline-offset-4 ': currentSection === 'startups'& currentComponent === 'StartupsPage',}"

          @click="setContent('startups')">
            Startups
          </li>
          <li class="font-gramatika text-white text-lg cursor-pointer" 
          :class="{'underline underline-offset-4 ': currentSection === 'judges'}"

          @click="setContent('judges')">
            Judges
          </li>
          <li class="font-gramatika text-white text-lg cursor-pointer"
          :class="{'underline underline-offset-4 ': currentSection === 'partners'}"

           @click="setContent('partners')">
            Partners
          </li>
        </ul>
      </div>
    </div>

    </div>

  

    <!-- Dynamic Content Section -->
    <component :is="currentComponent" />

    <NewsLetter/>
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
      headline:''
    };
  },
  methods: {
    setContent(section) {
      this.currentSection = section; 

      if (section === 'startups') {
        this.currentComponent = 'StartupsPage';
        this.currentBgImage = require('@/assets/networkbg.jpg'); 
        this.currentTitleLine1 = 'STARTUPS';
        this.currentTitleLine2 = 'FUNDED BY HANGA';
        this.headline=''
      } else if (section === 'judges') {
        this.currentComponent = 'JudgesPage';
        this.currentBgImage = require('@/assets/aboutus.jpg'); 
        this.currentTitleLine1 = 'EXPERTS AT';
        this.currentTitleLine2 = ' HANGA';
        this.headline ="Our mission is to discover and nurture Rwanda's most innovative tech-enabled startups"

      } else if (section === 'partners') {
        this.currentComponent = 'PartnersPage';
        this.currentBgImage = require('@/assets/partners.jpg'); 
        this.currentTitleLine1 = 'PARTERNSHIPS';
        this.currentTitleLine2 = ' WITH HANGA';
        this.headline ="Our mission is to discover and nurture Rwanda's most innovative tech-enabled startups."

      }
    },
  },
};
</script>
