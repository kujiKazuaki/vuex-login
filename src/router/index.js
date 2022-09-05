import { createRouter, createWebHistory } from "vue-router"
import Welcome from "../views/Welcome.vue"
import Chatroom from "../views/Chatroom.vue"
import { projectAuth } from "../firebase/config"

// auth guard
const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  // console.log('current user in auth guard:', user)
  if (!user) {
    // userが認証されていないとき
    next({ name: "Welcome" }) //nextでメインページに飛ばす
    // これだけだとリロードするたびに認証がとれなくなるのでmain.jsを修正する
  } else {
    next() //userが認証されているとき、飛び先に送る
  }
}

// No auth guard
// こちらは認証されているユーザーが、ログイン画面にアクセスできないようにしたい
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) {
    // userが認証されていないとき
    next({ name: "Chatroom" }) //nextでchatroomに飛ばす
  } else {
    next() //userが認証されているとき、飛び先に送る
  }
}

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: requireNoAuth, //認証をしているユーザーがみれないようにする
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: requireAuth, //認証をしているユーザーのみがみれるようにする
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
