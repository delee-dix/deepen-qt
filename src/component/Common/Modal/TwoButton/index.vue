<script setup lang="ts">
import { useModalStore } from "~/store/modal";

const modalStore = useModalStore();

const emit = defineEmits<{
  (event: "clickConfirmButton"): void;
}>();

const props = withDefaults(
  defineProps<{
    modalId: string;
    title: string;
    description: string;
    confirmLabel?: string;
    cancelLabel?: string;
    width?: string;
    isDim?: boolean;
    isBody?: boolean;
  }>(),
  {
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
    isDim: true,
    isBody: false,
    width: "",
  }
);

const isVisibleModal = computed(() => modalStore.modals[props.modalId]);

const closeModal = () => {
  modalStore.hideModal(props.modalId);
};
</script>

<template>
  <transition name="modal">
    <div
      v-if="isVisibleModal"
      class="modal-container"
      :class="{ 'is-dim': props.isDim, 'is-body': props.isBody }"
    >
      <div class="modal" :style="{ width: props.width }">
        <div class="modal-title-container">
          <div class="modal-title">{{ props.title }}</div>
          <div class="modal-description">{{ props.description }}</div>
        </div>
        <div v-if="isBody" class="modal-body-container">
          <slot name="body" />
        </div>
        <div class="modal-button-container">
          <CommonButtonPrimary :label="props.confirmLabel" @click="emit('clickConfirmButton')" />
          <CommonButtonText :label="props.cancelLabel" @click="closeModal" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 9999999;

  .modal {
    display: flex;
    flex-direction: column;
    width: 280px;
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

      .modal-title {
        font-size: 18px;
        font-weight: 700;
        color: $body-active;
      }

      .modal-description {
        font-size: 14px;
        color: $body;
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
