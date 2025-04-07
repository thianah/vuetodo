import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NewTodo from "../views/NewTodo.vue";
import TodoList from "../views/TodoList.vue";
import TodoDetails from "../views/TodoDetails.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/newtodo", component: NewTodo },
  { path: "/todolist", component: TodoList },
  { path: "/tododetails/:id", component: TodoDetails },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;