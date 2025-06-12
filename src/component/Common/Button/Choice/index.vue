<script setup lang="ts">
const emit = defineEmits<{
  (event: "clickButton"): void;
}>();
</script>

<template>
  <div class="choice-select-item" @click="emit('clickButton')">Delight</div>
</template>

<style lang="scss" scoped>
.choice-select-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(50, 50, 50, 0.5);
}
</style>
