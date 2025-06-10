import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import RadioRow from "~/component/Radio/Row.vue";

const meta = {
  title: "Radio/Row",
  component: RadioRow,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Radio",
    modelValue: false,
  },
};

export const Group: Story = {
  args: {
    label: "Option 1",
    modelValue: false,
  },
  render: () => ({
    components: { RadioRow },
    setup() {
      const selected = ref("option1");

      return {
        selected,
        isSelected: (value: string) => selected.value === value,
        updateSelected: (value: string) => (selected.value = value),
      };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <RadioRow 
          :model-value="isSelected('option1')"
          @update:model-value="updateSelected('option1')"
          label="Option 1" 
        />
        <RadioRow 
          :model-value="isSelected('option2')"
          @update:model-value="updateSelected('option2')"
          label="Option 2" 
        />
        <RadioRow 
          :model-value="isSelected('option3')"
          @update:model-value="updateSelected('option3')"
          label="Option 3" 
        />
        <div style="color: white; margin-top: 8px;">
          Selected Option: {{ selected }}
        </div>
      </div>
    `,
  }),
};
