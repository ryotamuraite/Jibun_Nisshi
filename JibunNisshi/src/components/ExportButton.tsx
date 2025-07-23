// src/components/ExportButton.tsx
import type { FC } from "react";
import { saveAs } from "file-saver";

type WorkRecord = {
  id: string;
  title: string;
  content: string;
  workDate: string;
  createdAt: number;
};

type Props = {
  records: WorkRecord[];
};

const ExportButton: FC<Props> = ({ records }) => {
  const handleExport = () => {
    const header = ["ID", "業務日", "記録時刻", "タイトル", "内容"];
    const rows = records.map((r) => [
      r.id,
      r.workDate,
      new Date(r.createdAt).toLocaleString(),
      `"${r.title}"`,
      `"${r.content.replace(/\n/g, " ")}"`,
    ]);
    const csv = [header, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "JibunNisshi_Export.csv");
  };

  return (
    <button
      onClick={handleExport}
      className="px-3 py-2 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition"
    >
      📤 CSVエクスポート
    </button>
  );
};

export default ExportButton;