<template>
  <div class="w-full min-h-screen absolute" style="background-color: #FFFFFF;">
    <Navbar />

    <div class="md:mt-48  flex items-center justify-center">
      <div class="w-full md:max-w-4xl space-y-8">
        <div class="font-rockinsoda text-navy text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl top-1/3">
          <p class="text-center">WHERE WE SHARE</p>
          <p class="text-center">OUR STORY & IDEAS</p>
        </div>
        <div>
          <div class="flex">
            <input type="email" placeholder="Your email address"
              class="flex-grow bg-white text-grey border font-gramatika placeholder-gray-400 focus:outline-none px-6 py-5 rounded-l text-md sm:text-xl lg:text-xl" />
            <button class="bg-tangerine hover:bg-orange-700 text-white px-8 py-5 rounded-r font-gramatika"> SUBSCRIBE
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div class="flex flex-wrap justify-center gap-4 sm:gap-4">
          <label>
            <input type="radio" name="category" value="Fintech" class="hidden" />
            <span
              class="inline-block px-6 py-4 border font-gramatika border-lightTangerine text-navy  hover:bg-tangerine hover:text-white bg-tangerine text-white border-tangerine text-navy">
              ALL TOPICS
            </span>
          </label>
          <label>
            <input type="radio" name="category" value="Fintech" class="hidden" />
            <span
              class="inline-block px-6 py-4 border font-gramatika border-lightTangerine text-navy  hover:bg-tangerine hover:text-white  border-tangerine text-navy">
              STARTUPS
            </span>
          </label>
          <label>
            <input type="radio" name="category" value="Fintech" class="hidden" />
            <span
              class="inline-block px-6 py-4 border font-gramatika border-lightTangerine text-navy  hover:bg-tangerine hover:text-white border-tangerine text-navy">
              WEEKLY ROUND-UPS
            </span>
          </label>
          <label>
            <input type="radio" name="category" value="Fintech" class="hidden" />
            <span
              class="inline-block px-6 py-4 border font-gramatika border-lightTangerine text-navy  hover:bg-tangerine hover:text-white  border-tangerine text-navy">
              HANGA PITCH FEST
            </span>
          </label>
        </div>
      </div>
    </div>

    <div class="px-4 space-y-8 sm:px-6 md:px-8 lg:px-12 mt-16 md:mt-12 lg:mt-16">
      <!-- First Row -->
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <!-- First Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/2 flex-shrink-0">
          <img src="../assets/stad.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <button class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">STARTUPS</button>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/2 flex-shrink-0">
          <img src="../assets/vr.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 mr-2 mb-2 w-fit">STARTUPS</button>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 sm:px-4 w-fit">INVESTMENT</button>
              </div>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Second Row -->
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <!-- First Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/4 flex-shrink-0">
          <img src="../assets/stad.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <button class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">STARTUPS</button>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-3/4 flex-shrink-0">
          <img src="../assets/vr.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 mr-2 mb-2 w-fit">STARTUPS</button>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 sm:px-4 w-fit">INVESTMENT</button>
              </div>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Third Row -->
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <!-- First Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/2 flex-shrink-0">
          <img src="../assets/stad.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <button class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">STARTUPS</button>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/2 flex-shrink-0">
          <img src="../assets/vr.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 mr-2 mb-2 w-fit">STARTUPS</button>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 sm:px-4 w-fit">INVESTMENT</button>
              </div>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fourth Row -->
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <!-- Third Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/4 flex-shrink-0">
          <img src="../assets/stad.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <button class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">STARTUPS</button>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Fourth Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-3/4 flex-shrink-0">
          <img src="../assets/vr.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 mr-2 mb-2 w-fit">STARTUPS</button>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 sm:px-4 w-fit">INVESTMENT</button>
              </div>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Fifth Row -->
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <!-- First Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/2 flex-shrink-0">
          <img src="../assets/stad.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <button class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">STARTUPS</button>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/2 flex-shrink-0">
          <img src="../assets/vr.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 mr-2 mb-2 w-fit">STARTUPS</button>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 sm:px-4 w-fit">INVESTMENT</button>
              </div>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sixth Row -->
      <div class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <!-- Third Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-1/4 flex-shrink-0">
          <img src="../assets/stad.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <button class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 w-fit">STARTUPS</button>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Fourth Card -->
        <div class="relative h-[400px] sm:h-[450px] md:h-[600px] w-full md:w-3/4 flex-shrink-0">
          <img src="../assets/vr.jpg" class="w-full h-full object-cover">
          <div class="absolute inset-0"
            style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
            <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
              <div>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 mr-2 mb-2 w-fit">STARTUPS</button>
                <button
                  class="text-black bg-white font-gramatika text-lg p-1 sm:p-2 px-6 sm:px-6 sm:px-4 w-fit">INVESTMENT</button>
              </div>
              <div>
                <h2 class="text-white font-rockinsoda text-3xl sm:text-3xl md:text-4xl">BK ARENA TO BE USED FOR<br>HANGA
                  2024</h2>
                <p class="text-white font-gramatika text-md sm:text-base mt-2">The largest in-person technology event in
                  Rwanda designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda text-md sm:text-base mt-4">Oct 24 . Hanga team, Becky</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter signup section -->

    <NewsLetter/>
    
    <!-- Footer section -->
    
  
    <FooterPage/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import NewsLetter from '@/components/NewsLetter.vue';
import FooterPage from '@/components/footerPage.vue';
export default {
  name: "BlogsPage",
  components: {
    Navbar,
    NewsLetter,
    FooterPage

  }
}
</script>

<style></style>