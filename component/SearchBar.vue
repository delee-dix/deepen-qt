<script setup lang="ts">
  const props = defineProps<{
    placeholder?: string;
    onSearch?: (e: Event) => void;
    onToggleLeftSide?: (e: MouseEvent) => void;
  }>();
</script>

<template>
  <div class="search-input">
    <IconComponent path="ic_search" :width="24" :height="24" />
    <input type="text" :placeholder="placeholder" class="input" @input="onSearch && onSearch($event)" />
  </div>
</template>

<style lang="scss" scoped>
  .search-input {
    display: flex;
    justify-content: row;
    align-items: center;
    gap: 8px;
    background-color: rgba(50, 50, 50, 0.5);
    border: 1px solid $border;
    color: $body;
    border-radius: 4px;
    font-size: 14px;
    padding-left: 16px;
    width: 100%;
    height: 48px;

    .input {
      background-color: transparent;
      border: none;
      outline: none;
      color: $body;
      font-size: 14px;
      width: 100%;
    }
  }
</style>
