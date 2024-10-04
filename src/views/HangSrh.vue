<template>
    <div class="h-screen overflow-x-hidden ">
<NavInit/>

<div class=" ml-8 flex flex-col lg:flex-row mt-12 lg:mt-32 px-6 w-full lg:space-x-10 ">
    <!-- Text Section -->
     <div class="space-y-10">
    <div class="lg:text-left  space-y-4 w-2/3">
      <p class="text-3xl lg:text-7xl font-rockinsoda text-navy">REVOLUTIONALIZING  HEALTHCARE AROUND THE GLOBE </p>

    </div>
  
    <!-- Description and Button Section -->
    <div class="text-justify mt-4 lg:mt-0 space-y-8 w-full lg:w-2/3">
      <p class="text-base lg:text-2xl font-gramatika text-navy">
        Exploring opportunities that exists for tech-enabled startups to solve key issues in SRH.
      </p>
      <div class="flex  lg:justify-start">
        <button class="p-2 px-4 font-gramatika bg-tangerine text-white hover:bg-tangerine-dark transition-all" ref="button">
          <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" class="mt-6">Start Your application</a>
       
        </button>
      </div>
    </div>
</div>
  </div>

<div class="relative w-full flex-shrink-0 mt-20 p-10">
  <img src="../assets/Group 169.jpg"  class="w-full max-h-[800px] h-[60vh] sm:h-[100px] lg:h-[600px] object-cover">
</div>

<div class=" ml-10  flex flex-col lg:flex-row  w-full mt-24 lg:mt-12 lg:mt-32 px-2 p-2 w-full lg:space-x-4 ">
  <!-- Text Section -->
  <div class="lg:text-left w-2/4 space-y-4 mt-20 ">
    <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">FUNDING 20 TECH-ENABLED HEALTH STARTUPS. </p>
 


  </div>

  <!-- Description and Button Section -->
  <div class="text-justify mt-4 lg:mt-0 space-y-8 w-full lg:w-2/4">
    <p class="text-base lg:text-lg font-gramatika text-navy mr-24">
      The Hanga Sexual & Reproductive Health (SRH) Program was conceived by the Government of Rwanda in 2022 through HangaPitchFest to explore the opportunity that exists for technology enabled startups to solve key issues in SRH to accelerate better outcomes.
  This year, we are excited to work with key partners to scout, select, and provide technical and business support to 20 startups in Sub-Saharan Africa working on innovative tech-enabled solutions that are addressing challenges in ways that break the mold in SRH.
    </p>
   
  </div>
</div>
</div>

</template>
<script>
import NavInit from '@/components/NavInit.vue';
export default{
    name:"HangaSrh",
    components:{
        NavInit
    }
}
</script>

<style>
</style>