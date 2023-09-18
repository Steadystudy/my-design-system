import { Meta } from '@storybook/react';
import DateRangePicker from './DateRangePicker';

export default {
  title: 'Components/DateRangePicker',
  component: DateRangePicker,
  argTypes: {
    onDateSelect: { control: false },
  },
} satisfies Meta<typeof DateRangePicker>;

export const Default = () => {
  return <DateRangePicker></DateRangePicker>;
};

export const FutureDaysDisabled = () => {
  return <DateRangePicker isFutureDaysRestricted={true}></DateRangePicker>;
};

export const AirbnbDateRangePicker = () => {
  return (
    <DateRangePicker
      isPastDaysRestricted={true}
      isPastMonthButtonRestricted={true}
    ></DateRangePicker>
  );
};
