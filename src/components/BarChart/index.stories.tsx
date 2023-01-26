import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BarChart from '.';

export default {
  title: 'Components/BarChart',
  component: BarChart,
  argTypes: {
    svgWidth: { defaultValue: 800, control: 'number' },
    svgHeight: { defaultValue: 400, control: 'number' },
  },
} as ComponentMeta<typeof BarChart>;
export const Default: ComponentStory<typeof BarChart> = (args) => {
  return <BarChart {...args}></BarChart>;
};
