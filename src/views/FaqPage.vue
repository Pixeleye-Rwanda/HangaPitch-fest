<template>
  <div class="w-full min-h-screen absolute overflow-x-hidden" style="background-color: #FFF9F6;">
    <Navbar />
    <div class="faq-container mt-16 lg:mt-32 px-4 md:px-8 lg:px-32">
      <!-- Responsive Header Section -->
      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 lg:space-x-72">
        <div class="md:w-1/2">
          <h1 class="text-[36px] md:text-[48px] lg:text-[96px] font-rockinsoda text-navy">
            FAQ
          </h1>
        </div>
        <div class="md:w-1/2">
          <p class="text-gray-600 font-gramatika text-sm md:text-lg lg:text-md">
            From Inquiries to Insights: Unpacking Your Hanga Queries.
            <br />
            Have more questions? Email us at hanga@email.com
          </p>
        </div>
      </div>

        <!-- FAQ Section -->
        <div v-for="(faq, index) in faqs" :key="index" class="faq-item my-4">
          <div class="question flex justify-between items-center font-gramatika cursor-pointer" @click="toggleAnswer(index)">
            <p class="text-base md:text-lg lg:text-xl">{{ faq.question }}</p>
            <!-- Chevron Image based on whether FAQ is open or not -->
            <img v-if="faq.isOpen" src="@/assets/chevron-up.png" alt="Chevron Up" class="chevron-icon"/>
            <img v-else src="@/assets/chevron-down.png" alt="Chevron Down" class="chevron-icon"/>
          </div>
          <transition name="fade">
            <div v-if="faq.isOpen" class="answer mt-2">
              <p class="text-gray-600 text-sm md:text-base lg:text-md">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
    </div>
    <FooterPage class="mt-20" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import FooterPage from "@/components/footerPage.vue";

export default {
  name: "FaqPage",
  components: {
    Navbar,
    FooterPage,
  },
  data() {
    return {
      faqs: [
        {
          question: "Can startups outside Rwanda apply?",
          answer: "Only tech-enabled startups based and registered in Rwanda are allowed to participate.",
          isOpen: false,
        },
        {
          question: "How many years of operations should a startup not exceed to be eligible?",
          answer: "The eligibility status is granted only for startups that are less than five years old starting from the registration day.",
          isOpen: false,
        },
        {
          question: "What are the application deadlines?",
          answer: "The application process is open from September 5 - October 17,  2022.",
          isOpen: false,
        },
        {
          question: "Can a tech startup with existing market traction apply?",
          answer:
            "Yes, tech startups with market traction are encouraged to apply. However, startups should not have raised any venture capital except through self-sourcing, angel investors, or family and friends. Startups that may have received grant funding from other incubator programs or hackathons are eligible.",
          isOpen: false,
        },
        {
          question: "Can startups that do not have a tech solution apply?",
          answer:
            "Only startups with tech-enabled solutions (hardware or software) or with the potential to scale through technology are allowed to apply.",
          isOpen: false,
        },
        {
          question: "How will the winners be selected?",
          answer: 
          "During the first round of evaluation, the top startups will be shortlisted by judges drawn from the startup and investor community scoring the startups based on a number of criteria.\n\n The second round of evaluation will involve physical pitching sessions to a round of judges in 5 locations around Rwanda.\n\n The top candidates will then be invited for a Bootcamp in Kigali whereby the top 5 companies will then be selected to pitch at the BK Arena on December 10, 2022.",
          isOpen: false,
        },       
        {
          question: "Can I apply if I have an idea for a startup?",
          answer: "Unfortunately the minimum criteria for startups is to have a working/developed prototype and not just an idea.",
          isOpen: false,
        },
        {
          question: "Is the prize money a grant or equity?",
          answer: "The prize money is a grant.",
          isOpen: false,
        },
        {
          question: "Can the top 45 startups from last year re-apply?",
          answer: "Answer for Can the top 45 startups from last year re-apply.",
          isOpen: false,
        },
        {
          question: "Is it possible to view past winners’ pitches?",
          answer: "Yes, you can find it here.",
          isOpen: false,
        },
        {
          question: "What languages can I use to pitch?",
          answer: "English and Kinyarwanda",
          isOpen: false,
        },
        {
          question: "Can each teammate apply?",
          answer: "No, only one teammate is encouraged to apply",
          isOpen: false,
        },
        {
          question: "What is the Bootcamp, and who should attend from the team?",
          answer: "The Bootcamp is a week-long entrepreneurship training for the Top 25 startups. The individual that applied on behalf of the team should attend the Bootcamp",
          isOpen: false,
        },
        {
          question: "What are the prizes this year?",
          answer: "Answer for what are the prizes this year?",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen;
    },
  },
};
</script>

<style scoped>
.faq-item {
  border: 1px solid #737B7D;
  padding: 20px 25px;
  transition: all 0.3s ease;
}

.question {
  font-weight: medium;
}
.chevron-icon{
  width: 15px;
  
}

.answer {
  color: #555;
}

/* Fade transition for smooth display */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
