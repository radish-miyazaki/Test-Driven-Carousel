import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../Carousel";
import slides from "../examples/slides";

const meta = {
  title: "Example/Carousel",
  component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Basic: Story = {
  args: {
    slides,
  },
};
