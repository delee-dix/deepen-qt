<script setup lang="ts"></script>

<template>
  <div class="background-radial-gradient"></div>
</template>

<style lang="scss" scoped>
.background-radial-gradient {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: $mobile;
  height: 320px;
  z-index: 99999;
  pointer-events: none;
  background: radial-gradient(
    circle at 48% 100%,
    rgba(255, 255, 255, 0.6) 0%,
    rgba(165, 75, 179, 0) 90%
  );
  opacity: 0.2;
}
</style>
