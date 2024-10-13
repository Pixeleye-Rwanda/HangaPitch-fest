<template>
    <div ref="observerElement">
    <div class="relative w-full bg-newsClr">
        <div class="  mt-32 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">

          <div class="max-w-4xl">
            <transition name="fade-slide-up" appear v-if="isVisible">
            <div>
            <h2 class="text-4xl sm:text-5xl lg:text-7xl text-white font-rockinsoda mb-2 sm:mb-4">NEVER MISS</h2>
            <h2 class="text-4xl sm:text-5xl lg:text-7xl text-white font-rockinsoda mb-6">A HIGHLIGHT FROM HANGA</h2>
          </div>
          </transition>

          <transition name="fade-slide-right" appear v-if="isVisible">
            <p class="text-lg sm:text-xl lg:text-2xl mb-8 text-white font-gramatika">
              Get the latest trends from Hanga and beyond with our weekly roundup.
            </p>
          </transition>
          
            
          <transition name="fade-slide-right" appear v-if="isVisible">
            <div class="flex w-full max-w-lg">
              <input
                type="email"
                placeholder="Your email address"
                class="flex-grow bg-navy text-white font-gramatika placeholder-gray-400 focus:outline-none px-6 py-5 rounded-l text-md sm:text-xl lg:text-xl"
              />
              <button class="bg-tangerine hover:bg-orange-700 text-white px-8 py-5 rounded-r">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </transition>
          </div>
        </div>
     
        <!-- Background illustration -->
        <div class="absolute right-32 bottom-32 w-1/2 h-1/2 pointer-events-none">
          <img src="../assets/hanga elements_illustration 2.svg" alt="Hanga illustration" class="w-full h-full object-contain object-right-bottom">
        </div>

      

      </div>
    </div>
</template>

<script>


export default{

    name:"NewsLetter",

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


<style>
.fade-in {
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
}

.fade-in-visible {
  opacity: 1;
}

.slide-up-enter-active,
.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 0.7s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0); /* Ensure Y-axis is reset to 0 */
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0); /* Reset X-axis */
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0); /* Reset X-axis */
}
/* General Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.fade-enter, 
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Fade and Slide Up */
.fade-slide-up-enter-active {
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
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

/* Zoom In */
.zoom-enter-active {
  transition: all 0.7s ease;
}
.zoom-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: opacity 1.1s ease-in-out, transform 1.1s ease-in-out;
}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fade-slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(80px);
}

</style>