import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import Textarea from "~/component/Input/Textarea.vue";

const meta = {
  title: "Input/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Please write your gathering",
  },
};

export const WithInitialValue: Story = {
  args: {
    modelValue: "This is pre-written content.",
    placeholder: "Please write your gathering",
  },
};

export const LongPlaceholder: Story = {
  args: {
    modelValue:
      "Please write a detailed description of your gathering here. It would be helpful to include the purpose, topic, and how it will be conducted.",
  },
};

export const Disabled: Story = {
  args: {
    modelValue: "This text cannot be modified.",
    placeholder: "Please write your gathering",
    disabled: true,
  },
};

export const DisabledEmpty: Story = {
  args: {
    placeholder: "This is a placeholder in disabled state",
    disabled: true,
  },
};
