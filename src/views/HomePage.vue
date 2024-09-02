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
       <div class="mt-16 ml-40 ">
        <p class="font-rockinsoda text-navy text-6xl">IGNITING AND INSPIRING</p>
        <p class="font-rockinsoda text-navy text-6xl">INNOVATION</p>
       </div>

       <div class="ml-40 flex mt-8 gap-4 ">
        <!-- Left side with image and text -->
        <div class="flex-1 ">
          <img src="../assets/students.jpg" class="h-auto w-full">
          <p class="font-gramatica mt-8 text-darknavy">
            We believe in empowering innovators solving some of the dire
          </p>
          <p class="font-gramatica text-darknavy">
            challenges in the Rwandan community and abroad
          </p>
          <button class="mr-8 mt-6 p-2 px-8 font-gramatika text-sm bg-tangerine text-white font-semibold">
            Learn more
          </button>
        </div>
        
        <!-- Right side with vertically stacked images -->
        <div class="flex-1 space-y-4">
          <div>
            <img src="../assets/speaker.png" class="h-60 w-96 object-cover">
          </div>
          <div>
            <img src="../assets/audience.jpg" class="h-60 w-96 object-cover">
          </div>
        </div>
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