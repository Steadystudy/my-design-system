import type { Meta, StoryObj } from '@storybook/react';
import Carousel from './Carousel';

const images = [
  {
    imageUrl: 'https://source.unsplash.com/random/?programming',
  },
  {
    imageUrl: 'https://source.unsplash.com/daily',
  },
  {
    imageUrl: 'https://source.unsplash.com/weekly',
  },
];

export default {
  title: 'Components/Carousel',
  component: Carousel,
  args: {
    width: 250,
    height: 167,
    images,
  },
} satisfies Meta<typeof Carousel>;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: (args) => <Carousel {...args} />,
};

export const ShowOnHoverCarousel: Story = {
  render: (args) => <Carousel {...args} showOnHover />,
};

export const DotsCarousel: Story = {
  render: (args) => <Carousel {...args} showDots showArrow={false} />,
};

export const SlideAutoPlay: Story = {
  render: (args) => <Carousel {...args} autoPlay showOnHover />,
};

export const FadeAutoPlay: Story = {
  render: (args) => <Carousel {...args} autoPlay showOnHover type="fade" />,
};
