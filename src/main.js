import { createApp } from "vue"
import App from "./App.vue"
import "./firebase.js" // これを追加
import store from "@/store"
import router from "./router"

createApp(App).use(router).use(store).mount("#app")
