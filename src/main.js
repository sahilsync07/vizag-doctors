import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css' // Ensure Tailwind is imported

createApp(App).use(router).mount('#app')
