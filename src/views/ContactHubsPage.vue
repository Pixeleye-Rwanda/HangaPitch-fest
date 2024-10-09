<template>
    <div class="w-full min-h-screen absolute" style="background-color: #ffffff;">
        <NavHubs />
    
        <div
        class="ml-8 mr-16 xl:mt-4 2xl:-mt-12 mlg:mr-10 md:ml-12 flex flex-col md:flex-row lg:space-x-16 items-start justify-between">
        <div class="flex-1 mt-12 xl:mt-2 2xl:mt-60 md:mt-8 max-w-full md:max-w-[50%]">
          <div class="space-y-2 md:mt-12 ">
            <p class="text-2xl md:text-4xl font-gramatika font-bold text-navy">Contact Us</p>
            <p class="text-gray-600 font-gramatika text-lg md:text-md">Got any questions or ideas? 
                Fill out this form to get in touch with us. </p>
          </div>
  
          <div class="mt-8">
            <div class="text-justify space-y-12 w-full">
              <form class="w-full space-y-4">
                <div class="space-y-4">
                  <div class="flex items-center border-b border-gray-200 py-4">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-600 font-gramatika mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text" placeholder="First Name" aria-label="Full name">
                  </div>
                  <div class="flex items-center border-b border-gray-2 py-4">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-600 font-gramatika mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text" placeholder="Last Name" aria-label="Full name">
                  </div>
                  <div class="flex items-center border-b border-gray-2 py-4">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-600 font-gramatika mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text" placeholder="Email Address" aria-label="Full name">
                  </div>
                  <div class="flex items-center border-b border-gray-2 py-4">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-600 font-gramatika mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text" placeholder="Confirm Email Address" aria-label="Full name">
                  </div>
                  <div class="flex items-center border-b border-gray-2 py-4">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-600 font-gramatika mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text" placeholder="Location" aria-label="Full name">
                  </div>
                  <div class="flex items-center border-b border-gray-2 py-4">
                    <input
                      class="appearance-none bg-transparent border-none w-full text-gray-600 font-gramatika mr-3 py-1 px-2 leading-tight focus:outline-none"
                      type="text" placeholder="How can we be of help?" aria-label="Full name">
                  </div>
                </div>
  
                <div class="md:flex mb-6">
                  <label class="block text-gray-500">
                    <input class="" type="checkbox">
                    <span class="text-gray-600 font-gramatika">
                      I consent to receiving emails from Hanga about other opportunities!
                    </span>
                  </label>
                </div>
  
  
                <button
                  class=" w-full mt-4 font-gramatika shadow bg-jade focus:shadow-outline focus:outline-none text-white font-medium py-4 px-6 rounded"
                  type="button">
                  SEND MESSAGE
                </button>
  
  
              </form>
            </div>
          </div>
        </div>
  
        <div class="mt-72 text-justify space-y-8">
            <div>
                <p class="text-gray-600 font-gramatika text-lg md:text-md font-bold mb-2">VISIT US</p>
                <p class="font-gramatika text-lg">Rwanda Information Society Authority (RISA) <br>
                    Telecom House 8 KG 7 St, Kacyiru</p>
              </div>
              <div>
                <p class="font-gramatika text-lg">+250 793 902 451
                </p>
                <p class="font-gramatika text-lg">hangahubs@gmail.com
                </p>
              </div>
        </div>
      </div>
  
      <div class="relative w-full h-20">
        <img src="../assets/patterns-2.svg" alt="" class="absolute bottom-0 left-0 w-full">
      </div>
   
    </div>
  
  
  
  </template>
  
  <script>
  import NavHubs from '@/components/NavHubs.vue';
  export default {
    name: "NavHubsPage",
    components: {
      NavHubs,
    }
  }
  
  </script>
  