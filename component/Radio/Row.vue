<script setup lang="ts">
  import Radio from "./index.vue";

  const props = defineProps<{
    modelValue?: boolean;
    label: string;
  }>();

  const emit = defineEmits<{
    (event: "update:modelValue", value: boolean): void;
  }>();

  const toggle = () => {
    emit("update:modelValue", !props.modelValue);
  };
</script>

<template>
  <div class="radio-label" @click="toggle">
    <Radio :model-value="modelValue" @update:model-value="emit('update:modelValue', $event)" />
    <span class="label" :class="{ 'is-active': modelValue }">{{ label }}</span>
  </div>
</template>

<style lang="scss" scoped>
  .radio-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    user-select: none;
    cursor: pointer;

    .label {
      color: $body;
      font-size: 14px;

      &.is-active {
        color: $body-active;
      }
    }

    &:hover {
      .label {
        opacity: 0.8;
      }
    }
  }
</style>
