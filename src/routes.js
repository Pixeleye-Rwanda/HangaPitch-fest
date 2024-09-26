import HomePage from "@/views/HomePage.vue";
import AboutUs from "@/views/AboutPage.vue";
import OurNetwork from "./views/OurNetwork.vue";
import DescPage from "./views/DescPage.vue";
import StartupsPage from "./views/startupsPage.vue";
import PartnersPage from "./views/PartnersPage.vue";
import JudgesPage from "./views/JudgesPage.vue";
import PitchHanga from "./views/PitchHanga.vue";
import TimelinePage from "./views/TimelinePage.vue"; 

import { createRouter,createWebHistory } from "vue-router";

const routes=[

    {
        name:"HomePage",
        component:HomePage,
        path:'/'
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
      path:'/description'
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
    }


]

const router = createRouter({history:createWebHistory(),routes})
export default router;


