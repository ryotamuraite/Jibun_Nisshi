// src/components/MenuPanel.tsx
import { useState, useRef, useEffect, type FC } from "react";
import menuIcon from "../assets/menu.svg";
import {
  ArrowDownTrayIcon,
  Cog6ToothIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import "../styles/header.css";

type Props = {
  onExport?: () => void;
};

const MenuPanel: FC<Props> = ({ onExport }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const menuItems = [
    {
      label: "CSVエクスポート",
      icon: ArrowDownTrayIcon,
      onClick: () => {
        onExport?.();
        setOpen(false);
      },
    },
    {
      label: "設定（未実装）",
      icon: Cog6ToothIcon,
      onClick: () => {}, // 将来の実装用
    },
    {
      label: "ログイン（未実装）",
      icon: LockClosedIcon,
      onClick: () => {},
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative"
      onBlur={(e) => {
        const next = e.relatedTarget;
        if (!containerRef.current?.contains(next)) setOpen(false);
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="header-icon bg-transparent border-none p-0 focus:outline-none focus:ring-0 focus:bg-transparent"
        aria-label="メニューを開く"
      >
        <img
          src={menuIcon}
          alt="Menu Icon"
          className="w-5 h-5 shrink-0"
        />
      </button>

      {open && (
        <div className="menu-panel absolute top-full left-1/2 translate-x-[-80%] mt-2 z-50 animate-scale">
          <p className="menu-panel-intro">こんにちは、RYOさん</p>
          <ul className="list-none px-2">
            {menuItems.map(({ label, icon: Icon, onClick }, index) => (
              <li key={label} className={`menu-panel-divider ${index === menuItems.length - 1 ? 'last:border-none' : ''}`}>
                <button
                  type="button"
                  onClick={onClick}
                  className="menu-panel-item w-full focus:outline-none focus:ring-0 focus-visible:outline-none"
                >
                  <Icon
                    className="icon-sm text-brand-cyan shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-sm font-medium">
                    {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuPanel;