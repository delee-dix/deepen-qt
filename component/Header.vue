<script setup lang="ts"></script>

<template>
  <div class="tab">
    <slot />
  </div>
</template>

<style scoped>
  .tab {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 16px;
    width: 100%;
  }
</style>
