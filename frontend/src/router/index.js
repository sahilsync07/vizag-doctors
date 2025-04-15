import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Doctors from '../views/Doctors.vue'
import Hospitals from '../views/Hospitals.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import DoctorDetail from '../views/DoctorDetail.vue'
import HospitalDetail from '../views/HospitalDetail.vue'
import DoctorForm from '@/admin/components/DoctorForm.vue'
import HospitalForm from '@/admin/components/HospitalForm.vue'
import JsonEditor from '@/admin/components/JsonEditor.vue'
import HospitalMaster from '@/admin/HospitalMaster.vue'
import DoctorMaster from '@/admin/DoctorMaster.vue'
import AdminDashboard from '@/admin/AdminDashboard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/doctors', component: Doctors },
  { path: '/hospitals', component: Hospitals },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/admin/doctors', name: 'DoctorFormPage', component: DoctorForm },
  { path: '/admin/hospitals', name: 'HospitalForm', component: HospitalForm },
  { path: '/admin/json-editor', component: JsonEditor },
  { path: '/admin/hospital-master', name: 'HospitalMaster', component: HospitalMaster },
  { path: '/admin/doctor-master', name: 'DoctorMaster', component: DoctorMaster },
  { path: '/doctors/:id', component: DoctorDetail, props: true },
  { path: '/hospitals/:id', component: HospitalDetail, props: true },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
