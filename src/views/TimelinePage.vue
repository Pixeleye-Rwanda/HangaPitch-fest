    <template>
      <div class="relative oveflow-hidden">
        <div class="w-full h-auto absolute space-y-40"
          style="background: linear-gradient(319.89deg, #030C37 5.13%, #22348A 99.13%);">
          <Navbar class="absolute top-0 left-0 w-full" />

          <div class="flex items-center justify-center ">
            <h1 class="text-5xl  font-rockinsoda absolute  text-white">ROAD TO HANGA 2024</h1>
          </div>

          <div class="space-y-4 relative flex items-center justify-center font-gramatika">
            <div class="w-10/12">
              <div class="flex space-x-10 w-full">
                <div class="space-y-4 w-1/4">
                  <p class="text-white text-gramatika font-medium">03 SEPT - 30 SEPT</p>

                  <div class="flex space-x-4">
                    <img src="../assets/circle.svg" alt="">
                    <img src="../assets/rectangle.svg" alt="">
                  </div>
                  <div class="bg-greenlime flex items-center py-4 rounded-md w-100px">
                    <img src="../assets/srh-rocket.svg" alt="">
                    <p class="text-navy text-md font-medium font-gramatika ">Call forApplication &Hanga on the road</p>
                  </div>

                </div>

                <div class="space-y-4 w-1/4">
                  <p class="text-white text-gramatika font-medium">06 SEPT - 21 SEPT</p>

                  <div class="flex space-x-4">
                    <img src="../assets/circle.svg" alt="">
                    <img src="../assets/rectangle.svg" alt="">
                  </div>
                  <div class="bg-greenlime flex items-center py-4 rounded-md">
                    <img src="../assets/srh-rocket.svg" alt="">
                    <p class="text-navy text-md font-medium font-gramatika ">Judge Selection & Info Session</p>
                  </div>

                </div>
                <div class="space-y-4 w-1/4">
                  <p class="text-white text-gramatika font-medium">01 OCT - 08 OCT</p>

                  <div class="flex space-x-4">
                    <img src="../assets/circle.svg" alt="">
                    <img src="../assets/rectangle.svg" alt="">
                  </div>
                  <div class="bg-greenlime flex items-center py-4 rounded-md">
                    <img src="../assets/srh-rocket.svg" alt="">
                    <p class="text-navy text-md font-medium font-gramatika "> Top 45 Evaluation, Selection & Pitching
                      session.</p>
                  </div>

                </div>
                <div class="space-y-4 w-1/4">
                  <p class="text-white text-gramatika font-medium">11 OCT - 15 OCT</p>

                  <div class="flex space-x-4">
                    <img src="../assets/circle.svg" alt="">
                    <img src="../assets/rectangle.svg" alt="">
                  </div>
                  <div class="bg-greenlime flex items-center py-4 rounded-md">
                    <img src="../assets/srh-rocket.svg" alt="">
                    <p class="text-navy text-md font-medium font-gramatika "> Top 25 pitching. Top 7 selection</p>
                  </div>

                </div>
                <!-- <div class="space-y-4 w-1/6">
                  <p class="text-white text-gramatika font-medium">01 OCT - 08 OCT</p>

                  <div class="flex space-x-4">
                    <img src="../assets/circle.svg" alt="">
                    <img src="../assets/rectangle.svg" alt="">
                  </div>
                  <div class="bg-greenlime flex items-center py-4 rounded-md">
                    <img src="../assets/srh-rocket.svg" alt="">
                    <p class="text-navy text-md font-medium font-gramatika "> Top 45 Evaluation, Selection & Pitching
                      session.</p>
                  </div>

                </div>
                <div class="space-y-4 w-1/6">
                  <p class="text-white text-gramatika font-medium">11 OCT - 15 OCT</p>

                  <div class="flex space-x-4">
                    <img src="../assets/circle.svg" alt="">
                    <img src="../assets/rectangle.svg" alt="">
                  </div>
                  <div class="bg-greenlime flex items-center py-4 rounded-md">
                    <img src="../assets/srh-rocket.svg" alt="">
                    <p class="text-navy text-md font-medium font-gramatika "> Top 25 pitching. Top 7 selection</p>
                  </div>

                </div> -->
              </div>
              <!-- <div class="mt-8 flex justify-end ">
                <img src="../assets/90-degree.svg" class="h-56">
              </div> -->
              <div class="flex space-x-10 overflow-hidden justify-end mt-24">
                 <div class="space-y-4">
                  <p class="text-white text-gramatika font-medium">01 NOV - 04 NOV</p>

                  <div class="flex space-x-4">
                    <img src="../assets/circle.svg" alt="">
                    <img src="../assets/rectangle.svg" alt="">
                  </div>
                  <div class="bg-greenlime flex items-center  py-4 rounded-md">
                    <img src="../assets/srh-rocket.svg" alt="">
                    <p class="text-navy text-md font-medium font-gramatika ">Top 5 Selection</p>
                  </div>

                </div>
                <div class="space-y-4">
                  <p class="text-white text-gramatika font-medium">21 OCT - 31 OCT</p>

                  <div class="flex space-x-4">
                    <img src="../assets/circle.svg" alt="">
                    <img src="../assets/rectangle.svg" alt="">
                  </div>
                  <div class="bg-greenlime flex items-center py-4 rounded-md">
                    <img src="../assets/srh-rocket.svg" alt="">
                    <p class="text-navy text-md font-medium font-gramatika ">Bootcamp</p>
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