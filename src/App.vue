<template>
  <div class="allContainer">
    <button v-on:click="change()">変更</button>
    <div>{{ this.$store.state.count }}</div>
  </div>
</template>

<script>
export default {
  methods: {
    change() {
      this.$store.state.count += 1
    },
  },
}
</script>

<style scoped>
.allContainer {
  border: 2px solid red;
}
</style>
