import type { Meta, StoryObj } from '@storybook/react';
import Carousel, { CarouselProps } from './Carousel';

const images = [
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1200px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
  },
  {
    imageUrl:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/57/44/0c/filename-img-1097-jpg.jpg?w=700&h=-1&s=1',
  },
  {
    imageUrl:
      'https://imageio.forbes.com/specials-images/imageserve/646b6b45d9b20ac15900fd8a/0x0.jpg?format=jpg&width=1200',
  },
];

export default {
  title: 'Components/Carousel',
  component: Carousel,
  args: {
    width: 250,
    height: 167,
    images,
    // showDots: false,
    // showNavigationOnHover: false,
    // isDraggable: true,
  },
} satisfies Meta<typeof Carousel>;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  render: ({ width, height }) => <Carousel width={width} height={height} images={images} />,
};

export const DefaultSlideCarousel = ({ ...args }: CarouselProps) => {
  return <Carousel {...args} />;
};

export const ShowOnHoverSlideCarousel = ({ ...args }: CarouselProps) => {
  return <Carousel {...args} showOnHover={true} isDraggable={true} />;
};

export const FadeCarousel = ({ ...args }: CarouselProps) => {
  return <Carousel {...args} type="fade" />;
};

export const AutoPlay: Story = {
  render: (args) => <Carousel {...args} autoPlay />,
};
