<template>
  <nav v-if="user">
    <div>
      <p>ログイン名：{{ user.displayName }}</p>
      <p class="email">現在のログイン(アドレス)：{{ user.email }}</p>
    </div>
    <button @click="handleClick">Log out</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout"
import getUser from "../composables/getUser"

export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = getUser()

    const handleClick = async () => {
      await logout()
      if (!error.value) {
        console.log("user logged out")
      }
    }

    return { handleClick, user }
  },
}
</script>
