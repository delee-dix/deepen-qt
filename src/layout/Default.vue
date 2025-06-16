<script setup lang="ts">
import { useRoute } from "vue-router";
import { watch, ref, nextTick } from "vue";
import { MotionConfig, motion } from "motion-v";

const route = useRoute();
const { transitionDirection, getDirection, resetDirection } = useNavigateWithTransition();
const { pageStack } = usePageHistoryStore();

const initial = ref<any>({});
const animate = ref<any>({});

const isAnimating = ref<boolean>(false);
const animationKey = ref<number>(0);

const variants = {
  default: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  right: {
    initial: { x: "-100%" },
    animate: { x: "0%" },
  },
  left: {
    initial: { x: "100%" },
    animate: { x: "0%" },
  },
  top: {
    initial: { y: "100%" },
    animate: { y: "0%" },
  },
  bottom: {
    initial: { y: "-100%" },
    animate: { y: "0%" },
  },
};

watch(
  () => route.fullPath,
  async () => {
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
      // resetDirection();
    }, 300);
  },
  { immediate: true }
);
</script>

<template>
  <MotionConfig :transition="{ duration: 0.3, ease: 'easeInOut' }">
    <motion.div
      :key="`${route.fullPath}-${animationKey}`"
      :initial="initial"
      :animate="animate"
      class="page-container"
    >
      <slot />
    </motion.div>
  </MotionConfig>
</template>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: 100%;
}
</style>
