<script>
  export default {
    data() {
      return {
        username: ""
      }
    }
  }
</script>

<template>
  <main>
    <h3>Introduce tú nombre de usuario</h3>
    <input placeholder="username" type="text" v-model="username">
  </main>
</template>
