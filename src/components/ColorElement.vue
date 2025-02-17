<script setup lang="ts">
const props = defineProps({ colorName: String, colorHex: String })
</script>

<template>
  <div class="color-box">
    <div class="color-box-name">
      <code>{{ props.colorName }}</code>
    </div>
    <div class="color-box-hex" :style="{ 'background-color': props.colorHex }"></div>
  </div>
</template>

<style scoped>
.color-box {
  width: 15rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  border-style: solid;
  border-width: 0.2rem;
  border-radius: 0.2rem;
  border-color: var(--dark-primary);
}

.color-box-name {
  padding-left: 0.3rem;
  height: 5rem;
  display: flex;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-width: 0.2rem;
  border-bottom-color: var(--dark-primary);
}

.color-box-hex {
  width: 100%;
  height: 100%;
}
</style>
