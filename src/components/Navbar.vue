<template>
  <nav class="navbar bg-slate-900 flex justify-between items-center px-6 py-4 shadow-md font-bold">
    <router-link to="/" class="text-gray-200 hover:text-white">Home</router-link>
    <router-link to="/newtodo" class="text-gray-200 hover:text-white">New Todo</router-link>
    <router-link to="/todolist" class="text-gray-200 hover:text-white">View To-Dos</router-link>
    <router-link to="/notfound" class="text-gray-200 hover:text-white">Not Found</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>