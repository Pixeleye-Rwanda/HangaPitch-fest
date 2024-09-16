    <template>

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
        <div class="ml-12">
            <div class="font-rockinsoda text-navy text-6xl mt-32  ">
            <p>FEATURED STARTUPS</p>
            </div>

            <div class="flex flex-col mt-12 space-y-2  md:flex-row md:space-x-4">
            <!-- Category Buttons -->
            <div class="flex space-x-4">
                <label>
                <input type="radio" name="category" value="Fintech" class="hidden" v-model="selectedCategory" />
                <span :class="['inline-block px-4 py-2 border border-lightTangerine text-navy  hover:bg-tangerine hover:text-white', selectedCategory === 'Fintech' ? 'bg-tangerine text-white' : 'border-tangerine  text-navy']">
                    FINTECH
                </span>
                </label>
                <label>
                <input type="radio" name="category" value="Education" class="hidden" v-model="selectedCategory" />
                <span :class="['inline-block px-4 py-2 border border-lightTangerine text-navy  hover:bg-tangerine hover:text-white', selectedCategory === 'Education' ? 'bg-tangerine text-white' : 'border-tangerine  text-navy']">
                    EDUCATION
                </span>
                </label>
                <label>
                <input type="radio" name="category" value="Software Development" class="hidden" v-model="selectedCategory" />
                <span :class="['inline-block px-4 py-2 border border-lightTangerine text-navy  hover:bg-tangerine hover:text-white', selectedCategory === 'Software Development' ? 'bg-tangerine text-white' : 'border-tangerine  text-navy']">
                    SOFTWARE DEVELOPMENT
                </span>
                </label>
                <label>
                <input type="radio" name="category" value="Health" class="hidden" v-model="selectedCategory" />
                <span :class="['inline-block px-4 py-2 border border-lightTangerine text-navy  hover:bg-tangerine hover:text-white', selectedCategory === 'Health' ? 'bg-tangerine text-white' : 'border-tangerine  text-navy']">
                    HEALTH
                </span>
                </label>
                <label>
                <input type="radio" name="category" value="Agriculture" class="hidden" v-model="selectedCategory" />
                <span :class="['inline-block px-4 py-2 border border-lightTangerine text-navy  hover:bg-tangerine hover:text-white', selectedCategory === 'Agriculture' ? 'bg-tangerine text-white' : 'border-tangerine  text-navy']">
                    AGRICULTURE
                </span>
                </label>
                <label>
                <input type="radio" name="category" value="Other" class="hidden" v-model="selectedCategory" />
                <span :class="['inline-block px-4 py-2 border border-lightTangerine text-navy  hover:bg-tangerine hover:text-white', selectedCategory === 'Other' ? 'bg-tangerine text-white' : 'border-tangerine  text-navy']">
                    OTHER
                </span>
                </label>
            </div>
            
            <!-- Year Dropdown -9-->
            <div class=" ">

            <select v-model="selectedYear" class=" ml-56 w-30 bg-white ring-1 ring-lightTangerine outline-none p-2 px-4">
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
            </div>
            </div>
            

            <div class="grid grid-cols-1  mr-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mt-6 ">
            <ul v-for="startup in filteredStartups" :key="startup.name" class=" border border-lightTangerine  p-4  h-[28vh]  ">
                <div class="flex items-center justify-center">
                <li>
                <router-link to="/description">
                
                <img :src="startup.logo" alt="Logo" class="w-full h-12 mt-6  mb-4" />
                <h3 class="text-lg text-center font-gramatika text-navy text-lg mt-4 " >{{ startup.name }}</h3>
            </router-link>
            </li>
            </div>

            </ul>

            </div>
            
            
        </div>

        <!-- fith section -->
        <div class="relative h-[600px]"> 
            <div class="absolute text-white p-8 mt-20">
            <img src="../assets/notched.svg" alt="" class="w-full">
            </div>
    
            <div class="absolute  flex space-x-52 mt-72 ml-12 p-8 text-left">
            <div class="slide-up" ref="texty">

                <h2 class="text-6xl text-white font-rockinsoda mb-4">JOIN OUR STARTUP</h2>
                <h2 class="text-6xl text-white font-rockinsoda mb-4">NETWORK</h2>

                <img src="../assets/Group 63.svg" class="mt-28 slide-up" ref="textis">
            </div>
                <div class="">
            <div class="slide-up" ref="texts">

            <p class="text-lg mb-1 w-[80vh] text-white text-2xl font-gramatika">
                The largest in-person technology event in Rwanda designed to ignite & inspire innovation.
                The largest in-person technology event in Rwanda designed to ignite & inspire innovation.
            </p>
        
            </div>

            <button class="bg-tangerine text-white py-2 mt-12 px-6 hover:bg-orange-500 slide-up button-hover " ref="button3">
                Pitch at hanga <i class="fa fa-chevron-right h-2 w-2" aria-hidden="true"></i>

            </button>
            </div>
        </div>
        </div>

        <!-- section six -->
            <div class="ml-12 mt-72">
    

    <div class=" mt-12 ml-16 overflow-hidden">

        <div ref="videoWrapper" class="flex space-x-8 overflow-x-auto overflow-x-hidden scroll-smooth">

        <!-- First text Block -->
        <div class="flex-shrink-0 flex flex-col space-y-2 w-[600px] h-[600px]">
            <div class="relative  flex w-full h-full">

        <div class="">
            <span class="font-rockinsoda text-tangerine text-7xl ml-2  ">"</span>
            <p class="text-navy text-2xl font-gramatika font-bold w-[60vh] -mt-8 p-4 text-justify text-center">
            Winning Hanga Pitchfest has been a game-changer for Lifesten Health.It propelled us into the spotlight and opened doors to 
            investors and esteemed clients, who were captivated by the impact that we could create together.</p>

            <div class="flex space-x-2 ml-2 ">
                <hr class=" w-[50px] border-2 mt-2 border-navy ">
                <p class="font-rockinsoda text-navy text-2xl ">Peace Ndoli, Lifesten Health</p> 
            </div>
        </div>
        <div class="flex-shrink-0 h-[500px]">
            <img src="../assets/Group 41.svg"  class="w-full object-cover ">
        </div>
        </div>
        </div>
            
    

        </div>

        <!-- Scroll Buttons -->
        <div class="float-left space-x-2  -mt-24 mr-12">
        <button @click="scrollLeft" 
                class=" top-1/2 right-0 transform -translate-y-1/2 z-10 border-2  rounded-full p-4 bg-white text-navy focus:outline-none hover:bg-navy hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
        </button>
        
        <button @click="scrollRight" 
        class=" top-1/2 left-0 transform -translate-y-1/2 z-10 border-2  rounded-full p-4 bg-white text-navy focus:outline-none hover:bg-navy hover:text-white transition">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        </button>
        </div>

    </div>
    </div>
    

    </template>

    <script>

    export default{
        name:"startupsPage",
        methods: {
            scrollLeft() {
            this.$refs.videoWrapper.scrollBy({ left: -500, behavior: 'smooth' });
            },
            scrollRight() {
            this.$refs.videoWrapper.scrollBy({ left: 500, behavior: 'smooth' });
            }
        },

                data(){
                
                return{
                    startups:[
                    { name: 'Afia Pharma', category: 'Health', year: 2021, logo: require('../assets/2021/afia.svg') },
                    { name: 'Afroduino', category: 'Other', year: 2021, logo: require('../assets/2021/afroduino.svg') },
                    { name: 'Augmented Future', category: 'Education', year: 2021, logo: require('../assets/2021/augumented.svg') },
                    { name: 'Aurrica', category: 'Other', year: 2021, logo: require('../assets/2021/aurrica.svg') },
                    { name: 'Bafana', category: 'Other', year: 2021, logo: require('../assets/2021/bafana.svg') },
                    { name: 'Bag', category: 'Software Development', year: 2021, logo: require('../assets/2021/bag.svg') },
                    { name: 'Bookly Africa', category: 'Other', year: 2021, logo: require('../assets/2021/bookly-africa.svg') },
                    { name: 'Doctor-Ai', category: 'Health', year: 2021, logo: require('../assets/2021/doctor-ai.svg') },
                    { name: 'D-Travela', category: 'Other', year: 2021, logo: require('../assets/2021/d-travela.svg') },
                    { name: 'Enlightenment-Lab', category: 'Software Development', year: 2021, logo: require('../assets/2021/enlightenment-lab.svg') },
                    { name: 'E-shuri', category: 'Education', year: 2021, logo: require('../assets/2021/e-shuri.svg') },
                    { name: 'Ewawe', category: 'Fintech', year: 2021, logo: require('../assets/2021/ewawe.svg') },
                    { name: 'Explore', category: 'Education', year: 2021, logo: require('../assets/2021/explore.svg') },
                    { name: 'Go Virtual', category: 'Software Development', year: 2021, logo: require('../assets/2021/govirtuals.svg') },
                    { name: 'Greenalytic', category: 'Agriculture', year: 2021, logo: require('../assets/2021/greenalytics.svg') },
                    { name: 'Hatch-Plus', category: 'Agriculture', year: 2021, logo: require('../assets/2021/hatch-plus.svg') },
                    { name: 'Haraka Meds', category: 'Health', year: 2021, logo: require('../assets/2021/haraka-meds.svg') },
                    { name: 'Hview-Tech', category: 'Software Development', year: 2021, logo: require('../assets/2021/hview-tech.svg') },
                    { name: 'Insightiv', category: 'Software Development', year: 2021, logo: require('../assets/2021/insightiv.svg') },
                    { name: 'Ironji', category: 'Other', year: 2021, logo: require('../assets/2021/ironji.svg') },
                    { name: 'Ishema', category: 'Health', year: 2021, logo: require('../assets/2021/ishema.svg') },
                    { name: 'Karisimbi', category: 'Health', year: 2021, logo: require('../assets/2021/karisimbi.svg') },
                    { name: 'Kayko', category: 'Software Development', year: 2021, logo: require('../assets/2021/kayko.svg') },
                    { name: 'Keya-Health', category: 'Health', year: 2021, logo: require('../assets/2021/keya-health.svg') },
                    { name: 'Rurarera', category: 'Software Development ', year: 2021, logo: require('../assets/2021/rurarera.svg') },
                    { name: 'RCGF', category: 'Other ', year: 2021, logo: require('../assets/2021/rcgf.svg') },
                    { name: 'Magis', category: 'Other', year: 2021, logo: require('../assets/2021/magis.svg') },
                    { name: 'MySquare Kilometers', category: 'Other ', year: 2021, logo: require('../assets/2021/mysqm.svg') },
                    { name: 'Sangapesh', category: 'Fintech', year: 2021, logo: require('../assets/2021/sangapesh.svg') },
                    { name: 'Shambapro', category: 'Agriculture', year: 2021, logo: require('../assets/2021/shamba-pro.svg') },
                    { name: 'Second Life Storage', category: 'Other', year: 2021, logo: require('../assets/2021/second-life-storage.svg') },
                    { name: 'Shuri Bus', category: 'Education', year: 2021, logo: require('../assets/2021/shuri-bus.svg') },
                    { name: 'The Happynes', category: 'Other', year: 2021, logo: require('../assets/2021/the-happynes.svg') },
                    { name: 'Tori', category: 'Other', year: 2021, logo: require('../assets/2021/tori.svg') },
                    { name: 'Twis', category: 'Education', year: 2021, logo: require('../assets/2021/twis.svg') },
                    { name: 'Vehisec', category: 'Transportation', year: 2021, logo: require('../assets/2021/vehisec.svg') },
                    { name: 'VubaVuba', category: 'Other ', year: 2021, logo: require('../assets/2021/vuba-vuba.svg') },
                    { name: 'Xtra-Tech', category: 'Other', year: 2021, logo: require('../assets/2021/xtra-tech.svg') },

                    // 2022 startups.................
                    { name: 'Bafana', category: 'Other', year: 2022, logo: require('../assets/2022/bafana.svg') },
                    { name: 'Haraka Meds', category: 'Health', year: 2022, logo: require('../assets/2022/haraka-meds.svg') },
                    { name: 'Health Edu', category: 'Health', year: 2022, logo: require('../assets/2022/health-edu.svg') },
                    { name: 'Hiq Africa', category: 'Other', year: 2022, logo: require('../assets/2022/hiq-africa.svg') },
                    { name: 'Huuza Quest ltd', category: 'Other', year: 2022, logo: require('../assets/2022/huza.svg') },
                    { name: 'IT Consortium RWANDA', category: 'Other', year: 2022, logo: require('../assets/2022/it-consortium.svg') },
                    { name: 'Imali', category: 'Other', year: 2022, logo: require('../assets/2022/imali.svg') },
                    { name: 'School Nest', category: 'Education', year: 2022, logo: require('../assets/2022/school-nest.svg') },
                    { name: 'Jo-Care', category: 'Health', year: 2022, logo: require('../assets/2022/jo-care.svg') },
                    { name: 'Karisimbi', category: 'Health', year: 2022, logo: require('../assets/2022/karisimbi.svg') },
                    { name: 'Kayko', category: 'Software Development', year: 2022, logo: require('../assets/2022/kayko.svg') },
                    { name: 'Laina', category: 'Fintech', year: 2022, logo: require('../assets/2022/laina.svg') },
                    { name: 'Larna', category: 'Education', year: 2022, logo: require('../assets/2022/larna.svg') },
                    { name: 'Lifesten', category: 'Health', year: 2022, logo: require('../assets/2022/lifesten.svg') },
                    { name: 'Magis', category: 'Other', year: 2022, logo: require('../assets/2022/magis-let.svg') },
                    { name: 'Mulika Farms', category: 'Agriculture', year: 2022, logo: require('../assets/2022/mukika.svg') },
                    { name: 'Mutware Educate', category: 'Education', year: 2022, logo: require('../assets/2022/mutware-educate.svg') },
                    { name: 'MySquare Kilometers', category: 'Other ', year: 2022, logo: require('../assets/2022/mysqm.svg') },
                    { name: 'Oazis Health', category: 'Health', year: 2022, logo: require('../assets/2022/oazis-health.svg') },
                    { name: 'Paying Tone', category: 'Fintech', year: 2022, logo: require('../assets/2022/paying-tone.svg') },
                    { name: 'School Nest', category: 'Education', year: 2022, logo: require('../assets/2022/school-nest.svg') },
                    { name: 'Shambapro', category: 'Agriculture', year: 2022, logo: require('../assets/2022/shambapro.svg') },
                    { name: 'Smart Ikigega', category: 'Agriculture', year: 2022, logo: require('../assets/2022/smart-ikigega.svg') },
                    { name: 'Umurava', category: 'Software Development', year: 2022, logo: require('../assets/2022/umurava.svg') },
                    { name: 'Uplus Mutual', category: 'Fintech', year: 2022, logo: require('../assets/2022/uplus-mutual.svg') },
                    { name: 'UrId Technologies', category: 'Fintech', year: 2022, logo: require('../assets/2022/urid-technologies.svg') },
                    { name: 'Viebeg', category: 'Fintech', year: 2022, logo: require('../assets/2022/viebeg.svg') },
                    { name: 'Vitaway', category: 'Health', year: 2022, logo: require('../assets/2022/vitaway.svg') },

                    //startups 2023....................
                    { name: 'Abasare', category: 'Other', year: 2023, logo: require('../assets/2023/abasare.svg') },
                    { name: 'Agri Nest', category: 'Agriculture', year: 2023, logo: require('../assets/2023/agri-nest.svg') },
                    { name: 'Agri-Research Unguka', category: 'Agriculture', year: 2023, logo: require('../assets/2023/agriresearch-unguka.svg') },
                    { name: 'Agrithink Tank', category: 'Agriculture', year: 2023, logo: require('../assets/2023/agrithink-tank.svg') },
                    { name: 'Beyi Group', category: 'Other', year: 2023, logo: require('../assets/2023/beyi-group.svg') },
                    { name: 'Bizcotap', category: 'Other', year: 2023, logo: require('../assets/2023/bizcotap.svg') },
                    { name: 'Bookly Africa', category: 'Other', year: 2023, logo: require('../assets/2023/bookly-africa.svg') },
                    { name: 'Bountiful Farmers', category: 'Agriculture', year: 2023, logo: require('../assets/2023/bountiful-farmers.svg') },
                    { name: 'Bunga Bunga', category: 'Agriculture', year: 2023, logo: require('../assets/2023/bunga-bunga.svg') },
                    { name: 'Care Connect', category: 'Health', year: 2023, logo: require('../assets/2023/care-connect.svg') },
                    { name: 'Companion App', category: 'Other', year: 2023, logo: require('../assets/2023/companionapp.svg') },
                    { name: 'Digital Health Line', category: 'Health', year: 2023, logo: require('../assets/2023/digital-health-line.svg') },
                    { name: 'Dope', category: 'Health', year: 2023, logo: require('../assets/2023/dope.svg') },
                    { name: 'Drop Wave', category: 'Other', year: 2023, logo: require('../assets/2023/dropwave.svg') },
                    { name: 'Eazi Plug', category: 'Other', year: 2023, logo: require('../assets/2023/eazi-plug.svg') },
                    { name: 'Groupeya', category: 'other', year: 2023, logo: require('../assets/2023/groupeya.svg') },
                    { name: 'Hinia', category: 'Other', year: 2023, logo: require('../assets/2023/hinia.svg') },
                    { name: 'Hova AI', category: 'Other', year: 2023, logo: require('../assets/2023/hova.svg') },
                    { name: 'Ihuza', category: 'Health', year: 2023, logo: require('../assets/2023/ihuza.svg') },
                    { name: 'Innova Hyper', category: 'Other', year: 2023, logo: require('../assets/2023/innovahyper.svg') },
                    { name: 'Iraady', category: 'Other', year: 2023, logo: require('../assets/2023/iraady.svg') },
                    { name: 'Irebe Biotech', category: 'Health', year: 2023, logo: require('../assets/2023/irebe-biotech.svg') },
                    { name: 'Jenga Mo', category: 'Other', year: 2023, logo: require('../assets/2023/jenga-mo.svg') },
                    { name: 'Kaaz App', category: 'Other', year: 2023, logo: require('../assets/2023/kaaz-app.svg') },
                    { name: 'Kivu Health', category: 'Health', year: 2023, logo: require('../assets/2023/kivu-health.svg') },
                    { name: 'Kuza', category: 'Other', year: 2023, logo: require('../assets/2023/kuza.svg') },
                    { name: 'Lin Idea', category: 'Fintech', year: 2023, logo: require('../assets/2023/linidea.svg') },
                    { name: 'Loopa', category: 'Agriculture', year: 2023, logo: require('../assets/2023/loopa.svg') },
                    { name: 'Medixr', category: 'Education', year: 2023, logo: require('../assets/2023/medixr.svg') },
                    { name: 'Mizero Care', category: 'Health', year: 2023, logo: require('../assets/2023/mizero-care.svg') },
                    { name: 'My Kibo', category: 'Other', year: 2023, logo: require('../assets/2023/my-kibo.svg') },
                    { name: 'Opina', category: 'Agriculture', year: 2023, logo: require('../assets/2023/opina.svg') },
                    { name: 'Payws ltd', category: 'Other', year: 2023, logo: require('../assets/2023/payws-ltd.svg') },
                    { name: 'Smart Class', category: 'Education', year: 2023, logo: require('../assets/2023/smart-class.svg') },
                    { name: 'Splendid More', category: 'Other', year: 2023, logo: require('../assets/2023/splendid-more.svg') },
                    { name: 'Technika', category: 'Education', year: 2023, logo: require('../assets/2023/technika.svg') },
                    { name: 'Tekafrica ltd', category: 'Other', year: 2023, logo: require('../assets/2023/teka.svg') },
                    { name: 'Tubimenye', category: 'Education', year: 2023, logo: require('../assets/2023/tubimenye-ltd.svg') },
                    { name: 'Tuzaride', category: 'Other', year: 2023, logo: require('../assets/2023/tuzaride.svg') },
                    { name: 'Urungano', category: 'Health', year: 2023, logo: require('../assets/2023/urungano.svg') },
                    { name: 'WAD Holdings', category: 'Other', year: 2023, logo: require('../assets/2023/wad-holdings.svg') },
                    { name: 'Wad Pharma', category: 'Health', year: 2023, logo: require('../assets/2023/wad-pharma.svg') },
                    { name: 'Yagibaze', category: 'Education', year: 2023, logo: require('../assets/2023/yagibaze.svg') },
                    { name: 'Yarn', category: 'Education', year: 2023, logo: require('../assets/2023/yarn.svg') },

                    ],
                    selectedYear:'2023',
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