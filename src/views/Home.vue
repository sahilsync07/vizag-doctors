<template>
    <div class="bg-gray-50 min-h-screen">
        <div class="container mx-auto px-4 py-12">

            <!-- ✅ Carousel Section -->
            <Carousel />

            <!-- ✅ Featured Section -->
            <section class="bg-white rounded-lg shadow-md p-12 mt-12">
                <h2 class="text-3xl font-bold text-gray-800 mb-8">Top Healthcare Experts & Facilities</h2>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    <!-- ✅ Display only featured doctors -->
                    <FeaturedCard v-for="doctor in featuredDoctors" :key="doctor.id" :item="doctor" type="doctors" />

                    <!-- ✅ Display only featured hospitals -->
                    <FeaturedCard v-for="hospital in featuredHospitals" :key="hospital.id" :item="hospital"
                        type="hospitals" />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import FeaturedCard from '@/components/FeaturedCard.vue'
import doctors from '@/data/doctors.json'
import hospitals from '@/data/hospitals.json'

export default {
    name: "Home",
    components: {
        Carousel,
        FeaturedCard
    },
    data() {
        return {
            doctors: doctors,
            hospitals: hospitals
        }
    },
    computed: {
        // ✅ Filter only featured doctors
        featuredDoctors() {
            return this.doctors.filter(doctor => doctor.featured);
        },
        // ✅ Filter only featured hospitals
        featuredHospitals() {
            return this.hospitals.filter(hospital => hospital.featured);
        }
    }
}
</script>
