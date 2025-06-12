<script setup lang="ts">
const emit = defineEmits<{
  (event: "clickButton"): void;
}>();

defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="text-button" @click="emit('clickButton')">{{ label }}</div>
</template>

<style lang="scss" scoped>
.text-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  color: $body;
  user-select: none;
  cursor: pointer;
}
</style>
