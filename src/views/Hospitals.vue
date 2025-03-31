<template>
    <div class="p-8">
        <h1 class="text-3xl font-bold">Hospitals Listing</h1>
        <p class="text-gray-600 mt-4">List of verified hospitals in Vizag.</p>

        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard v-for="hospital in hospitals" :key="hospital.id" :item="hospital" type="hospitals" />
        </div>
    </div>
</template>

<script>
import hospitals from '@/data/hospitals.json'
import FeaturedCard from '@/components/FeaturedCard.vue'

export default {
    name: "Hospitals",
    components: { FeaturedCard },
    data() {
        return {
            hospitals: hospitals
        }
    }
}
</script>
