<script setup lang="ts">
  import { useModalStore } from "~/store/modal";

  const modalStore = useModalStore();

  const emit = defineEmits<{
    (event: "clickFirstButton"): void;
    (event: "clickSecondButton"): void;
    (event: "clickThirdButton"): void;
  }>();

  const props = withDefaults(
    defineProps<{
      modalId: string;
      title: string;
      description: string;
      firstLabel?: string;
      secondLabel?: string;
      thirdLabel?: string;
      firstIconPath?: string;
      secondIconPath?: string;
      width?: string;
      isDim?: boolean;
      isBody?: boolean;
    }>(),
    {
      firstLabel: "Confirm",
      secondLabel: "Cancel",
      thirdLabel: "Cancel",
      firstIconPath: "",
      secondIconPath: "",
      width: "",
      isDim: true,
      isBody: false,
    }
  );

  const isVisibleModal = computed(() => modalStore.modals[props.modalId]);
</script>

<template>
  <transition name="modal">
    <div v-if="isVisibleModal" class="modal-container" :class="{ 'is-dim': props.isDim, 'is-body': props.isBody }">
      <div class="modal" :style="{ width: props.width }">
        <div class="modal-title-container">
          <div class="modal-title">{{ props.title }}</div>
          <div class="modal-description">{{ props.description }}</div>
        </div>
        <div class="modal-button-container">
          <CommonButtonLinePrimary
            :label="props.firstLabel"
            :iconPath="props.firstIconPath"
            @click="emit('clickFirstButton')"
          />
          <CommonButtonLineSecondary
            :label="props.secondLabel"
            :iconPath="props.secondIconPath"
            @click="emit('clickSecondButton')"
          />
          <CommonButtonText :label="props.thirdLabel" @click="emit('clickThirdButton')" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    background-color: transparent;
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
        gap: 12px;
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
