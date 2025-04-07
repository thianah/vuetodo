<template>
    <div class="todo-details">
      <h1 class="text-2xl font-bold text-green-600">Todo Details</h1>
      <div v-if="loading" class="text-gray-600">Loading...</div>
      <div v-else-if="todo" class="mt-4 p-4 border border-gray-300 rounded-md">
        <h2 class="text-xl font-bold">{{ todo.title }}</h2>
        <p class="mt-2">
          <strong>Status:</strong> {{ todo.completed ? "Completed" : "Pending" }}
        </p>
      </div>
      <div v-else class="text-red-500">Todo not found.</div>
      <router-link to="/todolist" class="mt-4 inline-block text-blue-500 hover:underline mt-40">
        Back to Todo List
      </router-link>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import axios from "axios";
  
  export default {
    name: "TodoDetails",
    setup() {
      const route = useRoute();
      const todo = ref(null);
      const loading = ref(true);
  
      const fetchTodo = async () => {
        try {
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/todos/${id}`
          );
          todo.value = response.data;
        } catch (error) {
          console.error("Error fetching todo:", error);
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(fetchTodo);
  
      return {
        todo,
        loading,
      };
    },
  };
  </script>
  
  <style scoped>
  .todo-details {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  </style>