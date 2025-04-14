<template>
  <div class="p-6 max-w-xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">Add Hospital</h2>
    <form @submit.prevent="submitForm">
      <input v-model="form.name" placeholder="Hospital Name" class="input" />
      <input v-model="form.services" placeholder="Services (comma-separated)" class="input" />
      <input v-model="form.contact" placeholder="Contact Info" class="input" />
      <textarea v-model="form.description" placeholder="Description" class="input"></textarea>

      <input type="file" @change="uploadImage" class="mt-3" />
      <div v-if="form.image" class="mt-2">
        <img :src="form.image" alt="Hospital Preview" class="w-32 h-32 object-cover rounded border" />
      </div>

      <button type="submit" class="btn mt-4">Save Hospital</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "HospitalForm",
  data() {
    return {
      form: {
        name: '',
        services: '',
        contact: '',
        description: '',
        image: ''
      }
    };
  },
  methods: {
    async uploadImage(e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // 🔁 Replace with your Cloudinary upload preset
      const res = await fetch('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      this.form.image = data.secure_url;
    },
    submitForm() {
      console.log("Hospital Form Submitted:", this.form);
      // 🔁 Save logic will go here (to file/DB/backend later)
    }
  }
}
</script>

<style scoped>
.input {
  @apply block w-full mb-3 p-2 border rounded;
}

.btn {
  @apply bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition;
}
</style>
