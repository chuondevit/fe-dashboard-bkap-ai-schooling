import React from "react";

export default function ChallengeRecommendationCard() {
  const insights = [
    {
      type: "danger",
      title: "⚠ 3 học sinh giảm 40% mức độ hoàn thành",
      desc: "AI đề xuất giao thêm 1 Simulation + 1 Challenge luyện tập.",
    },
    {
      type: "warning",
      title: "📌 Chủ đề Hình học đang yếu",
      desc: "Đề xuất giao Challenge Hình học cấp độ Trung bình.",
    },
    {
      type: "success",
      title: "🔥 Nhóm Xanh có tốc độ tiến bộ cao",
      desc: "Gợi ý Challenge nâng cao để duy trì đà học.",
    },
  ];

  const colorMap: any = {
    danger: "bg-rose-50 border-rose-200 text-rose-700",
    warning: "bg-amber-50 border-amber-200 text-amber-700",
    success: "bg-emerald-50 border-emerald-200 text-emerald-700",
  };

  return (
    <div className="p-5 bg-white border rounded-2xl shadow-sm">
      <p className="text-sm font-semibold mb-3">
        🤖 AI Insight & Gợi ý Challenge
      </p>

      <div className="space-y-3">
        {insights.map((i) => (
          <div
            key={i.title}
            className={`p-3 rounded-xl border text-sm ${colorMap[i.type]}`}
          >
            <b>{i.title}</b>
            <p className="text-gray-700 text-xs mt-1">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
