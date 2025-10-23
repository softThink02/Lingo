"use client";

import HexNode from "./hex-node";

type SkillNode = {
  id: string;
  status: "locked" | "unlocked" | "active";
  icon?: React.ReactNode;
  right?: boolean;
};

type SkillPathProps = {
  levels: SkillNode[][];
  onSelectNode?: (id: string) => void;
};

export default function SkillPath({ levels, onSelectNode }: SkillPathProps) {
  return (
    <div className="flex flex-col items-center">
      <button className="mt-6 px-6 py-2 mb-4 rounded-xl bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-all shadow-md">
        Take Skill Quiz
      </button>

      <div>
        {levels.map((row, rowIndex) => {
          let justifyClass = "justify-center";
          if (row.length > 1 && rowIndex === 0) justifyClass = "justify-start";
          else if (row.length > 1 && rowIndex === 2)
            justifyClass = "justify-end";

          return (
            <div
              key={rowIndex}
              className={`flex ${justifyClass} ${
                rowIndex == 0 && "items-start"
              } items-center relative w-full`}
            >
              {row.map((node, ind) => (
                <div
                  key={node.id}
                  className={`flex
                ${
                  rowIndex == 0 && ind == 0
                    ? "items-start self-start"
                    : "items-center"
                }
                ${rowIndex == 0 && ind == 1 ? "flex-col" : ""}
              `}
                >
                  {rowIndex == 2 && ind != 1 && (
                    <div className="w-12 h-[1px] my-auto" />
                  )}
                  {rowIndex == 2 && ind != 1 && (
                    <div className="w-16 h-[1px] my-auto" />
                  )}
                  <HexNode
                    status={node.status}
                    icon={node.icon}
                    onClick={() => onSelectNode?.(node.id)}
                  />
                  {ind < row.length - 1 && (
                    <div className="w-12 h-[1px] bg-white my-auto" />
                  )}
                  {rowIndex == 0 && ind === 1 && (
                    <div className="h-12 w-[1px] bg-white my-auto" />
                  )}
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
