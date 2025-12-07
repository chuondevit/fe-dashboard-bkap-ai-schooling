import React from "react";

export default function ChallengeOverviewCard() {
  const data = {
    total: 18,
    completed: 12,
    rate: Math.round((12 / 18) * 100),
    top: [
      { name: "Minh Anh", score: 95 },
      { name: "Hà My", score: 92 },
      { name: "Gia Bảo", score: 90 },
    ],
  };

  return (
    <div className="p-5 bg-white border rounded-2xl shadow-sm">
      <h2 className="font-semibold text-gray-900 mb-2">📘 Tổng quan Challenge</h2>

      <div className="grid grid-cols-3 gap-3 mt-3">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-3 text-center">
          <p className="text-2xl font-bold text-blue-600">{data.total}</p>
          <p className="text-xs text-gray-600">Challenge đã giao</p>
        </div>

        <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 text-center">
          <p className="text-2xl font-bold text-emerald-600">{data.completed}</p>
          <p className="text-xs text-gray-600">Đã hoàn thành</p>
        </div>

        <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-3 text-center">
          <p className="text-2xl font-bold text-indigo-600">{data.rate}%</p>
          <p className="text-xs text-gray-600">Tỉ lệ hoàn thành</p>
        </div>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-gray-700">🏆 Top học sinh</h3>

      <ul className="mt-2 space-y-1 text-sm">
        {data.top.map((s) => (
          <li key={s.name} className="flex justify-between">
            <span>{s.name}</span>
            <span className="font-semibold text-indigo-600">{s.score} điểm</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
