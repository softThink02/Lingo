'use client'
import Sidebar from "@/components/sidebar";
import Topbar from "@/components/topbar";
import SkillPath from "@/components/skill-path";
import DailyQuest from "@/components/daily-quest";
import StreakTracker from "@/components/streak-tracker";
import XPChart from "@/components/xp-charts";

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-black text-white">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-[linear-gradient(to_bottom,#2b2929_20%,yellow-500_80%)] ">
        <Topbar title="Dashboard" xp={350} xpGoal={500} avatarUrl="/avatar.png" />

        <div className="flex flex-1 gap-6 p-6 overflow-y-auto">
          <div className="flex-1 flex items-center justify-center">
            <SkillPath
              levels={[
                [{ id: "intro", status: "active" }],
                [{ id: "lesson1", status: "unlocked" }, { id: "lesson2", status: "locked" }],
                [{ id: "lesson3", status: "locked" }, { id: "lesson4", status: "locked" }, { id: "lesson5", status: "locked" }],
              ]}
              onSelectNode={(id) => console.log("Clicked node:", id)}
            />
          </div>

          <div className="w-80 flex flex-col gap-6">
            <DailyQuest lessonsRemaining={9} />
            <StreakTracker
              days={[
                { label: "M", status: "complete" },
                { label: "T", status: "complete" },
                { label: "W", status: "today" },
                { label: "T", status: "missed" },
                { label: "F", status: "upcoming" },
                { label: "S", status: "upcoming" },
                { label: "S", status: "upcoming" },
              ]}
            />
            <XPChart
              data={[
                { day: "M", xp: 2 },
                { day: "T", xp: 4 },
                { day: "W", xp: 6 },
                { day: "T", xp: 3 },
                { day: "F", xp: 7 },
                { day: "S", xp: 10 },
                { day: "S", xp: 0 },
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
