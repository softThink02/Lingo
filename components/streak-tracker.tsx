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
    <div className="bg-neutral-900 rounded-2xl p-4 shadow-lg border border-neutral-800">
      <p className="text-sm text-gray-300 mb-3">Streak Tracker</p>

      <div className="flex justify-between gap-2">
        {days.map((day, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            <div
              className={clsx(
                "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all",
                day.status === "complete" && "bg-yellow-500 text-black shadow-[0_0_12px_rgba(255,215,0,0.4)]",
                day.status === "today" && "bg-yellow-400 text-black ring-2 ring-yellow-200",
                day.status === "missed" && "bg-neutral-700 text-gray-500",
                day.status === "upcoming" && "bg-neutral-800 text-gray-400 border border-neutral-700"
              )}
            >
              {day.label}
            </div>

            <span className="text-[10px] text-gray-400 capitalize">{day.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
