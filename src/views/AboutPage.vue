<template>
    <div class="overflow-x-hidden">
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