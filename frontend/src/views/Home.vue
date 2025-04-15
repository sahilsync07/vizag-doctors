<template>
  <div class="bg-gray-50 min-h-screen overflow-x-hidden">
    <div class="container mx-auto px-4 py-8">
      <!-- Carousel -->
      <Carousel />

      <!-- Featured List -->
      <FeaturedList class="mt-10" />
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import FeaturedList from '@/components/FeaturedList.vue'

export default {
  components: {
    Carousel,
    FeaturedList,
  },
}
</script>
