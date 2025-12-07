import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

export default function StudentList() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "green":
        return "bg-emerald-100 text-emerald-700 border-emerald-300";
      case "yellow":
        return "bg-amber-100 text-amber-700 border-amber-300";
      case "red":
        return "bg-rose-100 text-rose-700 border-rose-300";
      default:
        return "bg-gray-100 text-gray-600 border-gray-300";
    }
  };

  return (
    <>
      <PageMeta 
  title="Học sinh & Portfolio" 
  description="Quản lý hồ sơ học sinh & portfolio cá nhân" 
/>

      <PageBreadcrumb pageTitle="Học sinh & Portfolio" />

      <div className="grid grid-cols-12 gap-5 mt-5">
        {students.map((st: any) => (
          <div
            key={st.id}
            className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md cursor-pointer transition"
              onClick={() => navigate(`/students/${st.id}`)}
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-semibold">
                  {st.fullName.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-gray-900">{st.fullName}</p>
                  <p className="text-xs text-gray-500">{st.code}</p>
                </div>
              </div>

              {/* Level */}
              <div className="mt-3">
                <span
                  className={`inline-flex items-center gap-1 px-2 py-1 rounded-full border text-xs ${getLevelColor(
                    st.level || "green"
                  )}`}
                >
                  ● {st.level === "green"
                    ? "Xanh – Làm chủ"
                    : st.level === "yellow"
                    ? "Vàng – Cần củng cố"
                    : "Đỏ – Nguy cơ"}
                </span>
              </div>

              {/* Info */}
              <div className="mt-4 space-y-1 text-sm text-gray-700">
                <p>📘 Lớp: {st.classEntity?.name}</p>
                <p>🔥 Streak: {st.streak || 0} ngày</p>
                <p>⏱ Cuối cùng học: {st.lastActiveDaysAgo || 0} ngày trước</p>
              </div>

              <button className="mt-4 w-full rounded-xl bg-indigo-600 text-white text-sm py-2 hover:bg-indigo-700">
                Xem Portfolio
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
