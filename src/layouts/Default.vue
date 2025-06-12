<script setup lang="ts">
import { useRoute } from "vue-router";
import { watch, ref, nextTick } from "vue";
import { usePageTransition } from "~/composables/useNavigateWithTransition";
import { MotionConfig, motion } from "motion-v";

const route = useRoute();
const { transitionDirection, getDirection } = usePageTransition();
const { pageStack } = usePageStack();

const initial = ref<any>({});
const animate = ref<any>({});

const isAnimating = ref<boolean>(false);
const animationKey = ref<number>(0);

const variants = {
  default: {
    initial: { x: 0 },
    animate: { x: 0 },
  },
  left: {
    initial: { x: 100 },
    animate: { x: 0 },
  },
  right: {
    initial: { x: -100 },
    animate: { x: 0 },
  },
  top: {
    initial: { y: 100 },
    animate: { y: 0 },
  },
  bottom: {
    initial: { y: -100 },
    animate: { y: 0 },
  },
};

watch(
  () => route.fullPath,
  async to => {
    isAnimating.value = true;

    const direction = getDirection();

    const variant = variants[direction];
    initial.value = variant.initial;
    animate.value = variant.initial;

    await nextTick();
    animate.value = variant.animate;

    animationKey.value++;

    setTimeout(() => {
      isAnimating.value = false;
      // reset();
    }, 300);
  },
  { immediate: true }
);
</script>

<template>
  <MotionConfig :transition="{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }">
    <motion.div
      :key="`${route.fullPath}-${animationKey}`"
      :initial="initial"
      :animate="animate"
      class="page-container"
    >
      <NuxtPage />
    </motion.div>
  </MotionConfig>
</template>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: 100%;
}
</style>
