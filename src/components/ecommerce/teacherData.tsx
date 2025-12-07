// src/components/ecommerce/teacherData.tsx

export type Level = "green" | "yellow" | "red";

export interface Student {
  name: string;
  level: Level;
  streak: number;
  lastActiveDaysAgo: number;
  risk: boolean;
  minutes: number;
}

// ==== MOCK DATA ====
export const students: Student[] = [
  { name: "Minh Anh", level: "green", streak: 14, lastActiveDaysAgo: 0, risk: false, minutes: 42 },
  { name: "Tuấn Kiệt", level: "yellow", streak: 6, lastActiveDaysAgo: 1, risk: false, minutes: 30 },
  { name: "Bảo Ngọc", level: "green", streak: 18, lastActiveDaysAgo: 0, risk: false, minutes: 55 },
  { name: "Hà My", level: "red", streak: 2, lastActiveDaysAgo: 5, risk: true, minutes: 10 },
  { name: "Quang Huy", level: "yellow", streak: 3, lastActiveDaysAgo: 3, risk: true, minutes: 18 },
  { name: "Gia Bảo", level: "green", streak: 9, lastActiveDaysAgo: 0, risk: false, minutes: 36 },
  { name: "Khánh Linh", level: "yellow", streak: 4, lastActiveDaysAgo: 2, risk: false, minutes: 25 },
  { name: "Hoàng Nam", level: "red", streak: 1, lastActiveDaysAgo: 6, risk: true, minutes: 8 },
  { name: "Phương Thảo", level: "green", streak: 11, lastActiveDaysAgo: 0, risk: false, minutes: 40 },
  { name: "Đức Anh", level: "yellow", streak: 5, lastActiveDaysAgo: 1, risk: false, minutes: 28 },
];

export const totalStudents = 28;

// ==== METRICS DÙNG CHUNG ====
export const getMetrics = () => {
  const activeToday = students.filter((s) => s.lastActiveDaysAgo === 0).length;

  const avgMinutes =
    students.reduce((sum, s) => sum + s.minutes, 0) / (students.length || 1);

  const atRisk = students.filter((s) => s.risk).length;

  let green = 0,
    yellow = 0,
    red = 0;

  students.forEach((s) => {
    if (s.level === "green") green++;
    else if (s.level === "yellow") yellow++;
    else red++;
  });

  const roadmapRate = Math.round((students.length / totalStudents) * 100);

  const masterySummary = `${green} / ${yellow} / ${red}`;

  const activeTrendText = `+${(activeToday * 2).toFixed(0)}% so với tuần trước`;

  return {
    activeToday,
    avgMinutes,
    atRisk,
    green,
    yellow,
    red,
    roadmapRate,
    masterySummary,
    activeTrendText,
  };
};
