<script>
  export default {
    data() {
      return {
        username: ""
      }
    },
    methods: {
      iniciar() {
        //this.$router.go(-1) va hacia atrás del historial
        //this.$router.go(2) va hacia delante del historial
        this.$router.push({
          path: "/chats",
          query: {
            variable1: 1
          },
          //Con esto no se guarda como punto en la historia
          replace: true
        });
      }
    }
  }
</script>

<template>
  <main>
    <h3>Introduce tú nombre de usuario</h3>
    <input placeholder="username" type="text" v-model="username">
    <button @click="iniciar">Iniciar sesión</button>
  </main>
</template>
