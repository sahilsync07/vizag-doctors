<template>
  <nav class="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md backdrop-blur-md">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo Text -->
      <router-link to="/" class="text-2xl font-bold text-white">VizagDoctors</router-link>

      <!-- Desktop Nav Links -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="nav-link" :class="{ 'active-link': $route.path === '/' }"
          >Home</router-link
        >
        <router-link
          to="/doctors"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/doctors' }"
          >Doctors</router-link
        >
        <router-link
          to="/hospitals"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/hospitals' }"
          >Hospitals</router-link
        >
        <router-link
          to="/contact"
          class="nav-link"
          :class="{ 'active-link': $route.path === '/contact' }"
          >Contact</router-link
        >
      </div>

      <!-- Mobile Menu Icon -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Dropdown -->
    <div v-if="isMenuOpen" class="md:hidden bg-gray-800">
      <div class="flex flex-col items-center py-4 space-y-4">
        <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
        <router-link to="/doctors" class="nav-link" @click="closeMenu">Doctors</router-link>
        <router-link to="/hospitals" class="nav-link" @click="closeMenu">Hospitals</router-link>
        <router-link to="/contact" class="nav-link" @click="closeMenu">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style scoped>
.nav-link {
  color: #e5e7eb;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition:
    color 0.3s,
    transform 0.3s;
}

.nav-link:hover {
  color: #f9fafb;
  transform: translateY(-2px);
}

.active-link {
  color: #f9fafb;
  font-weight: bold;
  border-bottom: 2px solid #f9fafb;
}

@media (max-width: 768px) {
  .nav-link {
    display: block;
    text-align: center;
    padding: 1rem;
  }

  .nav-link:hover {
    background: #1f2937;
    color: #f9fafb;
    border-radius: 5px;
  }
}
</style>
