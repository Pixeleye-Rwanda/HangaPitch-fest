<template>
  <div class="overflow-hidden">
    <div class="min-h-screen">

    <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px]">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <img src="../assets/pitchbg.jpg" alt="Background" class="h-full w-full object-cover">
      
      <NavBar class="absolute top-0 left-0 w-full" />
    
      <div class="font-rockinsoda absolute  text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl top-2/4 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:2/4 text-center sm:text-left" ref="text">
        <p>READY TO PITCH YOUR</p>
        <p>TECH-ENABLED IDEA?</p>
      </div>


    </div>

        <!-- next section -->

        <div class="flex flex-col lg:flex-row mt-12 lg:mt-20 px-6 w-full lg:space-x-10 ">
          <!-- Text Section -->
          <div class="lg:text-left  space-y-4 w-3/5">
            <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">THE LARGEST IN-PERSON TECHNOLOGY EVENT IN RWANDA</p>
      
          </div>
        
          <!-- Description and Button Section -->
          <div class="text-justify mt-4 lg:mt-0 space-y-8 w-full lg:w-10/12">
            <p class="text-base lg:text-2xl font-gramatika text-navy">
              Do you believe you've got what it takes? You are only 4 steps closer to being part of the most exciting tech event in Rwanda. Make sure you have all the necessary documents and information ready to submit your application.
            </p>
            <div class="flex  lg:justify-start">
              <button class="p-2 px-4 font-gramatika bg-tangerine text-white hover:bg-tangerine-dark transition-all" ref="button">
                <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" class="mt-6">Apply Now</a>
                <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
        
        
        


        <!-- section 3 -->
         
        <div class="container min-h-screen   mx-auto px-4 lg:px-12  xl:max-w-none">
          <div class="relative absolute  w-full pt-32 lg:pt-52 ">
            <div class="flex flex-col absolute lg:flex-row lg:justify-between space-y-24 lg:space-y-0 lg:space-x-8">

              <div class="w-full absolute  lg:w-1/4 space-y-4 relative">
                <img src="../assets/one.svg" class="absolute -top-16 left-0 h-16 w-16">
                <p class="font-rockinsoda text-4xl text-navy pt-8">Create Account</p>
                <p class="font-gramatika text-lg text-darkGray">Sign up on Hanga by clicking on the <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" class="text-tangerine">official link to registration</a></p>
              </div>
              <div class="w-full  lg:w-1/4 space-y-4 relative">
                <img src="../assets/two.svg" class="absolute -top-16 left-0 h-16 w-16">
                <p class="font-rockinsoda text-4xl text-navy pt-8">Validate Email</p>
                <p class="font-gramatika text-lg text-darkGray">Check your email inbox for a message from Hanga Pitchfest. Open the email and click on the validation link provided</p>
              </div>
              <div class="w-full lg:w-2/5 space-y-24 lg:space-y-44">
                <div class="w-full space-y-4 -mt-4 relative">
                  <img src="../assets/three.svg" class="absolute -top-16  left-0 h-16 w-16">
                  <div class="space-y-8 pt-8">
                  <p class="font-rockinsoda text-4xl text-navy ">Fill Form</p>
                  <p class="font-gramatika text-lg text-darkGray">Log in to your Hanga Pitchfest account. Complete the application form with accurate details about your startup and upload any required attachments</p>
                </div>

                </div>
                <div class="w-full  space-y-4 relative">
                  <img src="../assets/four.svg" class="absolute -top-16 left-0 lg:-top-16 2xl:top-32 lg:left-12 h-16 w-16">
                  <div class="space-y-4  pt-8 lg:pt-8  2xl:pt-52">
                    <p class="font-rockinsoda text-4xl text-navy">Submit Project</p>
                    <p class="font-gramatika text-lg text-darkGray">Review your application form to ensure all information is accurate and complete. Once you're satisfied with the application, click the "Submit" button.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden lg:block relative  absolute -top-12 left-8 w-full">
              <img src="../assets/Subtract .svg" class="w-full  h-auto">
            </div>
          </div>
        </div>


        <!-- section 4 -->
      
        <div class=" relative mt-96 lg:mt-60">
          <div class="">
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


      
     

      <!-- next section -->
      <div class="mt-24 sm:mt-32 bg-cover h-full" :style="{ backgroundImage: `url(${require('@/assets/notched.svg')})`}">
        <div className="container mx-auto mb-20  px-4 py-8 md:py-16">
          <h2 className="text-3xl md:text-4xl mt-10 text-white font-rockinsoda mb-8">HANGA HALL OF FAME</h2>
          
          <div class="slide-up space-y-8" ref="texty">
            
            <div className="space-y-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
                <img src="../assets/2023/loopa.svg" alt="Loopa" className=" w-[15vh] h-[15vh] lg:w-[20vh] lg:h-[20vh]" />
                <img src="../assets/2023/hova.svg" alt="Hova" className=" w-[15vh] h-[15vh] lg:w-[20vh] lg:h-[20vh]" />
                <img src="../assets/2022/umurava.svg" alt="Umurava" className="w-[20vh] h-[20vh] lg:w-[25vh] lg:h-[25vh]" />
                <img src="../assets/2023/medixr.svg" alt="MedixR" className=" w-[20vh] h-[20vh] lg:w-[20vh] lg:h-[20vh]"/>
                <img src="../assets/2023/dope.svg" alt="Dope" className="w-[15vh] h-[15vh] lg:w-[20vh] lg:h-[20vh]" />
              </div>
              <hr className="border-lineColor border-t-2" />
            </div>
            
            <div className="space-y-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
                <img src="../assets/2022/lifesten.svg" alt="Lifesten" className="w-[15vh] h-[15vh] lg:w-[20vh] lg:h-[20v]" />
                <img src="../assets/2022/paying-tone.svg" alt="Paying Tone" className="w-[15vh] h-[15vh]  lg:w-[20vh] lg:h-[20v]" />
                <img src="../assets/2022/school-nest.svg" alt="School Nest" className="w-[15vh] h-[15vh] lg:w-[30vh] lg:h-[30v]" />
                <img src="../assets/2022/huza.svg" alt="Huza" className="w-[15vh] h-[15vh] lg:w-[20vh] lg:h-[20v]" />
                <img src="../assets/2022/mukika.svg" alt="Mukika" className="w-[15vh] h-[15vh] lg:w-[20vh] lg:h-[20v]" />
              </div>
              <hr className="border-lineColor border-t-2" />
            </div>
            
            <div className="space-y-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 items-center">
                <img src="../assets/2021/afroduino.svg" alt="Afroduino" cclassName=" w-[35vh] h-[35vh] lg:w-[45vh] lg:h-[45v]" />
                <img src="../assets/2021/second-life-storage.svg" alt="Second Life Storage" className=" w-[25vh] h-[25vh] lg:w-[30vh] lg:h-[30v]" />
                <img src="../assets/2021/bag.svg" alt="Bag" className="w-[12vh] h-[12vh] lg:w-[20vh] lg:h-[20v]"/>
                <img src="../assets/2021/karisimbi.svg" alt="Karisimbi" className="w-[25vh] h-[25vh] lg:w-[30vh] lg:h-[30v]" />
                <img src="../assets/2021/hova 2.png" alt="Hova 2" className="w-[15vh] h-[15vh] lg:w-[20vh] lg:h-[20vh]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      


   <!-- Responsive Section -->
