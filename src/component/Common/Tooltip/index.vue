<script setup lang="ts">
defineProps<{
  text: string;
  position?: "top" | "bottom" | "left" | "right";
}>();
</script>

<template>
  <div class="tooltip-container">
    <div class="tooltip-bubble">
      <div class="tooltip-content">
        {{ text }}
      </div>
      <CommonIcon path="ic_close" :width="16" :height="16" />
      <div class="tooltip-arrow"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tooltip-container {
  position: relative;
  width: 240px;

  .tooltip-bubble {
    position: absolute;
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    background: rgba(60, 60, 60, 0.32);
    backdrop-filter: blur(32px);
    border: 1px solid #363636;
    border-radius: 4px;
    padding: 16px;
    box-shadow:
      4px 4px 24px 0px rgba(255, 255, 255, 0.08),
      inset 4px 4px 24px 0px rgba(255, 255, 255, 0.02);
    z-index: 1000;
    display: flex;
    gap: 8px;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

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
}
</style>
