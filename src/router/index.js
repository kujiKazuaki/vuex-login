import { createRouter, createWebHistory } from "vue-router"
import Login from "@/views/login.vue"
import Logout from "@/views/logout.vue"

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Logout",
    name: "Logout",
    component: Logout,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
