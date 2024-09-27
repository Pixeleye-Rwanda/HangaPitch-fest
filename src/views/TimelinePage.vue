    <template>
        <div class="relative oveflow-hidden">
            <div class="w-full h-auto absolute space-y-48" style="background: linear-gradient(319.89deg, #030C37 5.13%, #22348A 99.13%);">
                <Navbar class="absolute top-0 left-0 w-full" />

                <div class="flex items-center justify-center ">
                    <h1 class="text-5xl  font-rockinsoda absolute  text-white">ROAD TO HANGA 2024</h1>
                </div>

                <div class="">

                <div class="space-y-10 -mt-20 relative flex items-center justify-center">
                   
                  
                    
                    <div class="w-10/12">
                       


                        <div class="  flex space-x-10">


                            <div class="space-y-4">
                                <p class="text-white text-gramatika font-medium">09 SEPT - 23 OCT</p>

                                <div class="flex space-x-4">
                                    <img src="../assets/circle.svg" alt="">
                                    <img src="../assets/rectangle.svg" alt="">
                                </div>
                                <div class="bg-greenlime flex items-center pl-8 pr-20 py-4 rounded-md">
                                    <img src="../assets/srh-rocket.svg" alt="">
                                    <p class="text-navy text-md font-medium font-gramatika ">Application</p>
                                </div>

                            </div>

                            <div class="space-y-4">
                                <p class="text-white text-gramatika font-medium">09 SEPT - 23 OCT</p>

                                <div class="flex space-x-4">
                                    <img src="../assets/circle.svg" alt="">
                                    <img src="../assets/rectangle.svg" alt="">
                                </div>
                                <div class="bg-greenlime flex items-center pl-8 pr-20 py-4 rounded-md">
                                    <img src="../assets/srh-rocket.svg" alt="">
                                    <p class="text-navy text-md font-medium font-gramatika ">Application</p>
                                </div>

                            </div>
                            <div class="space-y-4">
                                <p class="text-white text-gramatika font-medium">09 SEPT - 23 OCT</p>

                                <div class="flex space-x-4">
                                    <img src="../assets/circle.svg" alt="">
                                    <img src="../assets/rectangle.svg" alt="">
                                </div>
                                <div class="bg-greenlime flex items-center pl-8 pr-20 py-4 rounded-md">
                                    <img src="../assets/srh-rocket.svg" alt="">
                                    <p class="text-navy text-md font-medium font-gramatika ">Application</p>
                                </div>

                            </div>
                            <div class="space-y-4">
                                <p class="text-white text-gramatika font-medium">09 SEPT - 23 OCT</p>

                                <div class="flex space-x-4">
                                    <img src="../assets/circle.svg" alt="">
                                    <img src="../assets/rectangle.svg" alt="">
                                </div>
                                <div class="bg-greenlime flex items-center pl-8 pr-20 py-4 rounded-md">
                                    <img src="../assets/srh-rocket.svg" alt="">
                                    <p class="text-navy text-md font-medium font-gramatika ">Application</p>
                                </div>

                            </div>
                        </div>
                        <div class=" mr-28 flex justify-end">
                            <img src="../assets/90-degree.svg">
                        </div>
                        <div class="flex space-x-6 mr-28 overflow-hidden justify-end">
                            <div class="space-y-4">
                                <p class="text-white text-gramatika font-medium">09 SEPT - 23 OCT</p>

                                <div class="flex space-x-4">
                                    <img src="../assets/circle.svg" alt="">
                                    <img src="../assets/rectangle.svg" alt="">
                                </div>
                                <div class="bg-greenlime flex items-center pl-8 pr-20 py-4 rounded-md">
                                    <img src="../assets/srh-rocket.svg" alt="">
                                    <p class="text-navy text-md font-medium font-gramatika ">Application</p>
                                </div>

                            </div>
                            <div class="space-y-4">
                                <p class="text-white text-gramatika font-medium">09 SEPT - 23 OCT</p>

                                <div class="flex space-x-4">
                                    <img src="../assets/circle.svg" alt="">
                                    <img src="../assets/rectangle.svg" alt="">
                                </div>
                                <div class="bg-greenlime flex items-center pl-8 pr-20 py-4 rounded-md">
                                    <img src="../assets/srh-rocket.svg" alt="">
                                    <p class="text-navy text-md font-medium font-gramatika ">Application</p>
                                </div>

                            </div>
                        </div>

                    </div>
                    </div>

                </div> 
                 <div class="">
                <NewsLetter />
                <FooterPage />
            </div>
            </div>

           

        </div>



    </template>

    <script>
    import Navbar from '@/components/Navbar.vue';
    import FooterPage from '@/components/footerPage.vue';
    import NewsLetter from '@/components/NewsLetter.vue';
    export default {
        name: "TimelinePage",
        components: {
            Navbar,
            FooterPage,
            NewsLetter
        }
    }
    </script>

    <style></style>