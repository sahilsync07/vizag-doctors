<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold">Contact Us</h1>
    <p class="text-gray-600 mt-4">Get in touch with us for inquiries or support.</p>
    <form class="mt-8">
      <label class="block text-sm font-medium">Name</label>
      <input type="text" class="border p-2 rounded w-full mt-2" placeholder="Your Name" />

      <label class="block text-sm font-medium mt-4">Email</label>
      <input type="email" class="border p-2 rounded w-full mt-2" placeholder="Your Email" />

      <label class="block text-sm font-medium mt-4">Message</label>
      <textarea
        class="border p-2 rounded w-full mt-2"
        rows="4"
        placeholder="Your Message"
      ></textarea>

      <button class="bg-black text-white px-4 py-2 rounded mt-4 hover:bg-gray-800">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style scoped></style>
