    <template>
      <div class="relative oveflow-hidden">
        <div class="w-full h-auto absolute space-y-40"
          style="background: linear-gradient(319.89deg, #030C37 5.13%, #22348A 99.13%);">
          <Navbar class="absolute top-0 left-0 w-full" />
        <div class="space-y-16">
          <div class="flex items-center justify-center ">
            <h1 class="text-5xl  font-rockinsoda absolute  text-white">ROAD TO HANGA 2024</h1>
          </div>

          <div class="space-y-8 p-4 font-gramatika p-10 text-white">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div class="space-y-4">
                <p class="font-medium">03 SEPT - 30 SEPT</p>
                <div class="flex space-x-4">
                  <img src="../assets/circle.svg" alt="" class="w-6 h-6">
                  <img src="../assets/rectangle.svg" alt="" class="w-6 h-6">
                </div>
                <div class="bg-greenlime flex items-center p-4 rounded-md">
                  <img src="../assets/srh-rocket.svg" alt="" class="w-6 h-6 mr-2">
                  <p class="text-navy text-sm font-medium">Call for Application & Hanga on the road</p>
                </div>
              </div>
          
              <div class="space-y-4">
                <p class="font-medium">06 SEPT - 21 SEPT</p>
                <div class="flex space-x-4">
                  <img src="../assets/circle.svg" alt="" class="w-6 h-6">
                  <img src="../assets/rectangle.svg" alt="" class="w-6 h-6">
                </div>
                <div class="bg-greenlime flex items-center p-4 rounded-md">
                  <img src="../assets/srh-rocket.svg" alt="" class="w-6 h-6 mr-2">
                  <p class="text-navy text-sm font-medium">Judge Selection & Info Session</p>
                </div>
              </div>
          
              <div class="space-y-4">
                <p class="font-medium">01 OCT - 08 OCT</p>
                <div class="flex space-x-4">
                  <img src="../assets/circle.svg" alt="" class="w-6 h-6">
                  <img src="../assets/rectangle.svg" alt="" class="w-6 h-6">
                </div>
                <div class="bg-greenlime flex items-center p-4 rounded-md">
                  <img src="../assets/srh-rocket.svg" alt="" class="w-6 h-6 mr-2">
                  <p class="text-navy text-sm font-medium">Top 45 Evaluation, Selection & Pitching session.</p>
                </div>
              </div>
          
              <div class="space-y-4">
                <p class="font-medium">11 OCT - 15 OCT</p>
                <div class="flex space-x-4">
                  <img src="../assets/circle.svg" alt="" class="w-6 h-6">
                  <img src="../assets/rectangle.svg" alt="" class="w-6 h-6">
                </div>
                <div class="bg-greenlime flex items-center p-4 rounded-md">
                  <img src="../assets/srh-rocket.svg" alt="" class="w-6 h-6 mr-2">
                  <p class="text-navy text-sm font-medium">Top 25 pitching. Top 7 selection</p>
                </div>
              </div>
            </div>
          
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
              <div class="lg:col-start-3 space-y-4">
                <p class="font-medium">21 OCT - 31 OCT</p>
                <div class="flex space-x-4">
                  <img src="../assets/circle.svg" alt="" class="w-6 h-6">
                  <img src="../assets/rectangle.svg" alt="" class="w-6 h-6">
                </div>
                <div class="bg-greenlime flex items-center p-4 rounded-md">
                  <img src="../assets/srh-rocket.svg" alt="" class="w-6 h-6 mr-2">
                  <p class="text-navy text-sm font-medium">Bootcamp</p>
                </div>
              </div>
          
              <div class="space-y-4">
                <p class="font-medium">01 NOV - 04 NOV</p>
                <div class="flex space-x-4">
                  <img src="../assets/circle.svg" alt="" class="w-6 h-6">
                  <img src="../assets/rectangle.svg" alt="" class="w-6 h-6">
                </div>
                <div class="bg-greenlime flex items-center p-4 rounded-md">
                  <img src="../assets/srh-rocket.svg" alt="" class="w-6 h-6 mr-2">
                  <p class="text-navy text-sm font-medium">Top 5 Selection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div class="">
            <NewsLetter />
            <FooterPage />
          </div>
        </div>
      </div>
    </template>

<script>
import Navbar from '@/components/Navbar.vue';
import FooterPage from '@/components/footerPage.vue';
import NewsLetter from '@/components/NewsLetter.vue';
export default {
  name: "TimelinePage",
  components: {
    Navbar,
    FooterPage,
    NewsLetter
  },


};


</script>

<style></style>