<template>
  <div class="bg-gray-50 min-h-screen overflow-x-hidden">
    <div class="container mx-auto px-4 py-8">
      <!-- Carousel -->
      <Carousel />

      <!-- Featured -->
      <section class="bg-white rounded-lg shadow-md p-8 mt-10">
        <h2 class="text-3xl font-bold text-gray-800 mb-8">Top Healthcare Experts & Facilities</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeaturedCard
            v-for="doctor in featuredDoctors"
            :key="doctor.id"
            :item="doctor"
            type="doctors"
          />
          <FeaturedCard
            v-for="hospital in featuredHospitals"
            :key="hospital.id"
            :item="hospital"
            type="hospitals"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import FeaturedCard from '@/components/FeaturedCard.vue'
import doctors from '@/data/doctors.json'
import hospitals from '@/data/hospitals.json'

export default {
  components: {
    Carousel,
    FeaturedCard,
  },
  data() {
    return {
      doctors,
      hospitals,
    }
  },
  computed: {
    featuredDoctors() {
      return this.doctors.filter((doctor) => doctor.featured)
    },
    featuredHospitals() {
      return this.hospitals.filter((hospital) => hospital.featured)
    },
  },
}
</script>
