// src/pages/Tables/StudentPortfolio.tsx
import React from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export default function StudentPortfolioPage() {
  // MOCK DATA
  const student = {
    name: "Minh Anh",
    className: "Lớp 7A1 – Toán & AI",
    streak: 14,
    minutes: 42,
    level: "green",
  };

  // Radar Chart (năng lực từng mảng)
  const radarOptions: ApexOptions = {
    chart: { type: "radar", toolbar: { show: false } },
    xaxis: {
      categories: ["Tư duy logic", "Hình học", "Phân số", "Ứng dụng AI", "Giải quyết vấn đề"],
      labels: { style: { colors: "#4B5563", fontSize: "11px" } },
    },
    colors: ["#4F46E5"],
    stroke: { width: 2 },
    fill: { opacity: 0.2 },
    markers: { size: 4 },
  };

  const radarSeries = [
    {
      name: "Điểm năng lực",
      data: [80, 65, 70, 85, 78],
    },
  ];

  // Activity Chart (7 ngày gần đây)
  const activityOptions: ApexOptions = {
    chart: { type: "line", toolbar: { show: false } },
    stroke: { curve: "smooth", width: 3 },
    colors: ["#06B6D4"],
    xaxis: {
      categories: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
      labels: { style: { colors: "#6B7280" } },
    },
    yaxis: { labels: { style: { colors: "#6B7280" } } },
    fill: { opacity: 0.2 },
  };

  const activitySeries = [
    { name: "Số phút học", data: [20, 15, 30, 42, 25, 18, 33] },
  ];

  // Donut Chart năng lực
  const donutOptions: ApexOptions = {
    chart: { type: "donut" },
    labels: ["Xanh – Làm chủ", "Vàng – Cần củng cố", "Đỏ – Nguy cơ"],
    colors: ["#22C55E", "#FACC15", "#EF4444"],
    legend: { position: "bottom" },
    dataLabels: { enabled: false },
  };

  const donutSeries = [12, 5, 1];

  // Quiz History
  const quizHistory = [
    { quiz: "Quiz Phân số", score: 8.5, date: "12/10/2025" },
    { quiz: "Quiz Hình học", score: 7.8, date: "10/10/2025" },
    { quiz: "AI Challenge – Logic", score: 9.1, date: "08/10/2025" },
  ];

  return (
    <>
      <PageMeta
        title="Hồ sơ học sinh"
        description="Theo dõi toàn diện năng lực & hoạt động học tập của học sinh"
      />

      <PageBreadcrumb pageTitle="Hồ sơ học sinh" />

      <div className="space-y-6 pb-10">

        {/* Header */}
        <section className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
          <h1 className="text-xl font-semibold text-gray-900">
            {student.name}
          </h1>
          <p className="text-gray-500">{student.className}</p>
          <div className="mt-3 flex gap-4 text-sm">
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              🔥 Streak {student.streak} ngày
            </span>
            <span className="px-3 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
              ⏳ {student.minutes} phút/ngày
            </span>
          </div>
        </section>

        {/* Charts Row */}
        <section className="grid grid-cols-12 gap-5">
          {/* Radar */}
          <div className="col-span-12 lg:col-span-6 bg-white border rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-semibold mb-2">📊 Năng lực theo từng kỹ năng</p>
            <Chart options={radarOptions} series={radarSeries} type="radar" height={260} />
          </div>

          {/* Donut */}
          <div className="col-span-12 lg:col-span-6 bg-white border rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-semibold mb-2">🎯 Mức độ làm chủ</p>
            <Chart options={donutOptions} series={donutSeries} type="donut" height={260} />
          </div>
        </section>

        {/* Activity */}
        <section className="bg-white border rounded-2xl p-5 shadow-sm">
          <p className="text-sm font-semibold">📈 Hoạt động học tập 7 ngày gần đây</p>
          <Chart options={activityOptions} series={activitySeries} type="line" height={260} />
        </section>

        {/* AI Insight */}
        <section className="bg-white border rounded-2xl p-5 shadow-sm">
          <p className="text-sm font-semibold mb-2">🤖 AI Insight cá nhân hóa</p>

          <div className="space-y-3 text-sm">
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-100">
              <b>⚠ AI phát hiện giảm tương tác 30% so với tuần trước</b>
              <p className="text-gray-600 text-xs">
                Đề xuất 1 buổi coaching 1:1 và giao thêm 1 Voice Reflection.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-amber-50 border border-amber-100">
              <b>📌 Cần củng cố phần Phân số</b>
              <p className="text-gray-600 text-xs">
                Hệ thống gợi ý 2 quiz luyện tập + AI Explanation video.
              </p>
            </div>

            <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100">
              <b>🔥 Năng lực tư duy logic tăng 18%</b>
              <p className="text-gray-600 text-xs">
                Duy trì streak học 14 ngày liên tiếp!
              </p>
            </div>
          </div>
        </section>

        {/* Quiz Table */}
        <section className="bg-white border rounded-2xl p-5 shadow-sm">
          <p className="text-sm font-semibold mb-3">📚 Bài Quiz & Challenge đã làm</p>

          <table className="min-w-full text-sm">
            <thead className="text-gray-500 uppercase text-[11px]">
              <tr>
                <th className="px-2 py-2 text-left">Tên bài</th>
                <th className="px-2 py-2 text-left">Điểm</th>
                <th className="px-2 py-2 text-left">Ngày làm</th>
              </tr>
            </thead>

            <tbody className="divide-y text-gray-800">
              {quizHistory.map((q) => (
                <tr key={q.quiz} className="hover:bg-gray-50">
                  <td className="px-2 py-2">{q.quiz}</td>
                  <td className="px-2 py-2">{q.score}</td>
                  <td className="px-2 py-2">{q.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="mt-3 text-[12px] font-medium text-indigo-600 underline">
            Xem toàn bộ Portfolio & lịch sử bài làm →
          </button>
        </section>
      </div>
    </>
  );
}
