<template>
  <div class="p-8">
    <h2 class="text-3xl font-bold mb-6">Hospital Master</h2>
    <button @click="goToForm()" class="mb-4 px-6 py-2 bg-green-600 text-white rounded">
      Add Hospital
    </button>

    <table class="table-auto w-full border">
      <thead class="bg-gray-200">
        <tr>
          <th class="p-2 border">SL No</th>
          <th class="p-2 border">Name</th>
          <th class="p-2 border">Description</th>
          <th class="p-2 border">Featured</th>
          <th class="p-2 border">Active</th>
          <th class="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hospital, index) in hospitals" :key="hospital._id">
          <td class="p-2 border">{{ index + 1 }}</td>
          <td class="p-2 border">{{ hospital.name }}</td>
          <td class="p-2 border">{{ hospital.description }}</td>

          <!-- Featured Toggle -->
          <td class="p-2 border">
            <label class="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                v-model="hospital.featured"
                @change="toggleFeatured(hospital)"
              />
              <div
                class="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
              ></div>
            </label>
          </td>

          <!-- Active Toggle -->
          <td class="p-2 border">
            <label class="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                v-model="hospital.active"
                @change="toggleActive(hospital)"
              />
              <div
                class="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-green-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
              ></div>
            </label>
          </td>

          <td class="p-2 border space-x-2">
            <button @click="goToForm(hospital)" class="px-4 py-1 bg-blue-500 text-white rounded">
              Update
            </button>
            <button
              @click="deleteEntry(hospital._id)"
              class="px-3 py-1 bg-red-600 text-white rounded"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getAllHospitals, updateHospitalById, deleteHospitalById } from '@/api/hospitalService.js'

export default {
  data() {
    return {
      hospitals: [],
    }
  },
  async created() {
    this.hospitals = await getAllHospitals()
  },
  methods: {
    goToForm(hospital = null) {
      this.$router.push({
        name: 'HospitalFormPage',
        query: hospital ? { data: JSON.stringify(hospital) } : {},
      })
    },
    async toggleActive(hospital) {
      await updateHospitalById(hospital._id, { active: hospital.active })
    },
    async toggleFeatured(hospital) {
      await updateHospitalById(hospital._id, { featured: hospital.featured })
    },
    async deleteEntry(id) {
      await deleteHospitalById(id)
      this.hospitals = this.hospitals.filter((hospital) => hospital._id !== id)
    },
  },
}
</script>
