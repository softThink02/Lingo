"use client";

import clsx from "clsx";

type DayStatus = "complete" | "missed" | "today" | "upcoming";

type StreakDay = {
  label: string;
  status: DayStatus;
};

type StreakTrackerProps = {
  days: StreakDay[];
};

export default function StreakTracker({ days }: StreakTrackerProps) {
  return (
    <div className="bg-[url('/BG.png')] relative h-[200px] bg-no-repeat bg-cover rounded-2xl p-4 shadow-lg">
      <p className="text-sm text-center text-gray-300 mb-3">Daily Streaks & Quest</p>

      <div className="flex justify-between absolute items-center -bottom-16 -left-0 bg-[url('/Top.png')] h-[200px] bg-contain bg-center bg-no-repeat  w-full px-8 m-0 overflow-hidden rounded-2xl">
        {days.map((day, idx) => (
          <div key={idx} className="flex flex-col -mt-8 mx-2 items-center gap-2 z-10">
            <span className='font-inter font-[600] text-[10px]'>{day.label}</span>
            <div
              className={clsx(
                "w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                day.status === "complete" &&
                  "bg-yellow-500 text-black shadow-[0_0_12px_rgba(255,215,0,0.4)]",
                day.status === "today" &&
                  "bg-yellow-400 text-black ring-2 ring-yellow-200",
                day.status === "missed" && "bg-neutral-700 text-gray-500",
                day.status === "upcoming" &&
                  "bg-neutral-800 text-gray-400 border border-neutral-700"
              )}
            >
              -
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
