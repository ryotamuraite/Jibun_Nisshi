// src/components/Header.tsx
import type { FC } from "react";
import type { WorkRecord } from "../types";
import MenuPanel from "./MenuPanel";

import "../styles/header.css";

type Props = {
  records: WorkRecord[]; // 将来的に記録件数などで使う予定
  onExport?: () => void;
};

const Header: FC<Props> = ({ onExport }) => {
  return (
    <header className="header-container w-full">
      <div className="header-inner">
        {/* メニュー開閉トリガーのみ表示 */}
        <MenuPanel onExport={onExport} />
        <h1 className="header-title">Jibun_Nisshi</h1>
      </div>
    </header>
  );
};

export default Header;