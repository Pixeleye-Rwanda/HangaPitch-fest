<template>
  <div class="overflow-x-hidden">
    <div class="h-screen">
      <div class="relative h-[670px]  " >
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <img src="../assets/bghome.jpg" alt="" class="h-full w-full object-cover">
        <NavBar class="absolute top-0 left-0 w-full" />

        <div class="font-rockinsoda absolute text-white text-6xl top-56 ml-12 slide-up" ref="text">
          <p>THE LARGEST IN-PERSON</p>
          <p>TECHNOLOGY EVENT IN</p>
          <p>Rwanda</p>
        </div>
        
      </div>
    </div>

    <div class="absolute top-2/3 ml-12">
      <div class="flex">
        <button class="mr-8 p-2 px-4 font-gramatika bg-white text-black font-semibold hover:bg-tangerine hover:text-white  " >
          Apply Now
        </button>
        <button class="p-2 px-4 font-gramatika border text-white font-semibold hover:bg-tangerine hover:text-black ">
          Impact video <i class="fa fa-play-circle" aria-hidden="true"></i>

        </button>
      </div>
      <img src="../assets/gvticons.svg"  class="mt-12  ">
    </div>

    <!-- First section -->
    <div class="mt-32 ml-12">
      <p class="font-rockinsoda text-navy text-7xl">IGNITING AND INSPIRING</p>
      <p class="font-rockinsoda text-navy text-7xl">INNOVATION</p>
    </div>

    <!-- Second section -->
    <div class="ml-12 flex mt-8 gap-4">
      <div class="flex-2">
        <div class="h-[500px] flex-shrink-0 zoom-in" ref="leftContent">
          <img src="../assets/students.jpg" class="w-full h-full object-cover">
        </div>
  
        <p class="font-gramatika mt-8 text-darknavy text-xl zoom-in" ref="text1">
          We believe in empowering innovators solving some of the dire
        </p>
        <p class="font-gramatika text-darknavy text-xl zoom-in" ref="text2">
          challenges in the Rwandan community and abroad
        </p>
        <button class="mr-8 mt-6 p-2 px-8 font-gramatika bg-tangerine text-white font-semibold zoom-in button-hover" ref="button">
          Learn more <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
  
      <!-- Right side with vertically stacked images -->
      <div class="flex-1 space-y-4">
        <div class="mr-10 h-[300px] flex-shrink-0 zoom-in" ref="image1">
          <img src="../assets/speaker.png" class="h-full w-full object-cover">
        </div>
        <div class="mr-10 h-[300px] flex-shrink-0 zoom-in" ref="image2">
          <img src="../assets/audience.jpg" class="h-full w-full object-cover">
        </div>
      </div>
    </div>

    <!-- Third section -->
    <div class="ml-2 flex items-center justify-center mt-28 space-x-60">
      <div class="space-y-8 fade-in" ref="item1">
        <img src="../assets/Component 1.png">
        <hr class="border-t border-gray-300">
        <div class="-space-y-2">
          <p class="font-rockinsoda text-7xl text-navy">130+</p>
          <p class="text-lightblue font-gramatika">Startups</p>
        </div>
      </div>
  
      <div class="space-y-8 fade-in" ref="item2">
        <img src="../assets/Component 1 (1).png" class="ml-8">
        <hr class="border-t border-gray-300">
        <div class="-space-y-2">
          <p class="font-rockinsoda text-7xl text-navy">10,000+</p>
          <p class="text-lightblue font-gramatika">Attendees</p>
        </div>
      </div>
  
      <div class="space-y-8 fade-in" ref="item3">
        <img src="../assets/Component 1 (2).png" class="ml-16">
        <hr class="border-t border-gray-300">
        <div class="-space-y-2">
          <p class="font-rockinsoda text-7xl text-navy">RWF600M</p>
          <p class="text-lightblue font-gramatika">Invested in tech startups</p>
        </div>
      </div>
      
    </div>
      <!-- Fourth section -->
      <div class="relative h-[600px]"> 
        <div class="absolute text-white p-8 mt-20">
          <img src="../assets/notched.svg" alt="" class="w-full">
          <img src="../assets/Vector 6.png" class="absolute top-0 mt-24 left-0 w-1/3 h-auto left-[57%] slide-up " ref="img2">
        </div>
  
        <div class="absolute mt-72 ml-12 p-8 text-left">
          <div class="slide-up" ref="texty">
        
          <h2 class="text-6xl text-white font-rockinsoda mb-4">Pitch Your Idea for</h2>
          <h2 class="text-6xl text-white font-rockinsoda mb-4">Funding</h2>
        </div>
          <div class="slide-up" ref="texts">

          <p class="text-lg mb-1 text-white text-xl font-gramatika">
            The largest in-person technology event in Rwanda
          </p>
          <p class="text-lg mb-1 text-white text-xl font-gramatika">
            designed to ignite & inspire innovation, Hanga
          </p>
          <p class="text-lg mb-6 text-white text-xl font-gramatika">
            Pitchfest is returning for its fourth edition.
          </p>
        </div>

          <button class="bg-tangerine text-white py-2 px-6 hover:bg-orange-500 slide-up button-hover " ref="button3">
            Learn more <i class="fa fa-chevron-right h-2 w-2" aria-hidden="true"></i>

          </button>
        </div>
      </div>
  
      <!-- Fifth section -->
      <div class="ml-12 mt-72">
        <h1 class="font-rockinsoda text-navy text-5xl   "> WHERE LEADERS INSPIRE </h1>
        <h1 class="font-rockinsoda text-navy text-5xl   ">YOUR NEXT BIG LEAP</h1>

          <div class=" flex  gap-4 mb-60  mt-20"> 
        
            <div class="flex-1 space-y-4 ">
              <div class="relative h-[320px]">
                <img src="../assets/mrspeaker.jpg" class="h-full w-full object-cover">
                <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                  <div class="-space-y-10 mt-36">
                    <span class="font-rockinsoda text-tangerine text-5xl ml-2  ">"</span>
                    <p class="text-white text-sm font-gramatika  p-4 text-justify text-center">
                    Hanga Pitchfest 
                    a two-fold approach. We are nurturing the rich talents and innovation of our young people,
                    while recognizing the contributions of talented 
                    innovators to socio-economic development of our country and the world</p>

                  </div>
                
                  <div class="flex space-x-2 ml-2 ">
                    <hr class="w-[50px] border-2 mt-2 ">
                    <p class="font-rockinsoda text-white text-xl">Francis Gatare</p> 
                  </div>
                  
                  

                </div>
              </div>
              <div class="relative h-[320px]">
                <img src="../assets/whiteman.jpg" class="h-full w-full object-cover">
                <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                  <div class="-space-y-10 mt-36">
                    <span class="font-rockinsoda text-tangerine text-5xl ml-2  ">"</span>
                    <p class="text-white text-sm font-gramatika  p-4 text-justify text-center">
                      “There have been, in my opinion, too much talking. We need to act now, 
                      but I believe especially it is very 
                      important to invest in young people here. The time is now.</p>

                  </div>
                
                  <div class="flex space-x-2 ml-2 ">
                    <hr class="w-[50px] border-2 mt-2 ">
                    <p class="font-rockinsoda text-white text-xl">Flemming besenbacher</p> 
                  </div>
                </div>
              </div>
            </div>
            
            <div class="relative flex-2 mr-10 h-[655px]">
              <img src="../assets/paula.jpg" class="w-full h-full object-cover">
              <div class="relative inset-0">
                <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
                  <!-- Content of the overlay will be positioned here -->
                  <div class="absolute bottom-0 inset-x-0 p-4">
                    <div class="-space-y-10">
                      <span class="font-rockinsoda text-tangerine text-5xl ml-2">"</span>
                      <p class="text-white text-lg font-gramatika p-4 text-justify text-center">
                        Today is a celebration of talent, ambitions and the boundless opportunities 
                        that arise when passion, creativity, determination and
                        the resolve to be self-reliant converge to push the boundaries of innovation.
                      </p>
                    </div>
                    
                    <div class="flex space-x-2 ml-2">
                      <hr class="w-[50px] border-2 mt-2">
                      <p class="font-rockinsoda text-white text-xl">Paula Ingabire</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            

            
          </div>
      </div>
    

      <!---------- section six------------ -->
      <div class="ml-12 flex space-x-8 -mt-24 mb-12">
        <div class="mt-32">
          <h1 class="font-rockinsoda text-4xl text-navy">CHECK OUR INITIATIVES</h1>
          <p class="font-gramatika text-xl text-navy mt-2">Lorem Ipsum has been the industry's standard 
            dummy </p>
            <p class="front-gramatika text-xl text-navy ">text ever since the 1500s,
              when an unknown printer</p>
        </div>

        <div class="space-x-4 flex">
          <div class="relative h-[70vh] w-[25vw] flex-shrink-0">
            <img src="../assets/hubs.jpg" class="w-full h-full object-cover">
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
              <div class="ml-8 mt-72">
                <p class="text-white font-rockinsoda text-4xl">HANGA HUBS </p>
                <div class=" mt-2">
                  <p class="text-white font-gramatika">Addressing the obstacles & gaps  </p>
                  <p class="text-white font-gramatika"> limiting early-stage startups.</p>
                  <a href="" class="text-white font-gramatika underline ">learn more </a>
                
                </div>

              </div>
            </div>
          </div>
          <div class="relative h-[70vh] w-[25vw] flex-shrink-0">
            <img src="../assets/srs.jpg" class="w-full h-full object-cover">
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
              <div class="ml-8 mt-72">
                <p class="text-white font-rockinsoda text-4xl">HANGA SRC </p>
                <div class=" mt-2">
                  <p class="text-white font-gramatika">Revolutionizing Sexual and   </p>
                  <p class="text-white font-gramatika"> Reproductive Health in Africa.</p>
                  <a href="" class="text-white font-gramatika underline ">learn more </a>
                
                </div>

              </div>

            </div>
          </div>
        </div>
        
        
      
      </div>

      <!--------section seven------->
      <div class=" relative h-[650px] mt-24 mb-3">

        
        <img src="../assets/Group .jpg" alt="" class="w-full h-full object-cover">

        <div class=" absolute top-96 left-12 ">

        <p class="font-rockinsoda text-white  text-5xl">DON'T MISS OUT </p>
        
        <div class="text-justify mt-4 flex space-x-96  ">
          <div class="">
          <p class="text-white font-gramatika text-xl">The largest in-person technology event in Rwanda </p>
          <p class="text-white font-gramatika text-xl">designed to ignite & inspire innovation ,Hanga Pitch </p>
          <p class="text-white font-gramatika text-xl"> Fest is returning for its fourth edition.</p>
        </div>
        <div class=" mt-12 ">
          <button class=" float-rightmr-12 text-gramatika text-white border rounded-3xl  px-8 p-2 hover:bg-tangerine ">Apply now</button>
        </div>
        </div>

      </div> 

      </div>
      
      <!------ section eight ------->
      <div class="space-y-12 mt-24">
        <div class="ml-12">
          <h1 class="font-rockinsoda text-5xl text-navy"> LATEST ON OUR BLOG</h1>
          <p class="font-gramatika text-xl mt-4 text-lightblue">Get updates on the latest stories  within Rwanda’s </p>
          <p class="font-gramatika text-xl text-lightblue ">flourishing tech innovation ecosystem. </p>
          <button class="bg-tangerine float-right -mt-12 mr-10 text-white py-2 px-6 hover:bg-orange-500">
          read more <i class="fa fa-chevron-right" aria-hidden="true"></i>

          </button>

        </div>
        
        <div class="flex space-x-6 ml-12  mr-12">
          <div class="relative h-[500px] w-[600px] flex-shrink-0">
            <img src="../assets/stad.jpg" class="w-full h-full object-cover">
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
              <button class="text-black bg-white font-gramatika p-2 mt-8 ml-12 px-6">STARTUPS</button>

                <div class="ml-12 mt-56">
                <p class="text-white font-rockinsoda text-4xl">BK ARENA TO BE USED FOR  </p>
                <p class="text-white font-rockinsoda text-4xl">HANGA 2024</p>
                <div class=" mt-2">
                  <p class="text-white font-gramatika">The largest in-person technology event in Rwanda </p>
                  <p class="text-white font-gramatika"> designed to ignite & inspire innovation.</p>
                  <p class="text-white font-rockinsoda mt-4">0ct 24 . Hanga team, Becky</p>
                
                </div>

              </div>
              
            </div>
          </div>
          <div class="relative h-[500px] w-[600px] flex-shrink-0">
            <img src="../assets/vr.jpg" class="w-full h-full object-cover">
            <div class="absolute inset-0" style="background: linear-gradient(to top, rgba(1, 9, 48, 0.76) 0%, rgba(1, 9, 48, 0.76) 30%, rgba(1, 9, 48, 0.2) 70%);">
              <button class="text-black bg-white font-gramatika p-2 mt-8 ml-12 px-6">STARTUPS</button>
              <button class="text-black bg-white font-gramatika p-2 mt-8 ml-4 px-6">INVESTMENT</button>


              <div class="ml-12 mt-56">
              <p class="text-white font-rockinsoda text-4xl">BK ARENA TO BE USED FOR  </p>
              <p class="text-white font-rockinsoda text-4xl">HANGA 2024</p>
              <div class=" mt-2">
                <p class="text-white font-gramatika">The largest in-person technology event in Rwanda </p>
                <p class="text-white font-gramatika"> designed to ignite & inspire innovation.</p>
                <p class="text-white font-rockinsoda mt-4">0ct 24 . Hanga team, Becky</p>
              
              </div>

            </div>
            </div>
          </div>
        </div>
        
      

      </div>

      <!---------------- section nine ----------->
      <div class="">
        <div class="mt-24 ml-12 space-x-2">
          <h1 class="font-rockinsoda text-5xl text-navy ml-2">2023</h1>
        <h1 class="font-rockinsoda text-5xl text-navy">NOTABLE SPEAKERS</h1>
        </div>
        <div class="relative overflow-x-hidden mt-24 ml-12" style="height: 582px;">
          <div class="flex animate-scroll absolute" :style="{ width: `${individuals.length * 800}px` }">
            <template v-for="(_, loopIndex) in 1">
              <div v-for="(individual, index) in individuals" :key="`${loopIndex}-${index}`" class="relative h-[582px] w-[400px] flex-shrink-0">
                <img :src="individual.image" class="w-full h-full object-cover">
                <div class="absolute inset-0" :style="{ background: individual.gradient }"></div>
                <div class="text-4xl font-rockinsoda text-white absolute inset-0 flex items-center justify-center">
                  <div class="space-y-4">
                    <div class="mt-80">
                      <p class="text-center">{{ individual.name }}</p>
                    </div>
                    <div>
                      <p class="text-white font-gramatika text-xl text-center" v-html="individual.title"></p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
        
      </div>

    <!--------- section 10 -------->
    <div class=" ml-8">
      <div class="mt-32">
        <h1 class=" ml-4 font-rockinsoda text-5xl text-navy ">HANGA ON INSTAGRAM</h1>
      </div>

      <div class="flex space-x-2 ml-4 mt-12">
        <div class=" flex-shrink-0 space-y-2">
        <div class="h-[400px] w-[350px]">
          <img src="../assets/insta1.jpg" class="w-full h-full object-cover">
        </div>
        <div class="h-[200px] w-[350px] ">
          <img src="../assets/insta2.jpg" class="w-full h-full object-cover" >
        </div>
      </div>

        <div class=" flex-shrink-0 space-y-2">
          <div class="h-[300px] w-[250px]">
            <img src="../assets/insta4.jpg" class="w-full h-full object-cover" >
          </div>
          <div class="h-[200px] w-[250px]">
            <img src="../assets/insta5.jpg" class="w-full h-full object-cover">
          </div>
        </div>
      
        <div class="flex-shrink-0 space-y-2">
          <div class="h-[300px] w-[250px] ">
            <img src="../assets/mrspeaker.jpg" class="w-full h-full object-cover">
          </div>
          <div class="h-[290px] w-[250px] ">
            <img src="../assets/bghome.jpg" class="w-full h-full object-cover">
          </div>
        </div>
      
        <div class="flex-shrink-0 space-y-2">
          <div class="h-[300px] w-[250px] ">
            <img src="../assets/insta3.jpg" class="w-full h-full object-cover">
          </div>
          <div class="h-[270px] w-[250px] ">
            <img src="../assets/vr.jpg" class="w-full h-full object-cover">
          </div>
        </div>
      </div>

    </div>

      <!-----section 11------>
      <div class="mt-24 flex items-center justify-center ">
        <img src="../assets/Frame 320.png" >
      </div>

      <div class="relative">
        <!---------section 12------->
        <div class="h-[400px] relative z-10 -mb-48  "> 
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
              <button class="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-r">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>


              </button>
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
export default {
  name: 'HomePage',
  components: {
    NavBar,
    FooterPage
  },

  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up-visible');
          entry.target.classList.add('zoom-in-visible');
          entry.target.classList.add('fade-in-visible');
          entry.target.classList.add('fade-in-visible-animation');
          entry.target.classList.add('slide-up-visible-animation');



        }
      });
    });

      
    // Observe all elements with the zoom-in class
    const elements = this.$refs;
    for (let key in elements) {
      if (elements[key]) {
        observer.observe(elements[key]);
      }
    }
     // Observe all elements with the fade-in class
    const items = [this.$refs.item1, this.$refs.item2, this.$refs.item3];
    items.forEach(item => {
      observer.observe(item);
    });

    // Observe both the text and button elements
    observer.observe(this.$refs.text);
    observer.observe(this.$refs.texty);

    observer.observe(this.$refs.texts);
    observer.observe(this.$refs.img2);



    

  },

  data() {
    return {
      individuals: [
        {
          name: 'Paul Kagame',
          title: 'President of the<br>Republic of Rwanda',
          image: require('@/assets/Kagame.jpg'),
          gradient: 'linear-gradient(to bottom, rgba(1, 9, 48, 0.05) 0%, rgba(1, 9, 48, 0.2) 50%, rgba(1, 9, 48, 0.8) 100%)'
        },
        {
          name: 'Paula Ingabire',
          title: 'Minister of MINICT and<br>Innovation',
          image: require('@/assets/ingabire.jpg'),
          gradient: 'linear-gradient(to bottom, rgba(1, 9, 48, 0.02) 0%, rgba(1, 9, 48, 0.15) 50%, rgba(1, 9, 48, 0.9) 100%)'
        },
        {
          name: 'Francis Gatare',
          title: 'CEO of Rwanda<br>Development Board',
          image: require('@/assets/ceo.jpg'),
          gradient: 'linear-gradient(to bottom, rgba(1, 9, 28, 0.02) 0%, rgba(1, 9, 28, 0.15) 30%, rgba(1, 9, 28, 0.8) 100%)'
        }
      ]
    };
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
  .zoom-in {
    transform: scale(0.95);
    opacity: 0;
    transition: transform 1s ease-in-out, opacity 0.90s ease-in-out;
  }

  .zoom-in-visible {
    transform: scale(1);
    opacity: 1;
  }

  .button-hover {
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .button-hover:hover {
    transform: scale(1.05); 
  }

  .fade-in {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .fade-in-visible {
    opacity: 1;
  }

  .fade-in:nth-child(1) {
    transition-delay: 0.3s;
  }

  .fade-in:nth-child(2) {
    transition-delay: 0.6s;
  }

  .fade-in:nth-child(3) {
    transition-delay: 0.9s;
  }

  .fade-in-animation {
    opacity: 0;
    transition: opacity 1.2s ease-in-out;
  }

  .fade-in-visible-animation {
    opacity: 1;
  }

  .slide-up-animation {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
  }

  .slide-up-visible-animation {
    opacity: 1;
    transform: translateY(0);
  }

  .hover-image {
    position: relative;
    overflow: hidden;
  }

  .hover-image img {
    transition: transform 0.5s ease;
  }

  .hover-image:hover img {
    transform: scale(1.05);
  }

  .hover-overlay {
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .hover-image:hover .hover-overlay {
    opacity: 1;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

</style>



