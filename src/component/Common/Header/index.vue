<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isQtDetail?: boolean;
  }>(),
  {
    isQtDetail: false,
  }
);
</script>

<template>
  <div class="header" :class="{ 'qt-detail': isQtDetail }">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 16px;
  width: 100%;
  height: 80px;
  align-items: center;

  &.qt-detail {
    color: $white;
    background: $gradient-header;
    background-color: $background;
  }
}
</style>
