<template>
  <div class="overflow-hidden">
    <div class="min-h-screen">

    <div class="relative h-screen min-h-[400px] max-h-[670px] sm:max-h-[800px] lg:max-h-[900px] xl:max-h-[1000px]">
      <div class="absolute inset-0 bg-black opacity-30"></div>
      <img src="../assets/pitchbg.jpg" alt="Background" class="h-full w-full object-cover">
      
      <NavBar class="absolute top-0 left-0 w-full" />
    
      <div class="font-rockinsoda absolute  text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl top-2/4 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 xl:2/4 text-center sm:text-left" ref="text">
        <p v-for="(line, index) in baseText" :key="index" class="hero-text font-rockinsoda text-white text-7xl" :style="{ animationDelay: `${index * 0.8}s` }" >
          {{ line }}
        </p>
  
      </div>
      
     
    </div>

        <!-- next section -->

        <div ref="observerElement">
        <div class="flex flex-col lg:flex-row mt-12 lg:mt-20 px-6 w-full lg:space-x-10 ">
          <!-- Text Section -->
         <transition appear name="fade-slide-up" v-if="isVisible">

          <div class="lg:text-left  space-y-4 w-3/5">
            <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">THE LARGEST IN-PERSON TECHNOLOGY EVENT IN RWANDA</p>
          </div>

        </transition>
        
          <!-- Description and Button Section -->
          <div class="text-justify mt-4 lg:mt-0 space-y-8 w-full lg:w-10/12">
            <transition name="fade-slide-right" appear v-if="isVisible">
            <p class="text-base lg:text-2xl font-gramatika text-navy">
              Do you believe you've got what it takes? You are only 4 steps closer to being part of the most exciting tech event in Rwanda. Make sure you have all the necessary documents and information ready to submit your application.
            </p>
          </transition>

          <transition name="fade-slide-up" appear v-if="isVisible">
            <div class="flex  lg:justify-start">
              <button class="p-2 px-4 font-gramatika bg-tangerine text-white hover:bg-tangerine-dark transition-all" ref="button">
                <a href="https://hanga.acceleratorapp.co/application/new?program=hanga-pitchfest-" class="mt-6">Apply Now</a>
                <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
              </button>
            </div>
         </transition>
          </div>
        </div>
      </div>
        
        
      
        <!-- section 3 -->
        <div ref="observerElement1">

          <transition name="fade-slide-right"  appear v-if="isVisible1">

        <div class="container min-h-screen   mx-auto px-4 lg:px-12  xl:max-w-none">
          <div class="relative absolute  w-full pt-32 lg:pt-60 ">
            <div class="flex flex-col absolute lg:flex-row lg:justify-between  mb-20 space-y-24 lg:space-y-0 lg:space-x-8">

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
      </transition>

      </div>


        <!-- section 4 -->
      
        <div class=" relative mt-96 lg:mt-60 2xl:mt-24">

          <div ref="observerElement2">
            <transition name="fade-slide-up" appear v-if="isVisible2">
              <div>
            <p class="text-navy font-rockinsoda text-5xl ml-12  "> Past winners </p>
            
            <select v-model="selectedYear" class=" float-right mr-20 w-30 bg-white ring-1 ring-lightTangerine outline-none p-2 px-4">

              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
          </select>
        </div>
        </transition>
      </div>

           
         
        
        <!-- Year Dropdown -9-->
          <div
          class="relative overflow-x-auto flex  whitespace-nowrap scrollbar-hide mt-16 ml-0 -mb-44 "
          ref="scrollContainer"
          style="height: 800px;"
          @touchstart="handleTouchStart"
          @touchmove="handleTouchMove"
         > 
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
    
