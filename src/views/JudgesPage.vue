<template>
<!-- first section -->
<div class="flex mt-20  space-x-80 ml-12">
    <div class="space-y-4 mt-12">
        <p class="text-6xl font-rockinsoda text-navy">FUELING</p>
        <p class="text-6xl font-rockinsoda text-navy">INNOVATION</p>
    </div>
    <div class=" text-justify space-y-8 w-[600px] ">
         <p class="text-navy font-gramatika text-md text-lg mt-12">Hanga Pitchfest brings the most influential experts together who help in selecting the best innovative ventures. These seasoned professionals provide invaluable insights and guidance,
             ensuring that the most promising startups receive the recognition and support they deserve. </p>

        
        
    </div>
  </div>

  <!-- infinity scroll section -->
  <div>
    <div v-for="(year, index) in years" :key="index" class="mb-16">
      <div class="ml-12 mt-32 flex space-x-2">
        <p class="font-gramatika text-lg">Judges</p>
        <hr class="w-[20px] border border-black mt-4">
        <p class="font-gramatika text-lg">{{ year }}</p>
      </div>
      
      <div class="relative overflow-x-hidden mt-20" style="height: 582px;">
        <div class="flex animate-scroll absolute" :style="{ width: `${judges[year].length * 700}px` }">
          <template v-for="(_, loopIndex) in 2">
            <div v-for="(judge, judgeIndex) in judges[year]" :key="`${loopIndex}-${judgeIndex}`" class="w-[400px] flex-shrink-0">
              <div class="relative h-[582px] w-[400px]">
                <img :src="judge.image" class="w-full h-full object-cover">
                <div class="absolute inset-0" style="background: linear-gradient(to bottom, rgba(1, 9, 48, 0.05) 0%, rgba(1, 9, 48, 0.2) 50%, rgba(1, 9, 48, 0.8) 100%);"></div>
                <div class="text-4xl font-rockinsoda text-white absolute inset-0 flex items-center justify-center">
                  <div class="space-y-4">
                    <div class="mt-80">
                      <p class="text-center">{{ judge.name }}</p>
                    </div>
                    <div>
                      <p class="text-white font-gramatika text-xl text-center">{{ judge.title }}</p>
                      <p class="text-white font-gramatika text-xl text-center">{{ judge.organization }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>

  

  <!-- next section -->
   

   
  
  

</template>


<script>
export default{
    name:'JudgesPage',

    data() {
    return {
      years: ['2023', '2022', '2021'],
      judges: {
        '2023': [
          { name: 'Alice Nkulikiyinka', title: 'Country director', organization: 'BPN Rwanda', image: require('@/assets/alice.jpg') },
          { name: 'Conard Tucker', title: 'Director', organization: 'CMU-Africa', image: require('@/assets/conard.jpg') },
          { name: 'ELENI GABRE-MADHIN', title: 'Chief Innovation Officer', organization: 'UNDP Regional Bureau for Africa', image: require('@/assets/eleni.jpg') },
          { name: 'NICOLE DAVIS', title: 'Partner', organization: 'World Bank Ltd', image: require('@/assets/nicole.jpg') },
        ],
        '2022': [
          { name: 'OBINNA UKUANI', title: 'Chief Digital Officer', organization: 'Bank of Kigali Plc', image: require('@/assets/obina.jpg' )},
          { name: 'HORTENSE MUDENGE', title: 'Chief Operations Officer', organization: 'Rwanda Finance Ltd', image: require('@/assets/hortense.jpg') },
          { name: 'ERIC KACOU', title: 'CEO & Co-founder', organization: 'ESPartners', image: require('@/assets/eric.jpg') },
          { name: 'Alice Nkulikiyinka', title: 'Country director', organization: 'BPN Rwanda', image: require('@/assets/alice.jpg') },
        ],
        '2021': [
          { name: 'CLARISSE IRIBAGIZA', title: 'Chief Executive Officer', organization: 'Hehe', image: require('@/assets/clarisse.jpg') },
          { name: 'PRO SENAIT FISSEHA', title: 'Director of Global Programs', organization: 'The Susan Thompson Buffett Foundation', image: require('@/assets/sena.jpg') },
          { name: 'RON FISHER', title: 'Director, Strategic Product Growth', organization: 'Mindbody', image: require('@/assets/Ron.jpg') },
          { name: 'ERIC KACOU', title: 'CEO & Co-founder', organization: 'ESPartners', image: require('@/assets/eric.jpg' )},
        ]
      }
    };
  }
};
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 25s linear infinite;
}
</style>

