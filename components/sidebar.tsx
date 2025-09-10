"use client";

import SidebarLink from "@/components/sidebar-link";
import UpgradeCard from "./upgrade-card";
import {links} from '@/_lib/data'

export default function Sidebar() {

  return (
    <aside className="w-64 bg-gradient-to-b from-neutral-900 to-black rounded-2xl m-4 px-4 flex flex-col gap-4">
      <div className="text-xl font-bold flex border-b-2 border-b-black items-center py-4 mb-2 gap-1">
        <img className="w-[40px] h-[40px]" src={'/logo.svg'} alt='logo'/>
        LingoChain
      </div>
      <nav className="flex flex-col gap-2 space-y-1">
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
