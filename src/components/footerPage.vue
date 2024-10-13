<template>
  <footer class="bg-darknavy text-white py-12 min-h-[320px]">
    <div class="w-full  px-4">
      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 mt-10 mb-4">
        <div class="w-full md:w-auto mb-6 md:mb-0">
          <nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <router-link to="">
            <a href="#" class="hover:underline font-gramatika text-lg">HangaPitchFest</a>
            </router-link>
            <span class="hidden md:inline font-gramatika">/</span>
            <router-link to="/hub">
              <a href="" class="hover:underline font-gramatika text-lg">Hanga Hubs</a>
            </router-link>            
            <span class="hidden md:inline font-gramatika">/</span>
            <router-link to="/srh">
              <a href="" class="hover:underline font-gramatika text-lg">Hanga SRH</a>
            </router-link>
            
          </nav>
          <!-- Right Links -->
          <nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm mt-4 md:mt-10">
            <router-link to="/blogs">
              <a href="" class="hover:underline font-gramatika text-lg">Blog</a>
            </router-link>           
            <router-link to="/contact">
              <a href="" class="hover:underline font-gramatika text-lg">Contact Us</a>
            </router-link> 
            <router-link to="/pitch-faq">
              <a href="" class="hover:underline font-gramatika text-lg">FAQ</a>
            </router-link>           
            
            <router-link to="/news">
            <a href="" class="hover:underline font-gramatika text-lg">News</a>
            </router-link>
            
          </nav>
        </div>
        <!-- Social Icons -->
        <div class="flex space-x-2 mt-6 md:mt-16 md:mr-12">
           <!-- Facebook Icon -->
           <a href="https://web.facebook.com/profile.php?id=100074599355235" target="_blank" class="text-white hover:text-gray-400">
            <a href="https://web.facebook.com/profile.php?id=100074599355235" target="_blank" class="text-white hover:text-gray-400">
              <img src="../assets/facebook.svg" class="h-10 w-10">
              </a>
          </a>

          <!-- LinkedIn Icon -->
          <a href="https://www.linkedin.com/in/hanga-pitchfest-876b93224/" class="text-white hover:text-gray-400" target="_blank">
          <img src="../assets/linked in.svg" class="h-10 w-10">
          </a>

          <!-- Instagram Icon -->
          <a href="https://www.instagram.com/hangapitchfest/" target="_blank" class="text-white hover:text-gray-400">
            <a href="https://www.instagram.com/hangapitchfest/" target="_blank" class="text-white hover:text-gray-400">
              <img src="../assets/insta.svg" class="h-10 w-10">
              </a>
          </a>

          <!-- YouTube Icon -->
          <a href="https://www.youtube.com/@hangapitchfest1051" class="text-white hover:text-gray-400" target="_blank">
            <a href="https://www.youtube.com/@hangapitchfest1051" class="text-white hover:text-gray-400" target="_blank">
              <img src="../assets/youtube.svg" class="h-10 w-10">
              </a>
          </a>

          <!-- X (Twitter) Icon -->
          <a href="https://x.com/hangapitchfest" class="text-white hover:text-gray-400" target="_blank">
            <a href="https://x.com/hangapitchfest" class="text-white hover:text-gray-400" target="_blank">
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