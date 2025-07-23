// src/components/LayoutContainer.tsx
import type { FC, ReactNode } from "react";

type Props = {
  leftPanel: ReactNode;
  rightPanel: ReactNode;
};

const LayoutContainer: FC<Props> = ({ leftPanel, rightPanel }) => {
  return (
    <main className="flex h-screen overflow-hidden">
      {/* 左サイド（カレンダーなど） */}
      <aside className="w-[260px] border-r bg-gray-50 overflow-y-auto">
        {leftPanel}
      </aside>

      {/* 右サイド（業務一覧＋入力＋ツリー表示） */}
      <section className="flex-1 p-4 overflow-y-auto bg-white">
        {rightPanel}
      </section>
    </main>
  );
};

export default LayoutContainer;