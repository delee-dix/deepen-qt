import type { Meta, StoryObj } from "@storybook-vue/nuxt";
import Radio from "~/component/Radio/index.vue";

const meta = {
  title: "Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: false,
  },
};
