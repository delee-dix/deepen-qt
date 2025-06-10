<script setup lang="ts">
  import { ref, nextTick } from "vue";

  const props = withDefaults(
    defineProps<{
      modelValue?: string;
      placeholder?: string;
      disabled?: boolean;
    }>(),
    {
      disabled: false,
    }
  );

  const emit = defineEmits<{
    (event: "update:modelValue", value: string): void;
  }>();

  const textareaRef = ref<HTMLTextAreaElement>();

  const adjustHeight = async () => {
    if (!textareaRef.value) return;

    await nextTick();

    textareaRef.value.style.height = "auto";

    const scrollHeight = textareaRef.value.scrollHeight;
    const maxHeight = 120;
    const minHeight = 96;

    const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
    textareaRef.value.style.height = `${newHeight}px`;
  };

  const handleInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    emit("update:modelValue", target.value);
    adjustHeight();
  };
</script>

<template>
  <div class="textarea-container" :class="{ 'is-disabled': disabled }">
    <textarea
      ref="textareaRef"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
    />
  </div>
</template>

<style lang="scss" scoped>
  .textarea-container {
    position: relative;
    width: 279px;

    textarea {
      width: 100%;
      min-height: 96px;
      max-height: 160px;
      padding: 8px 16px;
      background: $background-glass;
      border: 1px solid $border;
      border-radius: 4px;
      box-shadow: inset 4px 4px 24px 0px rgba(255, 255, 255, 0.04);
      color: $body-active;
      font-size: 14px;
      font-weight: 400;
      line-height: 150%;
      resize: none;
      transition: all 0.2s ease;
      overflow-y: auto;

      &::placeholder {
        color: $body;
      }

      &:focus {
        outline: none;
        border-color: $body;
      }

      &:disabled {
        background: rgba($background-glass, 0.5);
        color: rgba($body-active, 0.5);
        cursor: not-allowed;

        &::placeholder {
          color: rgba($body, 0.5);
        }
      }

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 2px;
      }
    }

    &.is-disabled {
      opacity: 0.7;
    }
  }
</style>
