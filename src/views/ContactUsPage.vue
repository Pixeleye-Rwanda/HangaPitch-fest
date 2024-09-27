<template>
  <div class="w-full h-screen absolute" style="background-color: #FFF9F6;">
    <Navbar />

    <div>
      <div
        class="ml-4 mr-4 xl:mt-4 2xl:-mt-12 mlg:mr-10 md:ml-12 flex flex-col md:flex-row lg:space-x-16 items-start justify-between">
        <div class="flex-1  mt-12 xl:mt-2 2xl:mt-60 md:mt-8 max-w-full md:max-w-[50%]">
          <div class="space-y-2  md:mt-28 ">
            <p class="text-4xl md:text-7xl font-rockinsoda text-navy">DON'T MISS OUT</p>
            <p class="text-gray-600 font-gramatika text-lg md:text-md">Be the first to know about
              #HangaPitchFest 2024
              As an entrepreneur, student or individual - you wouldn’t want to miss out on this
              opportunity! </p>
          </div>

          <div class="mt-10">
            <div class="text-justify space-y-12 w-full">
              <form class="w-full max-w-lg space-y-4">
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
                <div class="md:flex mb-6">
                  <div class=""></div>
                  <label class="block text-gray-500">
                    <input class="" type="checkbox">
                    <span class="text-gray-600 font-gramatika">
                      I consent to receiving emails from Hanga about other opportunities!
                    </span>
                  </label>
                </div>
                <div class="">
                  <div class=""></div>
                  <div class="">
                    <button class="font-gramatika shadow bg-tangerine focus:shadow-outline focus:outline-none text-white font-medium py-4 px-6 rounded" type="button">
                      GET EARLY ACCESS
                    </button>
                  </div>
                </div>
                <!-- <button class="p-2 px-8 font-gramatika bg-tangerine text-white font-semibold zoom-in button-hover"
                  ref="button">
                  GET EARLY ACCESS
                </button> -->
              </form>
            </div>
          </div>
        </div>

        <div class="flex-1 h-[300px] sm:mt-10 md:h-auto  md:mt-32 xl:mt-36 2xl:mt-52 max-w-full md:max-w-[50%]">
          <img src="../assets/dopee.svg" class="w-full mt-10 h-full  object-cover">
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  name: "TimelinePage",
  components: {
    Navbar
  }
}

</script>
