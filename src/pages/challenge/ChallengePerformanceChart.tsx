import React from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";

export default function ChallengePerformanceChart() {
  const options: ApexOptions = {
    chart: { type: "line", toolbar: { show: false } },
    stroke: { curve: "smooth", width: 3 },
    colors: ["#4F46E5"],
    xaxis: {
      categories: ["T2", "T3", "T4", "T5", "T6", "T7", "CN"],
      labels: { style: { colors: "#6B7280" } },
    },
  };

  const series = [
    { name: "Điểm Challenge trung bình", data: [67, 72, 78, 82, 79, 85, 88] },
  ];

  return (
    <div className="p-5 bg-white border rounded-2xl shadow-sm">
      <p className="text-sm font-semibold mb-3">
        📈 Điểm Challenge trong 7 ngày gần đây
      </p>
      <Chart options={options} series={series} type="line" height={260} />
    </div>
  );
}
