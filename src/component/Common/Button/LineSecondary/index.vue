<script setup lang="ts">
const emit = defineEmits<{
  (event: "clickButton"): void;
}>();

const props = withDefaults(
  defineProps<{
    label: string;
    iconPath: string;
  }>(),
  {
    label: "Label",
    iconPath: "",
  }
);
</script>

<template>
  <div class="line-secondary-button-container">
    <CommonIcon v-if="props.iconPath" :path="props.iconPath" :width="16" :height="16" />
    <div class="line-secondary-button" @click="emit('clickButton')">{{ label }}</div>
  </div>
</template>

<style lang="scss" scoped>
.line-secondary-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 40px;
  border: 1px solid $border;
  border-radius: 4px;
  user-select: none;
  cursor: pointer;

  .line-secondary-button {
    font-size: 14px;
    font-weight: 400;
    color: $body;
  }
}
</style>
