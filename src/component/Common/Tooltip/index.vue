<script setup lang="ts">
import { ref, onMounted } from "vue";

const emit = defineEmits<{
  (event: "clickTooltip"): void;
}>();

const props = withDefaults(
  defineProps<{
    text: string;
    position?: "fixed" | "absolute";
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    isSymbol?: boolean;
  }>(),
  {
    position: "fixed",
    isSymbol: false,
  }
);

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

const clickClose = () => {
  isVisible.value = false;
};
</script>

<template>
  <transition name="tooltip">
    <div
      v-if="isVisible"
      class="tooltip-bubble"
      :style="`top: ${props.top}; bottom: ${props.bottom}; left: ${props.left}; right: ${props.right}; position: ${props.position};`"
    >
      <div class="tooltip-content" @click="clickTooltip">
        <CommonIcon v-if="props.isSymbol" path="ic_symbol" :width="32" :height="32" />
        <span class="tooltip-phrase">{{ text }}</span>
      </div>
      <CommonIcon path="ic_x" :width="24" :height="24" @click="clickClose" />
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.tooltip-bubble {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 20px;
  width: fit-content;
  background-color: rgba(60, 60, 60, 0.32);
  border: 1px solid $border;
  border-radius: 4px;
  backdrop-filter: blur(32px);
  box-shadow:
    4px 4px 24px 0px rgba(255, 255, 255, 0.08),
    inset 4px 4px 24px 0px rgba(255, 255, 255, 0.02);
  z-index: 99999999;
  cursor: pointer;

  .tooltip-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 12px;
    width: fit-content;

    .tooltip-phrase {
      display: flex;
      flex-direction: column;
      width: fit-content;
      color: $white;
      font-family: Inter;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
      white-space: pre-line;
      min-width: 164px;
    }
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
  transform: translateY(-10px) scale(0.9);
}

.tooltip-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.9);
}
</style>
