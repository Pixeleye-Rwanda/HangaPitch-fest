<template>
  <div class="w-full min-h-screen absolute" style="background-color: #FFF9F6;">
    <Navbar />
    <div
      class="ml-8 mr-16 xl:mt-4 2xl:-mt-12 mlg:mr-10 md:ml-12 flex flex-col md:flex-row lg:space-x-16 items-start justify-between">
      <div class="flex-1 mt-12 xl:mt-2 2xl:mt-60 md:mt-8 max-w-full md:max-w-[50%]">
        <div class="space-y-2 md:mt-12 ">
          <p class="text-4xl md:text-7xl mb-12 font-rockinsoda text-navy">CONTACT US</p>
          <p class="text-gray-600 font-gramatika text-lg mb-16 md:text-md">Got questions or ideas? We're all ears – drop
            us a
            line and let's make something amazing happen together!</p>
        </div>
        <div class="mt-12">
          <div class="text-justify space-y-12 w-full">
            <div class="space-y-8">
              <div>
                <p class="text-gray-600 font-gramatika text-lg md:text-md font-bold mb-2">VISIT US</p>
                <p class="font-gramatika underline text-lg">Nyarugenge Pension Plaza , KN 3 Rd, Kigali <br>
                  Kigali City – Rwanda</p>
              </div>

              <p class="font-gramatika text-lg text-gray">Feel free to get in touch with us through our channels:
              </p>
            </div>
            <div>
              <p class="text-gray-600 font-gramatika text-lg md:text-md font-bold mb-2">EMAIL US</p>
              <p class="font-gramatika text-lg">info@hangapitchfest.rw
              </p>
            </div>
            <div>
              <p class="text-gray-600 font-gramatika text-lg md:text-md font-bold mb-2">CALL US</p>
              <p class="font-gramatika underline text-lg">+250 789 338 380
              </p>
              <p class="font-gramatika underline text-lg">+250-908654444
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="flex-1 h-[200px] hidden md:block sm:mt-10 md:h-auto md:mt-32 xl:mt-20 2xl:mt-52 max-w-full md:max-w-[50%]">
        <img src="../assets/contact.jpg" class="w-full mt-10 h-[600px] object-cover">
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
  name: "TimelinePage",
  components: {
    Navbar
  }
}

</script>
