<template>
    <div class="w-full min-h-screen absolute" style="background-color: #FFF9F6;">
        <Navbar />
    
        <div class="md:mt-12 flex items-center justify-center">
          <div class="w-full md:max-w-2xl px-4 md:px-0 space-y-4">
            <div>
              <p class="text-4xl md:text-7xl font-rockinsoda text-navy text-center">YOU'RE ALMOST SET</p>
            </div>
            <div class="flex items-center justify-center">
              <p class="text-gray-600 font-gramatika text-lg md:text-md text-center">We have sent you a confirmation email.
                You will
                stay updated on #HangaPitchFest 2024. </p>
            </div>
            <div>
              <p class="text-gray-600 font-bold font-gramatika text-lg md:text-md text-center">See you there!</p>
            </div>
            <div>
              <img src="../assets/waitlist.jpg" alt="" class="w-full">
            </div>
            <div>
              <button
                class="w-full mt-4 font-gramatika shadow bg-tangerine focus:shadow-outline focus:outline-none text-white font-medium py-4 px-6 rounded"
                type="button">
                BACK TO HOME PAGE
              </button>
            </div>
          </div>
         
        </div>
        <div class="relative w-full h-20">
          <img src="../assets/patterns.svg" alt="" class="absolute bottom-0 left-0 w-full">
        </div>
      </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name:"WaitlistResultPage",
    components:{
        Navbar
    }
}
</script>

<style>

</style>