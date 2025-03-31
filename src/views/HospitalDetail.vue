<template>
    <div v-if="hospital" class="p-8">
        <div class="flex items-center gap-8">
            <img :src="getImageUrl(hospital.image)" :alt="hospital.name"
                class="w-72 h-72 object-cover rounded-lg shadow-lg">
            <div>
                <h1 class="text-4xl font-bold">{{ hospital.name }}</h1>
                <p class="text-lg text-gray-600">{{ hospital.services }}</p>
                <p class="mt-4">Contact: <span class="font-bold">{{ hospital.contact }}</span></p>
                <p class="mt-4">{{ hospital.description }}</p>
                <router-link to="/hospitals"
                    class="mt-6 inline-block text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 transition">
                    Back to Hospitals
                </router-link>
            </div>
        </div>
    </div>
    <div v-else class="p-8 text-center">
        <h1 class="text-3xl font-bold">Hospital Not Found</h1>
        <router-link to="/hospitals"
            class="mt-6 inline-block text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition">
            Go Back
        </router-link>
    </div>
</template>

<script>
import hospitals from '@/data/hospitals.json';

export default {
    name: "HospitalDetail",
    props: ['id'],
    data() {
        return {
            hospital: null
        };
    },
    methods: {
        getImageUrl(path) {
            return new URL(`${path}`, import.meta.url).href;
        }
    },
    mounted() {
        // ✅ Fetch hospital data by ID
        const hospitalId = parseInt(this.id);  // Convert ID to integer
        this.hospital = hospitals.find(hosp => hosp.id === hospitalId);

        if (!this.hospital) {
            console.error(`Hospital with ID ${this.id} not found.`);
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
