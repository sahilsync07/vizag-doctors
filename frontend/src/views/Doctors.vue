<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold">Doctors Listing</h1>
    <p class="text-gray-600 mt-4">List of verified doctors in Vizag.</p>

    <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FeaturedCard v-for="doctor in doctors" :key="doctor.id" :item="doctor" type="doctors" />
    </div>
  </div>
</template>

<script>
import FeaturedCard from '@/components/FeaturedCard.vue'
import { getAllDoctors } from '@/api/doctorService'

export default {
  name: 'Doctors',
  components: { FeaturedCard },
  data() {
    return {
      doctors: [],
    }
  },
  async mounted() {
    try {
      this.doctors = await getAllDoctors()
    } catch (error) {
      console.error('Error fetching doctors:', error)
    }
  },
}
</script>
