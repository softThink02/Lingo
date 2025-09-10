"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type Props = {
  data: { day: string; xp: number }[];
};

export default function XPChart({ data }: Props) {
  return (
    <div className="bg-neutral-900 rounded-2xl p-4 shadow-lg">
      <h3 className="text-sm text-gray-300 mb-2">XP Progress</h3>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#aaa" />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="xp" stroke="#FFD700" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
