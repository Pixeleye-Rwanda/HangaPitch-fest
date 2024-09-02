<template>
<div>
    <div class="h-screen">
        <div class=" relative h-[96%] ">
            <div class="absolute inset-0 bg-black opacity-30"></div>
            <img src="../assets/bghome.jpg" alt="" class="h-full w-full">
            <NavBar class="absolute top-0 left-0 w-full"/>

         <h1 class="font-rockinsoda absolute text-white text-6xl top-96 left-0 ">THE LARGEST IN-PERSON MEETING IN RWANDA </h1>
           
        </div>
    </div>
    
   
</div>
</template>


<script>
import NavBar from '@/components/Navbar.vue';
export default {
    name:'HomePage',
    components:{
        NavBar
    }
}
</script>