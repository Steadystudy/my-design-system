import { useState } from 'react';
import { DateRangePickerCalendar, SelectedDateRange } from '../types/date';
import { getNewYearMonthInfo, getYearMonthInfo, toDate } from '../utils/date';
import { CALENDAR_MONTH_CHANGE } from '../constants';

export const useDateRangePicker = (initialSelectedDateRange?: SelectedDateRange) => {
  const todayDate = new Date();
  const todayYearMonth = getYearMonthInfo(todayDate);
  const initialDate = initialSelectedDateRange
    ? toDate(initialSelectedDateRange.startDate!)
    : todayDate;
  const currentYearMonth = getYearMonthInfo(initialDate);
  const postYearMonth = getNewYearMonthInfo(currentYearMonth, CALENDAR_MONTH_CHANGE.NEXT_MONTH);

  const [calendarData, setCalendarData] = useState<DateRangePickerCalendar>({
    currentYearMonth,
    postYearMonth,
  });

  const [selectedDateRange, setSelectedDateRange] = useState<SelectedDateRange>(
    initialSelectedDateRange ?? { startDate: null, endDate: null },
  );

  const handleMonthChange = (change: number) => () => {
    setCalendarData((prevCalendarData) => {
      const newCalendarData = { ...prevCalendarData };

      if (change > 0) {
        newCalendarData.currentYearMonth = prevCalendarData.postYearMonth;
        newCalendarData.postYearMonth = getNewYearMonthInfo(prevCalendarData.postYearMonth, change);
      }

      if (change < 0) {
        newCalendarData.postYearMonth = prevCalendarData.currentYearMonth;
        newCalendarData.currentYearMonth = getNewYearMonthInfo(
          prevCalendarData.currentYearMonth,
          change,
        );
      }

      return newCalendarData;
    });
  };

  const resetSelectedDateRange = () => {
    setSelectedDateRange({ startDate: null, endDate: null });
  };

  const handleDateSelect = (dateString: string, onDaySelect?: CallableFunction) => {
    setSelectedDateRange((prevSelectedDateRange) => {
      const startDate = prevSelectedDateRange.startDate
        ? toDate(prevSelectedDateRange.startDate)
        : null;
      const selectedDate = toDate(dateString);
      const nextSelectedDates: SelectedDateRange = {
        startDate: null,
        endDate: null,
      };

      if (startDate && !prevSelectedDateRange.endDate && selectedDate < startDate) {
        nextSelectedDates.startDate = dateString;
        nextSelectedDates.endDate = prevSelectedDateRange.startDate;
      } else if (startDate && !prevSelectedDateRange.endDate) {
        nextSelectedDates.startDate = prevSelectedDateRange.startDate;
        nextSelectedDates.endDate = dateString;
      } else {
        nextSelectedDates.startDate = dateString;
      }

      onDaySelect?.(nextSelectedDates);

      return nextSelectedDates;
    });
  };

  return {
    todayDate,
    todayYearMonth,
    calendarData,
    handleMonthChange,
    selectedDateRange,
    resetSelectedDateRange,
    handleDateSelect,
  };
};
