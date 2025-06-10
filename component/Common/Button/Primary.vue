<script setup lang="ts">
  const emit = defineEmits<{
    (event: "clickButton"): void;
  }>();

  defineProps<{
    label: string;
  }>();
</script>

<template>
  <div class="primary-button" @click="emit('clickButton')">{{ label }}</div>
</template>

<style lang="scss" scoped>
  .primary-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $gradient-primary;
    width: 100%;
    height: 40px;
    border-radius: 4px;
  }
</style>
