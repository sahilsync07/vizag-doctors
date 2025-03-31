<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <!-- Header -->
    <header class="bg-black text-white shadow-lg">
      <div class="container mx-auto flex justify-between items-center p-6">
        <router-link to="/" class="text-3xl font-extrabold tracking-tight"
          >VizagDoctors</router-link
        >
        <nav class="flex gap-6">
          <router-link to="/" class="hover:text-gray-300 transition">Home</router-link>
          <router-link to="/doctors" class="hover:text-gray-300 transition">Doctors</router-link>
          <router-link to="/hospitals" class="hover:text-gray-300 transition"
            >Hospitals</router-link
          >
          <router-link to="/about" class="hover:text-gray-300 transition">About</router-link>
          <router-link to="/contact" class="hover:text-gray-300 transition">Contact</router-link>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto p-6">
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
export default {
  name: 'App',
}
</script>

<style>
/* Smooth link transitions */
a {
  transition: color 0.3s;
}
</style>
