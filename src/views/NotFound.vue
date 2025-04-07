<template>
  <div class="not-found">
    <h1 class="text-3xl font-bold text-red-600">404 - Page Not Found</h1>
    <p class="mt-4 text-gray-700 mt-30">
      Sorry, the page you are looking for does not exist.
    </p>
    <router-link to="/" class="mt-4 inline-block text-blue-500 hover:underline">
      Go back to Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 50px;
}
</style>