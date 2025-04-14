<template>
  <div class="p-6 max-w-xl mx-auto">
    <h2 class="text-2xl font-bold mb-4">Add Doctor</h2>
    <form @submit.prevent="submitForm">
      <input v-model="form.name" placeholder="Name" class="input" />
      <input v-model="form.specialization" placeholder="Specialization" class="input" />
      <input v-model="form.hospital" placeholder="Hospital" class="input" />
      <input v-model="form.experience" type="number" placeholder="Experience" class="input" />
      <textarea v-model="form.description" placeholder="Description" class="input"></textarea>
      <input type="file" @change="uploadImage" />
      <button type="submit" class="btn mt-4">Save Doctor</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "DoctorForm",
  data() {
    return {
      form: {
        name: '',
        specialization: '',
        hospital: '',
        experience: '',
        description: '',
        image: ''
      }
    }
  },
  methods: {
    async uploadImage(e) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); // Replace this
      const res = await fetch('https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      this.form.image = data.secure_url;
    },
    submitForm() {
      console.log('Form Data:', this.form);
      // Save to JSON / DB later
    }
  }
}
</script>

<style scoped>
.input {
  @apply block w-full mb-3 p-2 border rounded;
}

.btn {
  @apply bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600;
}
</style>
