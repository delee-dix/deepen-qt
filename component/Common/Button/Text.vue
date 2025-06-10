<script setup lang="ts">
  const emit = defineEmits<{
    (event: "clickButton"): void;
  }>();

  defineProps<{
    label: string;
  }>();
</script>

<template>
  <div class="line-button" @click="emit('clickButton')">{{ label }}</div>
</template>

<style lang="scss" scoped>
  .line-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
  }
</style>
