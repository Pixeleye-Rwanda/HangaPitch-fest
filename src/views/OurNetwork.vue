<template>
  <div class="overflow-hidden">
    <div class="h-screen relative">
      <div class="relative h-[670px] flex-shrink-0">
        <!-- Dynamically set the background image -->
        <img :src="currentBgImage" alt="" class="h-full w-full object-cover">
        <div class="absolute inset-0 bg-abtcolor"></div>
        <Navbar class="absolute top-0 left-0 w-full" />

        <div class="font-rockinsoda absolute text-white text-6xl top-96 ml-12">
          <p>{{ currentTitleLine1 }}</p>
          <p>{{ currentTitleLine2 }}</p>
          
        </div>

        <div class="-mt-32 w-[70vh] ml-12 text-white font-gramatika absolute text-lg">
          <p>{{headline}}</p>
       </div>
      </div>
    </div>

    <!-- Navbar network page  -->
    <div class="h-[9vh] w-full bg-tangerine">
      <div class="flex mt-4">
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

    <!-- Dynamic Content Section -->
    <component :is="currentComponent" />

    <div class="relative">
      <!-- Section 12 -->
      <div class="h-[400px] relative z-10 -mb-48">
        <div class="absolute w-full left-0 right-0 mt-20">
          <img src="../assets/footersvg.svg" alt="" class="w-full h-auto block">
          <img src="../assets/hanga elements_illustration 2.svg" class="absolute top-0 mt-24 left-[57%] w-1/3 h-auto">
        </div>

        <div class="absolute mt-44 ml-2 p-8 text-left">
          <h2 class="text-6xl text-white font-rockinsoda mb-4">NEVER MISS</h2>
          <h2 class="text-6xl text-white font-rockinsoda mb-4">A HIGHLIGHT FROM HANGA</h2>
          <p class="text-lg mb-1 text-white text-xl font-gramatika">
            Get the latest trends from Hanga and beyond with our weekly roundup.
          </p>
          <div class="-ml-6 p-4 rounded flex">
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

      <!-- Footer Section -->
      <div class="relative z-0 mt-[400px]">
        <FooterPage />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterPage from '@/components/footerPage.vue';
import StartupsPage from '@/views/startupsPage.vue';
import JudgesPage from '@/views/JudgesPage.vue';
import PartnersPage from '@/views/PartnersPage.vue';

export default {
  name: 'OurNetwork',
  components: {
    Navbar,
    FooterPage,
    StartupsPage,
    JudgesPage,
    PartnersPage,
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
