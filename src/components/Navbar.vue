<template>
   <div class=" mt-8 ml-12 ">
    <div class="flex  ">
        <div class="">
          <ul>
           <router-link to="/">
            <img src="../assets/logo.svg" alt="logo">
           </router-link>
          </ul>
        </div>
        <ul class=" flex  mx-auto items-center space-x-6  ">
            <li class="text-white  font-gramatika font-semibold " >
              <router-link to="/about-us"> About Us</router-link>
            </li>
            <li class="text-white font-gramatika font-semibold " >Our Network</li>
            <li class="text-white font-gramatika font-semibold ">Pitch at Hanga</li>
           
            <div class="flex">
                <button class="text-white font-gramatika  font-semibold ">Initiatives</button>
                <svg class="-mr-1 ml-2 h-5 w-5 text-white  " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
            </div>
            <li class="text-white font-gramatika  font-semibold ">Timeline</li>
            
        </ul>

        <button class="mr-4  p-2 px-6 font-gramatika bg-white text-black  font-semibold hover:bg-tangerine hover:text-white">
            Apply Now
         </button>

         <div class="relative inline-block mr-24 text-left">
            <button id="dropdownButton" class="p-2 px-4 border font-gramatika  text-white font-gramatika font-semibold hover:bg-tangerine hover:text-white">
              <div class="flex">
                <p> EN</p>
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
              </div>
            
            </button>
          
            <div id="dropdownMenu" class="hidden origin-top-right absolute right-0 mt-2 w-56  shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdownButton">
                <a href="#" class="block px-4 py-2 text-sm text-gramatika text-gray-700 hover:bg-gray-100" role="menuitem">Kinyarwanda </a>
                <a href="#" class="block px-4 py-2 text-sm text-gramatika text-gray-700 hover:bg-gray-100" role="menuitem">French</a>
            
              </div>
            </div>
          </div>
          



 
    </div>

   </div> 

</template>

<script>
export default {
    name:"NavBar"
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dropdownButton').addEventListener('click', function() {
        var dropdownMenu = document.getElementById('dropdownMenu');
        dropdownMenu.classList.toggle('hidden');
    });
});


</script>