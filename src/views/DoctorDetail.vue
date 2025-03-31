<template>
    <div v-if="doctor" class="p-8">
        <div class="flex items-center gap-8">
            <img :src="getImageUrl(doctor.image)" :alt="doctor.name"
                class="w-72 h-72 object-cover rounded-lg shadow-lg">
            <div>
                <h1 class="text-4xl font-bold">{{ doctor.name }}</h1>
                <p class="text-lg text-gray-600">{{ doctor.specialization }}</p>
                <p class="mt-4">{{ doctor.hospital }}</p>
                <p class="mt-4">Experience: <span class="font-bold">{{ doctor.experience }} years</span></p>
                <p class="mt-4">{{ doctor.description }}</p>
                <router-link to="/doctors"
                    class="mt-6 inline-block text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    Back to Doctors
                </router-link>
            </div>
        </div>
    </div>
    <div v-else class="p-8 text-center">
        <h1 class="text-3xl font-bold">Doctor Not Found</h1>
        <router-link to="/doctors"
            class="mt-6 inline-block text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition">
            Go Back
        </router-link>
    </div>
</template>

<script>
import doctors from '@/data/doctors.json';

export default {
    name: "DoctorDetail",
    props: ['id'],
    data() {
        return {
            doctor: null
        };
    },
    methods: {
        getImageUrl(path) {
            return new URL(`${path}`, import.meta.url).href;
        }
    },
    mounted() {
        // ✅ Fetch doctor data by ID
        const doctorId = parseInt(this.id);  // Convert ID to integer
        this.doctor = doctors.find(doc => doc.id === doctorId);

        if (!this.doctor) {
            console.error(`Doctor with ID ${this.id} not found.`);
        }
    }
};
</script>

<style scoped>
img {
    transition: transform 0.3s;
}

img:hover {
    transform: scale(1.05);
}
</style>
