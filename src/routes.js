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
import HangaHub from "./views/HangaHub.vue";
import HangaAgritech from "./views/HangaAgritech.vue";
import HangSrh from "./views/HangSrh.vue";
import NavInit from "./components/NavInit.vue";
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

    {
        name:'NavInit',
        component:NavInit,
        path:'/navinit'
    },


     



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

  


