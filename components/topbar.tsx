"use client";

import { Search, Bell } from "lucide-react";
import Image from "next/image";

type TopbarProps = {
  title: string;
  xp: number;
  xpGoal: number;
  avatarUrl?: string;
};

export default function Topbar({ title, xp, xpGoal, avatarUrl }: TopbarProps) {
  const progress = Math.min(100, (xp / xpGoal) * 100);

  return (
    <header className="w-full flex items-center justify-between bg-gradient-to-r rounded-2xl from-neutral-900 to-black/50 border-b mt-4 border-neutral-800 px-6 py-4">
      <h1 className="text-lg font-semibold text-[#FFFFFF] text-[28px] font-poppins">
        {title}
      </h1>

      <div className="flex flex-1 justify-end gap-8">
        <div className="relative w-[40%] my-auto mx-0 align-middle max-w-[280px]">
          <Search
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pr-10 pl-4 py-2 rounded-xl bg-neutral-900 text-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-neutral-700"
          />
        </div>

        <div className="flex items-center justify-between w-[50%] max-w-[440px] rounded-2xl py-2 px-3 bg-[#272727]/100">
          <div className="flex items-center gap-4">
            <Image src="/lifeLine.svg" alt="life-line" width={50} height={50} />
            <span className="text-xs text-gray-400">
              {xp}/{xpGoal} XP
            </span>
            <div className="w-32 h-2 bg-neutral-900 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="relative">
          <Bell className="text-white w-4 h-4 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-2 h-2 flex items-center justify-center rounded-full">
            3
          </span>
        </div>


          <div className="w-10 h-10 flex items-center justify-center">
            <Image src="/logo.svg" alt="User Avatar" width={20} height={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
