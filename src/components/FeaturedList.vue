<template>
  <section class="bg-white rounded-lg shadow-md p-8">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">Top Healthcare Experts & Facilities</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FeaturedCard
        v-for="doctor in featuredDoctors"
        :key="'doctor-' + doctor.id"
        :item="doctor"
        type="doctors"
      />
      <FeaturedCard
        v-for="hospital in featuredHospitals"
        :key="'hospital-' + hospital.id"
        :item="hospital"
        type="hospitals"
      />
    </div>
  </section>
</template>

<script>
import FeaturedCard from '@/components/FeaturedCard.vue'
import { getAllDoctors } from '@/api/doctorService'
import { getAllHospitals } from '@/api/hospitalService'

export default {
  name: 'FeaturedList',
  components: {
    FeaturedCard,
  },
  data() {
    return {
      featuredDoctors: [],
      featuredHospitals: [],
    }
  },
  async mounted() {
    try {
      const doctors = await getAllDoctors()
      const hospitals = await getAllHospitals()

      this.featuredDoctors = doctors.filter((doc) => doc.featured)
      this.featuredHospitals = hospitals.filter((hos) => hos.featured)
    } catch (error) {
      console.error('Error fetching featured data:', error)
    }
  },
}
</script>
