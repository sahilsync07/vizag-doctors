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
        <tr v-for="(doc, index) in doctors" :key="doc.id">
          <td class="p-2 border">{{ index + 1 }}</td>
          <td class="p-2 border">{{ doc.name }}</td>
          <td class="p-2 border">{{ doc.specialization }}</td>
          <td class="p-2 border">{{ doc.experience }} yrs</td>
          <td class="p-2 border">
            <input type="checkbox" v-model="doc.featured" @change="saveData" />
          </td>
          <td class="p-2 border">
            <input type="checkbox" v-model="doc.active" @change="saveData" />
          </td>
          <td class="p-2 border space-x-2">
            <button @click="goToForm(doc)" class="px-4 py-1 bg-blue-500 text-white rounded">
              Update
            </button>
            <button @click="deleteEntry(doc.id)" class="px-3 py-1 bg-red-600 text-white rounded">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import doctors from '@/data/doctors.json'

export default {
  data() {
    return {
      doctors: doctors,
    }
  },
  methods: {
    goToForm(doc = null) {
      this.$router.push({ name: 'DoctorFormPage', query: doc ? { data: JSON.stringify(doc) } : {} })
    },
    deleteEntry(id) {
      this.doctors = this.doctors.filter((doc) => doc.id !== id)
      this.saveData()
    },
    saveData() {
      // Logic to update JSON file
      console.log('Save updated doctors:', this.doctors)
    },
  },
}
</script>
