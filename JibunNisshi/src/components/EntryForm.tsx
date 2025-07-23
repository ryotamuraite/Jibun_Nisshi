// src/components/EntryForm.tsx
import { useState } from "react";
import dayjs from "dayjs";

type Props = {
  selectedDate: string;
  onAddRecord: (newRecord: WorkRecord) => void;
};

type WorkRecord = {
  id: string;
  title: string;
  content: string;
  workDate: string;
  createdAt: number;
};

const EntryForm = ({ selectedDate, onAddRecord }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;

    const newRecord: WorkRecord = {
      id: crypto.randomUUID(),
      title,
      content,
      workDate: selectedDate,
      createdAt: Date.now(),
    };
    onAddRecord(newRecord);
    setTitle("");
    setContent("");
  };

  return (
    <section className="bg-white border p-4 rounded shadow mb-4">
      <h2 className="text-md font-semibold text-gray-700 mb-2">🆕 業務記録の新規作成</h2>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="業務タイトル"
          className="w-full px-3 py-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="業務内容の詳細"
          className="w-full px-3 py-2 border rounded h-28 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          記録する（日付：{dayjs(selectedDate).format("YYYY/MM/DD")})
        </button>
      </div>
    </section>
  );
};

export default EntryForm;