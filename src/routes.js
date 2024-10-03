import HomePage from "@/views/HomePage.vue";
import AboutUs from "@/views/AboutPage.vue";
import OurNetwork from "./views/OurNetwork.vue";
import DescPage from "./views/DescPage.vue";
import StartupsPage from "./views/startupsPage.vue";
import PartnersPage from "./views/PartnersPage.vue";
import JudgesPage from "./views/JudgesPage.vue";
import PitchHanga from "./views/PitchHanga.vue";
import TimelinePage from "./views/TimelinePage.vue";
import ContactUsPage from "./views/ContactUsPage.vue"; 
import FilteredStarups from "./components/FilteredStarups.vue";
<<<<<<< HEAD
import WaitlistPage from "./views/WaitlistPage.vue";
import WaitlistResultPage from "./views/WaitlistResultPage.vue";
import NotFoundPage from "./views/NotFoundPage.vue";
=======
import HangaHub from "./views/HangaHub.vue";
import HangaAgritech from "./views/HangaAgritech.vue";
import HangSrh from "./views/HangSrh.vue";
>>>>>>> 9b8a480a2795921e0a70db01e48842e62d62d37f

import { createRouter,createWebHistory } from "vue-router";

const routes=[

    {
        name:"HomePage",
        component:HomePage,
        path:'/'
    },
    {
        name:"FilteredStarups",
        component:FilteredStarups,
        path:'/all-startups'
    },

    {
        name:"AboutUs",
        component:AboutUs,
        path:"/about-us"
    },
    {
        name:"OurNetwork",
        component:OurNetwork,
        path:'/network'
    },
    {
      name:"DescPage"  ,
      component:DescPage,
      path:'/startup/:name',
      props:true     

    },

    {
        name:"Startups",
        component:StartupsPage,
        path:'/startups'
    },

    {
        name:'Judges',
        component:JudgesPage,
        path:'/judges'
    },
    {
        name:'Partners',
        component:PartnersPage,
        path:'/partners'
    },
    
    {
        name:'PitchHanga',
        component:PitchHanga,
        path:'/pitch'
    },

    {
        name:'TimelinePage',
        component:TimelinePage,
        path:'/timeline'
    },

    {
        name:'ContactUsPage',
        component:ContactUsPage,
        path:'/contact'
    },
<<<<<<< HEAD

    {
        name:'WaitlistPage',
        component:WaitlistPage,
        path:'/waitlist'
    },
    {
        name:'WaitlistResultPage',
        component:WaitlistResultPage,
        path:'/waitlist-result'
    },
    {
        name:'NotFoundPage',
        component:NotFoundPage,
        path:'/404'
    }
=======
    {
        name:'HangHub',
        component:HangaHub,
        path:'/hub'
    },

    {
        name:'HangAgritech',
        component:HangaAgritech,
        path:'/agritech'
    },
    {
        name:'HangSrh',
        component:HangSrh,
        path:'/srh'
    },
>>>>>>> 9b8a480a2795921e0a70db01e48842e62d62d37f


     



]



const router = createRouter({history:createWebHistory(),routes,
    scrollBehavior(to) { 
        if (to.hash) {
            return {
                el: to.hash, 
                behavior: 'auto',
                top: 0 
            };
        }
        return { left: 0, top: 0 }; 
    }



})
export default router;

  


