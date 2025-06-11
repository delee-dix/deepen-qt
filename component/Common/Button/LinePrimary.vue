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
  <div class="line-primary-button-container">
    <CommonIcon v-if="props.iconPath" :path="props.iconPath" :width="16" :height="16" />
    <div class="line-primary-button" @click="emit('clickButton')">{{ label }}</div>
  </div>
</template>

<style lang="scss" scoped>
.line-primary-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: 40px;
  background: $background-glass;
  border: 1px solid $border;
  border-radius: 4px;
  box-shadow: inset 4px 4px 24px 0px rgba(256, 256, 256, 0.08);
  user-select: none;
  cursor: pointer;

  .line-primary-button {
    font-size: 14px;
    font-weight: 400;
    color: $body;
  }
}
</style>
