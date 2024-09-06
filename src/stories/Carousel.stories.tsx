import type { Meta, StoryObj } from "@storybook/react";
import Carousel from "../Carousel";
import slides from "../examples/slides";
import { fn } from "@storybook/test";
import { useArgs } from "@storybook/preview-api";

const meta = {
  title: "Example/Carousel",
  component: Carousel,
  args: { onSlideIndexChange: fn() },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Basic: Story = {
  args: {
    slides,
  },
  render: function RenderCarousel(args) {
    const [, updateArgs] = useArgs();

    return (
      <Carousel
        {...args}
        onSlideIndexChange={(newSlideIndex) => {
          updateArgs({ slideIndex: newSlideIndex });

          args.onSlideIndexChange?.(newSlideIndex);
        }}
      />
    );
  },
};
