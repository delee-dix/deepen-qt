import type { Meta, StoryObj } from "@storybook-vue/nuxt";

import { useModalStore } from "~/store/modal";

import ModalSurvey from "~/component/Modal/Survey.vue";

import RadioRow from "~/component/Radio/Row.vue";
import InputTextarea from "~/component/Input/Textarea.vue";
const meta = {
  title: "Modal/ModalSurvey",
  component: ModalSurvey,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  render: args => ({
    components: { ModalSurvey, RadioRow, InputTextarea },
    setup() {
      const modalStore = useModalStore();
      onMounted(() => {
        modalStore.showModal(args.modalId);
      });

      const selected = ref("option1");

      return {
        args,
        selected,
        isSelected: (value: string) => selected.value === value,
        updateSelected: (value: string) => (selected.value = value),
      };
    },
    template: `
      <div style="width: 100%; height: 100vh;">
        <ModalSurvey v-bind="args">
          <template #body>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <RadioRow 
                  :model-value="isSelected('option1')"
                  @update:model-value="updateSelected('option1')"
                  label="Yes, regularly" 
                />
                <RadioRow 
                  :model-value="isSelected('option2')"
                  @update:model-value="updateSelected('option2')"
                  label="Occasionally" 
                />
                <RadioRow 
                  :model-value="isSelected('option3')"
                  @update:model-value="updateSelected('option3')"
                  label="Rarely" 
                />
                <RadioRow 
                  :model-value="isSelected('option4')"
                  @update:model-value="updateSelected('option4')"
                  label="Please specify" 
                />
              <InputTextarea placeholder="Please specify" :disabled="selected !== 'option4'" />
            </div>
          </template>
        </ModalSurvey>
      </div>
    `,
  }),
} satisfies Meta<typeof ModalSurvey>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modalId: "test",
    description: "Please invest just 5 seconds!",
    title: "Do you participate in any spiritual gatherings outside of church?",
    confirmLabel: "Submit",
    cancelLabel: "Cancel",
    isDim: false,
  },
};
