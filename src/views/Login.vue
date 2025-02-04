<script setup lang="ts">
function click() {
  alert('Hello')
}
</script>

<template>
  <div class="login-box">
    <h1>User Verwaltung xben.org</h1>
    <div class="login-box-section">
      <p>E-Mail</p>
      <input type="email" class="input" />
    </div>
    <div class="login-box-section">
      <p>Passwort</p>
      <input type="password" class="input" />
    </div>
    <div class="login-box-section login-box-button">
      <button @click="click" class="button button-primary">Anmelden</button>
    </div>
  </div>
</template>

<style scoped>
.login-box {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  margin-top: 3rem;
}

.login-box-section {
  padding: 1rem 0;
}

button {
  margin-right: 0.5rem;
}

input {
  width: 100%;
}
</style>
