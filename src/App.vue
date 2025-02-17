<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent></HeaderComponent>

  <main>
    <div class="main-content">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
