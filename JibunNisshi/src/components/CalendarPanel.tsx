// src/components/CalendarPanel.tsx
import React from 'react';
import Calendar, { type CalendarProps } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

type Props = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

const CalendarPanel: React.FC<Props> = ({ selectedDate, onDateChange }) => {

  const handleChange: CalendarProps['onChange'] = (value) => {
    if (!value || Array.isArray(value)) return;
    onDateChange(dayjs(value).format("YYYY-MM-DD"));
  };

  return (
    <aside className="p-4 w-[260px] bg-white border-r">
      <h2 className="text-md font-semibold text-gray-700 mb-3">📅 日付選択</h2>
      <Calendar
        value={new Date(selectedDate)}
        onChange={handleChange}
        locale="ja-JP"
        calendarType="gregory"
      />
    </aside>
  );
};

export default CalendarPanel;