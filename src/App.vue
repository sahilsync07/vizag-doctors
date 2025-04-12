<template>
  <div class="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
    <!-- Header -->
    <Navbar />

    <!-- Main Content -->
    <main class="container mx-auto px-4 pt-20">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-black text-white py-6 mt-12 text-center">
      <p class="text-lg">© 2025 VizagDoctors. All Rights Reserved.</p>
      <p class="text-sm">Designed by Sahil Kumar</p>
    </footer>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue'

export default {
  name: 'App',
  components: { Navbar },
}
</script>

<style>
a {
  transition: color 0.3s;
}
</style>
