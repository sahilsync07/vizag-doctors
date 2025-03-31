<template>
    <div
        class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-2 overflow-hidden">
        <img :src="getImageUrl(item.image)" :alt="item.name" class="w-full h-60 object-cover" />
        <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-800">{{ item.name }}</h3>
            <p class="text-gray-600">{{ item.specialization || item.services }}</p>
            <p v-if="item.experience" class="mt-3 text-green-500 font-bold">{{ item.experience }} Years of Experience
            </p>
            <router-link :to="`/${type}/${item.id}`"
                class="mt-4 inline-block text-white bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition">
                View Profile
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
        type: String
    },
    methods: {
        getImageUrl(path) {
            return new URL(`${path}`, import.meta.url).href;
        }
    }
};
</script>
