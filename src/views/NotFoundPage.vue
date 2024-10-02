<template>
    <div class="w-full min-h-screen absolute" style="background-color: #FFF9F6;">
        <Navbar />

        <div class="md:mt-12 flex items-center justify-center">
            <div class="w-full md:max-w-2xl space-y-8">
                <div>
                    <p class="text-[96px] md:text-[270px] leading-tight font-rockinsoda text-tangerine text-center">404</p>
                </div>
                <div>
                    <p class="text-gray-600 font-gramatika text-lg md:text-md text-center uppercase font-medium">Ooop!
                        You seem to be lost</p>
                </div>
                <div>
                    <button
                        class="w-full font-gramatika shadow bg-tangerine focus:shadow-outline focus:outline-none text-white font-medium py-4 px-6 rounded"
                        type="button">
                        BACK TO HOME PAGE
                    </button>
                </div>
            </div>

        </div>
        <div class="relative w-full h-24">
            <img src="../assets/patterns.svg" alt="" class="absolute bottom-0 left-0 w-full">
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: "NotFoundPage",
    components: {
        Navbar

    }
}
</script>

<style></style>