<script setup lang="ts">
import { ref, nextTick } from "vue";

const props = withDefaults(
  defineProps<{
    isChoice?: boolean;
    choiceTitle?: string;
  }>(),
  {
    isChoice: false,
    choiceTitle: "",
  }
);

const content = defineModel<string>({ default: "" });
const textareaRef = ref<HTMLTextAreaElement>();
const containerRef = ref<HTMLDivElement>();

const adjustHeight = async () => {
  if (!textareaRef.value || !containerRef.value) return;

  await nextTick();

  textareaRef.value.style.height = "auto";

  const scrollHeight = textareaRef.value.scrollHeight;
  const maxHeight = 120;
  const minHeight = 24;

  const newTextareaHeight = Math.min(
    Math.max(scrollHeight, minHeight),
    maxHeight
  );
  textareaRef.value.style.height = `${newTextareaHeight}px`;

  const containerHeight = newTextareaHeight + 56 + 32;
  containerRef.value.style.height = `${containerHeight}px`;
};

const handleInput = () => {
  adjustHeight();
};

const handleClickButton = () => {
  console.log("click");
};
</script>

<template>
  <div class="chat-total-input-container">
    <div v-if="isChoice" class="choice-container">
      <div v-if="choiceTitle" class="choice-title">{{ choiceTitle }}</div>
      <div class="choice-select-list">
        <ButtonChoice label="Delight" @clickButton="handleClickButton" />
        <ButtonChoice label="Sorrow" @clickButton="handleClickButton" />
        <ButtonChoice label="Stress" @clickButton="handleClickButton" />
        <ButtonChoice label="Expect" @clickButton="handleClickButton" />
      </div>
    </div>
    <div ref="containerRef" class="chat-input-container">
      <textarea
        ref="textareaRef"
        v-model="content"
        class="chat-input"
        placeholder="Please tell me anything..."
        @input="handleInput"
        rows="1"
      />
      <div class="chat-input-button-container">
        <div class="chat-input-button">
          <CommonIcon path="ic_mic" :width="24" :height="24" />
        </div>
        <div class="chat-input-button">
          <CommonIcon path="ic_send" :width="24" :height="24" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.chat-total-input-container {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .choice-container {
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    gap: 8px;

    .choice-title {
      display: flex;
      font-size: 14px;
      color: $body;
    }

    .choice-select-list {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      width: 100%;
    }

    .choice-select-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      background-color: rgba(50, 50, 50, 0.5);
      border: 1px solid $border;
      border-radius: 1000px;
      height: 40px;
      font-size: 12px;
      box-shadow: inset 2px 2px 24px rgba(256, 256, 256, 0.1);
    }
  }

  .chat-input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 120px;
    max-height: 240px;
    background-color: $background-chat;
    border: 1px solid $border;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 16px;
    padding-right: 12px;
    box-sizing: border-box;
    z-index: 100;
    transition: height 0.2s ease;
    backdrop-filter: blur(32px);

    .chat-input {
      background-color: transparent;
      border: none;
      width: 100%;
      color: $body;
      line-height: 1.5;
      min-height: 24px;
      max-height: 120px;
      resize: none;
      overflow-y: auto;
      font-family: inherit;
      font-size: inherit;

      &::placeholder {
        color: $body;
      }

      &:focus {
        outline: none;
      }

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 2px;
      }
    }

    .chat-input-button-container {
      display: flex;
      flex-direction: row;
      justify-content: end;
      margin-top: 8px;

      .chat-input-button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 56px;
        height: 56px;
        cursor: pointer;
      }
    }
  }
}
</style>
