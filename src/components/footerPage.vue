<template>
  <footer class="  bg-darknavy text-white py-12 min-h-[320px]">
    <div class="  container px-4">
      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 mt-10 mb-4">
        <div class="w-full md:w-auto mb-6 md:mb-0">
          <nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <a href="#" class="hover:underline font-gramatika text-lg">HangaPitchFest</a>
            <span class="hidden md:inline font-gramatika">/</span>
            <a href="#" class="hover:underline font-gramatika text-lg">Hanga Hubs</a>
            <span class="hidden md:inline font-gramatika">/</span>
            <a href="#" class="hover:underline font-gramatika text-lg">Hanga SRH</a>
          </nav>
          <!-- Right Links -->
          <nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm mt-4 md:mt-10">
            <a href="#" class="hover:underline font-gramatika text-lg">Blog</a>
            <a href="#" class="hover:underline font-gramatika text-lg">Contact Us</a>
            <a href="#" class="hover:underline font-gramatika text-lg">FAQ</a>
            <a href="#" class="hover:underline font-gramatika text-lg">News</a>
          </nav>
        </div>
        <!-- Social Icons -->
        <div class="flex space-x-2 mt-6 md:mt-16 md:mr-12">
           <!-- Facebook Icon -->
           <a href="#" class="text-white hover:text-gray-400">
            <a href="#" class="text-white hover:text-gray-400">
              <img src="../assets/facebook.svg" class="h-10 w-10">
              </a>
          </a>

          <!-- LinkedIn Icon -->
          <a href="#" class="text-white hover:text-gray-400">
          <img src="../assets/linked in.svg" class="h-10 w-10">
          </a>

          <!-- Instagram Icon -->
          <a href="#" class="text-white hover:text-gray-400">
            <a href="#" class="text-white hover:text-gray-400">
              <img src="../assets/insta.svg" class="h-10 w-10">
              </a>
          </a>

          <!-- YouTube Icon -->
          <a href="#" class="text-white hover:text-gray-400">
            <a href="#" class="text-white hover:text-gray-400">
              <img src="../assets/youtube.svg" class="h-10 w-10">
              </a>
          </a>

          <!-- X (Twitter) Icon -->
          <a href="#" class="text-white hover:text-gray-400">
            <a href="#" class="text-white hover:text-gray-400">
              <img src="../assets/x.svg" class="h-10 w-10">
              </a>
          </a>
        </div>
      </div>
      <!-- Bottom Section -->
      <div class="mt-4 p-4 -ml-8 md:p-8 text-xs text-gray-400 font-gramatika text-center md:text-left">
        <p class="font-gramatika text-base md:text-lg"> Copyright &copy; 2024 Hanga PitchFest. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPage',
 
}
</script>

<style scoped>
@media (max-width: 768px) {
}
</style>