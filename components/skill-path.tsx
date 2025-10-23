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
    <div className="flex flex-col items-center">
      <button className="mt-6 px-6 py-2 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all shadow-md">
        Take Skill Quiz
      </button>

      {levels.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex ${
            rowIndex >= 1 && "justify-end w-[100%]"
          } items-center relative mt-6`}
        >
          {row.map((node, ind) => (
            <div key={node.id} className={`flex items-center`}>
              <div className="w-12 h-[1px] bg-white my-auto" />
              <HexNode
                status={node.status}
                icon={node.icon}
                onClick={() => onSelectNode?.(node.id)}
              />
              {ind < row.length - 1 && (
                <div className="w-12 h-[1px] bg-white my-auto" />
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
