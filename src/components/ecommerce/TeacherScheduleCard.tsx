// src/components/ecommerce/TeacherScheduleCard.tsx
import React from "react";

const TeacherScheduleCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-900">
          🗓 Lịch dạy – Challenge – Coaching tuần này
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Đồng bộ Google Calendar / Google Classroom và AI Roadmap của lớp.
        </p>
      </div>

      <ul className="space-y-3 text-[11px]">
        <li className="grid grid-cols-[auto,1fr] gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(79,70,229,0.35)]" />
          <div>
            <p className="text-gray-800">
              Thứ 3 – Tiết 3: AI Simulation – Diện tích đa giác (Project nhóm 3
              người)
            </p>
            <p className="text-gray-500">
              Hệ thống đã ghép nhóm theo năng lực &amp; tính cách để tối ưu hợp
              tác.
            </p>
          </div>
        </li>
        <li className="grid grid-cols-[auto,1fr] gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(79,70,229,0.35)]" />
          <div>
            <p className="text-gray-800">
              Thứ 5 – 19:30: Online Voice Challenge – Giải thích cách làm bài
              toán hình
            </p>
            <p className="text-gray-500">
              AI sẽ chấm Pronunciation + Logic, lưu bản ghi vào Portfolio từng
              học sinh.
            </p>
          </div>
        </li>
        <li className="grid grid-cols-[auto,1fr] gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(79,70,229,0.35)]" />
          <div>
            <p className="text-gray-800">
              Chủ nhật – 09:00: Coaching 1:1 cho 3 học sinh nhóm Đỏ
            </p>
            <p className="text-gray-500">
              AI gợi ý bài luyện phù hợp, cô giáo tập trung vào giải tỏa tâm lý
              &amp; chiến lược học.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TeacherScheduleCard;
