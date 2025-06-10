import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import { useModalStore } from "~/store/modal";
import ModalTwoButton from "./Modal/TwoButton.vue";

const meta = {
  title: "Modal/ModalTwoButton",
  component: ModalTwoButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => ({
    components: { ModalTwoButton },
    setup() {
      const modalStore = useModalStore();
      onMounted(() => {
        modalStore.showModal(args.modalId);
      });
      return { args };
    },
    template: '<div style="width: 100%; height: 100vh;"><ModalTwoButton v-bind="args" /></div>',
  }),
} satisfies Meta<typeof ModalTwoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalTwoButtonStory: Story = {
  args: {
    modalId: "test",
    title: "Test Modal",
    description: "This is a test modal",
    confirmLabel: "Confirm",
    cancelLabel: "Cancel",
    isDim: false,
  },
};
