// src/components/ecommerce/TeacherDashboard.tsx
import React from "react";
import TeacherDashboardMetrics from "./TeacherDashboardMetrics";
import TeacherStudentProgressTable from "./TeacherStudentProgressTable";
import TeacherAIInsightsCard from "./TeacherAIInsightsCard";
import TeacherChartsCard from "./TeacherChartsCard";
import TeacherQuickActionsCard from "./TeacherQuickActionsCard";
import TeacherCommunicationCard from "./TeacherCommunicationCard";
import TeacherScheduleCard from "./TeacherScheduleCard";

const TeacherDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Topbar của dashboard lớp */}
      <section className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Dashboard lớp 7A1 – Toán &amp; AI Project
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Insight theo thời gian thực về{" "}
            <span className="font-medium text-gray-700">
              tiến độ – rủi ro – động lực học
            </span>{" "}
            của học sinh.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select className="h-9 rounded-full border border-gray-200 bg-white px-3 pr-7 text-xs text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none">
            <option>Lớp 7A1 – Toán &amp; AI</option>
            <option>Lớp 7A2 – Toán</option>
            <option>Lớp 8A1 – AI Explorer</option>
          </select>
          <select className="h-9 rounded-full border border-gray-200 bg-white px-3 pr-7 text-xs text-gray-700 shadow-sm focus:border-blue-500 focus:outline-none">
            <option>7 ngày gần đây</option>
            <option>30 ngày gần đây</option>
            <option>Cả học kỳ</option>
          </select>
          <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-xs font-medium text-white shadow-md hover:brightness-105">
            <span>📑</span>
            <span>Xuất báo cáo phụ huynh</span>
          </button>
        </div>
      </section>

      {/* Dòng metrics */}
      <TeacherDashboardMetrics />

      {/* Bản đồ tiến bộ + AI insight */}
     <section className="grid grid-cols-12 gap-3 md:gap-4">

        <div className="col-span-12 xl:col-span-7">
          <TeacherStudentProgressTable />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <TeacherAIInsightsCard />
        </div>
      </section>

      {/* Charts + Quick actions */}
     <section className="grid grid-cols-12 gap-3 md:gap-4">

        <div className="col-span-12 xl:col-span-7">
          <TeacherChartsCard />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <TeacherQuickActionsCard />
        </div>
      </section>

      {/* Communication + Schedule */}
      <section className="grid grid-cols-12 gap-4 md:gap-5 pb-4">
        <div className="col-span-12 xl:col-span-7">
          <TeacherCommunicationCard />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <TeacherScheduleCard />
        </div>
      </section>
    </div>
  );
};

export default TeacherDashboard;
