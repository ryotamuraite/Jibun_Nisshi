// src/components/ProgressTree.tsx
import type { FC } from "react";
import dayjs from "dayjs";

type WorkRecord = {
  id: string;
  title: string;
  content: string;
  workDate: string;
  createdAt: number;
};

type Props = {
  records: WorkRecord[];
  selectedDate: string;
};

const ProgressTree: FC<Props> = ({ records, selectedDate }) => {
  // フィルター：同じタイトルの履歴をまとめる
  const grouped = records
    .filter(r => r.workDate === selectedDate)
    .reduce((acc: Record<string, WorkRecord[]>, record) => {
      acc[record.title] = acc[record.title] || [];
      acc[record.title].push(record);
      return acc;
    }, {});

  return (
    <section className="p-4 bg-white rounded border shadow-sm">
      <h2 className="text-md font-semibold text-gray-700 mb-3">🌿 業務進捗のツリー表示</h2>
      {Object.keys(grouped).length > 0 ? (
        <div className="space-y-6">
          {Object.entries(grouped).map(([title, entries]) => (
            <div key={title}>
              <h3 className="text-blue-700 font-bold text-sm mb-2">📌 {title}</h3>
              <ul className="pl-4 border-l space-y-2">
                {entries
                  .sort((a, b) => a.createdAt - b.createdAt)
                  .map(entry => (
                    <li key={entry.id} className="text-sm text-gray-800 relative">
                      <div className="mb-1">
                        {entry.content || "(内容なし)"}
                      </div>
                      <div className="text-xs text-gray-400">
                        {dayjs(entry.createdAt).format("YYYY/MM/DD HH:mm")}
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-500">この日には進捗記録がありません。</p>
      )}
    </section>
  );
};

export default ProgressTree;