<div class="flex flex-col lg:flex-row mt-16 lg:mt-44  space-y-8 lg:space-y-0 lg:space-x-16 px-6 lg:px-12 w-full mb-16" ref="observerElement3">
  <!-- Text Section -->

  <div class="w-full lg:w-1/2 mt-16 lg:mt-16 2xl:mt-72">
    <transition name="fade-slide-up" appear v-if="isVisible3">
    <div class="space-y-2">
      <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">CONNECT WITH LIKE-MINDED</p>
      <p class="text-3xl lg:text-6xl font-rockinsoda text-navy">ENTREPRENEURS AT HANGA HUBs</p>
    </div>
  </transition>

     <transition name="fade-slide-left" appear v-if="isVisible3">
    <div class="mt-8 text-justify space-y-12">
      <p class="text-navy font-gramatika text-lg lg:text-xl 2xl:text-2xl ">
        HANGA Hubs is an action funded by the European Commission and it is implemented by RISA. It operates in MUHANGA, NYAGATARE, RUBAVU, and RUSIZI. The action is part of the Rwanda Government’s and the European Union’s efforts to support private sector development and job creation in Rwanda through Innovation and Incubation hubs.
      </p>
      <button class="mt-6 p-2 px-4 lg:px-8 font-gramatika bg-tangerine text-white font-semibold hover:bg-tangerine-dark transition-all" ref="button">
        Learn more <i class="fa fa-chevron-right ml-2" aria-hidden="true"></i>
      </button>
    </div>
  </transition>
  </div>


  <!-- Image Section -->
   <transition name="fade-slide-left" appear v-if="isVisible3">
  <div class="flex-1  relative h-[30px] sm:mt-10 md:h-auto  md:mt-32 xl:mt-36  max-w-full md:max-w-[50%]">
    <img src="../assets/vr.jpg" class="w-full h-full object-cover">
    <div class="absolute inset-0" 
      style="background: linear-gradient(to bottom, rgba(1, 9, 48, 0.05) 0%, rgba(1, 9, 48, 0.2) 50%, rgba(1, 9, 48, 0.8) 100%);">
    </div>
  </div>
</transition>
</div>

   <scrollButton/>

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
import scrollButton from '@/components/scrollButton.vue';
export default{
  name:"PitchHanga",
  components:{
      NavBar,
      FooterPage,
      NewsLetter,
      scrollButton
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
                baseText:[
        'READY TO PITCH YOUR ',
        'TECH-ENABLED IDEA?'
      ],  

         isVisible:false,
         isVisible1:false,
         isVisible2:false,
         isVisible3:false,

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

      const handleMouseMove = (event) => {
      if (event.buttons) {
        this.$refs.scrollContainer.scrollLeft -= event.movementX; 
      }
    };
    
    this.$refs.scrollContainer.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    this.$refs.scrollContainer.addEventListener('mouseleave', () => {
      this.$refs.scrollContainer.removeEventListener('mousemove', handleMouseMove);
    });
         
   this.initiativeAnimations();
   this.missoutAnimations();
   this.blogAnimations();
   this.galleryAnimations();
     
  },

  methods: {

    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      const distance = this.startX - event.touches[0].clientX;
      this.$refs.scrollContainer.scrollLeft += distance;
      this.startX = event.touches[0].clientX;
    },

    initiativeAnimations() {
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
      }
    });
  });

  observer.observe(this.$refs.observerElement);
},

blogAnimations() {
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      this.isVisible2 = true; 
    }
  });
}, {
  threshold: 0.5  
});

observer.observe(this.$refs.observerElement2);
},

missoutAnimations(){
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.isVisible1 = true;
      }
    });
  });

  observer.observe(this.$refs.observerElement1);
},

galleryAnimations() {
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      this.isVisible3 = true; 
    }
  });
}, {
  threshold: 0.5  
});

observer.observe(this.$refs.observerElement3);
},


initScrollAnimations() {
      const fadeElements = document.querySelectorAll('.fade-in');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      }, { threshold: 0.1 });

      fadeElements.forEach(el => observer.observe(el));
    },

     
  },

  beforeUnmount() {
    this.$refs.scrollContainer.removeEventListener('mousemove', this.handleMouseMove);
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

.fade-in {
  opacity: 0;
  transition: opacity 1.2s ease-in-out;
}

.fade-in-visible {
  opacity: 1;
}

.slide-up-enter-active,
.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 0.7s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-up-enter-to {
  opacity: 1;
  transform: translateY(0); /* Ensure Y-axis is reset to 0 */
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0); /* Reset X-axis */
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0); /* Reset X-axis */
}
/* General Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter, 
.fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

/* Fade and Slide Up */
.fade-slide-up-enter-active {
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1);}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}
.fade-slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

/* Fade and Slide Left */
.fade-slide-left-enter-active {
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1); /* Even slower and more natural */
}
.fade-slide-left-enter-from {
  opacity: 0;
  transform: translateX(-80px);
}
.fade-slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Fade and Slide Right */
.fade-slide-right-enter-active {
  transition: all 1s cubic-bezier(0.42, 0, 0.58, 1); /* Even slower and more natural */
}
.fade-slide-right-enter-from {
  opacity: 0;
  transform: translateX(80px);
}
.fade-slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* Zoom In */
.zoom-enter-active {
  transition: all 0.7s ease;
}
.zoom-enter-from {
  opacity: 0;
  transform: scale(0.9);
}
.zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}

.fade-slide-up-enter-active,
.fade-slide-up-leave-active {
  transition: opacity 1.1s ease-in-out, transform 1.1s ease-in-out;
}

.fade-slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.fade-slide-up-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.fade-slide-up-leave-to {
  opacity: 0;
  transform: translateY(80px);
}

</style>
