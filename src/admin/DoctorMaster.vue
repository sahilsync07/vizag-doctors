<template>
  <div class="p-8">
    <h2 class="text-3xl font-bold mb-6">Doctor Master</h2>
    <button @click="goToForm()" class="mb-4 px-6 py-2 bg-green-600 text-white rounded">
      Add Doctor
    </button>

    <table class="table-auto w-full border">
      <thead class="bg-gray-200">
        <tr>
          <th class="p-2 border">SL No</th>
          <th class="p-2 border">Name</th>
          <th class="p-2 border">Specialization</th>
          <th class="p-2 border">Experience</th>
          <th class="p-2 border">Featured</th>
          <th class="p-2 border">Active</th>
          <th class="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(doc, index) in doctors" :key="doc._id">
          <td class="p-2 border">{{ index + 1 }}</td>
          <td class="p-2 border">{{ doc.name }}</td>
          <td class="p-2 border">{{ doc.specialization }}</td>
          <td class="p-2 border">{{ doc.experience }} yrs</td>

          <!-- Featured Toggle -->
          <td class="p-2 border">
            <label class="inline-flex relative items-center cursor-pointer">
              <input
                type="checkbox"
                class="sr-only peer"
                v-model="doc.featured"
                @change="toggleFeatured(doc)"
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
                v-model="doc.active"
                @change="toggleActive(doc)"
              />
              <div
                class="w-11 h-6 bg-gray-700 rounded-full peer peer-checked:bg-green-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
              ></div>
            </label>
          </td>

          <td class="p-2 border space-x-2">
            <button @click="goToForm(doc)" class="px-4 py-1 bg-blue-500 text-white rounded">
              Update
            </button>
            <button @click="deleteEntry(doc._id)" class="px-3 py-1 bg-red-600 text-white rounded">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { getAllDoctors, updateDoctorById, deleteDoctorById } from '@/api/doctorService.js'

export default {
  data() {
    return {
      doctors: [],
    }
  },
  async created() {
    this.doctors = await getAllDoctors()
  },
  methods: {
    goToForm(doc = null) {
      this.$router.push({ name: 'DoctorFormPage', query: doc ? { data: JSON.stringify(doc) } : {} })
    },
    async toggleActive(doc) {
      await updateDoctorById(doc._id, { active: doc.active })
    },
    async toggleFeatured(doc) {
      await updateDoctorById(doc._id, { featured: doc.featured })
    },
    async deleteEntry(id) {
      await deleteDoctorById(id)
      this.doctors = this.doctors.filter((doc) => doc._id !== id)
    },
  },
}
</script>
