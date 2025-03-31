<template>
    <nav class="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md backdrop-blur-md">
        <div class="container mx-auto px-6 py-4 flex justify-between items-center">

            <!-- Logo -->
            <router-link to="/" class="flex items-center space-x-3">
                <img src="@/assets/logo.png" alt="Logo" class="w-10 h-10 object-contain" />
                <span class="text-xl font-bold text-gray-100 hover:text-gray-400 transition">VizagDoctor</span>
            </router-link>

            <!-- Desktop Nav Links -->
            <div class="hidden md:flex space-x-6">
                <router-link to="/" class="nav-link" :class="{ 'active-link': $route.path === '/' }">Home</router-link>
                <router-link to="/doctors" class="nav-link"
                    :class="{ 'active-link': $route.path === '/doctors' }">Doctors</router-link>
                <router-link to="/hospitals" class="nav-link"
                    :class="{ 'active-link': $route.path === '/hospitals' }">Hospitals</router-link>
                <router-link to="/contact" class="nav-link"
                    :class="{ 'active-link': $route.path === '/contact' }">Contact</router-link>
            </div>

            <!-- Mobile Menu Icon -->
            <div class="md:hidden">
                <button @click="toggleMenu" class="text-gray-100 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="md:hidden bg-gray-800 shadow-md rounded-b-lg">
            <div class="flex flex-col items-center space-y-4 py-4">
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
    name: "Navbar",
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    }
};
</script>

<style scoped>
/* Navbar link styling */
.nav-link {
    color: #E5E7EB;
    /* Light gray text */
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: relative;
    display: inline-block;
    transition: color 0.3s, transform 0.3s;
}

/* Active Link */
.active-link {
    color: #F9FAFB;
    /* Pure white */
    font-weight: bold;
    border-bottom: 2px solid #F9FAFB;
}

/* Hover effect */
.nav-link:hover {
    color: #F9FAFB;
    /* Slightly brighter white */
    transform: translateY(-2px);
}

/* Mobile Menu */
@media (max-width: 768px) {
    .nav-link {
        display: block;
        text-align: center;
        padding: 1rem;
    }

    .nav-link:hover {
        background: #1F2937;
        /* Darker black */
        color: #F9FAFB;
        /* White */
        border-radius: 5px;
    }
}
</style>
