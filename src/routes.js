import HomePage from "@/views/HomePage.vue";
import AboutUs from "@/views/AboutPage.vue";

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
    }

]

const router = createRouter({history:createWebHistory(),routes})
export default router;


