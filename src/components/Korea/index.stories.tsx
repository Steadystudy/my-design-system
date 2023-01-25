import { ComponentStory, ComponentMeta } from '@storybook/react';
import Korea from '.';

export default {
  title: 'Components/Korea',
  component: Korea,
  argTypes: {
    svgWidth: { defaultValue: 1000, control: 'number' },
    svgHeight: { defaultValue: 800, control: 'number' },
  },
} as ComponentMeta<typeof Korea>;

export const Default: ComponentStory<typeof Korea> = (args) => {
  return <Korea {...args}></Korea>;
};
