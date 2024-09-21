<template>
  <div class="overflow-hidden">
    <div class="h-screen">
      <!-- Image Section with Overlay -->
      <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1080px]">
        <img src="../assets/pitchbg.jpg" class="h-full w-full object-cover" alt="Background">
        <div class="absolute inset-0 bg-abtcolor"></div>
        <NavBar class="absolute top-0 left-0 w-full" />
  
        <!-- Text Section -->
        <div class="font-rockinsoda absolute text-white text-3xl md:text-6xl xl:7xl top-1/2 md:top-80 ml-4 md:ml-12 transform -translate-y-1/2 md:translate-y-0">
          <p>READY TO PITCH YOUR</p>
          <p>TECH-ENABLED IDEA?</p>
        </div>
      </div>
  
      <!-- Button Section -->
      <div class="absolute top-[65%] md:top-3/4 ml-4 md:ml-12">
        <button class="mr-4 md:mr-8 p-2 px-6 md:px-8 lg:px-8 p-4 font-gramatika bg-white text-black hover:bg-tangerine hover:text-white button-hover">
          Apply Now
        </button>
      </div>
    </div>

        <!-- next section -->

    <div class="flex flex-col lg:flex-row mt-16 lg:mt-32 space-x-0 lg:space-x-48 ml-6 lg:ml-12">
  <!-- Text Section -->
  <div class="space-y-4 text-center lg:text-left">
    <p class="text-3xl lg:text-5xl font-rockinsoda text-navy">THE LARGEST IN-PERSON</p>
    <p class="text-3xl lg:text-5xl font-rockinsoda text-navy">TECHNOLOGY EVENT</p>
    <p class="text-3xl lg:text-5xl font-rockinsoda text-navy">IN RWANDA</p>
  </div>

  <!-- Description and Button Section -->
  <div class="text-justify space-y-6 w-full lg:w-[600px] mt-6 lg:mt-0">
    <p class="text-base lg:text-xl font-gramatika text-navy">
      Do you believe you've got what it takes? You are only 4 steps closer to being part of the most exciting tech event in Rwanda.
      Make sure you have all the necessary documents and information ready to submit your application.
    </p>
    <div class="flex justify-center lg:justify-start">
      <button class="mr-0 lg:mr-8 p-2 px-4 font-gramatika bg-tangerine text-white hover:bg-tangerine-dark transition-all" ref="button">
        <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" class="mt-6">Apply Now</a>
        <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>


        <!-- section 3 -->
        
         <div class=" relative"> 

        <div class="  absolute flex ml-12  space-x-12 mt-16">
          <div class="w-[350px] h-[40vh] space-y-4">
            <img src="../assets/one.svg" class="absolute  -mt-24 h-16 w-16">
            <p class="font-rockinsoda text-4xl text-navy"> Create Acount</p>
            <p class="font-gramatika text-lg  text-darkGray"> Sign up on Hanga by clicking on the 
              <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" class="text-tangerine ">
                official link to registration</a></p>
          </div>
          <div class="w-[350px] h-[40vh] space-y-4">
            <img src="../assets/two.svg" class="absolute - -mt-24 h-16 w-16">
            <p class="font-rockinsoda text-4xl text-navy"> Validate Email</p>
            <p class="font-gramatika text-lg text-darkGray">Check your email inbox for a message from Hanga Pitchfest.
              Open the email and click on the validation link provided</p>
          
          </div>
          <div class="space-y-8 ">
          <div class="w-[350px]  h-[40vh] mr-12 space-y-4">
            <img src="../assets/three.svg" class="absolute  -mt-28 h-16 w-16">

            <p class="font-rockinsoda text-4xl text-navy"> Fill Form</p>
            <p class="font-gramatika text-lg text-darkGray">Log in to your Hanga Pitchfest account.
              Complete the application form with accurate details about your startup and upload 
              any required attachments</p>
          
          </div>
          <div class="w-[350px] h-[40vh]  ">
            <img src="../assets/four.svg" class="absolute -mt-28 h-16 w-16">
              <div class="space-y-4">
            <p class="font-rockinsoda text-4xl text-navy mt-24"> submit Project</p>
            <p class="font-gramatika text-lg text-darkGray">Review your application form to ensure all information is accurate and complete.
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


        <div class="flex  mt-16 mb-10">
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

      <!-- next section -->

      <div class="relative h-[600px] mb-48"> 
        <div class="absolute text-white p-8 mt-20">
        <img src="../assets/notched.svg" alt="" class="w-full">
        </div>

        <div class="absolute    mt-44 ml-12 p-8 text-left">
        <div class="slide-up space-y-8" ref="texty">

            <h2 class="text-2xl text-white font-rockinsoda ">HANGA HALL OF FAME </h2>

            <div class="flex space-x-16">
              <img src="../assets/2023/loopa.svg" class="w-23h-23">
              <img src="../assets/2023/hova.svg" class="w-22 h-22">
              <img src="../assets/2022/umurava.svg" class="w-23 h-20">
              <img src="../assets/2023/medixr.svg" alt="">
              <img src="../assets/2023/dope.svg" alt="">
            </div>
              <hr class="border-lineColor border-t-2" >
            <div class="flex space-x-32">
              <img src="../assets/2022/lifesten.svg" class="w-20 h-20">
              <img src="../assets/2022/paying-tone.svg" class="w-20 h-20">
              <img src="../assets/2022/school-nest.svg" class="w-30 h-30">
              <img src="../assets/2022/huza.svg" class="w-20 h-20">
              <img src="../assets/2022/mukika.svg" class="w-20 h-20">
            </div>
            <hr  class="border-lineColor border-t-2 " >
            <div class="flex space-x-32">
              <img src="../assets/2021/afroduino.svg" alt="">
              <img src="../assets/2021/second-life-storage.svg" alt="">
              <img src="../assets/2021/bag.svg" alt="">
              <img src="../assets/2021/karisimbi.svg"  alt="">
              <img src="../assets/2021/hova 2.png">
            </div>

        </div>
            
    </div>
    </div>

    <!-- another section -->
    <div class="ml-12 space-x-32 mt-54 flex mb-16 ">
      <div class="mt-32 ">
        <div class="space-y-2 mt-28">
        <p class="text-5xl font-rockinsoda text-navy">CONNECT WITH LIKE-MINDED</p>
        <p class="text-5xl font-rockinsoda text-navy">ENTREPRENEURS AT HANGA HUBs</p>
      </div>

      <div class="mt-8">
        <div class=" text-justify space-y-8 w-[600px] ">
          <p class="text-navy font-gramatika text-md">HANGA Hubs is an action funded by the European Commission
             and it is implemented by RISA. It operates in MUHANGA, NYAGATARE, RUBAVU and RUSIZI. 
             The action is part of the Rwanda Government’s and the European Union’s efforts to support the private sector development
             and job creation in Rwanda through Innovation and Incubation hubs.</p>

             <button class="mr-8 mt-10 p-2 px-8 font-gramatika bg-tangerine text-white font-semibold zoom-in button-hover" ref="button">
              Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </button>

         
     </div>
      </div>
    </div>

      <div class=" relative h-[520px] mt-28 flex-shrink-0">
        <img src="../assets/vr.jpg" class="w-full h-full object-cover ">
        <div class="absolute inset-0" 
        style="background: linear-gradient(to bottom, rgba(1, 9, 48, 0.05) 0%, rgba(1, 9, 48, 0.2) 50%, rgba(1, 9, 48, 0.8) 100%);">
        </div>

      </div>

    </div>


    <!-- next section -->
    <div class="relative">
      <!---------section 12------->
      <div class="h-[400px] relative z-10 -mb-48"> 
        <div class="absolute w-full left-0 right-0 mt-20">
          <img src="../assets/footersvg.svg" alt="" class="w-full h-auto block">
          <img src="../assets/hanga elements_illustration 2.svg" class="absolute top-0 mt-24 left-[57%] w-1/3 h-auto">
        </div>
        
        <div class="absolute mt-44 ml-2 p-8 text-left">
          <h2 class="text-6xl text-white font-rockinsoda mb-4">NEVER MISS</h2>
          <h2 class="text-6xl text-white font-rockinsoda mb-4">A HIGHLIGHT FROM HANGA</h2>
          <p class="text-lg mb-1 text-white text-xl font-gramatika">
            Get the latest trends from Hanga and beyond with our weekly
          </p>
          <p class="text-lg mb-1 text-white text-xl font-gramatika">
            roundup.
          </p>
          
          <div class=" -ml-6 p-4 rounded flex">
            <input
              type="email"
              placeholder="Your email address"
              class="bg-ftcolor text-gray-400 placeholder-gray-500 focus:outline-none px-12 py-2 rounded-l w-[300px]"
            />
            <a href="" class="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r">
              <i class="fa fa-chevron-right" aria-hidden="true"></i>


            </a>
          </div>
          
        </div>
      </div>
      
      <!------section 13 (Footer)--------- -->
      <div class="relative z-0 mt-[400px]">
        <FooterPage/>
      </div>
    </div>
        
    
  </div>
</template>


<script>
import NavBar from '@/components/Navbar.vue';
import FooterPage from '@/components/footerPage.vue';
export default{
  name:"PitchHanga",
  components:{
      NavBar,
      FooterPage
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

        mounted() {
            const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                entry.target.classList.add('slide-up-visible');
                entry.target.classList.add('zoom-in-visible');
                entry.target.classList.add('fade-in-visible');
            
                }
            })
            });

            // Observe all elements with the zoom-in class
            const elements = this.$refs;
            for (let key in elements) {
            if (elements[key]) {
                observer.observe(elements[key]);
            }
            }
            
     
        }

        
      

}
</script>

<style>
.slide-up {
transform: translateY(20px);
opacity: 0;
transition: all 2s ease-in-out;
}

.slide-up-visible {
transform: translateY(0);
opacity: 1;
}

</style>

