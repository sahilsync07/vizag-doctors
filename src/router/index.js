import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Doctors from '../views/Doctors.vue'
import Hospitals from '../views/Hospitals.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import DoctorDetail from '../views/DoctorDetail.vue'
import HospitalDetail from '../views/HospitalDetail.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/doctors', component: Doctors },
  { path: '/hospitals', component: Hospitals },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },

  // ✅ Dynamic Routes for Details
  { path: '/doctors/:id', component: DoctorDetail, props: true },
  { path: '/hospitals/:id', component: HospitalDetail, props: true },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
