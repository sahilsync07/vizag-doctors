<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-6">Admin Panel</h1>

    <div class="flex gap-4 mb-6">
      <button @click="activeTab = 'doctors'" :class="tabClass('doctors')">Manage Doctors</button>
      <button @click="activeTab = 'hospitals'" :class="tabClass('hospitals')">Manage Hospitals</button>
    </div>

    <div v-if="activeTab === 'doctors'">
      <DoctorForm @add="addDoctor" />
    </div>

    <div v-else-if="activeTab === 'hospitals'">
      <HospitalForm @add="addHospital" />
    </div>
  </div>
</template>

<script>
import DoctorForm from '../admin/components/DoctorForm.vue'
import HospitalForm from '../admin/components/HospitalForm.vue'

export default {
  name: "AdminPanel",
  components: {
    DoctorForm,
    HospitalForm
  },
  data() {
    return {
      activeTab: 'doctors',
      doctors: [],
      hospitals: []
    };
  },
  mounted() {
    // Load existing JSON data for reference (optional)
    fetch('/data/doctors.json')
      .then(res => res.json())
      .then(data => this.doctors = data);

    fetch('/data/hospitals.json')
      .then(res => res.json())
      .then(data => this.hospitals = data);
  },
  methods: {
    tabClass(tab) {
      return `px-4 py-2 rounded-md ${this.activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200'}`;
    },
    addDoctor(doctor) {
      doctor.id = Date.now(); // Unique ID
      this.doctors.push(doctor);
      // You can later save this array to a backend or cloud
      console.log("Doctor added:", doctor);
    },
    addHospital(hospital) {
      hospital.id = Date.now(); // Unique ID
      this.hospitals.push(hospital);
      console.log("Hospital added:", hospital);
    }
  }
}
</script>
