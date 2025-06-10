<script setup lang="ts">
  const props = defineProps<{
    modelValue?: boolean;
  }>();

  const emit = defineEmits<{
    (e: "update:modelValue", value: boolean): void;
  }>();

  const toggle = () => {
    emit("update:modelValue", !props.modelValue);
  };
</script>

<template>
  <div class="radio-input" @click="toggle">
    <div class="radio-input-item">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle class="radio-border" cx="8" cy="8" r="7.5" :stroke="modelValue ? '#ffffff' : '#C6C6C6'" />
        <circle class="radio-dot" cx="8" cy="8" r="5" fill="#ffffff" :class="{ 'is-active': modelValue }" />
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .radio-input {
    display: inline-flex;
    cursor: pointer;

    .radio-input-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
    }
  }

  .radio-border {
    transition: stroke 0.2s ease;
  }

  .radio-dot {
    transform-origin: center;
    transform: scale(0);
    opacity: 0;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &.is-active {
      transform: scale(1);
      opacity: 1;
    }
  }
</style>
