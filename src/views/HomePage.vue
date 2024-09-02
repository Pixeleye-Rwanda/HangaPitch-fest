<template>
<div>
    <div class="h-screen">
        <div class=" relative h-[96%] ">
            <img src="../assets/bghome.jpg" alt="" class="h-full w-full">
            <NavBar class="absolute top-0 left-0 w-full"/>
           
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