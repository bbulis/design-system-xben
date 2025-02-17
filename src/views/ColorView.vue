<script setup lang="ts">
import ColorElement from '@/components/ColorElement.vue'

interface Color {
  name: string
  hex: string
}

const colors: Color[] = [
  { name: '--color-primary', hex: '#83b1d4' },
  { name: '--bg-color-darker', hex: '#e0e0e0' },
  { name: '--bg-color', hex: '#fafafa' },
  { name: '--dark-primary', hex: '#5b5b5b' },
  { name: '--danger', hex: '#f46666' },
  { name: '--success', hex: '#b2d4b2' },
]
</script>

<template>
  <div class="content">
    <ColorElement
      v-for="color in colors"
      :key="color.name"
      v-bind:color-name="color.name"
      v-bind:color-hex="color.hex"
    ></ColorElement>
  </div>
  <div class="spacer-3"></div>
</template>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
}
</style>
