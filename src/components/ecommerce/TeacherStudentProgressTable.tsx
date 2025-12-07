// src/components/ecommerce/TeacherStudentProgressTable.tsx
import React from "react";
import { students } from "./teacherData";

const TeacherStudentProgressTable: React.FC = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <span>📌 Bản đồ tiến bộ học sinh</span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-gray-500">
              Xanh – Vàng – Đỏ
            </span>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Theo dõi năng lực từng học sinh &amp; trạng thái roadmap cá nhân.
          </p>
        </div>
        <select className="h-9 rounded-full border border-gray-200 bg-white px-3 pr-7 text-xs text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none">
          <option>Theo chủ đề: Phân số</option>
          <option>Theo chủ đề: Hình học</option>
          <option>Theo năng lực KNLS</option>
        </select>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-100">
        <div className="max-h-[340px] overflow-auto text-xs">
          <table className="min-w-full border-collapse">
            <thead className="bg-gray-50 text-[10px] uppercase tracking-[0.14em] text-gray-500">
              <tr>
                <th className="px-3 py-2 text-left">Học sinh</th>
                <th className="px-3 py-2 text-left">Mức độ</th>
                <th className="px-3 py-2 text-left">Streak</th>
                <th className="px-3 py-2 text-left">Cuối cùng học</th>
                <th className="px-3 py-2 text-left">Trạng thái</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {students.map((s) => (
                <tr
                  key={s.name}
                  className="transition-colors hover:bg-indigo-50/40"
                >
                  <td className="px-3 py-2 text-xs font-medium text-gray-900">
                    {s.name}
                  </td>
                  <td className="px-3 py-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[11px] ${
                        s.level === "green"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                          : s.level === "yellow"
                          ? "border-amber-200 bg-amber-50 text-amber-800"
                          : "border-rose-200 bg-rose-50 text-rose-800"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          s.level === "green"
                            ? "bg-emerald-500"
                            : s.level === "yellow"
                            ? "bg-amber-400"
                            : "bg-rose-500"
                        }`}
                      />
                      {s.level === "green"
                        ? "Xanh – Làm chủ"
                        : s.level === "yellow"
                        ? "Vàng – Cần củng cố"
                        : "Đỏ – Nguy cơ"}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-700">
                    {s.streak} ngày
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-700">
                    {s.lastActiveDaysAgo === 0
                      ? "Hôm nay"
                      : `${s.lastActiveDaysAgo} ngày trước`}
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-700">
                    {s.risk ? (
                      <span className="inline-flex items-center gap-1 rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 text-[11px] text-rose-700">
                        <span>⚠</span>
                        <span>
                          {s.lastActiveDaysAgo >= 5
                            ? "Nguy cơ bỏ học"
                            : "Cần hỗ trợ thêm"}
                        </span>
                      </span>
                    ) : (
                      <span className="text-xs text-gray-700">
                        {s.streak >= 10
                          ? "Ổn định / tích cực"
                          : "Tiến bộ bình thường"}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherStudentProgressTable;
