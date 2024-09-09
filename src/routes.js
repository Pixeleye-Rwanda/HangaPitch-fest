import HomePage from "@/views/HomePage.vue";
import AboutUs from "@/views/AboutPage.vue";
import OurNetwork from "./views/OurNetwork.vue";

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
    }

]

const router = createRouter({history:createWebHistory(),routes})
export default router;


