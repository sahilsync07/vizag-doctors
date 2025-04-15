<template>
  <div
    class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 overflow-hidden flex flex-col md:flex-col"
  >
    <!-- Image -->
    <img :src="getImageUrl(item.image)" :alt="item.name" class="w-full h-52 sm:h-60 object-cover" />

    <!-- Content -->
    <div class="p-4 sm:p-6 flex flex-col items-start space-y-2">
      <h3 class="text-lg sm:text-xl font-semibold text-gray-800">{{ item.name }}</h3>
      <p class="text-sm sm:text-base text-gray-600">{{ item.specialization || item.services }}</p>
      <p v-if="item.experience" class="text-sm sm:text-base text-green-600 font-medium">
        {{ item.experience }} Years of Experience
      </p>
      <router-link
        :to="`/${type}/${item.id}`"
        class="mt-3 sm:mt-4 inline-block bg-black text-white text-sm sm:text-base px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        View Profile
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    type: String,
  },
  methods: {
    getImageUrl(path) {
      return new URL(`${path}`, import.meta.url).href
    },
  },
}
</script>
