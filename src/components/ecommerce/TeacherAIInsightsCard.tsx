// src/components/ecommerce/TeacherAIInsightsCard.tsx
import React from "react";
import { getMetrics } from "./teacherData";

const TeacherAIInsightsCard: React.FC = () => {
  const { atRisk } = getMetrics();

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-gray-900">
            🧠 AI Insight &amp; Early Warning
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Gợi ý hành động can thiệp và cá nhân hoá từ AI Learning OS.
          </p>
        </div>
        <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-gray-500">
          Mentor Suggestion
        </span>
      </div>

      <div className="space-y-3 text-xs">
        {atRisk > 0 && (
          <div className="flex gap-2 rounded-xl border border-rose-100 bg-rose-50/60 p-3">
            <div className="mt-0.5 text-base">🚨</div>
            <div>
              <p className="text-[13px] font-medium text-gray-900">
                Có {atRisk} học sinh thuộc nhóm Đỏ – nguy cơ tụt học lực
              </p>
              <p className="mt-1 text-[11px] text-gray-600">
                AI đề xuất: hẹn buổi coaching 1:1 trong 7 ngày, giao thêm 1 AI
                Simulation + 1 Voice Reflection.{" "}
                <span className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 text-[10px] font-medium text-rose-700">
                  Ưu tiên cao
                </span>
              </p>
            </div>
          </div>
        )}

        <div className="flex gap-2 rounded-xl border border-amber-100 bg-amber-50/60 p-3">
          <div className="mt-0.5 text-base">🟡</div>
          <div>
            <p className="text-[13px] font-medium text-gray-900">
              Một số học sinh nhóm Vàng có streak thấp
            </p>
            <p className="mt-1 text-[11px] text-gray-600">
              Đề xuất: gửi lời khen nhỏ + Challenge 5 phút mỗi ngày để kéo lại
              thói quen học.{" "}
              <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                Động lực hóa
              </span>
            </p>
          </div>
        </div>

        <div className="flex gap-2 rounded-xl border border-sky-100 bg-sky-50/70 p-3">
          <div className="mt-0.5 text-base">🤖</div>
          <div>
            <p className="text-[13px] font-medium text-gray-900">
              AI gợi ý tối ưu lại Roadmap cho 30% học sinh
            </p>
            <p className="mt-1 text-[11px] text-gray-600">
              Một số bạn làm tốt phần Hình học nhưng yếu Phân số – nên đảo thứ
              tự bài học &amp; thêm 2 quiz luyện tập.{" "}
              <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-2 py-0.5 text-[10px] font-medium text-sky-700">
                Cá nhân hóa
              </span>
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[11px] text-gray-500">
        Gợi ý được sinh bởi{" "}
        <span className="font-medium text-gray-800">AI Mentor</span> dựa trên
        dữ liệu: thời gian học, điểm quiz, Voice Mode &amp; Challenge.
      </p>
    </div>
  );
};

export default TeacherAIInsightsCard;
