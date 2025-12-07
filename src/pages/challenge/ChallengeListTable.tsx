// src/components/challenge/ChallengeListTable.tsx
import React from "react";

type Difficulty = "Dễ" | "Trung bình" | "Khó";

interface Challenge {
  name: string;
  difficulty: Difficulty;
  done: number;
  total: number;
}

export default function ChallengeListTable() {
  const challenges: Challenge[] = [
    {
      name: "AI Simulation 1 – Logical Thinking",
      difficulty: "Dễ",
      done: 22,
      total: 28,
    },
    {
      name: "Quiz Phân số – Level 2",
      difficulty: "Trung bình",
      done: 18,
      total: 28,
    },
    {
      name: "Challenge Hình học – Tứ giác",
      difficulty: "Khó",
      done: 9,
      total: 28,
    },
  ];

  const diffColor: Record<Difficulty, string> = {
    Dễ: "bg-emerald-100 text-emerald-700 border-emerald-300",
    "Trung bình": "bg-amber-100 text-amber-700 border-amber-300",
    Khó: "bg-rose-100 text-rose-700 border-rose-300",
  };

  return (
    <div className="bg-white border rounded-2xl p-5 shadow-sm">
      <p className="text-sm font-semibold mb-3">📚 Danh sách Challenge</p>

      <table className="min-w-full text-sm">
        <thead className="text-gray-500 uppercase text-[11px]">
          <tr>
            <th className="px-2 py-2 text-left">Tên challenge</th>
            <th className="px-2 py-2 text-left">Độ khó</th>
            <th className="px-2 py-2 text-left">Hoàn thành</th>
          </tr>
        </thead>

        <tbody className="divide-y text-gray-800">
          {challenges.map((c) => (
            <tr key={c.name}>
              <td className="px-2 py-3">{c.name}</td>

              <td className="px-2 py-3">
                <span
                  className={`px-2 py-1 rounded-full border text-xs ${diffColor[c.difficulty]}`}
                >
                  {c.difficulty}
                </span>
              </td>

              <td className="px-2 py-3">
                {c.done}/{c.total} HS
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
