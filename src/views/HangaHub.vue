<template>
    <div class="h-screen overflow-x-hidden ">
        <NavInit />

        <div class=" ml-8 flex flex-col lg:flex-row mt-12 lg:mt-32 px-6 w-full lg:space-x-10 ">
            <!-- Text Section -->
            <div class="space-y-10">
                <div class="lg:text-left  space-y-6">
                    <p class="text-3xl lg:text-8xl font-rockinsoda text-navy">ADDRESSING</p>
                    <p class="text-3xl lg:text-8xl font-rockinsoda text-navy">THE OBSTACLES & GAPS </p>
                    <p class="text-3xl lg:text-8xl font-rockinsoda text-navy">LIMITING EARLY-STAGE STARTUPS.</p>
                </div>

                <!-- Description and Button Section -->
                <div class="text-justify mt-4 lg:mt-0 space-y-8 w-full lg:w-2/3">
                    <p class="text-base lg:text-2xl font-gramatika text-navy">
                        Creating opportunities for startups.
                    </p>
                    <div class="flex  lg:justify-start">
                        <button class="p-4 px-4 font-gramatika bg-jade text-white transition-all" ref="button">
                            <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-"
                                class="mt-6">Start Your application</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative w-full flex-shrink-0 mt-20 p-10">
            <img src="../assets/hanga-hubs-1.jpg"
                class="w-full max-h-[800px] h-[60vh] sm:h-[100px] lg:h-[600px] object-cover">
        </div>

        <!-- PARTNERS-HUBS -->
        <div class="mt-24 flex items-center justify-center ">
            <img src="../assets/hanga-hubs-partners.jpg">
        </div>

        <!-- Text Section -->
        <div class=" ml-10  flex flex-col lg:flex-row  w-full mt-24 lg:mt-12 lg:mt-32 px-2 p-2 w-full lg:space-x-4 ">
            <div class="lg:text-left w-2/4 space-y-2">
                <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">An Open Space for Young</p>
                <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">Entrepreneurs and</p>
                <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">Innovators. </p>
            </div>
            <div class="text-justify mt-16 lg:mt-0 space-y-8 w-full lg:w-2/4">
                <p class="text-base lg:text-lg font-gramatika text-navy mr-24">
                    A Hub staffed, furnished and equipped with machinery, equipment and amenities needed for building
                    startups with cool tech solutions, products and services.
                </p>
            </div>
        </div>

        <!-- Boy Section -->
        <div class="mt-12 flex space-x-4 w-full">
            <div class="w-2/4">
                <img src="../assets/hanga-boy.jpg" class="w-full h-full object-cover">
            </div>
            <div class="mt-8 w-2/4">
                <div>
                    <div>
                        <p class="text-navy text-lg md:text-2xl font-gramatika font-bold">Program stages </p>
                    </div>
                    <div>
                        <p class="text-navy font-gramatika">
                            4-6 weeks boot camp targeting up to 30 individual participants selected using a highly competitive
                            process.</p>
        
                           <p  class="text-navy font-gramatika">Open to youths above 18 years, with a desire to learn how to ideate, validate, prototype, and create
                            a start-up, and willing to complete a 9-month fully fledged innovation program on full-time basis.</p> 
                            <p  class="text-navy font-gramatika">Fellows who cannot find compelling opportunity cases or high potential ideas will be dropped out of
                                the program, or they may follow available exit support mechanism or re-entry routes.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>






</template>

<script>
import NavInit from '@/components/NavInit.vue';
export default {
    name: "HangaHub",
    components: {
        NavInit
    }
}
</script>

<style></style>
