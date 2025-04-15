<template>
    <div class="container mx-auto py-12">
        <h1 class="text-4xl font-bold mb-8">Doctors</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeaturedCard v-for="doctor in doctors" :key="doctor.id" :item="doctor" :type="'doctor'" />
        </div>
    </div>
</template>

<script>
import doctors from '@/data/doctors.json'
import FeaturedCard from '@/components/FeaturedCard.vue'

export default {
    name: "Doctors",
    components: { FeaturedCard },
    data() {
        return {
            doctors: doctors
        };
    }
};
</script>
