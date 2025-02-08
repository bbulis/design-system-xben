<script setup lang="ts">
import { useAppStore } from '@/stores/app.store.ts'
import HeaderComponent from '@/components/HeaderComponent.vue'

const store = useAppStore()
store.userInfo()

function logout() {
  store.logout()
}
</script>

<template>
  <main>
    <HeaderComponent />
    <div class="main-content">
      <div class="box">
        <div class="box-content">
          <div class="box-heading">
            <h3>Hallo {{ store.fullName }}</h3>
          </div>
          <p>Is User Authenticated: {{ store.isLoggedIn }}</p>
          <pre>Profile: {{ JSON.stringify(store.profile, null, 2) }}</pre>
          <p>Error Code: {{ store.errorCode }}</p>
        </div>
        <div class="box-action">
          <button class="button button-secondary" @click="logout">Abmelden</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-content {
  width: 60%;
  display: flex;
  justify-content: center;
}
</style>
