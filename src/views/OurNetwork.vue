  <template>
      <div class="overflow-hidden">
          <div class="h-screen relative ">
              <div class="relative h-[670px] flex-shrink-0">
                <img src="../assets/networkbg.jpg" alt="" class="h-full w-full object-cover">
                <div class="absolute inset-0 bg-abtcolor"></div>
                <Navbar  class="absolute top-0 left-0 w-full"/>

                <div class="font-rockinsoda absolute text-white text-6xl top-96 ml-12">
                  <p>STARTUPS</p>
                  <p>FUNDED BY HANGA</p>
                  
                </div>
              </div>

            </div>

            <!-- Navbar network page  -->
          <div class=" h-[9vh] w-full bg-tangerine  ">

        <div class="flex mt-4 ">
          <div class="ml-12 text-xl" >
              <h1 class="font-gramatika text-white mt-4">OUR NETWORK</h1>
          </div>
          
          <ul class="flex space-x-16 ml-auto mt-4 mr-12 " >
              <li class="font-gramatika text-white text-lg">Startups</li>
              <li class="font-gramatika  text-white text-lg ">Judges </li>
              <li class="font-gramatika  text-white text-lg ">Partners</li>
          
          </ul>

        </div>
                
      </div>

              <!-- second section -->
              <div class="ml-12 flex mt-24 gap-4">
                  <div class="flex-2">
                    <div class=" relative h-[500px] flex-shrink-0 zoom-in" ref="leftContent">
                      <img src="../assets/speaker1.jpg" class="w-full h-full object-cover">
                      <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(1, 9, 28, 0.02) 0%, rgba(1, 9, 28, 0.15) 30%, rgba(1, 9, 28, 0.8) 100%);"></div>

                    </div>
              
                    <p class="font-gramatika mt-8 text-darknavy text-xl zoom-in" ref="text1">
                      The largest in-person technology event in Rwanda designed to ignite &                  </p>
                    <p class="font-gramatika text-darknavy text-xl zoom-in" ref="text2">
                      inspire innovation, Hanga Pitchfest is returning for its fourth edition.                  </p>
                    <button class="mr-8 mt-6 p-2 px-8 font-gramatika bg-tangerine text-white font-semibold zoom-in button-hover" ref="button">
                      Pitch at Hanga <i class="fa fa-chevron-right" aria-hidden="true"></i>
                    </button>
                  </div>
              
                  <!-- Right side with vertically stacked images -->
                  <div class="flex-1 space-y-4">
                    <div class=" relative mr-10 h-[300px] flex-shrink-0 zoom-in" ref="image1">
                      <img src="../assets/speaker2.jpg" class="h-full w-full object-cover">
                      <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(1, 9, 28, 0.02) 0%, rgba(1, 9, 28, 0.15) 30%, rgba(1, 9, 28, 0.8) 100%);"></div>

                    </div>
                    <div class=" relative mr-10 h-[300px] flex-shrink-0 zoom-in" ref="image2">
                      <img src="../assets/audience.jpg" class="h-full w-full object-cover">
                      <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(1, 9, 28, 0.02) 0%, rgba(1, 9, 28, 0.15) 30%, rgba(1, 9, 28, 0.8) 100%);"></div>

                    </div>
                  </div>
                </div>

                <!-- third section -->
                <div class="ml-2 flex items-center justify-center mt-36 space-x-44">
                  <div class="space-y-8 fade-in w-[40vh]"  ref="item1">
                    <img src="../assets/1line.png">
                    <hr class="border-t border-gray-300">
                    <div class="space-y-2">
                      <p class="font-rockinsoda text-5xl text-navy">GET FUNDING</p>

                      
                      <p class="text-lightblue font-gramatika mt-4 text-justify">At Hanga, you will secure
                         the essential funding you need
                         to elevate your startup and turn your innovative ideas into reality.</p>
                       

                    </div>
                  </div>
              
                  <div class="space-y-8 fade-in w-[40vh]" ref="item2">
                    <img src="../assets/2line.png" >
                    <hr class="border-t border-gray-300">
                    <div class="space-y-2">
                      <p class="font-rockinsoda text-5xl text-navy">NETWORK</p>
                      
                      <p class="text-lightblue font-gramatika mt-4">Join Hanga to network with industry giants, 
                        potential investors, and like-minded entrepreneurs for collaboration and growth</p>
                    
                    </div>
                  </div>
              
                  <div class="space-y-8 fade-in w-[45vh]" ref="item3">
                    <img src="../assets/3line.png" >
                    <hr class="border-t border-gray-300">
                    <div class="space-y-2">
                      <p class="font-rockinsoda text-5xl text-navy">ACCESS MENTORS</p>

                      
                      <p class="text-lightblue font-gramatika">Tap into Hanga’s mentorship pool.
                         Learn from the best to
                         hone your business strategies and achieve lasting success.</p>
                    
                    </div>
                  </div>
                  
                </div>

                <!--fourth section -->
                <div class="">
                  <div class="font-rockinsoda text-navy text-6xl mt-20 ml-12 ">
                    <p>FEATURED STARTUPS</p>
                  </div>

                  <div class="flex flex-col space-y-4 md:flex-row md:space-x-4">
                    <!-- Year Dropdown -->
                    <select v-model="selectedYear" class="w-full md:w-1/4 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">All Years</option>
                      <option value="2022">2023</option>
                      <option value="2023">2022</option>
                      <option value="2022">2021</option>
                      
                    </select>
                  
                    <!-- Category Dropdown -->
                    <select v-model="selectedCategory" class="w-full md:w-1/4 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">All Categories</option>
                      <option value="Fintech">Travel</option>
                      <option value="Education">Education</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="Health">Health</option>
                    </select>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    <div v-for="startup in filteredStartups" :key="startup.name" class="border p-4 rounded-lg shadow-md">
                      <img :src="startup.logo" alt="Logo" class="w-full h-16 object-contain mb-4" />
                      <h3 class="text-lg font-bold">{{ startup.name }}</h3>
                      <p class="text-sm text-gray-500">{{ startup.category }}</p>
                      <p class="text-sm text-gray-400">{{ startup.year }}</p>
                    </div>
                  </div>
                  
                  
                </div>


            
      </div>

  </template>

  <script>

  import Navbar from '@/components/Navbar.vue';
  export default{

      name:'OurNetwork',
      components:{
          Navbar
      },

      data(){
      
        return{
          startups:[
            { name: 'Afia Pharma', category: 'Health', year: 2021, logo: require('../assets/2021/Afia.svg') },
            { name: 'E-shuri', category: 'Education', year: 2021, logo: require('../assets/2021/e-shuri.png') },
            { name: 'Bafana', category: 'Entertainment', year: 2022, logo: require('../assets/2022/bafana.png') },
            { name: 'Mulika Farms', category: 'Agriculture', year: 2022, logo: require('../assets/2022/mulika.png') },
            { name: 'Tuza Ride', category: 'Travel', year: 2023, logo: require('../assets/2023/tuza.png') },
            { name: 'Smart Class', category: 'Education', year: 2022, logo: require('../assets/2022/smart.png') },


            
          ],
          selectedYear:'',
          selectedCategory:''
        };
        
      },
      
        computed:{
        
           filteredStartups() {
           return this.startups.filter(startup => {
           const yearMatch = !this.selectedYear || startup.year == this.selectedYear;
           const categoryMatch = !this.selectedCategory || startup.category == this.selectedCategory;
          return yearMatch && categoryMatch;
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
        // Observe all elements with the fade-in class
    const items = [this.$refs.item1, this.$refs.item2, this.$refs.item3];
    items.forEach(item => {
      observer.observe(item);
    });
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
  
  </style>