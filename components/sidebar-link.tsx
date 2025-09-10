"use client";

import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type SidebarLinkProps = {
  icon: ReactNode;
  label: string;
  href?: string;
  active?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
  className?: string;
};


export default function SidebarLink({
  icon,
  label,
  href,
  active = false,
  onClick,
  className,
}: SidebarLinkProps) {
  const base = "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150";
  const activeClasses =
    "bg-gradient-to-r from-neutral-800/80 to-neutral-700/70 ring-1 ring-white/5 border-l-4 border-yellow-400 shadow-[inset_0_2px_8px_rgba(0,0,0,0.6)]";
  const inactiveClasses = "bg-neutral-800/40 hover:bg-neutral-700/50";

  const classes = clsx(base, active ? activeClasses : inactiveClasses, className);

  const iconWrapper = clsx(
    "w-9 h-9 flex items-center justify-center rounded-md shrink-0",
    active ? "bg-yellow-500/10" : "bg-black/20"
  );

  const inner = (
    <>
      <span className={iconWrapper} aria-hidden>
        {icon}
      </span>
      <span className="text-gray-200">{label}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={(e) => onClick?.(e)} aria-current={active ? "true" : undefined}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={(e) => onClick?.(e)} className={classes} aria-current={active ? "true" : undefined}>
      {inner}
    </button>
  );
}
