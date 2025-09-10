"use client";

import HexNode from "./hex-node";

type SkillNode = {
  id: string;
  status: "locked" | "unlocked" | "active";
  icon?: React.ReactNode;
};

type SkillPathProps = {
  levels: SkillNode[][];
  onSelectNode?: (id: string) => void;
};

export default function SkillPath({ levels, onSelectNode }: SkillPathProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      {levels.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-center gap-6 relative"
        >
          {row.map((node) => (
            <HexNode
              key={node.id}
              status={node.status}
              icon={node.icon}
              onClick={() => onSelectNode?.(node.id)}
            />
          ))}
        </div>
      ))}
      <button className="mt-6 px-6 py-2 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all shadow-md">
        Take Skill Quiz
      </button>
    </div>
  );
}