<div class="flex flex-col lg:flex-row mt-16 lg:mt-44  space-y-8 lg:space-y-0 lg:space-x-16 px-6 lg:px-12 w-full mb-16">
  <!-- Text Section -->
  <div class="w-full lg:w-1/2 mt-16 lg:mt-16 2xl:mt-72">
    <div class="space-y-2">
      <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">CONNECT WITH LIKE-MINDED</p>
      <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">ENTREPRENEURS AT HANGA HUBs</p>
    </div>

    <div class="mt-8 text-justify space-y-12">
      <p class="text-navy font-gramatika text-lg lg:text-xl 2xl:text-2xl ">
        HANGA Hubs is an action funded by the European Commission and it is implemented by RISA. It operates in MUHANGA, NYAGATARE, RUBAVU, and RUSIZI. The action is part of the Rwanda Government’s and the European Union’s efforts to support private sector development and job creation in Rwanda through Innovation and Incubation hubs.
      </p>
      <button class="mt-6 p-2 px-4 lg:px-8 font-gramatika bg-tangerine text-white font-semibold hover:bg-tangerine-dark transition-all" ref="button">
        Learn more <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
      </button>
    </div>
  </div>

  <!-- Image Section -->
  <div class="flex-1  relative h-[30px] sm:mt-10 md:h-auto  md:mt-32 xl:mt-36  max-w-full md:max-w-[50%]">
    <img src="../assets/vr.jpg" class="w-full h-full object-cover">
    <div class="absolute inset-0" 
      style="background: linear-gradient(to bottom, rgba(1, 9, 48, 0.05) 0%, rgba(1, 9, 48, 0.2) 50%, rgba(1, 9, 48, 0.8) 100%);">
    </div>
  </div>
</div>



    <!-- next section -->
   <NewsLetter/>
    <FooterPage/>
    
  </div>
  </div>
  </div>
</template>


<script>
import NavBar from '@/components/Navbar.vue';
import FooterPage from '@/components/footerPage.vue';
import NewsLetter from '@/components/NewsLetter.vue';
export default{
  name:"PitchHanga",
  components:{
      NavBar,
      FooterPage,
      NewsLetter
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

