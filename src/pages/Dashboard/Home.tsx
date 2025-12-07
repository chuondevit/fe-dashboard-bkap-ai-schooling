// src/pages/Dashboard/Home.tsx
import TeacherDashboard from "../../components/ecommerce/TeacherDashboard";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="AI Learning OS - Teacher Dashboard"
        description="Dashboard lớp học dành cho giáo viên: tiến độ, rủi ro và động lực học sinh."
      />
      <TeacherDashboard />
    </>
  );
}
