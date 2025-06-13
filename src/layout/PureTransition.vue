<script setup lang="ts">
import { useRoute } from "vue-router";
import { watch, ref, nextTick } from "vue";

const route = useRoute();
const { getDirection, resetDirection } = useNavigateWithTransition();
const { pageStack } = usePageHistoryStore();

const transitionName = ref<string>("page-transition-default");

watch(
  () => route.fullPath,
  async () => {
    const direction = getDirection();

    transitionName.value = `page-transition-${direction}`;

    await nextTick();

    setTimeout(() => {
      resetDirection();
    }, 300);
  },
  { immediate: true }
);
</script>

<template>
  <transition :name="transitionName">
    <slot />
  </transition>
</template>

<style lang="scss" scoped>
// Default
.page-transition-default-enter-active,
.page-transition-default-leave-active {
  transition: all 0.3s ease;
}

.page-transition-default-enter-from,
.page-transition-default-leave-to {
  opacity: 0;
}

.page-transition-default-enter-to,
.page-transition-default-leave-from {
  opacity: 1;
}

// Left

.page-transition-left-enter-active,
.page-transition-left-leave-active {
  transition: all 0.3s ease;
}

.page-transition-left-enter-from {
  transform: translateX(100%);
}

.page-transition-left-leave-to {
  transform: translateX(-100%);
}

.page-transition-left-enter-to,
.page-transition-left-leave-from {
  transform: translateX(0);
}

// Right

.page-transition-right-enter-active,
.page-transition-right-leave-active {
  transition: all 0.3s ease;
}

.page-transition-right-enter-from {
  transform: translateX(-100%);
}

.page-transition-right-leave-to {
  transform: translateX(100%);
}

.page-transition-right-enter-to,
.page-transition-right-leave-from {
  transform: translateX(0);
}

// Top

.page-transition-top-enter-active,
.page-transition-top-leave-active {
  transition: all 0.3s ease;
}

.page-transition-top-enter-from {
  transform: translateY(100%);
}

.page-transition-top-leave-to {
  transform: translateY(-100%);
}

.page-transition-top-enter-to,
.page-transition-top-leave-from {
  transform: translateY(0);
}

// Bottom

.page-transition-bottom-enter-active,
.page-transition-bottom-leave-active {
  transition: all 0.3s ease;
}

.page-transition-bottom-enter-from {
  transform: translateY(-100%);
}

.page-transition-bottom-leave-to {
  transform: translateY(100%);
}

.page-transition-bottom-enter-to,
.page-transition-bottom-leave-from {
  transform: translateY(0);
}
</style>
