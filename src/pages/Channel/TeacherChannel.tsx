import React, { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { Plus, Play, BarChart2, Eye } from "lucide-react";

export default function TeacherChannelPage() {
  // MOCK DATA
  const lessons = [
    {
      id: 1,
      title: "AI Lesson – Phân số nâng cao",
      views: 320,
      createdAt: "10/12/2025",
      type: "lesson",
    },
    {
      id: 2,
      title: "Video hướng dẫn – Hình học trực quan",
      views: 210,
      createdAt: "08/12/2025",
      type: "video",
    },
    {
      id: 3,
      title: "AI Generated – Voice Explanation",
      views: 150,
      createdAt: "05/12/2025",
      type: "ai",
    },
  ];

  const insights = [
    {
      title: "AI phân tích phong cách giảng dạy",
      detail:
        "Giáo viên nói chậm – rõ ràng, phù hợp với nhóm HS năng lực trung bình.",
      type: "style",
    },
    {
      title: "Đề xuất cải thiện nội dung",
      detail:
        "AI gợi ý thêm 2 ví dụ minh họa cho phần Hình học để tăng tỷ lệ hiểu bài.",
      type: "suggest",
    },
    {
      title: "Đánh giá mức độ tương tác",
      detail:
        "HS xem trung bình 65% độ dài video – cao hơn 12% so với tháng trước.",
      type: "engagement",
    },
  ];

  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      <PageMeta
        title="AI Channel của tôi"
        description="Quản lý nội dung bài giảng, AI Lesson và Video học tập"
      />

      <PageBreadcrumb pageTitle="AI Channel của tôi" />

      <div className="space-y-6 pb-14">

        {/** Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">
            Kho nội dung của giáo viên
          </h1>

          <button
            onClick={() => setShowUpload(true)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700"
          >
            <Plus size={18} /> Tải nội dung mới
          </button>
        </div>

        {/** MAIN CONTENT GRID */}
        <section className="grid grid-cols-12 gap-6">

          {/** LEFT – LIST OF LESSONS */}
          <div className="col-span-12 lg:col-span-7 bg-white border rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-semibold mb-3">🎬 Danh sách bài giảng & Lesson</p>

            <div className="space-y-3">
              {lessons.map((ls) => (
                <div
                  key={ls.id}
                  className="flex items-center justify-between p-3 border rounded-xl hover:bg-gray-50 transition cursor-pointer"
                >
                  <div>
                    <p className="font-medium text-gray-900">{ls.title}</p>
                    <p className="text-xs text-gray-500">
                      {ls.views} lượt xem • {ls.createdAt}
                    </p>
                  </div>

                  {ls.type === "lesson" ? (
                    <Play className="text-indigo-600" />
                  ) : ls.type === "video" ? (
                    <Eye className="text-blue-500" />
                  ) : (
                    <BarChart2 className="text-emerald-600" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/** RIGHT – AI INSIGHT */}
          <div className="col-span-12 lg:col-span-5 bg-white border rounded-2xl p-5 shadow-sm">
            <p className="text-sm font-semibold mb-3">🤖 AI Insight về nội dung giảng dạy</p>

            <div className="space-y-3">
              {insights.map((i) => (
                <div
                  key={i.title}
                  className="p-3 rounded-xl border bg-gray-50 hover:bg-gray-100 transition"
                >
                  <b>{i.title}</b>
                  <p className="text-xs text-gray-600">{i.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/** UPLOAD MODAL */}
        {showUpload && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-md rounded-xl p-6 shadow-lg">
              <h2 className="text-lg font-semibold mb-4">Tải nội dung mới</h2>

              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Tiêu đề bài giảng..."
                  className="w-full border px-3 py-2 rounded-lg"
                />
                <input
                  type="file"
                  className="w-full border px-3 py-2 rounded-lg"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={() => setShowUpload(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Hủy
                </button>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
                  Tải lên
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
