<template>
    <div class="1">
        <div class="h-screen">
            <div class="relative h-[650px] flex-shrink-0">
              <img src="../assets/networkbg.jpg" alt="" class="h-full w-full object-cover">
              <div class="absolute inset-0 bg-abtcolor"></div>
              <Navbar  class="absolute top-0 left-0 w-full"/>

              <div class="font-rockinsoda absolute text-white text-6xl top-80 ml-12">
                <p>STARTUPS</p>
                <p>FUNDED BY HANGA</p>
                
              </div>
            </div>

          </div>
    </div>

</template>

<script>

import Navbar from '@/components/Navbar.vue';
export default{

    name:'OurNetwork',
    components:{
        Navbar
    }
}
</script>