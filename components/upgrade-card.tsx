"use client";

import { Lock } from "lucide-react";

export default function UpgradeCard() {
  return (
    <div className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800 rounded-2xl p-4 text-center flex flex-col items-center gap-3 shadow-[0_0_12px_rgba(0,0,0,0.6)]">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-neutral-700 mb-2">
        <Lock size={20} className="text-gray-400" />
      </div>
      <p className="text-gray-400 text-sm leading-snug">
        Unlock Premium <br /> Resources & Features
      </p>

      <button className="mt-2 w-full py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-gray-100 font-medium text-sm shadow-[0_0_12px_rgba(255,215,0,0.3)] border border-neutral-700 transition-all">
        Upgrade
      </button>
      <div className="absolute -bottom-2 inset-x-0 h-2 bg-yellow-500/30 blur-lg rounded-full pointer-events-none"></div>
    </div>
  );
}
