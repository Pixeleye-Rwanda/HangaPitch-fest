  <template>
      <div class="overflow-hidden">
          <div class="h-screen">
              <div class="relative h-[670px] flex-shrink-0 ">
                <img src="../assets/pitchbg.jpg"  class="h-full w-full object-cover">
                <div class="absolute inset-0 bg-abtcolor"></div>
                <NavBar  class="absolute top-0 left-0 w-full"/>

                <div class="font-rockinsoda absolute text-white text-6xl top-80 ml-12">
                  <p>READY TO PITCH YOUR</p>
                  <p>TECH-ENABLED IDEA?</p>
                  
                </div>
              </div>
              <div class="absolute top-3/4 ml-12">
                <div class="">
                  <button class="mr-8 p-2 px-8 font-gramatika bg-white text-black  hover:bg-tangerine hover:text-white  button-hover" ref="button">
                    Apply Now
                  </button>
                </div>
              </div>
    
            </div>

            <!-- next section -->

            <div class="flex mt-32  space-x-48 ml-12">
              <div class="space-y-4 ">
                  <p class="text-4xl font-rockinsoda text-navy">THE LARGEST IN-PERSON  </p>
                  <p class="text-4xl font-rockinsoda text-navy">TECHNOLOGY EVENT</p>
                  <p class="text-4xl font-rockinsoda text-navy">IN RWANDA</p>

              </div>
              <div class=" text-justify space-y-8 w-[600px] ">
                  <p class="text-navy font-gramatika text-lg">Do you believe you've got what it takes?
                    You are only 4 steps closer to being part of the most exciting tech event in Rwanda. 
                    Make sure you have all the necessary documents
                    and information ready to submit your application. </p>
                    <button class="mr-8 p-2 px-4 font-gramatika bg-tangerine text-white  button-hover" ref="button">
                      <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" class="mt-6"> Apply Now</a> 
                      <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
                    </button>
                  
              </div>
            </div>

            <!-- section 3 -->
            <div class=" flex ml-12  space-x-12 mt-48">
              <div class="w-[350px] h-[40vh] space-y-4">
                <p class="font-rockinsoda text-4xl text-navy"> Create Acount</p>
                <p class="font-gramatika text-lg  text-darkGray"> Sign up on Hanga by clicking on the 
                  <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" class="text-tangerine ">
                    official link to registration</a></p>
              </div>
              <div class="w-[350px] h-[40vh] space-y-4">
                <p class="font-rockinsoda text-4xl text-navy"> Validate Email</p>
                <p class="font-gramatika text-lg text-darkGray">Check your email inbox for a message from Hanga Pitchfest.
                  Open the email and click on the validation link provided</p>
              
              </div>
              <div class="space-y-8 ">
              <div class="w-[350px]  h-[40vh] mr-12">

                <p class="font-rockinsoda text-4xl text-navy"> Fill Form</p>
                <p class="font-gramatika text-lg text-darkGray">Log in to your Hanga Pitchfest account.
                  Complete the application form with accurate details about your startup and upload 
                  any required attachments</p>
              
              </div>
              <div class="w-[350px] h-[40vh] ">
                <p class="font-rockinsoda text-4xl text-navy"> submit Project</p>
                <p class="font-gramatika text-lg text-darkGray">Review your application form to ensure all information is accurate and complete.
                  Once you're satisfied with the application, click the "Submit" button.</p>

              </div>
            </div>
            </div>


            
        
      </div>
  </template>


  <script>
  import NavBar from '@/components/Navbar.vue';
  export default{
      name:"PitchHanga",
      components:{
          NavBar
      },
    

  }
  </script>

