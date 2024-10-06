<template>
    <div class="h-screen overflow-x-hidden ">
        <NavInit />

        <div class=" ml-8 flex flex-col lg:flex-row mt-12 lg:mt-32 px-6 w-full lg:space-x-10 ">
            <!-- Text Section -->
            <div class="space-y-10">
                <div class="lg:text-left  space-y-6">
                    <p class="text-3xl lg:text-8xl font-rockinsoda text-navy">ADDRESSING</p>
                    <p class="text-3xl lg:text-8xl font-rockinsoda text-navy">THE OBSTACLES & GAPS </p>
                    <p class="text-3xl lg:text-8xl font-rockinsoda text-navy">LIMITING EARLY-STAGE STARTUPS.</p>
                </div>

                <!-- Description and Button Section -->
                <div class="text-justify mt-4 lg:mt-0 space-y-8 w-full lg:w-2/3">
                    <p class="text-base lg:text-2xl font-gramatika text-navy">
                        Creating opportunities for startups.
                    </p>
                    <div class="flex  lg:justify-start">
                        <button class="p-4 px-4 font-gramatika bg-jade text-white transition-all" ref="button">
                            <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-"
                                class="mt-6">Start Your application</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative w-full flex-shrink-0 mt-20 p-10">
            <img src="../assets/hanga-hubs-1.jpg"
                class="w-full max-h-[800px] h-[60vh] sm:h-[100px] lg:h-[600px] object-cover">
        </div>

        <!-- PARTNERS-HUBS -->
        <div class="mt-24 flex items-center justify-center ">
            <img src="../assets/hanga-hubs-partners.jpg">
        </div>

        <!-- Text Section -->
        <div class=" ml-10  flex flex-col lg:flex-row  w-full mt-24 lg:mt-12 lg:mt-32 px-2 p-2 w-full lg:space-x-4 ">
            <div class="lg:text-left w-2/4 space-y-2">
                <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">An Open Space for Young</p>
                <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">Entrepreneurs and</p>
                <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">Innovators. </p>
            </div>
            <div class="text-justify mt-16 lg:mt-0 space-y-8 w-full lg:w-2/4">
                <p class="text-base lg:text-lg font-gramatika text-navy mr-24">
                    A Hub staffed, furnished and equipped with machinery, equipment and amenities needed for building
                    startups with cool tech solutions, products and services.
                </p>
            </div>
        </div>

        <!-- Boy Section -->
        <div class="mt-12 ml-4 flex space-x-16 w-full">
            <div class="w-2/4 ml-16 h-[700px]">
                <img src="../assets/hanga-boy.jpg" class="w-full h-full object-cover">
            </div>
            <div class="mt-8 w-2/4">
                <div>
                    <div class="mb-16">
                        <p
                            class="text-navy text-lg md:text-2xl font-gramatika font-bold text-3xl lg:text-6xl font-rockinsoda text-navy">
                            Program stages </p>
                    </div>
                    <div class="text-justify mt-4 lg:mt-0 space-y-8 w-full">
                        <p class="text-navy font-bold text-2xl lg:text-4xl font-rockinsoda text-navy uppercase">Ideation
                        </p>
                        <p class="text-base lg:text-lg font-gramatika text-navy mr-24 text-3xl lg:text-6xl">
                            .4-6 weeks boot camp targeting up to 30 individual participants selected using a highly
                            competitive
                            process.</p>

                        <p class="text-base lg:text-lg font-gramatika text-navy mr-24">.Open to youths above 18 years,
                            with a desire to learn how to ideate, validate, prototype, and create
                            a start-up, and willing to complete a 9-month fully fledged innovation program on full-time
                            basis.</p>
                        <p class="text-base lg:text-lg font-gramatika text-navy mr-24">.Fellows who cannot find
                            compelling opportunity cases or high potential ideas will be dropped out of
                            the program, or they may follow available exit support mechanism or re-entry routes.</p>
                    </div>
                </div>
                <!-- Scroll Buttons -->
                <div class="float-left space-x-2 mt-24 mr-8">
                    <button @click="scrollLeft"
                        class=" top-1/2 right-0 transform -translate-y-1/2 z-10 border-2  rounded-full p-4 bg-white text-navy focus:outline-none hover:bg-navy hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button @click="scrollRight"
                        class=" top-1/2 left-0 transform -translate-y-1/2 z-10 border-2  rounded-full p-4 bg-white text-navy focus:outline-none hover:bg-navy hover:text-white transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div class="lg:text-left w-2/4 space-y-2 ml-16 mt-24">
            <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">BY THE</p>
            <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">NUMBERS</p>
        </div>

        <div
            class="flex flex-wrap justify-center  lg:mr-4 sm:mr-0 lg:justify-between gap-y-20 gap-x-8 lg:gap-x-20  px-4 lg:px-10 mt-24 lg:mt-32">
            
            <div class="w-full sm:w-1/2 lg:w-1/4 space-y-4 text-center lg:text-left" >
                <img src="../assets/user.svg" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0">
                <hr class="border-t border-gray-300">
                <div class="space-y-2">
                    <p class="font-rockinsoda text-5xl text-navy">1000+</p>
                    <p class="text-lightblue text-lg font-gramatika mt-4">Youths trained</p>

                </div>
            </div>

            <div class="w-full sm:w-1/2 lg:w-1/3 space-y-4 text-center lg:text-left" >
                <img src="../assets/stairs.svg" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0">
                <hr class="border-t border-gray-300">
                <div class="space-y-2 ">
                    <p class="font-rockinsoda text-5xl text-navy">192</p>
                    <p class="text-lightblue text-lg font-gramatika">Supported Start-ups</p>

                </div>
            </div>

            <div class="w-full sm:w-1/2 lg:w-1/4 space-y-4 text-center lg:text-left">
                <img src="../assets/bag.svg" class="max-w-[150px] sm:max-w-[180px] lg:max-w-[200px] mx-auto lg:mx-0">
                <hr class="border-t border-gray-300">
                <div class="space-y-2">
                    <p class="font-rockinsoda text-5xl text-navy">768</p>
                    <p class="text-lightblue  text-lg font-gramatika mt-4 text-justify">Direct-jobs created</p>
                </div>

            </div>

        </div>

        <!-- Community -->
        <div class="flex items-center justify-center mt-24">
            <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">OUR COMMUNITY</p>
        </div>
        <div class="px-4 sm:px-6 md:px-8 lg:px-12 mt-8 md:mt-12 lg:mt-16">
            <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                <!-- First Card -->
                <div class="relative h-[400px] w-full md:w-1/4 flex-shrink-0">
                    <img src="../assets/muhanga.jpg" class="w-full h-full object-cover">
                    <div class="absolute inset-0"
                        style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                        <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                            <p class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">MUHANGA</p>
                            <!-- <p class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">MUHANGA</p> -->
                        </div>
                    </div>
                </div>

                <!-- Second Card -->
                <div class="relative h-[400px] w-full md:w-1/4 flex-shrink-0">
                    <img src="../assets/nyagatare.jpg" class="w-full h-full object-cover">
                    <div class="absolute inset-0"
                        style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                        <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                            <button
                                class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">NYAGATARE</button>
                        </div>
                    </div>
                </div>
                <!-- Third Card -->
                <div class="relative h-[400px] w-full md:w-1/4 flex-shrink-0">
                    <img src="../assets/rubavu.jpg" class="w-full h-full object-cover">
                    <div class="absolute inset-0"
                        style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                        <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                            <button
                                class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">RUBAVU</button>
                        </div>
                    </div>
                </div>

                <!-- Fourth Card -->
                <div class="relative h-[400px] w-full md:w-1/4 flex-shrink-0">
                    <img src="../assets/rusizi.jpg" class="w-full h-full object-cover">
                    <div class="absolute inset-0"
                        style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                        <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
                            <button
                                class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">RUSIZI</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Selection process -->
        <div class="relative h-auto min-h-[600px]">
            <div class="mt-20 py-16  sm:mt-32 bg-cover h-full"
                :style="{ backgroundImage: `url(${require('@/assets/hanga-bg.svg')})` }">
                <div class="lg:text-left w-2/4 space-y-2 ml-16 mt-24">
                    <p class="text-3xl lg:text-4xl font-rockinsoda text-white">OUR SELECTION PROCESS</p>
                </div>

                <div class="px-4 sm:px-6 md:px-8 lg:px-12 mt-8 md:mt-12 lg:mt-16 flex flex-col space-y-16 mb-16">
                    <!-- First row -->
                    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                        <div class="w-full md:w-1/3 space-y-4">
                            <img src="../assets/hub-icon-1.svg" alt="">
                            <p class="text-xl lg:text-xl font-gramatika font-bold text-white">Attend the Information <br> Desk
                                Workshop</p>
                            <p class="text-white font-gramatika">Before call for applications, an info session
                                will be held interested candidates to learn more about the Hanga Hub programs.</p>
                        </div>
                        <div class="w-full md:w-1/3 space-y-4">
                            <img src="../assets/hub-icon-2.svg" alt="">
                            <p class="text-xl lg:text-xl font-gramatika text-white font-bold">Complete & Submit your <br> Application</p>
                            <p class="text-white font-gramatika">Applications will submitted on our applications platform. Candidates must to register on the platform before they can submit an application.</p>
                        </div>
                        <div class="w-full md:w-1/3 space-y-4">
                            <img src="../assets/hub-icon-3.svg" alt="">
                            <p class="text-xl lg:text-xl font-gramatika text-white font-bold">Entrepreneurial <br>
                                Intentions Assessment</p>
                            <p class="text-white font-gramatika">Candidates will be requested to complete an entrepreneurial form to assess their  motivation and commitment program.</p>
                        </div>
                    </div>
                    <!-- Second row -->
                    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
                        <div class="w-full md:w-1/3 space-y-4">
                            <img src="../assets/hub-icon-4.svg" alt="">
                            <p class="text-xl lg:text-xl font-gramatika text-white font-bold">Innovation scenario <br> assessment test</p>
                            <p class="text-white font-gramatika">Candidates will take an online assessment, exploring an innovation scenario to evaluate their creativity, writing, numeracy, and data analysis abilities</p>
                        </div>
                        <div class="w-full md:w-1/3 space-y-4">
                            <img src="../assets/hub-icon-5.svg" alt="">
                            <p class="text-xl lg:text-xl font-gramatika text-white font-bold">Shortlisted candidates</p>
                            <p class="text-white font-gramatika">Selection ends with a workshop showcasing finalists and assessing entrepreneurial readiness for targeted improvement.</p>
                        </div>
                     
                    </div>
                </div>


            </div>
        </div>

          <!-- Program Gallery --->
          <div class="mt-32  pl-4 md:pl-12 pr-4 w-full">
            <div>
              <h1 class="font-rockinsoda text-navy text-4xl md:text-5xl mb-16">PROGRAM GALLERY</h1>
            </div>
            <div class="mt-8 space-y-4 md:space-y-0">
              <!-- First row of images -->
              <div class="flex flex-wrap justify-start w-full">
                <div class="h-[180px] md:h-[215px] w-1/2  md:w-1/5">
                  <img src="../assets/pg-1.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-2.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-3.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-4.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px]  w-1/2  md:w-1/5">
                  <img src="../assets/pg-5.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:hidden w-1/2 md:w-1/5">
                  <img src="../assets/pg-6.png" class="w-full h-full object-cover">
                </div>
              </div>
              <!-- Second row of images -->
              <div class="flex flex-wrap justify-start w-full">
                <div class="h-[180px] md:h-[215px]  w-1/2 md:w-1/5">
                  <img src="../assets/pg-7.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-8.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-9.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-10.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-11.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:hidden w-1/2 md:w-1/5">
                  <img src="../assets/pg-12.png" class="w-full h-full object-cover">
                </div>
              </div>
              <!-- Third row of images -->
              <div class="flex flex-wrap justify-start w-full">
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-13.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-14.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-15.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-16.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-17.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:hidden w-1/2 md:w-1/5">
                  <img src="../assets/pg-18.png" class="w-full h-full object-cover">
                </div>
              </div>
              <!-- Fourth row of images -->
              <div class="flex flex-wrap justify-start w-full">
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-19.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-20.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-21.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-22.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-23.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:hidden w-1/2 md:w-1/5">
                  <img src="../assets/pg-24.png" class="w-full h-full object-cover">
                </div>
              </div>
              <!-- Fifth row of images -->
              <div class="flex flex-wrap justify-start w-full">
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-25.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-26.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-27.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-28.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px] md:h-[215px] w-1/2 md:w-1/5">
                  <img src="../assets/pg-29.png" class="w-full h-full object-cover">
                </div>
                <div class="h-[180px]  md:hidden  w-1/2 md:w-1/5">
                  <img src="../assets/pg-30.png" class="w-full h-full object-cover">
                </div>
              </div>
          
              <!-- Follow button -->
              <div class="flex items-center justify-center mt-2">
                <button class="font-gramatika text-black text-md bg-white p-2 rounded-md py-2 px-4 shadow-md">Follow us on Instagram</button>
              </div>
            </div>
          </div>

    </div>






</template>

<script>
import NavInit from '@/components/NavInit.vue';
export default {
    name: "HangaHub",
    components: {
        NavInit
    }
}
</script>

<style></style>
