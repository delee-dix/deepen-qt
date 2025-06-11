import { reactive } from "vue";
import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", () => {
  const modals = reactive<Record<string, boolean>>({});

  const showModal = (modalId: string) => {
    if (!modals[modalId]) {
      modals[modalId] = true;
    }
  };

  const hideModal = (modalId: string) => {
    if (modals[modalId] !== undefined) {
      delete modals[modalId];
    } else {
      console.warn(`[hideModal] Attempted to remove non-existent modal: ${modalId}`, modals.value);
    }
  };

  return { modals, showModal, hideModal };
});
