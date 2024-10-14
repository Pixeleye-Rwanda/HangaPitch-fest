<template>
  <div ref="observerElement">
  <footer class="bg-darknavy text-white py-12 min-h-[320px]">
    <div class="w-full  px-4">
      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-4 mt-10 mb-4">
        <div class="w-full md:w-auto mb-6 md:mb-0">
          <transition name="fade-slide-up" appear v-if="isVisible" >
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
        </transition>
          <!-- Right Links -->
           <transition name="fade-slide-left" appear="" v-if="isVisible">
          <nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-sm mt-4 md:mt-10">
            <router-link to="/blogs">
              <a href="" class="hover:underline font-gramatika text-lg">Blog</a>
            </router-link>           
            <router-link to="/contact">
              <a href="" class="hover:underline font-gramatika text-lg" >Contact Us</a>
            </router-link> 
            <router-link to="/faq">
              <a href="" class="hover:underline font-gramatika text-lg">FAQ</a>
            </router-link>           
            
            <router-link to="/news">
            <a href="" class="hover:underline font-gramatika text-lg">News</a>
            </router-link>
            
          </nav>
        </transition>
        </div>
        <!-- Social Icons -->
         <transition name="fade-slide-right" appear v-if="isVisible">
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
      </transition>
      </div>
      <!-- Bottom Section -->
      <div class="mt-4 p-4 -ml-8 md:p-8 text-xs text-gray-400 font-gramatika text-center md:text-left">
        <p class="font-gramatika text-base md:text-lg"> Copyright &copy; 2024 Hanga PitchFest. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'FooterPage',

  data(){

    return{
      isVisible:false,
    }
  },

  mounted(){
 
  this.initiativeAnimations();

  },

  methods:{
 initiativeAnimations() {
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
      }
    });
  });

  observer.observe(this.$refs.observerElement);
},


  }
 
}
</script>

<style scoped>
@media (max-width: 768px) {
}
/* Fade and Slide Up */
.fade-slide-up-enter-active {
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(80px);
}
.fade-slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Fade and Slide Left */
.fade-slide-left-enter-active {
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1); /* Even slower and more natural */
}
.fade-slide-left-enter-from {
  opacity: 0;
  transform: translateX(-80px);
}
.fade-slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Fade and Slide Right */
.fade-slide-right-enter-active {
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1); /* Even slower and more natural */
}
.fade-slide-right-enter-from {
  opacity: 0;
  transform: translateX(80px);
}
.fade-slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}


</style>