// src/components/WorkOverviewList.tsx
import type { FC } from "react";

type WorkRecord = {
  id: string;
  title: string;
  workDate: string; // 記録対象日 (例: '2025-07-23')
  createdAt: number; // UNIX timestamp
};

type Props = {
  selectedDate: string;
  records: WorkRecord[];
};

const WorkOverviewList: FC<Props> = ({ selectedDate, records }) => {
  const filtered = records.filter((r) => r.workDate === selectedDate);

  return (
    <section className="p-4">
      <h2 className="text-md font-semibold mb-2 text-gray-700">📝 業務概要一覧</h2>
      {filtered.length > 0 ? (
        <ul className="space-y-3">
          {filtered.map((record) => (
            <li
              key={record.id}
              className="bg-white shadow-sm rounded px-3 py-2 border hover:bg-gray-50 transition"
            >
              <div className="text-sm font-bold text-blue-700">{record.title}</div>
              <div className="text-xs text-gray-500">
                記録時刻: {new Date(record.createdAt).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-400">この日付には記録がありません。</p>
      )}
    </section>
  );
};

export default WorkOverviewList;