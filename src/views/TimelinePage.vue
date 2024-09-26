<template>
    <div class="relative">
        <div class="w-full  h-full" style="background: linear-gradient(319.89deg, #030C37 5.13%, #22348A 99.13%);" >
            <Navbar class="absolute top-0 left-0 w-full"/>


            <div class="space-y-72">
                <div class="flex  items-center justify-center  space-x-20 ">
                    <h1 class="text-5xl font-rockinsoda absolute mt-96  text-white">ROAD TO HANGA 2024</h1>
                </div>
                <div class="flex flex-shrink-0 h-[1200px] items-center mt-52 justify-center">
                    <img src="../assets/steps.svg" class="w-full h-full">
                </div>
            </div>
            
            <NewsLetter/>
            <FooterPage/>        
            
        </div>
    </div>


</template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterPage from '@/components/footerPage.vue';
import NewsLetter from '@/components/NewsLetter.vue';
export default{
    name:"TimelinePage",
    components:{
        Navbar,
        FooterPage,
        NewsLetter
    }
}
</script>

<style>

</style>