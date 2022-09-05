import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import "./assets/main.css"

// Firebase authサービスをインポート
import { projectAuth } from "./firebase/config"

let app

// appに値があるときはappを毎回実行しないようにする
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(router).mount("#app")
  }
})
