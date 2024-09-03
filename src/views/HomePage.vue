<template>
<div class="overflow-x-hidden">
    <div class="h-screen  ">
        <div class=" relative h-[96%] ">
            <div class="absolute inset-0 bg-black opacity-30"></div>
            <img src="../assets/bghome.jpg" alt="" class="h-full w-full">
            <NavBar class="absolute top-0 left-0 w-full"/>

         <div class="font-rockinsoda absolute text-white text-6xl top-56  ml-12">
         
            <p>THE LARGEST IN-PERSON </p>
            <p>TECHNOLOGY EVENT IN</p>
            <p>Rwanda</p>    
            </div>
           
           </div>

         </div>

       <div class="absolute top-2/3 ml-12 ">
        <div class="flex">
        <button class="mr-8 p-2 px-4 font-gramatika bg-white text-black  font-semibold hover:bg-tangerine hover:text-white">
            Apply Now
         </button>
         <button class=" p-2 px-4 font-gramatika border px-8 text-white  font-semibold hover:bg-tangerine hover:text-black">
            Impact video
         </button>
        </div>
         
            
      <img src="../assets/gvticons.svg" class="mt-12">
       </div>
     
       <!----------------- second section--------------->
       <div class="mt-16 ml-12 ">
        <p class="font-rockinsoda text-navy text-7xl">IGNITING AND INSPIRING</p>
        <p class="font-rockinsoda text-navy text-7xl">INNOVATION</p>
       </div>

       <div class="ml-12 flex mt-8 gap-4">
        <!-- Left side with image and text -->
        <div class="flex-2">
          <img src="../assets/students.jpg" class="w-full h-auto object-cover">
          <p class="font-gramatica mt-8 text-darknavy text-xl">
            We believe in empowering innovators solving some of the dire
          </p>
          <p class="font-gramatica text-darknavy text-xl">
            challenges in the Rwandan community and abroad
          </p>
          <button class="mr-8 mt-6 p-2 px-8 font-gramatika bg-tangerine text-white font-semibold">
            Learn 
          </button>
        </div>
        
        <!-- Right side with vertically stacked images -->
        <div class="flex-1 space-y-4">
          <div class="mr-10">
            <img src="../assets/speaker.png" class="h-60 w-96 object-cover">
          </div>
          <div class="mr-10">
            <img src="../assets/audience.jpg" class="h-60 w-96 object-cover">
          </div>
        </div>
      </div>

      <div class=" flex mt-28 space-x-80 ml-12">
        <div class="space-y-8">
       <img src="../assets/Component 1.png">
       <hr class="border-t border-gray-300">
       <div class="-space-y-2">
        <p class="font-rockinsoda text-7xl text-navy">130+</p>
        <p class="text-lightblue font-gramatika">Startups</p>
       </div>
       
        </div>

        <div class="space-y-8">
         <img src="../assets/Component 1 (2).png" class="ml-12" >
         <hr class="border-t border-gray-300">
         <div class="-space-y-2">
          <p class="font-rockinsoda text-7xl text-navy">10,000+</p>
          <p class="text-lightblue font-gramatika">Attendees</p>
         </div>
         
         
        </div>

        <div class="space-y-8">
        <img src="../assets/Component 1 (1).png " class="ml-12"  >
        <hr class="border-t border-gray-300 mr-32">
         <div class="-space-y-2">
        <p class="font-rockinsoda text-7xl text-navy mr-32">RWF600M</p>
        <p class="text-lightblue font-gramatika">Invested in tech startups</p>
         </div>
        
        </div>

      </div>

      <div class="relative text-white p-8 mt-20">
        <img src="../assets/notched.svg" alt="" class="w-full">
        <img src="../assets/Vector 6.png" class="absolute top-0 left-0 w-1/3 h-auto left-[-25%]">
      </div>

   
</div>
</template>


<script>
import NavBar from '@/components/Navbar.vue';
export default {
    name:'HomePage',
    components:{
        NavBar
    }
}
</script>


<style scoped>

</style>


