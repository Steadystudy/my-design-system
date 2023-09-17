import Calendar from './Calendar';
import { useCalendar } from '../../hooks/useCalendar';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {},
} satisfies Meta<typeof Calendar>;

export const Default= () => {
  const { currentDate, yearMonth, selectedDate } = useCalendar();

  return (
    <Calendar
      currentDate={currentDate}
      yearMonthData={yearMonth}
      selectedDate={selectedDate}
    ></Calendar>
  );
};

export const Clickable= () => {
  const { currentDate, yearMonth, selectedDate, handleDateClick } = useCalendar();

  return (
    <Calendar
      currentDate={currentDate}
      yearMonthData={yearMonth}
      selectedDate={selectedDate}
      onDateClick={handleDateClick}
    ></Calendar>
  );
};
