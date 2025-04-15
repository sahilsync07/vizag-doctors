<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Edit Doctor JSON</h2>
    <textarea v-model="json" rows="20" class="w-full border p-3 rounded"></textarea>
    <button @click="saveJson" class="btn mt-4">Save</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json: ''
    }
  },
  mounted() {
    // Load existing JSON if needed
  },
  methods: {
    saveJson() {
      try {
        const data = JSON.parse(this.json);
        console.log("Saved JSON:", data);
        // Save logic (e.g., write to file on backend)
      } catch {
        alert("Invalid JSON");
      }
    }
  }
}
</script>

<style scoped>
.btn {
  @apply bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700;
}
</style>
