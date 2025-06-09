<script setup lang="ts">
  const props = defineProps<{
    text: string;
  }>();
</script>

<template>
  <div class="chat-user-bubble">
    <div class="chat-user-bubble-text">
      {{ text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .chat-user-bubble {
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    padding: 24px 16px;
    border-radius: 8px;
    background: $gradient-bubble;

    .chat-user-bubble-text {
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
      letter-spacing: -0.02em;
      color: $body-active;
      width: fit-content;
    }
  }
</style>
