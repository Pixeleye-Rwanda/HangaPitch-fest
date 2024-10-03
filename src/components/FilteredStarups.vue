<template>

    <div   class=" sm:ml-2 lg:ml-12">
        <div class=" font-rockinsoda text-navy text-5xl mt-32 text-center lg:text-left lg:text-6xl">
        <p>FEATURED STARTUPS</p>
        </div>

        <div  class="flex flex-col mt-12  mr-12 space-y-2 lg:flex-row lg:justify-between">
        <!-- Category Buttons -->
        <div  id="startupDiv" class="flex flex-wrap justify-center gap-4  sm:gap-4">
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
        
         <div class="flex justify-center lg:ml-auto lg:justify-end">
        <select v-model="selectedYear" class=" mt-4 lg:mt-0 w-30 max-w-xs bg-white ring-1 ring-lightTangerine outline-none p-2 px-4">
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
        </select>
        </div>
        </div>
        

        <div   class="grid grid-cols-2 mr-4 ml-4 lg:ml-0 lg:mr-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  mt-6 ">
        <ul v-for="startup in filteredStartups" :key="startup.name" class=" border border-lightTangerine  p-4  h-[28vh]  ">
            <div class="flex items-center justify-center">
            <li>
                <router-link
                :to="{
                  name: 'DescPage',
                  params: { name: encodeURIComponent(startup.name) }, 
                  query: { category: selectedCategory, year: selectedYear } 
                }"
              >            
            <img :src="startup.logo" alt="Logo" class="w-full h-12 mt-6  mb-4" />
            <h3 class="text-lg text-center font-gramatika text-navy text-lg mt-4 " >{{ startup.name }}</h3>
        </router-link>
        </li>
        </div>

        </ul>

        </div>
        
        
    </div>

</template>

