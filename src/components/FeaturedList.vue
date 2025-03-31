<template>
  <section class="bg-white rounded-lg shadow-md p-12 mt-12">
    <h2 class="text-3xl font-bold text-gray-800 mb-8">Top Healthcare Experts & Facilities</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <FeaturedCard v-for="(item, index) in items" :key="index" :item="item" />
    </div>
  </section>
</template>

<script>
import FeaturedCard from './FeaturedCard.vue'
import doctors from '@/data/doctors.json'
import hospitals from '@/data/hospitals.json'

export default {
  name: 'FeaturedList',
  components: {
    FeaturedCard,
  },
  data() {
    return {
      items: [...doctors, ...hospitals], // Merging both doctors and hospitals into one list
    }
  },
}
</script>

<style scoped>
section {
  transition: all 0.3s ease-in-out;
}
</style>
