// src/components/ecommerce/TeacherQuickActionsCard.tsx
import React from "react";

const quickActions: [string, string][] = [
  ["🧪", "Tạo AI Challenge 10 phút"],
  ["🎧", "Giao bài Voice Mode luyện nói"],
  ["📚", "Soạn nhanh AI Lesson mới"],
  ["🧠", "Tùy chỉnh AI Mentor môn Toán"],
  ["📨", "Gửi thông báo cho phụ huynh"],
  ["📈", "Xem báo cáo cho Ban giám hiệu"],
];

const TeacherQuickActionsCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">
        ⚡ Quick Actions – Teacher Control Center
      </p>
      <p className="mt-1 text-xs text-gray-500">
        Điều phối lớp học, nội dung và tương tác phụ huynh chỉ với vài thao
        tác.
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
        {quickActions.map(([icon, label]) => (
          <button
            key={label}
            className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-gray-700 hover:bg-gray-100"
          >
            <span>{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      <ul className="mt-4 space-y-3 text-[11px]">
        <li className="grid grid-cols-[auto,1fr] gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(79,70,229,0.35)]" />
          <div>
            <p className="text-gray-800">
              08:30 – AI gợi ý: Giao thêm 1 AI Simulation về hình thang cho 5
              học sinh nhóm Vàng.
            </p>
            <p className="text-gray-500">
              Dựa trên dữ liệu sai số cao ở Quiz 3 &amp; thời gian tương tác
              thấp hôm qua.
            </p>
          </div>
        </li>
        <li className="grid grid-cols-[auto,1fr] gap-2">
          <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_0_4px_rgba(79,70,229,0.35)]" />
          <div>
            <p className="text-gray-800">
              09:10 – 3 phụ huynh đã xem báo cáo tuần, 1 phụ huynh để lại phản
              hồi tích cực.
            </p>
            <p className="text-gray-500">
              Bạn có thể gửi thêm gợi ý ôn tập cuối tuần bằng 1 click.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TeacherQuickActionsCard;
