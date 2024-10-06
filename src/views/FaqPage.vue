<template>
    <div class="min-h-screen">
      <div class="relative h-screen min-h-[500px] max-h-[670px] sm:max-h-[800px] lg:max-h-[950px] xl:max-h-[1000px]">
        <div class="absolute inset-0 bg-black opacity-30"></div>
        <img src="../assets/faqbg.jpg" alt="Background" class="h-full w-full object-cover" />
        
        <NavInit class="absolute top-0 left-0 w-full" />
  
        <div class="font-rockinsoda absolute text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl top-2/4 left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 text-center sm:text-left" ref="text">
          <p>FREQUENTLY ASKED</p>
          <p>QUESTIONS?</p>
        </div>
      </div>
  
      <!-- Middle section -->
      <div class="w-full space-y-12 mt-20 md:mt-10">
        <!-- First row -->
        <div class="flex flex-col sm:flex-row justify-between p-5 sm:p-10 space-y-12 sm:space-y-0 sm:space-x-12">
          <div class="space-y-6">
            <p class="font-gramatika text-navy text-2xl font-medium">What is SRH?</p>
            <p class="font-gramatika text-gray-500">An initiative aimed at educating and empowering communities on sexual and reproductive health matters.</p>
            <hr class="border border-t-2 border-gray-200 w-auto" />
          </div>
  
          <div class="space-y-6">
            <p class="font-gramatika text-navy text-2xl font-medium">What stage of growth does my program need to be to be eligible for the program?</p>
            <p class="font-gramatika text-gray-500">Early stage start-ups that have not raised any venture capital (except angel investors, family, and friends). However, start-ups that may have received grant funding from other incubator programs or hackathons are eligible.</p>
            <hr class="border border-t-2 border-gray-200 w-auto" />
          </div>
  
          <div class="space-y-6">
            <p class="font-gramatika text-navy text-2xl font-medium">Which SRH areas do I need to be innovating in to be eligible for the program?</p>
            <p class="font-gramatika text-gray-500">The program aims to support innovative and tech-enabled solutions for SRH pertinent challenges such as but not limited to maternal mortality, unsafe abortion, gender-based violence, unmet need for contraception, and limited access to youth-friendly SRH services.</p>
            <hr class="border border-t-2 border-gray-200 w-auto" />
          </div>
        </div>
  
        <!-- Second row -->
        <div class="flex flex-col sm:flex-row justify-between p-5 sm:p-10 space-y-12 sm:space-y-0 sm:space-x-12">
          <div class="space-y-6">
            <p class="font-gramatika text-navy text-2xl font-medium">Does my SRH solution need to be tech-enabled?</p>
            <p class="font-gramatika text-gray-500">Yes, the start-up must present a tech-enabled solution or have the potential to scale through technology.</p>
            <hr class="border border-t-2 border-gray-200 w-auto" />
          </div>
  
          <div class="space-y-6">
            <p class="font-gramatika text-navy text-2xl font-medium">How does SRH Hanga define youth?</p>
            <p class="font-gramatika text-gray-500">We define youth as individuals with ages between 18 - 35 years.</p>
            <hr class="border border-t-2 border-gray-200 w-auto" />
          </div>
  
          <div class="space-y-6">
            <p class="font-gramatika text-navy text-2xl font-medium">I work closely in the development of a SRH product. Can I join the program?</p>
            <p class="font-gramatika text-gray-500">To be eligible for the program, you must be the Founder / Co-founder and/or hold primary decision-making power in the business.</p>
            <hr class="border border-t-2 border-gray-200 w-auto" />
          </div>
        </div>
  
        <!-- Third row -->
        <div class="flex flex-col sm:flex-row justify-between p-5 sm:p-10 space-y-12 sm:space-y-0 sm:space-x-12  ">
          <div class="space-y-6">
            <p class="font-gramatika text-navy text-2xl font-medium">Where do I need to be based to be eligible for the program?</p>
            <p class="font-gramatika text-gray-500">You need to be based in a Sub-Saharan Africa country or in the diaspora with a SRH focused start-up based (registered and operating) in a Sub-Saharan Africa country.</p>
            <hr class="border border-t-2 border-gray-200 w-auto" />
          </div>
  
          <div class="space-y-6">
            <p class="font-gramatika text-navy text-2xl font-medium">Can a start-up have more than one person joining the program?</p>
            <p class="font-gramatika text-gray-500">Yes, but this will be evaluated on a need-by-need basis with further guidelines given once the SRH innovator is accepted to the program.</p>
            <hr class="border border-t-2 border-gray-200 w-auto" />
          </div>
  
          <div class="space-y-6">
            <p class="font-gramatika text-navy text-2xl font-medium">How will applications be assessed?</p>
            <p class="font-gramatika text-gray-500">Applications will be assessed based on criteria including potential impact, entrepreneurial mindset, innovation in addressing SRH issues, and commercial viability of the idea in the marketplace.</p>
            <hr class="border border-t-2 border-gray-200 w-auto" />
          </div>
        </div>
      </div>
      <FooterPage  class="mt-20"/>
    </div>
  </template>
  


<script>
import NavInit from '@/components/NavInit.vue';
import FooterPage from '@/components/footerPage.vue';

export default{
    name:"FaqPage",
    components:{
        NavInit,
        FooterPage
    }
}
</script>