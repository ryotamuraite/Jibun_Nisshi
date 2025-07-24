// src/App.tsx
import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from "./components/Header";
import LayoutContainer from "./components/LayoutContainer";
import CalendarPanel from "./components/CalendarPanel";
import WorkOverviewList from "./components/WorkOverviewList";
import EntryForm from "./components/EntryForm";
import ProgressTree from "./components/ProgressTree";
// import ExportButton from "./components/ExportButton";
import dayjs from "dayjs";
import "./index.css";


// 型定義
type WorkRecord = {
  id: string;
  title: string;
  content: string;
  workDate: string;
  createdAt: number;
};

function App() {
  const [selectedDate, setSelectedDate] = useLocalStorage<string>(
    "JibunNisshi-selectedDate",
    dayjs().format("YYYY-MM-DD")
  );

  const [records, setRecords] = useLocalStorage<WorkRecord[]>(
    "JibunNisshi-records",
    []
  );

  const handleAddRecord = (newRecord: WorkRecord) => {
    setRecords([...records, newRecord]);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* ヘッダー（recordsを渡す） */}
      <Header records={records} />

      {/* レイアウト */}
      <LayoutContainer
        leftPanel={
          <CalendarPanel
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
          />
        }
        rightPanel={
          <div className="space-y-6">
            {/* ExportButtonはヘッダー側に移動済み */}
            <WorkOverviewList
              selectedDate={selectedDate}
              records={records}
            />
            <EntryForm
              selectedDate={selectedDate}
              onAddRecord={handleAddRecord}
            />
            <ProgressTree
              selectedDate={selectedDate}
              records={records}
            />
          </div>
        }
      />
    </div>
  );
}

export default App;