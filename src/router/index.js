import { createRouter, createWebHistory } from "vue-router"
import vuexTest from "@/views/vuexTest.vue"

const routes = [
  {
    path: "/",
    name: "vuexTest",
    component: vuexTest,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
