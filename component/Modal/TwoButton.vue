<script setup lang="ts">
  import { useModalStore } from "~/store/modal";

  const modalStore = useModalStore();

  const props = withDefaults(
    defineProps<{
      modalId: string;
      title: string;
      description: string;
      confirmLabel?: string;
      cancelLabel?: string;
    }>(),
    {
      confirmLabel: "Confirm",
      cancelLabel: "Cancel",
    }
  );

  const isVisibleModal = computed(() => modalStore.modals[props.modalId]);

  const closeModal = () => {
    modalStore.hideModal(props.modalId);
  };
</script>

<template>
  <transition name="modal">
    <div v-if="isVisibleModal" class="modal-container">
      <div class="modal">
        <div class="modal-title-container">
          <div class="modal-title">{{ props.title }}</div>
          <div class="modal-description">{{ props.description }}</div>
        </div>
        <div class="modal-body-container">
          <slot name="body" />
        </div>
        <div class="modal-button-container">
          <ButtonPrimary :label="props.confirmLabel" />
          <ButtonText :label="props.cancelLabel" @click="closeModal" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }

  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }

  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
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
      box-shadow: 4px 4px 24px 0px rgba(256, 256, 256, 0.08);

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
  }
</style>
