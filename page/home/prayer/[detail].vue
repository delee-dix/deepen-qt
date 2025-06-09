<script setup lang="ts"></script>

<template>
  <img
    src="/icon/ic_chevron_left.svg"
    alt="chevron-left"
    @click="$router.back()"
  />
  <h1>Prayer Detail Page</h1>
</template>

<style lang="scss" scoped>
h1 {
  color: blue;
}
</style>
