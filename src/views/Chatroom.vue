<script>
import Navbar from "../components/Navbar.vue"
import getUser from "../composables/getUser"
import { watch } from "vue"
import { useRouter } from "vue-router"

export default {
  components: { Navbar },
  setup() {
    const { user } = getUser()
    const router = useRouter()

    watch(user, () => {
      if (!user.value) {
        router.push({ name: "Welcome" })
      }
    })
  },
}
</script>
