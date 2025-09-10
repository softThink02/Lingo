"use client";

import { Home, Layers, Bot, PenTool, Settings, Lock } from "lucide-react";
import SidebarLink from "@/components/sidebar-link";
import UpgradeCard from "./upgrade-card";

export default function Sidebar() {
  const links = [
    { icon: <Home size={20} />, label: "Overview" },
    { icon: <Layers size={20} />, label: "Categories" },
    { icon: <Bot size={20} />, label: "AI Mentor" },
    { icon: <PenTool size={20} />, label: "Create & Earn" },
    { icon: <Settings size={20} />, label: "Setting" },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-neutral-900 to-black p-4 flex flex-col gap-4">
      <div className="text-xl font-bold flex items-center gap-2">
        <span className="bg-yellow-500 rounded-full w-6 h-6"></span>
        LingoChain
      </div>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <SidebarLink key={link.label} {...link} />
        ))}
      </nav>
      <div className="mt-auto">
        <UpgradeCard />
      </div>
    </aside>
  );
}
