// src/components/Header.tsx
import type { FC } from "react";
import type { WorkRecord } from "../types";
import ExportButton from "./ExportButton";
import menuIcon from "../assets/menu.svg";

type Props = {
  records: WorkRecord[];
};

const Header: FC<Props> = ({ records }) => {
  return (
    <header className="sticky top-0 z-10 bg-[#00C3D0] shadow-md border-b w-full">
        <div className="w-full">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
            {/* 左：アイコン＋タイトル */}
            <div className="flex items-center gap-3">
                <img src={menuIcon} alt="Menu Icon" className="w-6 h-6 opacity-95" />
                <h1
                className="text-[32px] font-black leading-none text-white tracking-tight"
                style={{ fontFamily: '"Noto Sans JP", sans-serif' }}
                >
                JibunNisshi
                </h1>
            </div>

            {/* 右：操作パネル */}
            <div className="flex items-center gap-4">
                <span className="text-sm text-white/90 hidden md:inline">こんにちは、RYOさん</span>
                <ExportButton records={records} />
                <button className="text-sm px-2 py-1 border border-white rounded text-white/80 hover:bg-white/10 transition" disabled>
                ⚙️ 設定
                </button>
                <button className="text-sm px-2 py-1 border border-white rounded text-white/60 cursor-not-allowed" disabled>
                🔒 ログイン
                </button>
            </div>
            </div>
        </div>
        </header>
  );
};

export default Header;