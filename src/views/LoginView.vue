<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/app.store.ts'

const store = useAppStore()
const email = ref()
const password = ref()

function click() {
  store.login(email.value, password.value)
}
</script>

<template>
  <div class="login-box">
    <h1>User Verwaltung xben.org</h1>
    <div class="login-box-section">
      <p>E-Mail</p>
      <input type="email" class="input" v-model="email" />
    </div>
    <div class="login-box-section">
      <p>Passwort</p>
      <input type="password" class="input" v-model="password" />
    </div>
    <div class="login-box-section login-box-button">
      <button @click="click" class="button button-primary">Anmelden</button>
    </div>
  </div>
</template>

<style scoped>
.login-box {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
  width: 100%;
}

.login-box-section {
  padding: 1rem 0;
}

button {
  margin-right: 0.5rem;
}

input {
  width: 30rem;
}
</style>
