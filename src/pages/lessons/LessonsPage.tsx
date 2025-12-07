import React from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import { BookOpen, FileText, PlayCircle } from "lucide-react";

export default function LessonsPage() {
  const lessons = [
    {
      title: "AI Lesson – Phân số nâng cao",
      desc: "Video + ví dụ tương tác giúp học sinh hiểu bản chất phân số.",
      duration: "12 phút",
    },
    {
      title: "AI Explanation – Hình học không gian",
      desc: "AI giải thích trực quan bằng mô phỏng 3D.",
      duration: "9 phút",
    },
    {
      title: "Voice Mode – Tư duy logic",
      desc: "Học sinh trao đổi trực tiếp với AI bằng giọng nói.",
      duration: "15 phút",
    }
  ];

  const quizzes = [
    {
      name: "Quiz Phân số – Level 1",
      questions: 10,
      difficulty: "Dễ",
    },
    {
      name: "Quiz Logic – Level 2",
      questions: 12,
      difficulty: "Trung bình",
    },
    {
      name: "Challenge Hình học – Tứ giác",
      questions: 8,
      difficulty: "Khó",
    }
  ];

  const diffColor: Record<string, string> = {
    "Dễ": "bg-emerald-100 text-emerald-700 border-emerald-300",
    "Trung bình": "bg-amber-100 text-amber-700 border-amber-300",
    "Khó": "bg-rose-100 text-rose-700 border-rose-300",
  };

  return (
    <>
      <PageMeta
        title="AI Lesson & Quiz"
        description="Kho học liệu AI bao gồm video, bài giảng thông minh và bài quiz"
      />

      <PageBreadcrumb pageTitle="AI Lesson & Quiz" />

      <div className="space-y-8">

        {/* ======================= AI LESSONS ======================= */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <BookOpen size={20} className="text-indigo-600" />
            AI Lessons – Bài học thông minh
          </h2>

          <div className="grid grid-cols-12 gap-5 mt-4">
            {lessons.map((l) => (
              <div
                key={l.title}
                className="col-span-12 sm:col-span-6 xl:col-span-4 bg-white rounded-2xl border p-5 shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="h-12 w-12 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center">
                    <PlayCircle size={26} />
                  </div>
                  <span className="text-xs text-gray-500">{l.duration}</span>
                </div>

                <p className="font-semibold text-gray-900">{l.title}</p>
                <p className="text-sm text-gray-600 mt-1">{l.desc}</p>

                <button className="mt-3 w-full rounded-xl bg-indigo-600 text-white text-sm py-2 hover:bg-indigo-700">
                  Xem bài học →
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ======================= QUIZZES ======================= */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <FileText size={20} className="text-pink-600" />
            Quiz & Challenge – Bài tập luyện tập
          </h2>

          <div className="bg-white border rounded-2xl p-5 shadow-sm mt-4">
            <table className="min-w-full text-sm">
              <thead className="text-gray-500 uppercase text-[11px]">
                <tr>
                  <th className="px-2 py-2 text-left">Tên bài</th>
                  <th className="px-2 py-2 text-left">Câu hỏi</th>
                  <th className="px-2 py-2 text-left">Độ khó</th>
                </tr>
              </thead>

              <tbody className="divide-y text-gray-800">
                {quizzes.map((q) => (
                  <tr key={q.name}>
                    <td className="px-2 py-3">{q.name}</td>
                    <td className="px-2 py-3">{q.questions} câu</td>
                    <td className="px-2 py-3">
                      <span
                        className={`px-2 py-1 rounded-full border text-xs ${diffColor[q.difficulty]}`}
                      >
                        {q.difficulty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button className="mt-3 text-[12px] font-medium text-indigo-600 underline">
              Xem tất cả Quiz →
            </button>
          </div>
        </section>

      </div>
    </>
  );
}
