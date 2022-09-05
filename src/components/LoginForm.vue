<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "vue"
import useLogin from "../composables/useLogin"
export default {
  // composition APIで$emitを使う場合props,contextを引数にわたす
  // context.emit()が使える
  setup(props, context) {
    // refs
    const email = ref("")
    const password = ref("")

    const { error, login } = useLogin()

    const handleSubmit = async () => {
      // console.log(email.value, password.value)
      await login(email.value, password.value)
      if (!error.value) {
        console.log("user logged in")
        context.emit("login") //Welcome.vueにわたす
      }
    }

    return { email, password, handleSubmit, error }
  },
}
</script>
