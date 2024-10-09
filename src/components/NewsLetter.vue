<template>
    
    <div class="relative w-full bg-newsClr">
        <div class="  mt-32 px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div class="max-w-4xl">
            <h2 class="text-4xl sm:text-5xl lg:text-8xl text-white font-rockinsoda mb-2 sm:mb-4">NEVER MISS</h2>
            <h2 class="text-4xl sm:text-5xl lg:text-8xl text-white font-rockinsoda mb-6">A HIGHLIGHT FROM HANGA</h2>
            <p class="text-lg sm:text-xl lg:text-2xl mb-8 text-white font-gramatika">
              Get the latest trends from Hanga and beyond with our weekly roundup.
            </p>
            
            <div class="flex w-full max-w-lg">
              <input
                type="email"
                placeholder="Your email address"
                class="flex-grow bg-navy text-white font-gramatika placeholder-gray-400 focus:outline-none px-6 py-6 rounded-l text-md sm:text-xl lg:text-xl"
              />
              <button class="bg-tangerine hover:bg-orange-700 text-white px-8 py-6 rounded-r">
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
    
        <!-- Background illustration -->
        <div class="absolute right-32 bottom-32 w-1/2 h-1/2 pointer-events-none">
          <img src="../assets/hanga elements_illustration 2.svg" alt="Hanga illustration" class="w-full h-full object-contain object-right-bottom">
        </div>

      

      </div>
</template>

<script>

export default{

    name:"NewsLetter"
}
</script>