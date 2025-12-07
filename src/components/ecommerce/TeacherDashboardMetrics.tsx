// src/components/ecommerce/TeacherDashboardMetrics.tsx
import React from "react";
import { getMetrics, totalStudents } from "./teacherData";

const TeacherDashboardMetrics: React.FC = () => {
  const {
    activeToday,
    avgMinutes,
    atRisk,
    roadmapRate,
    masterySummary,
    activeTrendText,
  } = getMetrics();

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {/* Mức độ tham gia hôm nay */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-indigo-50 to-transparent" />
        <div className="relative space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            Mức độ tham gia hôm nay
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              {activeToday}
            </span>
            <span className="text-xs text-gray-400">/ {totalStudents} HS</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700">
            <span>▲</span>
            <span>{activeTrendText}</span>
          </span>
          <div className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
            <span>
              Thời gian học trung bình:{" "}
              <span className="font-medium text-gray-700">
                {avgMinutes.toFixed(0)} phút
              </span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-600">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Realtime – cập nhật mỗi 5 phút
            </span>
          </div>
        </div>
      </div>

      {/* Early Warning */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="relative space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            Học sinh có nguy cơ (Early Warning)
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">{atRisk}</span>
            <span className="text-xs text-gray-400">HS</span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[11px] text-amber-700">
            <span>⚠</span>
            <span>Cần can thiệp trong 7 ngày</span>
          </span>
          <div className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
            <span>Tiêu chí: điểm thấp + giảm tương tác</span>
            <button className="text-[11px] font-medium text-indigo-600 underline-offset-2 hover:underline">
              Xem danh sách chi tiết
            </button>
          </div>
        </div>
      </div>

      {/* Lộ trình cá nhân */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="relative space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            Hoàn thành lộ trình học cá nhân
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              {roadmapRate}%
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-[11px] text-indigo-700">
            <span>✨</span>
            <span>Lộ trình 4–8 tuần</span>
          </span>
          <div className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
            <span>AI đã tối ưu thứ tự bài học</span>
            <button className="text-[11px] font-medium text-indigo-600 underline-offset-2 hover:underline">
              Chỉnh sửa Roadmap
            </button>
          </div>
        </div>
      </div>

      {/* Năng lực chuẩn */}
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="relative space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-400">
            Năng lực theo chuẩn (Xanh / Vàng / Đỏ)
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              {masterySummary}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] text-slate-700">
            <span>📈</span>
            <span>Chuẩn KNLS – Toán THCS</span>
          </span>
          <div className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
            <span>Liên kết AI Rubric &amp; Challenge</span>
            <button className="text-[11px] font-medium text-indigo-600 underline-offset-2 hover:underline">
              Xem biểu đồ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeacherDashboardMetrics;
