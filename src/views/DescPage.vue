<template>
  <div class="w-full min-h-screen absolute" style="background: linear-gradient(319.89deg, #030C37 5.13%, #22348A 99.13%)">
    <div ref="observerElement">
    <div v-if="startup" class=" -mt-6 flex flex-col lg:flex-row items-center justify-center p-4 lg:p-10 space-y-10 lg:space-y-0 lg:space-x-20" >
      <div class="w-full lg:w-[90vh] space-y-8 lg:space-y-12">

       <router-link :to="{ path: '/network', hash: '#startupDiv', query: { category: $route.query.category, year: $route.query.year } }">
          <div class="flex space-x-4 mt-16 items-center justify-center lg:justify-start">
            <img src="../assets/Group 22.png" alt="Back to startups" class="h-8 w-8 lg:h-12 lg:w-12" />
            <a href="#" @click="goBackToFilteredList" class="text-white font-gramatika -mt-4 text-sm lg:text-lg">Back to startups</a>
          </div>
        </router-link>
         
        <transition name="fade-slide-up" appear v-if="isVisible">
        <p class="font-gramatika text-white text-sm lg:text-lg" v-html="startup.description.replace(/\n/g, '<br>')"></p>
      </transition>

         <transition name="fade-slide-left" appear v-if="isVisible" >
        <div class="space-y-4">
          <div class="flex justify-between">
            <p class="font-gramatika text-gray-400 text-sm lg:text-md">Founded</p>
            <p class="font-gramatika text-white justify-end">{{ startup.founded }}</p>
          </div>
          <hr class="w-auto border-t-2 border-descColor" />
          <div class="flex justify-between">
            <p class="font-gramatika text-gray-400 text-sm lg:text-md">Category:</p>
            <p class="font-gramatika text-white justify-end">{{ startup.category }}</p>
          </div>
          <hr class="w-auto border-t-2 border-descColor" />
          <div class="flex justify-between">
            <p class="font-gramatika text-gray-400 text-sm lg:text-md">Contact info:</p>
            <p class="font-gramatika text-white">{{ startup.contact }}</p>
          </div>
          <hr class="w-auto border-t-2 border-descColor" />
          <div class="flex justify-between">
            <p class="font-gramatika text-gray-400 text-sm lg:text-md">Team Members:</p>
            <p class="font-gramatika text-white">{{ startup.team }}</p>
          </div>
        </div>
      </transition>
      </div>

      <div class="space-y-8 mt-10 lg:mt-0">
        <transition name="fade-slide-up" appear v-if="isVisible">
        <div class="border border-descColor p-8 lg:p-36 flex flex-shrink-0 h-[350px] justify-center items-center">
          <img :src="startup.logo" class="h-32 w-32 lg:h-60 lg:w-60 object-contain" />
        </div>
        </transition>
      
      <transition name="fade-slide-right" appear v-if="isVisible">

        <div class="flex items-center justify-center">
          <a :href="startup.link" target="_blank" class="font-gramatika text-white text-center border border-linkColor rounded-3xl p-2 px-4 text-sm lg:text-base">Visit website</a>
        </div>
      </transition>

      </div>
    </div>
    
    

    <div v-else class="flex items-center justify-center mt-48 space-y-10 ">
      <p class="text-white font-rockinsoda text-6xl">Startup details not found</p>


    </div>
  </div>
  </div>
</template>

<script>
import { startupDetails } from '../startups';


export default {
  props: ['name'],
  data() {
    return {
      startup: null ,
       selectedCategory: '', 
      selectedYear: '',
      isVisible:false,
    };
  },

  mounted(){
    this.selectedCategory = this.$route.query.category;
    this.selectedYear = this.$route.query.year;
    console.log("Startup Data:", this.startup);


    const decodedName = decodeURIComponent(this.$route.params.name);
  this.startup = startupDetails.find(
    (startup) => startup.name.toLowerCase() === decodedName.toLowerCase()
  );
  
  if (!this.startup) {
    console.error(`Startup not found: ${decodedName}`);
  } else {
    console.log("Retrieved Startup Data:", this.startup); 
  }

  this.initiativeAnimations();
},


goBackToFilteredList() {
      this.$router.push({
        name: 'Startups',
        query: { category: this.selectedCategory, year: this.selectedYear }
      });
    },

methods: {

 

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
}

}
</script>


<style>
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