// src/components/ecommerce/TeacherChartsCard.tsx
import React from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { getMetrics } from "./teacherData";

const TeacherChartsCard: React.FC = () => {
  const { green, yellow, red } = getMetrics();

  const activeOptions: ApexOptions = {
    chart: {
      type: "line",
      height: 220,
      toolbar: { show: false },
      fontFamily: "Outfit, system-ui, sans-serif",
    },
    stroke: { curve: "smooth", width: 3 },
    colors: ["#4F46E5"],
    dataLabels: { enabled: false },
    grid: {
      borderColor: "#E5E7EB",
      xaxis: { lines: { show: false } },
    },
    xaxis: {
      categories: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
      axisTicks: { show: false },
      axisBorder: { show: false },
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    yaxis: {
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.4,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
    tooltip: { theme: "light" },
  };

  const activeSeries = [
    {
      name: "Số HS hoạt động",
      data: [15, 18, 20, 22, 24, 19, 17],
    },
  ];

  const masteryOptions: ApexOptions = {
    chart: {
      type: "donut",
      height: 220,
      fontFamily: "Outfit, system-ui, sans-serif",
    },
    labels: ["Xanh – Làm chủ", "Vàng – Cần củng cố", "Đỏ – Nguy cơ"],
    legend: {
      position: "bottom",
      fontSize: "12px",
      labels: { colors: "#4B5563" },
    },
    colors: ["#22C55E", "#FACC15", "#EF4444"],
    stroke: { colors: ["#FFFFFF"] },
    dataLabels: { enabled: false },
    plotOptions: { pie: { donut: { size: "65%" } } },
  };

  const masterySeries = [green, yellow, red];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">
        📊 Biểu đồ năng lực &amp; thói quen học tập
      </p>
      <p className="mt-1 text-xs text-gray-500">
        Kết hợp dữ liệu quiz, Challenge và Voice Mode để đánh giá toàn diện.
      </p>

      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="h-[190px]">
          <Chart
            options={activeOptions}
            series={activeSeries}
            type="line"
            height={190}
          />
        </div>
        <div className="h-[190px]">
          <Chart
            options={masteryOptions}
            series={masterySeries}
            type="donut"
            height={190}
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherChartsCard;
