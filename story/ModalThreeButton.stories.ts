import type { Meta, StoryObj } from "@storybook-vue/nuxt";

import { useModalStore } from "~/store/modal";

import ModalThreeButton from "~/component/Modal/ThreeButton.vue";

const meta = {
  title: "Modal/ModalThreeButton",
  component: ModalThreeButton,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  render: args => ({
    components: { ModalThreeButton },
    setup() {
      const modalStore = useModalStore();

      onMounted(() => {
        modalStore.showModal(args.modalId);
      });

      return { args };
    },
    template: `
      <div style="width: 100%; height: 100vh;">
        <ModalThreeButton 
          v-bind="args" 
          :firstIconPath="args.firstIconPath" 
          :secondIconPath="args.secondIconPath" 
        />
      </div>
    `,
  }),
} satisfies Meta<typeof ModalThreeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modalId: "test",
    title: "Test Modal",
    description: "This is a test modal",
    firstLabel: "Confirm",
    secondLabel: "Cancel",
    thirdLabel: "Cancel",
    isDim: false,
  },
};
