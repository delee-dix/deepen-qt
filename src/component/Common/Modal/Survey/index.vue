<script setup lang="ts">
import { useModalStore } from "~/store/modal";

const modalStore = useModalStore();

const emit = defineEmits<{
  (event: "clickConfirm"): void;
}>();

const props = withDefaults(
  defineProps<{
    modalId: string;
    description?: string;
    title: string;
    confirmLabel?: string;
    cancelLabel?: string;
    width?: string;
    isDim?: boolean;
    isBody?: boolean;
  }>(),
  {
    description: "Please invest just 5 seconds!",
    title: "I'm curious about you!",
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
    isDim: true,
    isBody: false,
    width: "",
  }
);

const isVisibleModal = computed(() => modalStore.modals[props.modalId]);

const clickConfirm = () => {
  emit("clickConfirm");
  modalStore.hideModal(props.modalId);
};

const clickCancel = () => {
  modalStore.hideModal(props.modalId);
};
</script>

<template>
  <transition name="modal">
    <div
      v-if="isVisibleModal"
      class="modal-survey-container"
      :class="{ 'is-dim': props.isDim, 'is-body': props.isBody }"
    >
      <div class="modal" :style="{ width: props.width }">
        <div class="modal-title-container">
          <div class="modal-description">{{ props.description }}</div>
          <div class="modal-title">{{ props.title }}</div>
        </div>
        <div class="modal-body-container">
          <slot name="body" />
        </div>
        <div class="modal-button-container">
          <CommonButtonPrimary :label="props.confirmLabel" @click="clickConfirm" />
          <CommonButtonText :label="props.cancelLabel" @click="clickCancel" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-survey-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999999;

  .modal {
    display: flex;
    flex-direction: column;
    width: 327px;
    height: fit-content;
    border-radius: 4px;
    padding: 24px;
    padding-bottom: 12px;
    gap: 24px;
    background-color: $background-modal;
    z-index: 9999999;
    box-shadow: 4px 4px 64px 0px rgba(0, 0, 0, 0.08);

    .modal-title-container {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .modal-description {
        font-size: 16px;
        color: $body;
      }

      .modal-title {
        font-size: 20px;
        font-weight: 500;
        color: $body-active;
      }
    }

    .modal-button-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }

  &.is-dim {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
