<template>
    <div class="relative w-full h-[500px] overflow-hidden rounded-lg shadow-md">

        <!-- ✅ Carousel Pages -->
        <div class="carousel flex transition-transform duration-1000 ease-in-out h-full"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">

            <!-- ✅ Intro Page -->
            <div class="w-full flex-shrink-0 bg-black text-white flex items-center justify-center h-full">
                <div class="text-center">
                    <h1 class="text-5xl font-bold">Vizag Doctors</h1>
                    <p class="mt-4 text-lg">Discover trusted healthcare professionals and top hospitals in Vizag.</p>
                </div>
            </div>

            <!-- ✅ Loop through featured doctors -->
            <div v-for="doctor in featuredDoctors" :key="'doctor-' + doctor.id"
                class="w-full flex-shrink-0 bg-gray-100 flex items-center justify-center p-8 h-full">
                <div class="flex items-center justify-between w-full max-w-5xl h-full">

                    <!-- ✅ Doctor Info -->
                    <div class="text-left flex-grow">
                        <h2 class="text-3xl font-bold text-gray-800">{{ doctor.name }}</h2>
                        <p class="text-gray-600 mt-2">{{ doctor.specialization }} | {{ doctor.experience }} Years</p>
                        <p class="mt-4 text-sm text-gray-500">{{ doctor.hospital }}</p>
                        <router-link :to="`/doctors/${doctor.id}`"
                            class="mt-4 inline-block text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition">
                            View Profile
                        </router-link>
                    </div>

                    <!-- ✅ Circular Image -->
                    <img :src="getImageUrl(doctor.image)" alt="Doctor"
                        class="w-56 h-56 object-cover rounded-full shadow-md">
                </div>
            </div>

            <!-- ✅ Loop through featured hospitals -->
            <div v-for="hospital in featuredHospitals" :key="'hospital-' + hospital.id"
                class="w-full flex-shrink-0 bg-gray-100 flex items-center justify-center p-8 h-full">
                <div class="flex items-center justify-between w-full max-w-5xl h-full">

                    <!-- ✅ Hospital Info -->
                    <div class="text-left flex-grow">
                        <h2 class="text-3xl font-bold text-gray-800">{{ hospital.name }}</h2>
                        <p class="text-gray-600 mt-2">{{ hospital.services }}</p>
                        <p class="mt-4 text-sm text-gray-500">{{ hospital.location }}</p>
                        <router-link :to="`/hospitals/${hospital.id}`"
                            class="mt-4 inline-block text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition">
                            View Profile
                        </router-link>
                    </div>

                    <!-- ✅ Squircle Image -->
                    <img :src="getImageUrl(hospital.image)" alt="Hospital"
                        class="w-60 h-60 object-cover rounded-lg shadow-md">
                </div>
            </div>
        </div>

        <!-- ✅ Navigation Buttons -->
        <button
            class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
            @click="prevSlide">
            ❮
        </button>
        <button
            class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-900 transition"
            @click="nextSlide">
            ❯
        </button>

        <!-- ✅ Dots Navigation -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            <span v-for="(slide, index) in totalSlides" :key="index" @click="goToSlide(index)"
                :class="{ 'bg-gray-900': currentIndex === index, 'bg-gray-300': currentIndex !== index }"
                class="w-4 h-4 rounded-full cursor-pointer transition duration-300 hover:scale-110"></span>
        </div>
    </div>
</template>

<script>
import doctors from '@/data/doctors.json';
import hospitals from '@/data/hospitals.json';

export default {
    name: "Carousel",
    data() {
        return {
            currentIndex: 0,
            doctors: doctors,
            hospitals: hospitals
        }
    },
    computed: {
        // ✅ Filter featured doctors
        featuredDoctors() {
            return this.doctors.filter(doctor => doctor.featured);
        },
        // ✅ Filter featured hospitals
        featuredHospitals() {
            return this.hospitals.filter(hospital => hospital.featured);
        },
        totalSlides() {
            return 1 + this.featuredDoctors.length + this.featuredHospitals.length;
        }
    },
    methods: {
        nextSlide() {
            this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        },
        prevSlide() {
            this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        },
        goToSlide(index) {
            this.currentIndex = index;
        },
        getImageUrl(path) {
            return new URL(`${path}`, import.meta.url).href;
        }
    },
    mounted() {
        setInterval(() => {
            this.nextSlide();
        }, 4000);
    }
}
</script>

<style scoped>
.carousel {
    display: flex;
    height: 100%;
    transition: transform 1s ease-in-out;
}

button {
    z-index: 10;
    transition: transform 0.3s;
}

button:hover {
    transform: scale(1.05);
}

span {
    transition: background 0.3s, transform 0.3s;
}

span:hover {
    transform: scale(1.2);
}
</style>
