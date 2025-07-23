// src/components/CalendarPanel.tsx
import type { FC } from "react";
import dayjs from "dayjs";

type Props = {
  selectedDate: string;
  onDateChange: (date: string) => void;
};

const CalendarPanel: FC<Props> = ({ selectedDate, onDateChange }) => {
  const today = dayjs().format("YYYY-MM-DD");

  const generateDays = () => {
    const days: string[] = [];
    for (let i = 0; i < 14; i++) {
      days.push(dayjs().subtract(i, "day").format("YYYY-MM-DD"));
    }
    return days.reverse(); // 昇順で表示
  };

  return (
    <aside className="bg-white border-r p-4 w-[260px]">
      <h2 className="text-md font-semibold text-gray-700 mb-3">📆 日付選択</h2>
      <ul className="space-y-2">
        {generateDays().map((date) => (
          <li key={date}>
            <button
              className={`w-full text-left px-3 py-1 rounded text-sm transition ${
                date === selectedDate
                  ? "bg-blue-100 text-blue-700 font-bold"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => onDateChange(date)}
            >
              {dayjs(date).format("YYYY年MM月DD日")} {date === today && "（今日）"}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CalendarPanel;