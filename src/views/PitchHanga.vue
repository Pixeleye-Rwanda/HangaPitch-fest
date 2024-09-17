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
                  <p class="text-5xl font-rockinsoda text-navy">THE LARGEST IN-PERSON  </p>
                  <p class="text-5xl font-rockinsoda text-navy">TECHNOLOGY EVENT</p>
                  <p class="text-5xl font-rockinsoda text-navy">IN RWANDA</p>

              </div>
              <div class=" text-justify space-y-8 w-[600px] ">
                  <p class="text-navy font-gramatika text-xl">Do you believe you've got what it takes?
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
            
             <div class=" relative"> 

            <div class="  absolute flex ml-12  space-x-12 mt-16">
              <div class="w-[350px] h-[40vh] space-y-4">
                <img src="../assets/one.svg" class="absolute -mt-28 h-13 w-13">
                <p class="font-rockinsoda text-5xl text-navy"> Create Acount</p>
                <p class="font-gramatika text-xl  text-darkGray"> Sign up on Hanga by clicking on the 
                  <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" class="text-tangerine ">
                    official link to registration</a></p>
              </div>
              <div class="w-[350px] h-[40vh] space-y-4">
                <img src="../assets/two.svg" class="absolute -mt-28 h-13 w-13">
                <p class="font-rockinsoda text-5xl text-navy"> Validate Email</p>
                <p class="font-gramatika text-xl text-darkGray">Check your email inbox for a message from Hanga Pitchfest.
                  Open the email and click on the validation link provided</p>
              
              </div>
              <div class="space-y-8 ">
              <div class="w-[350px]  h-[40vh] mr-12 space-y-4">
                <img src="../assets/three.svg" class="absolute -mt-28 h-13 w-13">

                <p class="font-rockinsoda text-5xl text-navy"> Fill Form</p>
                <p class="font-gramatika text-xl text-darkGray">Log in to your Hanga Pitchfest account.
                  Complete the application form with accurate details about your startup and upload 
                  any required attachments</p>
              
              </div>
              <div class="w-[350px] h-[40vh]  ">
                <img src="../assets/four.svg" class="absolute -mt-32 h-13 w-13">
                  <div class="space-y-4">
                <p class="font-rockinsoda text-5xl text-navy mt-24"> submit Project</p>
                <p class="font-gramatika text-xl text-darkGray">Review your application form to ensure all information is accurate and complete.
                  Once you're satisfied with the application, click the "Submit" button.</p>
                </div>
              </div>
            </div>

            
            </div>
            <div class="ml-12 ">
              <img src="../assets/Subtract .svg" class=" mt-48">
           </div>

           </div>

            <!-- section 4 -->
            <div class=" ">
              <div class="mt-96">
                <p class="text-navy font-rockinsoda text-5xl ml-12  "> Past winners </p>
              </div>
               
             
            
            <!-- Year Dropdown -9-->
            <div class=" ">

            <select v-model="selectedYear" class=" float-right mr-20 w-30 bg-white ring-1 ring-lightTangerine outline-none p-2 px-4">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
            </div>


          <div class="flex  mt-16">
            <div v-for="winner in filteredWinners" :key="winner.name" class="relative h-[582px] w-[400px] flex-shrink-0  " :class="winner.class ">
              <img :src="winner.image" class="w-full h-full object-contain">
              <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(1, 9, 48, 0.05) 0%, rgba(1, 9, 48, 0.2) 50%, rgba(1, 9, 48, 0.8) 100%);"></div>
              <div class="text-4xl font-rockinsoda text-white absolute inset-0 flex items-center justify-center">
                <div class="space-y-4 ">
                  <div class=" mt-80">
                    <p class="text-center">
                      {{winner.startup}}
                    </p>
                  </div>
      
                  <div class="">
                    <p class="text-white font-gramatika text-xl text-center">{{ winner.name }} </p>
                  </div>
                </div> 
      
              </div>                
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

      data(){
                
                return{
                    winners:[
                    { year: 2022, startup:"HUUZA",name:"Finalist", class:"bg-gray-300",  image: require('../assets/2022wina/HUUZA.png') },
                    { year: 2022,startup:"LIFESTEN", name:"Finalist",class:"bg-gray-100",image: require('../assets/2022wina/lifesten.png') },
                    { year: 2022, startup:"MULIKA FARM",name:"Finalist",class:"bg-gray-300",image: require('../assets/2022wina/MULIKA FARM.png') },
                    { year: 2022,startup:"PAYINGTONE",name:"Finalist",class:"bg-gray-100", image: require('../assets/2022wina/payingtone.png') },
                    { year: 2022, startup:"SCHOOLNEST",name:"Finalist",class:"bg-gray-300",image: require('../assets/2022wina/schoolnest.png') },

                    { year: 2023, startup:"UMURAVA",name:"Finalist", class:"bg-gray-300",  image: require('../assets/2023wina/Umurava.png') },
                    { year: 2023,startup:"HOVA AI", name:"Finalist",class:"bg-gray-100",image: require('../assets/2023wina/Hova AI.png') },
                    { year: 2023,startup:"MEDIXR",name:"Finalist",class:"bg-gray-300", image: require('../assets/2023wina/MediXR.png') },
                    { year: 2023, startup:"LOOPA",name:"Finalist",class:"bg-gray-100",image: require('../assets/2023wina/LOOPA1.png') },


                    { year: 2021, startup:"HUUZA",name:"Finalist", class:"bg-gray-300",  image: require('../assets/2022wina/HUUZA.png') },
                    { year: 2021,startup:"LIFESTEN", name:"Finalist",class:"bg-gray-100",image: require('../assets/2022wina/lifesten.png') },
                    { year: 2021, startup:"MULIKA FARM",name:"Finalist",class:"bg-gray-300",image: require('../assets/2022wina/MULIKA FARM.png') },
                    { year: 2021,startup:"PAYINGTONE",name:"Finalist",class:"bg-gray-100", image: require('../assets/2022wina/payingtone.png') },
                    { year: 2021, startup:"SCHOOLNEST",name:"Finalist",class:"bg-gray-300",image: require('../assets/2022wina/schoolnest.png') },

                    ],
                    selectedYear:'2023',
                };
                
                },
                
                computed:{
                
                    filteredWinners() {
                    return this.winners.filter(winner => {
                    const yearMatch = !this.selectedYear || winner.year == this.selectedYear;

                    
                    return  yearMatch;
                });
                }
                
            },

            
          

  }
  </script>

