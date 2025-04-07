<template>
    <div class="mt-6">
      <h2 class="text-2xl font-bold text-green-600">Add New Todo</h2>
      <input
        v-model="newTodo"
        type="text"
        placeholder="Add new todo"
        class="p-2 border border-gray-300 rounded-md mt-30"
      />
      <button @click="handleAddTodo" class="ml-2 p-2 bg-green-500 text-white rounded-md">
        Add Todo
      </button>
      <div>
        <h2 class="text-2xl font-bold text-green-600">Todos</h2>
        <ul>
          <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "NewTodo",
    data() {
      return {
        newTodo: "",
        todos: [],
      };
    },
    methods: {
      async handleAddTodo() {
        if (this.newTodo.trim() === "") return;
        try {
          const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
            title: this.newTodo,
            completed: false,
          });
          this.todos.push(response.data);
          this.newTodo = "";
        } catch (error) {
          console.error("Error adding todo", error);
        }
      },
    },
  };
  </script>