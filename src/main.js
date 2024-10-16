import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import 'tailwindcss/tailwind.css';

import '@fortawesome/fontawesome-free/css/all.css';
import router from './routes';

createApp(App).use(router).mount('#app')

