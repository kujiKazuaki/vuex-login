import { createStore } from "vuex"

export default createStore({
  state: {
    user: {},
    isLoggedIn: false,
  },
  getters: {
    user(state) {
      return state.user
    },
    isLoggedIn(state) {
      return state.isLoggedIn
    },
  },
  mutations: {
    onAuthStateChanged(state, user) {
      // firebaseが返したユーザー情報
      state.user = user
    },
    onUserLoginStatusChanged(state, isLoggedIn) {
      // ログインしているかどうか
      state.isLoggedIn = isLoggedIn
    },
  },
  actions: {},
  modules: {},
})