<script>
export default{

    name:'FilteredStarups',
    data(){
                
                return{
                    
                    startups:[
                     // 2021 startups.................   
                    { name: 'Afia Pharma', category: 'Health', year: 2021, logo: require('../assets/2021/afia.svg') },
                    { name: 'Afroduino', category: 'Other', year: 2021, logo: require('../assets/2021/afroduino.svg') },
                    { name: 'Augmented Future', category: 'Education', year: 2021, logo: require('../assets/2021/augumented.svg') },
                    { name: 'Aurrica Tech', category: 'Other', year: 2021, logo: require('../assets/2021/aurrica.svg') },
                    { name: 'Bafana', category: 'Other', year: 2021, logo: require('../assets/2021/bafana.svg') },
                    { name: 'Bag', category: 'Software Development', year: 2021, logo: require('../assets/2021/bag.svg') },
                    { name: 'Bookly Africa', category: 'Other', year: 2021, logo: require('../assets/2021/bookly-africa.svg') },
                    { name: 'Doctor-Ai', category: 'Health', year: 2021, logo: require('../assets/2021/doctor-ai.svg') },
                    { name: 'D-Travela Ltd', category: 'Other', year: 2021, logo: require('../assets/2021/d-travela.svg') },
                    { name: 'Enlightenment Labs', category: 'Software Development', year: 2021, logo: require('../assets/2021/enlightenment-lab.svg') },
                    { name: 'E-shuri', category: 'Education', year: 2021, logo: require('../assets/2021/e-shuri.svg') },
                    { name: 'Ewawe', category: 'Fintech', year: 2021, logo: require('../assets/2021/ewawe.svg') },
                    { name: 'Explore', category: 'Education', year: 2021, logo: require('../assets/2021/explore.svg') },
                    { name: 'Go Virtual', category: 'Software Development', year: 2021, logo: require('../assets/2021/govirtuals.svg') },
                    { name: 'Greenalytic Ltd', category: 'Agriculture', year: 2021, logo: require('../assets/2021/greenalytics.svg') },
                    { name: 'Habayeho', category: 'History', year: 2021 },
                    { name: 'Hatch-Plus', category: 'Agriculture', year: 2021, logo: require('../assets/2021/hatch-plus.svg') },
                    { name: 'Haraka Meds Ltd', category: 'Health', year: 2021, logo: require('../assets/2021/haraka-meds.svg') },
                    { name: 'HealthEdu', category: 'Health', year: 2021, logo: require('../assets/2021/health-edu.svg') },
                    { name: 'Hview-Tech', category: 'Software Development', year: 2021, logo: require('../assets/2021/hview-tech.svg') },
                    { name: 'Insightiv', category: 'Software Development', year: 2021, logo: require('../assets/2021/insightiv.svg') },
                    { name: 'Ironji', category: 'Other', year: 2021, logo: require('../assets/2021/ironji.svg') },
                    { name: 'Ishema', category: 'Health', year: 2021, logo: require('../assets/2021/ishema.svg') },
                    //{ name: 'Ivuliro Tech', category: 'Health', year: 2021 },
                    { name: 'Karisimbi', category: 'Health', year: 2021, logo: require('../assets/2021/karisimbi.svg') },
                    { name: 'Kayko', category: 'Software Development', year: 2021, logo: require('../assets/2021/kayko.svg') },
                    { name: 'Keya-Health', category: 'Health', year: 2021, logo: require('../assets/2021/keya-health.svg') },
                    { name: 'Rurarera', category: 'Software Development ', year: 2021, logo: require('../assets/2021/rurarera.svg') },
                    { name: 'RCGF', category: 'Other ', year: 2021, logo: require('../assets/2021/rcgf.svg') },
                    { name: 'Magis Let', category: 'Other', year: 2021, logo: require('../assets/2021/magis.svg') },
                    { name: 'MySquare Kilometers', category: 'Other ', year: 2021, logo: require('../assets/2021/mysqm.svg') },
                    { name: 'Sangapesh', category: 'Fintech', year: 2021, logo: require('../assets/2021/sangapesh.svg') },
                    { name: 'Shambapro', category: 'Agriculture', year: 2021, logo: require('../assets/2021/shamba-pro.svg') },
                    { name: 'Second Life Storage', category: 'Other', year: 2021, logo: require('../assets/2021/second-life-storage.svg') },
                    { name: 'Shuri Bus', category: 'Education', year: 2021, logo: require('../assets/2021/shuri-bus.svg') },
                    { name: 'The Happynes', category: 'Other', year: 2021, logo: require('../assets/2021/the-happynes.svg') },
                    { name: 'Tori', category: 'Other', year: 2021, logo: require('../assets/2021/tori.svg') },
                    { name: 'Twis', category: 'Education', year: 2021, logo: require('../assets/2021/twis.svg') },
                    { name: 'Vehisec', category: 'Transportation', year: 2021, logo: require('../assets/2021/vehisec.svg') },
                    { name: 'VubaVuba Afica', category: 'Other ', year: 2021, logo: require('../assets/2021/vuba-vuba.svg') },
                    //{ name: 'Xtra-Tech', category: 'Other', year: 2021, logo: require('../assets/2021/xtra-tech.svg') },

                    // 2022 startups.................
                    { name: 'Bafana', category: 'Other', year: 2022, logo: require('../assets/2022/bafana.svg') },
                    { name: 'Haraka Meds', category: 'Health', year: 2022, logo: require('../assets/2022/haraka-meds.svg') },
                    { name: 'Health Edu', category: 'Health', year: 2022, logo: require('../assets/2022/health-edu.svg') },
                    { name: 'Hiq Africa', category: 'Other', year: 2022, logo: require('../assets/2022/hiq-africa.svg') },
                    { name: 'Huuza Quest ltd', category: 'Other', year: 2022, logo: require('../assets/2022/huza.svg') },
                    { name: 'IT Consortium RWANDA', category: 'Other', year: 2022, logo: require('../assets/2022/it-consortium.svg') },
                    { name: 'Imali', category: 'Other', year: 2022, logo: require('../assets/2022/imali.svg') },
                    { name: 'Jo-Care', category: 'Health', year: 2022, logo: require('../assets/2022/jo-care.svg') },
                    { name: 'Karisimbi', category: 'Health', year: 2022, logo: require('../assets/2022/karisimbi.svg') },
                    { name: 'Kayko', category: 'Software Development', year: 2022, logo: require('../assets/2022/kayko.svg') },
                    { name: 'Laina', category: 'Fintech', year: 2022, logo: require('../assets/2022/laina.svg') },
                    { name: 'Lifesten', category: 'Health', year: 2022, logo: require('../assets/2022/lifesten.svg') },
                    { name: 'Magis', category: 'Other', year: 2022, logo: require('../assets/2022/magis-let.svg') },
                    { name: 'Mulika Farms', category: 'Agriculture', year: 2022, logo: require('../assets/2022/mukika.svg') },
                    { name: 'Mutware Educate', category: 'Education', year: 2022, logo: require('../assets/2022/mutware-educate.svg') },
                    { name: 'MySquaremeters', category: 'Other ', year: 2022, logo: require('../assets/2022/mysqm.svg') },
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
                    { name: 'Agrinet Rwanda Ltd', category: 'Agriculture', year: 2023, logo: require('../assets/2023/agri-nest.svg') },
                    //{ name: 'Agri-Research Unguka', category: 'Agriculture', year: 2023, logo: require('../assets/2023/agriresearch-unguka.svg') },
                    { name: 'Agrithink Tank', category: 'Agriculture', year: 2023, logo: require('../assets/2023/agrithink-tank.svg') },
                    //{ name: 'Beyi Group', category: 'Other', year: 2023, logo: require('../assets/2023/beyi-group.svg') },
                    //{ name: 'Bizcotap', category: 'Other', year: 2023, logo: require('../assets/2023/bizcotap.svg') },
                    //{ name: 'Bookly Africa', category: 'Other', year: 2023, logo: require('../assets/2023/bookly-africa.svg') },
                    { name: 'Bountiful Farmers', category: 'Agriculture', year: 2023, logo: require('../assets/2023/bountiful-farmers.svg') },
                    { name: 'Bunga Bunga', category: 'Agriculture', year: 2023, logo: require('../assets/2023/bunga-bunga.svg') },
                    { name: 'Care Connect', category: 'Health', year: 2023, logo: require('../assets/2023/care-connect.svg') },
                    //{ name: 'Companion App', category: 'Other', year: 2023, logo: require('../assets/2023/companionapp.svg') },
                    { name: 'Digital Health Line', category: 'Health', year: 2023, logo: require('../assets/2023/digital-health-line.svg') },
                    { name: 'Dope', category: 'Health', year: 2023, logo: require('../assets/2023/dope.svg') },
                    { name: 'Dropawave', category: 'Other', year: 2023, logo: require('../assets/2023/dropwave.svg') },
                    { name: 'Eazi Plug', category: 'Other', year: 2023, logo: require('../assets/2023/eazi-plug.svg') },
                    { name: 'E-Mentor', category: 'Education', year: 2023 },
                    { name: 'Farmoja', category: 'Agriculture', year: 2023 , logo: require('../assets/2023/farmoja.svg') },
                    { name: 'Green Transport', category: 'Transport', year: 2023 },
                    { name: 'Groupeya', category: 'Software Development', year: 2023, logo: require('../assets/2023/groupeya.svg') },
                    { name: 'Hinia', category: 'Other', year: 2023, logo: require('../assets/2023/hinia.svg') },
                    { name: 'Hova AI', category: 'Other', year: 2023, logo: require('../assets/2023/hova.svg') },
                    { name: 'Huza Farmers', category: 'Agriculture', year: 2023 },
                    { name: 'Ihuza', category: 'Health', year: 2023, logo: require('../assets/2023/ihuza.svg') },
                    { name: 'Innova Hyper', category: 'Other', year: 2023, logo: require('../assets/2023/innovahyper.svg') },
                    { name: 'Iraady', category: 'Other', year: 2023, logo: require('../assets/2023/iraady.svg') },
                    { name: 'Irebe Biotech', category: 'Education', year: 2023, logo: require('../assets/2023/irebe-biotech.svg') },
                    { name: 'Jenga Mo', category: 'Other', year: 2023, logo: require('../assets/2023/jenga-mo.svg') },
                    { name: 'Kaaz App', category: 'Other', year: 2023, logo: require('../assets/2023/kaaz-app.svg') },
                    { name: 'Kivu Health', category: 'Health', year: 2023, logo: require('../assets/2023/kivu-health.svg') },
                    { name: 'Kuza Africa', category: 'Other', year: 2023, logo: require('../assets/2023/kuza.svg') },
                    { name: 'Lin Idea', category: 'Fintech', year: 2023, logo: require('../assets/2023/linidea.svg') },
                    { name: 'Loopa', category: 'Agriculture', year: 2023, logo: require('../assets/2023/loopa.svg') },
                    { name: 'Medixr', category: 'Health', year: 2023, logo: require('../assets/2023/medixr.svg') },
                    { name: 'Mizero Care', category: 'Health', year: 2023, logo: require('../assets/2023/mizero-care.svg') },
                    { name: 'My Kibo', category: 'Agriculture', year: 2023, logo: require('../assets/2023/my-kibo.svg') },
                    { name: 'Opina', category: 'Agriculture', year: 2023, logo: require('../assets/2023/opina.svg') },
                    { name: 'Payws ltd', category: 'Other', year: 2023, logo: require('../assets/2023/payws-ltd.svg') },
                    { name: 'Quarks Group', category: 'Fintech', year: 2023 },
                    { name: 'Smart Class', category: 'Education', year: 2023, logo: require('../assets/2023/smart-class.svg') },
                    { name: 'Smart Ikigega', category: 'Agriculture', year: 2023, logo: require('../assets/2023/smart-ikigega.svg') },
                    { name: 'Splendid More', category: 'Other', year: 2023, logo: require('../assets/2023/splendid-more.svg') },
                    { name: 'Technika', category: 'Education', year: 2023, logo: require('../assets/2023/technika.svg') },
                    { name: 'Tekafrica ltd', category: 'Other', year: 2023, logo: require('../assets/2023/teka.svg') },
                    { name: 'Tubimenye', category: 'Health', year: 2023, logo: require('../assets/2023/tubimenye-ltd.svg') },
                    { name: 'Tuzaride', category: 'Other', year: 2023, logo: require('../assets/2023/tuzaride.svg') },
                    { name: 'Umurava', category: 'Software Development', year: 2023, logo: require('../assets/2022/umurava.svg') },
                    { name: 'Urungano', category: 'Health', year: 2023, logo: require('../assets/2023/urungano.svg') },
                    { name: 'Vitaway E-clinic', category: 'Health', year: 2023 , logo: require('../assets/2023/vitaway.svg')},
                    { name: 'Wad Pharma', category: 'Health', year: 2023, logo: require('../assets/2023/wad-pharma.svg') },
                    { name: 'Yagibaze', category: 'Education', year: 2023, logo: require('../assets/2023/yagibaze.svg') },
                    { name: 'Yarn', category: 'Education', year: 2023, logo: require('../assets/2023/yarn.svg') },

                    ],
                    selectedYear:'2023',
                    selectedCategory:''
                };
                
                },

                mounted() {
    if (this.$route.query.category) {
      this.selectedCategory = this.$route.query.category;
    }
    if (this.$route.query.year) {
      this.selectedYear = this.$route.query.year;
    }
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
}
</script>