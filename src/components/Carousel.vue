<template>
  <div
    class="relative w-full h-[400px] md:h-[280px] overflow-hidden rounded-lg shadow-md mt-[10px]"
  >
    <!-- ✅ Carousel Slides -->
    <div
      class="carousel flex transition-transform duration-1000 ease-in-out h-full"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <!-- ✅ Intro Slide -->
      <div class="w-full flex-shrink-0 bg-black text-white flex items-center justify-center h-full">
        <div class="text-center px-4">
          <h1 class="text-4xl md:text-5xl font-bold">Vizag Doctors</h1>
          <p class="mt-4 text-base md:text-lg">
            Discover trusted healthcare professionals and top hospitals in Vizag.
          </p>
        </div>
      </div>

      <!-- ✅ Featured Doctors -->
      <div
        v-for="doctor in featuredDoctors"
        :key="'doctor-' + doctor.id"
        class="w-full flex-shrink-0 bg-gray-100 flex justify-center p-6 h-full"
      >
        <div
          class="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl h-full space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left"
        >
          <img
            :src="getImageUrl(doctor.image)"
            alt="Doctor"
            class="w-36 h-36 object-cover rounded-full shadow-md"
          />
          <div class="flex flex-col items-center md:items-start">
            <h2 class="text-2xl font-bold text-gray-800">{{ doctor.name }}</h2>
            <p class="text-gray-600 mt-1">
              {{ doctor.specialization }} | {{ doctor.experience }} Years
            </p>
            <p class="text-sm text-gray-500 mt-2">{{ doctor.hospital }}</p>
            <router-link
              :to="`/doctors/${doctor.id}`"
              class="mt-3 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              View Profile
            </router-link>
          </div>
        </div>
      </div>

      <!-- ✅ Featured Hospitals -->
      <div
        v-for="hospital in featuredHospitals"
        :key="'hospital-' + hospital.id"
        class="w-full flex-shrink-0 bg-gray-100 flex justify-center p-6 h-full"
      >
        <div
          class="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl h-full space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left"
        >
          <img
            :src="getImageUrl(hospital.image)"
            alt="Hospital"
            class="w-40 h-40 object-cover rounded-lg shadow-md"
          />
          <div class="flex flex-col items-center md:items-start">
            <h2 class="text-2xl font-bold text-gray-800">{{ hospital.name }}</h2>
            <p class="text-gray-600 mt-1">{{ hospital.services }}</p>
            <p class="text-sm text-gray-500 mt-2">{{ hospital.location }}</p>
            <router-link
              :to="`/hospitals/${hospital.id}`"
              class="mt-3 inline-block bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              View Profile
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ Dots Navigation -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
      <span
        v-for="(slide, index) in totalSlides"
        :key="index"
        @click="goToSlide(index)"
        :class="{
          'bg-gray-900': currentIndex === index,
          'bg-gray-300': currentIndex !== index,
        }"
        class="w-3 h-3 rounded-full cursor-pointer transition duration-300 hover:scale-110"
      ></span>
    </div>
  </div>
</template>

<script>
import doctors from '@/data/doctors.json'
import hospitals from '@/data/hospitals.json'

export default {
  name: 'Carousel',
  data() {
    return {
      currentIndex: 0,
      doctors,
      hospitals,
    }
  },
  computed: {
    featuredDoctors() {
      return this.doctors.filter((doc) => doc.featured)
    },
    featuredHospitals() {
      return this.hospitals.filter((h) => h.featured)
    },
    totalSlides() {
      return 1 + this.featuredDoctors.length + this.featuredHospitals.length
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.totalSlides
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides
    },
    goToSlide(index) {
      this.currentIndex = index
    },
    getImageUrl(path) {
      return new URL(`${path}`, import.meta.url).href
    },
  },
  mounted() {
    setInterval(() => {
      this.nextSlide()
    }, 4000)
  },
}
</script>

<style scoped>
.carousel {
  display: flex;
  height: 100%;
  transition: transform 1s ease-in-out;
}
</style>
