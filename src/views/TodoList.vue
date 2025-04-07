<template>
    <div class="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 class="text-2xl font-bold text-gray-800 mb-4">Todo List</h1>
      <div class="flex gap-2 mb-4">
        <input
          v-model="search"
          type="text"
          placeholder="Search todos"
          class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2  focus:ring-blue-500 "
        />
        <select v-model="filter" class="p-2 border border-gray-300  rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div v-if="loading" class="text-center text-gray-600">Loading...</div>
      <ul v-else>
        <li
          v-for="todo in filteredTodos"
          :key="todo.id"
          class="block p-3 bg-slate-900 rounded-md hover:bg-blue-500 hover:text-white transition text-blue-100"
        >
          <router-link :to="`/tododetails/${todo.id}`">{{ todo.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "TodoList",
    data() {
      return {
        todos: [],
        loading: false,
        search: "",
        filter: "all",
        limit: 10, // Define the limit
        page: 1,   // Define the page
      };
    },
    computed: {
      filteredTodos() {
        return this.todos
          .filter((todo) => {
            if (this.filter === "completed") return todo.completed;
            if (this.filter === "pending") return !todo.completed;
            return true;
          })
          .filter((todo) =>
            todo.title.toLowerCase().includes(this.search.toLowerCase())
          );
      },
    },
    async created() {
      this.loading = true;
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/todos?_limit=${10}&_page=${1}`
        );
        this.todos = response.data;
      } catch (error) {
        console.error(error);
      }
      this.loading = false;
    },
  };
  </script>