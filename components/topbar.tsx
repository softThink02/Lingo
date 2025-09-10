"use client";

import { Search } from "lucide-react";

type TopbarProps = {
  title: string;
  xp: number;
  xpGoal: number;
  avatarUrl?: string;
};

export default function Topbar({ title, xp, xpGoal, avatarUrl }: TopbarProps) {
  const progress = Math.min(100, (xp / xpGoal) * 100);

  return (
    <header className="w-full flex items-center justify-between bg-neutral-950/70 border-b border-neutral-800 px-6 py-4">
      <h1 className="text-lg font-semibold text-gray-100">{title}</h1>

      <div className="relative w-1/3">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-900 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-neutral-700"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end">
          <span className="text-xs text-gray-400">{xp}/{xpGoal} XP</span>
          <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-yellow-500 shadow-[0_0_8px_rgba(255,215,0,0.5)]">
          {avatarUrl ? (
            <img src={avatarUrl} alt="User avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-neutral-700 flex items-center justify-center text-gray-300 text-sm">
              ?
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
