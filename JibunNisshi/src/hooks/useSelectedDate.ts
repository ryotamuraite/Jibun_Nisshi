// src/hooks/useSelectedDate.ts
import { useLocalStorage } from "./useLocalStorage";
import dayjs from "dayjs";

export const useSelectedDate = () => {
    return useLocalStorage<string>(
    "JibunNisshi-selectedDate",
    dayjs().format("YYYY-MM-DD") // 初期値：今日の日付
    );
};
