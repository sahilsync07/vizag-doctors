<template>
  <div v-if="doctor" class="p-4 sm:p-8">
    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
      <img
        :src="getImageUrl(doctor.image)"
        :alt="doctor.name"
        class="w-48 h-48 sm:w-72 sm:h-72 object-cover rounded-lg shadow-lg"
      />
      <div class="text-center sm:text-left">
        <h1 class="text-2xl sm:text-4xl font-bold">{{ doctor.name }}</h1>
        <p class="text-base sm:text-lg text-gray-600">{{ doctor.specialization }}</p>
        <p class="mt-2 sm:mt-4 text-sm sm:text-base">{{ doctor.hospital }}</p>
        <p class="mt-2 sm:mt-4 text-sm sm:text-base">
          Experience:
          <span class="font-semibold">{{ doctor.experience }} years</span>
        </p>
        <p class="mt-2 sm:mt-4 text-sm sm:text-base">{{ doctor.description }}</p>
        <router-link
          to="/doctors"
          class="mt-4 sm:mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Back to Doctors
        </router-link>
      </div>
    </div>
  </div>
  <div v-else class="p-8 text-center">
    <h1 class="text-2xl sm:text-3xl font-bold">Doctor Not Found</h1>
    <router-link
      to="/doctors"
      class="mt-6 inline-block text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
    >
      Go Back
    </router-link>
  </div>
</template>

<script>
import doctors from '@/data/doctors.json'

export default {
  name: 'DoctorDetail',
  props: ['id'],
  data() {
    return {
      doctor: null,
    }
  },
  methods: {
    getImageUrl(path) {
      return new URL(`${path}`, import.meta.url).href
    },
  },
  mounted() {
    const doctorId = parseInt(this.id)
    this.doctor = doctors.find((doc) => doc.id === doctorId)
    if (!this.doctor) {
      console.error(`Doctor with ID ${this.id} not found.`)
    }
  },
}
</script>

<style scoped>
img {
  transition: transform 0.3s;
}
img:hover {
  transform: scale(1.05);
}
</style>
