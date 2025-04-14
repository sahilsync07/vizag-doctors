<template>
  <div class="p-8">
    <h2 class="text-3xl font-bold mb-6">Hospital Master</h2>
    <button @click="goToForm(null)" class="mb-4 px-6 py-2 bg-green-600 text-white rounded">
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
        <tr v-for="(hospital, index) in hospitals" :key="hospital.id">
          <td class="p-2 border">{{ index + 1 }}</td>
          <td class="p-2 border">{{ hospital.name }}</td>
          <td class="p-2 border">{{ hospital.description }}</td>
          <td class="p-2 border">
            <input
              type="checkbox"
              v-model="hospital.featured"
              @change="toggle(hospital, 'featured')"
            />
          </td>
          <td class="p-2 border">
            <input type="checkbox" v-model="hospital.active" @change="toggle(hospital, 'active')" />
          </td>
          <td class="p-2 border">
            <button @click="goToForm(hospital)" class="px-4 py-1 bg-yellow-500 text-white rounded">
              Update
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import hospitals from '@/data/hospitals.json'

export default {
  name: 'HospitalMaster',
  data() {
    return { hospitals }
  },
  methods: {
    goToForm(hospital) {
      this.$router.push({
        name: 'HospitalForm',
        query: hospital ? { edit: JSON.stringify(hospital) } : {},
      })
    },
    toggle(hospital, field) {
      hospital[field] = !hospital[field]
    },
  },
}
</script>
