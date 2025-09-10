"use client";

import { Lock, Gift } from "lucide-react";
import clsx from "clsx";
import { ReactNode } from "react";

type HexNodeProps = {
  status?: "locked" | "unlocked" | "active";
  icon?: ReactNode;
  onClick?: () => void;
};

export default function HexNode({ status = "locked", icon, onClick }: HexNodeProps) {
  const defaultIcon =
    status === "locked" ? (
      <Lock size={18} className="text-gray-400" />
    ) : (
      <Gift size={18} className={status === "active" ? "text-yellow-400" : "text-gray-200"} />
    );

  return (
    <button
      onClick={onClick}
      disabled={status === "locked"}
      className={clsx(
        "relative w-16 h-16 flex items-center justify-center",
        "clip-hex bg-neutral-800 border transition-all",
        status === "locked" && "border-neutral-700 cursor-not-allowed opacity-70",
        status === "unlocked" && "border-neutral-600 hover:bg-neutral-700 cursor-pointer",
        status === "active" && "border-yellow-400 shadow-[0_0_15px_rgba(255,215,0,0.6)] bg-neutral-900"
      )}
    >
      {icon ?? defaultIcon}

      {status === "active" && (
        <div className="absolute inset-0 rounded-md bg-yellow-500/20 blur-lg pointer-events-none" />
      )}
    </button>
  );
}
