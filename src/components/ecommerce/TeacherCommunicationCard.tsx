// src/components/ecommerce/TeacherCommunicationCard.tsx
import React from "react";

const TeacherCommunicationCard: React.FC = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-900">
          👨‍👩‍👧 Kênh giao tiếp phụ huynh – học sinh – giáo viên
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Tăng niềm tin &amp; sự gắn kết gia đình qua dữ liệu học tập và cảm
          xúc.
        </p>
        <span className="mt-2 inline-flex rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-gray-500">
          AI Family Layer
        </span>
      </div>

      <div className="space-y-3 text-xs">
        <div className="flex gap-2 rounded-xl border border-gray-100 bg-gray-50/80 p-3">
          <div className="mt-0.5 text-base">📨</div>
          <div>
            <p className="text-[13px] font-medium text-gray-900">
              Báo cáo tuần đã gửi cho 26 / 28 phụ huynh
            </p>
            <p className="mt-1 text-[11px] text-gray-600">
              18 phụ huynh đã xem, 4 phụ huynh phản hồi trực tiếp trong ứng
              dụng.{" "}
              <button className="text-[11px] font-medium text-indigo-600 underline-offset-2 hover:underline">
                Xem chi tiết
              </button>
            </p>
          </div>
        </div>

        <div className="flex gap-2 rounded-xl border border-gray-100 bg-gray-50/80 p-3">
          <div className="mt-0.5 text-base">🎯</div>
          <div>
            <p className="text-[13px] font-medium text-gray-900">
              AI gợi ý gửi "Lời khen cá nhân hoá" cho 6 học sinh duy trì streak
              &gt; 10 ngày
            </p>
            <p className="mt-1 text-[11px] text-gray-600">
              Có thể chọn gửi kèm video ngắn hoặc voice từ cô giáo để tăng động
              lực.
            </p>
          </div>
        </div>

        <div className="flex gap-2 rounded-xl border border-amber-100 bg-amber-50/80 p-3">
          <div className="mt-0.5 text-base">💬</div>
          <div>
            <p className="text-[13px] font-medium text-gray-900">
              2 phụ huynh cần được trao đổi thêm về áp lực học tập của con
            </p>
            <p className="mt-1 text-[11px] text-gray-600">
              AI Family Engine phát hiện dấu hiệu stress nhẹ trong Voice Mode
              của học sinh.{" "}
              <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                Cần follow-up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherCommunicationCard;
