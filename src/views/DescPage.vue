<template>
    <div class="w-full absolute h-auto"  style="background: linear-gradient(319.89deg, #030C37 5.13%, #22348A 99.13%)">
       
      <div  v-if="startup" class="flex -mt-6 items-center justify-center p-24  space-x-20 ">
   
       

        <div class="w-[70vh] space-y-12">

          
            
            <router-link :to="{ path: '/network', hash: '#startupDiv', query: { category: $route.query.category, year: $route.query.year }
          }">
          <div class="flex space-x-6">
          <img src="../assets/Group 22.png" alt="">
            <a href="" @click="goBackToFilteredList" class="text-white font-gramatika mt-4">back to startups</a>
          </div>
           </router-link>
           

            <p class=" font-gramatika text-white text-lg ">{{ startup.description }}</p>
            <div class="space-y-4">
            <p class=" font-gramatika text-white text-md">Founded</p>
            <hr class="w-auto border-t-2 border-descColor">
            <p class=" font-gramatika text-white text-md ">Category</p>
            <hr class="w-auto border-t-2 border-descColor">

            <p class=" font-gramatika text-white text-md ">Contact info</p>
            <hr class="w-auto border-t-2 border-descColor">
            <p class=" font-gramatika text-white text-md ">Team Members </p>
        </div>
        </div>

        <div class="space-y-8">
        <div class=" p-4 border border-descColor flex flex-shrink-0 h-[380px] ">
            <img :src="startup.logo" class="h-full w-full ">
        </div>
        <div class="flex items-center justify-center ">
        <a href="" class="font-gramatika text-white text-center border border-linkColor rounded-3xl p-2 px-4"> Visit website </a>
         </div>
         </div>
      
    </div>
      <div v-else>
        <p>Startup not found</p>
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
      selectedYear: ''
    };
  },

  mounted(){
    this.selectedCategory = this.$route.query.category;
    this.selectedYear = this.$route.query.year;
  },

  created() {
    const decodedName = decodeURIComponent(this.$route.params.name);
    console.log('Looking for startup:', decodedName); 
  
  if (startupDetails && Array.isArray(startupDetails)) {
    this.startup = startupDetails.find(s => s.name.toLowerCase() === decodedName.toLowerCase());
} else {
    console.error('Startup details are undefined or not an array');
  }

  if (!this.startup) {
    console.log('Startup not found:', decodedName);
  }}
,
  goBackToFilteredList() {
      this.$router.push({
        name: 'Startups',
        query: { category: this.selectedCategory, year: this.selectedYear }
      });
    }
};
</script>