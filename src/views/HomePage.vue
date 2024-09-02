<template>
<div>
    <div class="">
        <div class="  relative">
            <img src="../assets/bghome.jpg" alt="" class="h-auto w-auto">
            <NavBar/>
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