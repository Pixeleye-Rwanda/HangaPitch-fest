<template>
    <div class="overflow-hidden">
        <div class="h-screen">
            <div class="relative h-[650px] flex-shrink-0">
              <img src="../assets/aboutus.jpg" alt="" class="h-full w-full object-cover">
              <div class="absolute inset-0 bg-abtcolor"></div>
              <Navbar  class="absolute top-0 left-0 w-full"/>

              <div class="font-rockinsoda absolute text-white text-6xl top-80 ml-12">
                <p>LEADING INNOVATION</p>
                <p>AT THE FOREFRONT</p>
                
              </div>
            </div>
            <div class="absolute top-3/4 ml-12">
              <div class="">
              <p class="font-gramatika text-white text-lg">Our mission is to discover and nurture Rwanda's most </p>
              <p class="font-gramatika text-white text-lg"> innovative tech-enabled startups</p>
                
              </div>
            </div>
  
          </div>

          <!-- second section -->
           <div class="ml-12 mt-12">
            <p class="text-darknavy font-gramatika text-md  ">Empowerment is central to Hanga's mission, focusing on enabling </p>
            <p class="text-darknavy font-gramatika text-md ">ndividuals and communities.</p>
           </div>

           <!-- third section  -->
            <div class="flex mt-20  space-x-80 ml-12">
              <div class="space-y-4 mt-16">
                  <p class="text-6xl font-rockinsoda text-navy">FUELING</p>
                  <p class="text-6xl font-rockinsoda text-navy">INNOVATION</p>
              </div>
              <div class=" text-justify space-y-8 w-[600px] ">
                   <p class="text-navy font-gramatika text-md">Hanga PitchFest offers a platform for tech-entrepreneurs to present 
                    their groundbreaking work to a wide audience, including potential investors,
                     technology company founders, and private sector business leaders. </p>

                   <p class="text-navy font-gramatika text-md ">Selected startups have the opportunity to connect with Angel investors, 
                    venture capitalists, and other key stakeholders who can provide
                     the necessary funding and support to scale their businesses.</p>

                   <p class="text-navy font-gramatika text-md"> Our all-day event includes innovators’ showcases, masterclasses for 
                    entrepreneurs, live music performances, and a live pitching competition 
                    for the top 5 startups.</p>
              </div>
            </div>

            <!-- section four  -->
             <div class=" relative h-[600px] flex-shrink-0 mt-20">
              <img src="../assets/malik.jpg" class="w-full h-full object-cover ">
              <div class="absolute inset-0 bg-abtcolor"></div>

             </div>

             <!-- section five  -->
              <div class="ml-12 space-x-32 flex ">
                <div class=" ">
                  <div class="space-y-2 mt-28">
                  <p class="text-6xl font-rockinsoda text-navy">HEAR FROM OUR </p>
                  <p class="text-6xl font-rockinsoda text-navy">SPONSORS</p>
                </div>

                <div class="mt-8">
                  <div class=" text-justify space-y-8 w-[600px] ">
                    <p class="text-navy font-gramatika text-md">"We are delighted, as Jasiri, to be part of Hanga Pitchfest, 
                       We believe in the power of entrepreneurship to transform our society and Hanga Pitchfest calls for action for
                        those seeking to challenge the status quo and build solutions that will improve the lives of many." 
                      - Aline Kabanda, East Africa Regional Director, Jasiri.</p>
 
                    <p class="text-navy font-gramatika text-md ">“We have always been partners with the government  on the journey of building
                       a resilient knowledge based economy, and it is exciting that over the last 3 years Hanga Pitchfest has been shining light on innovators,
                        we hope this stirs up more innovators
                       as well as partners to build the digital economy we all are proud of.” - ICT Chamber</p>
 
                    <p class="text-navy font-gramatika text-md"> ”Partnership with Hanga PitchFest is a must, as it is the only way to support young upcoming entrepreneurs.
                       Having an entrepreneurial mindset is the only way to solve problems worldwide. 
                      This will help the youth to leave not a survival mentality, but to living, thriving, and building their country, continent, and the world at large!” - Choose Kigali</p>
               </div>
                </div>
              </div>

                <div class=" h-[500px] mt-32 flex-shrink-0">
                  <img src="../assets/speakerP.jpg" class="w-full h-full object-cover ">
                </div>

              </div>

              <!-- section six  -->

              <div class="relative h-[600px]"> 
                <div class="absolute text-white p-8 mt-20">
                  <img src="../assets/notched.svg" alt="" class="w-full">

                  <div class="absolute top-0 mt-32 left-0 w-1/3 h-auto left-[57%]">
                    <div class="space-y-2 ">
                      <p class="font-gramatika text-7xl">Rwf 600 M</p>
                      <p class="">In investments</p>
                    </div>
                    <hr class="w-[300px] border-lightblue mt-2 mb-2">

                    <div class="flex space-x-12">

                     <div class="">

                      <p>130+</p>
                      <p>Startups</p>
                     </div>

                     <div class="">
                    <p> 20+ </p>
                    <p>Hanga SRH</p>

                    </div>
                     <div class="">
                      <p>190 +</p>
                      <p>Hanga hubs</p>

                     </div>
                    </div>

                  </div>
                </div>
          
                <div class="absolute mt-72 ml-12 p-8 text-left">
                  <h2 class="text-6xl text-white font-rockinsoda mb-4">Pitch Your Idea for</h2>
                  <h2 class="text-6xl text-white font-rockinsoda mb-4">Funding</h2>
                  <p class="text-lg mb-1 text-white text-xl font-gramatika">
                    The largest in-person technology event in Rwanda
                  </p>
                  <p class="text-lg mb-1 text-white text-xl font-gramatika">
                    designed to ignite & inspire innovation, Hanga
                  </p>
                  <p class="text-lg mb-6 text-white text-xl font-gramatika">
                    Pitchfest is returning for its fourth edition.
                  </p>
                  <button class="bg-tangerine text-white py-2 px-6 hover:bg-orange-500">
                    Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>

                  </button>
                </div>
              </div>

            

        
    </div>
</template>


<script>
import Navbar from '@/components/Navbar.vue';
export default{
    name:"AboutUs",
    components:{
            Navbar
        }
}
</script>