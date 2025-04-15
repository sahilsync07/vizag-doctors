<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">{{ isEditing ? 'Update Doctor' : 'Add Doctor' }}</h2>

    <form @submit.prevent="handleSubmit" class="grid gap-4">
      <input v-model="form.name" type="text" placeholder="Doctor Name" required />
      <input v-model="form.specialization" type="text" placeholder="Specialization" required />
      <input
        v-model.number="form.experience"
        type="number"
        placeholder="Experience (years)"
        required
      />
      <textarea v-model="form.description" placeholder="Description" required></textarea>

      <div v-if="form.image" class="mb-2">
        <img :src="form.image" alt="Current" class="h-32" />
      </div>
      <input type="file" @change="handleImageUpload" />

      <label><input type="checkbox" v-model="form.featured" /> Featured</label>
      <label><input type="checkbox" v-model="form.active" /> Active</label>

      <button class="bg-blue-600 text-white px-4 py-2 rounded" type="submit">
        {{ isEditing ? 'Update' : 'Add' }} Doctor
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: null,
        name: '',
        specialization: '',
        experience: '',
        description: '',
        image: '',
        featured: false,
        active: true,
      },
    }
  },
  computed: {
    isEditing() {
      return !!this.form.id
    },
  },
  mounted() {
    const query = this.$route.query.data
    if (query) {
      this.form = JSON.parse(query)
    }
  },
  methods: {
    handleSubmit() {
      console.log('Saving doctor:', this.form)
    },
    handleImageUpload(e) {
      const file = e.target.files[0]
      if (file) {
        const nameSlug = this.form.name.toLowerCase().replace(/\s+/g, '-')
        this.form.image = `https://cdn.jsdelivr.net/gh/sahilsync07/vizag-doctors/public/images/${nameSlug}.jpg`
      }
    },
  },
}
</script>
