<script setup>

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const username = ref()

  const router = useRouter();

  function iniciar() {
    router.push({ name: "about" })
  }
</script>

<template>
  <main>
    <h3>Introduce tú nombre de usuario</h3>
    <input placeholder="username" type="text" v-model="username">
    <button @click="iniciar">Iniciar sesión</button>
  </main>
</template>
