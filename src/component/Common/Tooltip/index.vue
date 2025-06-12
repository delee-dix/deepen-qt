<script setup lang="ts">
import { ref, onMounted } from "vue";

const emit = defineEmits<{
  (event: "clickTooltip"): void;
}>();

const props = defineProps<{
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}>();

const isVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 300);
});

const clickTooltip = () => {
  emit("clickTooltip");
  isVisible.value = false;
};
</script>

<template>
  <transition name="tooltip">
    <div v-if="isVisible" class="tooltip-bubble" @click="clickTooltip">
      <div class="tooltip-content">
        {{ text }}
      </div>
      <CommonIcon path="ic_close" :width="16" :height="16" />
      <!-- <div class="tooltip-arrow"></div> -->
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.tooltip-bubble {
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: 8px;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 240px;
  background-color: rgba(60, 60, 60, 0.32);
  border: 1px solid #363636;
  backdrop-filter: blur(32px);
  border-radius: 4px;
  padding: 16px;
  box-shadow:
    4px 4px 24px 0px rgba(255, 255, 255, 0.08),
    inset 4px 4px 24px 0px rgba(255, 255, 255, 0.02);
  z-index: 1000;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  .tooltip-content {
    color: #ffffff;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5em;
    text-align: left;
    text-decoration: underline;
    width: 100%;
  }

  .tooltip-arrow {
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid rgba(60, 60, 60, 0.32);

    &::after {
      content: "";
      position: absolute;
      top: -11px;
      left: -8px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 11px solid #363636;
      z-index: -1;
    }
  }
}

.tooltip-enter-active {
  transition: all 0.3s ease;
}

.tooltip-leave-active {
  transition: all 0.3s ease;
}

.tooltip-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px) scale(0.9);
}

.tooltip-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px) scale(0.9);
}
</style>
