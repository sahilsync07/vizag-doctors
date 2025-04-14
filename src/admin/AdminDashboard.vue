<template>
  <div class="p-10 min-h-screen bg-gray-100 flex flex-col items-center">
    <h1 class="text-4xl font-bold mb-10 text-gray-800">Admin Dashboard</h1>

    <div class="grid grid-cols-2 gap-10">
      <!-- Doctors Master Box -->
      <router-link
        to="/admin/doctor-master"
        class="w-40 h-40 bg-black text-white flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-800 text-xl font-semibold text-center"
      >
        Doctors Master
      </router-link>

      <!-- Hospitals Master Box -->
      <router-link
        to="/admin/hospital-master"
        class="w-40 h-40 bg-black text-white flex items-center justify-center rounded-lg shadow-lg hover:bg-gray-800 text-xl font-semibold text-center"
      >
        Hospital Master
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
}
</script>
