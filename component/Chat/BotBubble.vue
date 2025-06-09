<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      text: string;
      isQuote?: boolean;
    }>(),
    {
      isQuote: false,
    }
  );
</script>

<template>
  <div class="chat-bot-bubble">
    <div v-if="isQuote" class="chat-bot-bubble-quote-bar"></div>
    <div class="chat-bot-bubble-text">
      {{ text }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .chat-bot-bubble {
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: fit-content;
    border-radius: 8px;
    gap: 8px;

    .chat-bot-bubble-text {
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
      text-align: left;
      letter-spacing: -0.02em;
      color: $body-active;
      width: fit-content;
    }

    .chat-bot-bubble-quote-bar {
      width: 4px;
      height: 100%;
      background: $white;
    }
  }
</style>
