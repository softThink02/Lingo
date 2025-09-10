"use client";

import { Zap } from "lucide-react";

type DailyQuestProps = {
  lessonsRemaining: number;
  message?: string;
};

export default function DailyQuest({ lessonsRemaining, message }: DailyQuestProps) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-4 shadow-lg border border-neutral-800 flex items-center gap-3">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-[0_0_12px_rgba(255,215,0,0.4)] shrink-0">
        <Zap className="text-black" size={20} />
      </div>
      
      <div className="flex flex-col">
        <p className="text-gray-200 font-medium text-sm">Daily Streaks & Quest</p>
        <p className="text-gray-400 text-xs">
          {message ?? `Complete ${lessonsRemaining} more lessons to start competing`}
        </p>
      </div>
    </div>
  );
}
