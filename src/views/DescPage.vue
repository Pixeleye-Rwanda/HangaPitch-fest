<template>
    <div class="w-full min-h-screen absolute"  style="background: linear-gradient(319.89deg, #030C37 5.13%, #22348A 99.13%)">
       
      <div  v-if="startup" class="flex -mt-6 items-center justify-center p-10 space-x-20 ">
   
        <div class="w-[90vh] space-y-12">

          
            
            <router-link :to="{ path: '/network', hash: '#startupDiv', query: { category: $route.query.category, year: $route.query.year }
          }">
          <div class="flex space-x-6 mt-20">
          <img src="../assets/Group 22.png" alt="">
            <a href="" @click="goBackToFilteredList" class="text-white font-gramatika mt-4">back to startups</a>
          </div>
           </router-link>
           

            <!-- <p class=" font-gramatika text-white text-lg " >{{startup.description }}</p> -->
            <p class="font-gramatika text-white text-lg" v-html="startup.description.replace(/\n/g, '<br>')"></p>

            <div class="space-y-4">

              <div class="flex justify-between">
            <p class=" font-gramatika text-gray-400  text-md">Founded</p>
            <p class="font-gramatika text-white justify-end ">{{startup.founded}}</p>
          </div>
            <hr class="w-auto border-t-2 border-descColor">
            <div class="flex justify-between">
            <p class=" font-gramatika text-gray-400   text-md ">Category:</p>
            <p class="font-gramatika text-white justify-end ">{{startup.category}}</p>
          </div>
            <hr class="w-auto border-t-2 border-descColor">

             <div class="flex justify-between">
            <p class=" font-gramatika text-gray-400   text-md ">Contact info :</p>
            <p class="font-gramatika text-white  ">{{startup.contact}}</p>

          </div>
            <hr class="w-auto border-t-2 border-descColor">
            <div class="flex justify-between">
            <p class=" font-gramatika text-gray-400  text-md ">Team Members:</p>
            <p class="font-gramatika text-white  ">{{startup.team}}</p>

          </div>
        </div>
        </div>

        <div class="space-y-8 ">
        <div class=" p-4 border border-descColor p-36 flex flex-shrink-0 h-[350px] ">
            <img :src="startup.logo" class="h-60 w-60 -mt-20 object-contain ">
        </div>
        <div class="flex items-center justify-center ">
        <a href="" class="font-gramatika text-white text-center border border-linkColor rounded-3xl p-2 px-4"> Visit website </a>
         </div>
         </div>
      
    </div>
      <div v-else class="flex items-center justify-center  mt-48">
        <p class="text-white  font-rockinsoda text-6xl">Startup details not found</p>
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
}
,
  goBackToFilteredList() {
      this.$router.push({
        name: 'Startups',
        query: { category: this.selectedCategory, year: this.selectedYear }
      });
    }
};
</script>