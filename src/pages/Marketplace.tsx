// src/pages/Marketplace.tsx
import React, { useMemo, useState } from "react";
import PageMeta from "../components/common/PageMeta";

import {
  Globe2,
  Star,
  Download,
  Play,
  BookOpen,
  Filter,
  Sparkles,
  Clock,
  Users,
  Languages,
} from "lucide-react";
import PageBreadcrumb from "../components/common/PageBreadCrumb";

type Level = "Beginner" | "Intermediate" | "Advanced";
type ContentType = "Lesson Pack" | "Challenge Set" | "Project" | "Template";
type Language = "vi" | "en" | "multi";

interface MarketplaceItem {
  id: number;
  title: string;
  description: string;
  type: ContentType;
  level: Level;
  subject: string;
  language: Language;
  thumbnailColor: string;
  studentsUsed: number;
  rating: number;
  reviews: number;
  duration: string;
  provider: string;
  providerCountry: string;
  tags: string[];
  isFree: boolean;
  price?: string;
  lastUpdated: string;
}

const items: MarketplaceItem[] = [
  {
    id: 1,
    title: "AI Lesson Pack – Linear Functions & Data Stories",
    description:
      "Chuỗi 6 lesson kết hợp Toán & AI: đọc hiểu dữ liệu, vẽ graph, kể chuyện bằng số liệu.",
    type: "Lesson Pack",
    level: "Intermediate",
    subject: "Math & Data",
    language: "en",
    thumbnailColor: "from-indigo-500 via-sky-500 to-emerald-400",
    studentsUsed: 1240,
    rating: 4.8,
    reviews: 87,
    duration: "6 buổi × 45 phút",
    provider: "FutureSchool Lab (Singapore)",
    providerCountry: "SG",
    tags: ["Math", "Data Literacy", "AI Storytelling"],
    isFree: false,
    price: "$19 / lớp",
    lastUpdated: "10/2025",
  },
  {
    id: 2,
    title: "AI Challenge Set – Geometry Simulation Lab",
    description:
      "Bộ 10 challenge mô phỏng hình học 2D/3D, học sinh thao tác trực tiếp trong môi trường AI.",
    type: "Challenge Set",
    level: "Advanced",
    subject: "Geometry",
    language: "multi",
    thumbnailColor: "from-rose-500 via-fuchsia-500 to-amber-400",
    studentsUsed: 860,
    rating: 4.9,
    reviews: 61,
    duration: "10 challenge · 15–20 phút/challenge",
    provider: "Nordic STEAM Studio",
    providerCountry: "SE",
    tags: ["Geometry", "Simulation", "STEAM"],
    isFree: false,
    price: "$24 / lớp",
    lastUpdated: "09/2025",
  },
  {
    id: 3,
    title: "Template – Weekly AI Reflection Journal (VI/EN)",
    description:
      "Template nhật ký phản tư mỗi tuần: học sinh nói chuyện với AI Mentor và lưu lại hành trình học.",
    type: "Template",
    level: "Beginner",
    subject: "Meta-learning",
    language: "multi",
    thumbnailColor: "from-emerald-500 via-teal-500 to-sky-400",
    studentsUsed: 2150,
    rating: 4.7,
    reviews: 102,
    duration: "15 phút / tuần",
    provider: "AI Learning OS Team",
    providerCountry: "VN",
    tags: ["Reflection", "SEL", "Bilingual"],
    isFree: true,
    price: undefined,
    lastUpdated: "11/2025",
  },
  {
    id: 4,
    title: "Project – Build Your Own AI News Channel (Middle School)",
    description:
      "Dự án 4 tuần: học sinh dùng AI tạo bản tin, phỏng vấn nhân vật ảo, luyện kỹ năng media literacy.",
    type: "Project",
    level: "Intermediate",
    subject: "Media & AI",
    language: "en",
    thumbnailColor: "from-amber-400 via-orange-500 to-rose-500",
    studentsUsed: 540,
    rating: 4.9,
    reviews: 39,
    duration: "4 tuần · 2 tiết / tuần",
    provider: "Global Classroom Initiative",
    providerCountry: "US",
    tags: ["Project-based", "Media Literacy", "AI Ethics"],
    isFree: false,
    price: "$39 / lớp",
    lastUpdated: "08/2025",
  },
  {
    id: 5,
    title: "AI Lesson Pack – Toán 7: Phân số & Tỉ lệ (tiếng Việt)",
    description:
      "Bộ bài giảng + quiz + challenge tiếng Việt, bám sát Toán 7, tích hợp gợi ý AI cho từng học sinh.",
    type: "Lesson Pack",
    level: "Beginner",
    subject: "Math",
    language: "vi",
    thumbnailColor: "from-sky-500 via-indigo-500 to-slate-700",
    studentsUsed: 3120,
    rating: 4.6,
    reviews: 131,
    duration: "8 lesson · 40–45 phút",
    provider: "BKAP AI Schooling",
    providerCountry: "VN",
    tags: ["Vietnamese", "Grade 7", "Curriculum-aligned"],
    isFree: true,
    price: undefined,
    lastUpdated: "11/2025",
  },
];

const languageLabel: Record<Language, string> = {
  vi: "Tiếng Việt",
  en: "English",
  multi: "Multi-language",
};

const Marketplace: React.FC = () => {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<ContentType | "all">("all");
  const [levelFilter, setLevelFilter] = useState<Level | "all">("all");
  const [langFilter, setLangFilter] = useState<Language | "all">("all");

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        !search ||
        `${item.title} ${item.description} ${item.tags.join(" ")}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesType = typeFilter === "all" || item.type === typeFilter;
      const matchesLevel =
        levelFilter === "all" || item.level === levelFilter;
      const matchesLang =
        langFilter === "all" || item.language === langFilter;

      return matchesSearch && matchesType && matchesLevel && matchesLang;
    });
  }, [search, typeFilter, levelFilter, langFilter]);

  return (
    <>
      <PageMeta
        title="AI Content Marketplace"
        description="Khám phá kho nội dung AI Lesson, Challenge & Project từ nhiều đối tác toàn cầu."
      />
      <PageBreadcrumb pageTitle="AI Content Marketplace" />

      <div className="space-y-6 pb-10">
        {/* Hero header */}
        <section className="rounded-3xl border border-gray-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-6 shadow-sm sm:px-8 sm:py-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-sky-100 ring-1 ring-white/10 backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-sky-300" />
                <span>Global AI Learning Content</span>
              </div>
              <h1 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                Khám phá & triển khai nội dung AI cho lớp học của bạn
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-200">
                Lesson, Quiz, Challenge & Project từ các trường, lab & giáo viên
                trên toàn thế giới. Thêm vào lớp chỉ với 1 click, AI sẽ tự động
                điều chỉnh cho học sinh của bạn.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-200">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  <Globe2 className="h-3.5 w-3.5" />
                  <span>5+ quốc gia</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>50+ Lesson Pack</span>
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                  <Play className="h-3.5 w-3.5" />
                  <span>AI Challenge & Simulation</span>
                </span>
              </div>
            </div>

            <div className="grid gap-3 rounded-2xl bg-slate-900/60 p-4 ring-1 ring-white/10 sm:min-w-[260px]">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                Lớp của bạn hôm nay
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="text-[11px] text-slate-400">Lớp đang dùng</p>
                  <p className="text-lg font-semibold text-white">7</p>
                  <p className="text-[11px] text-emerald-300">+2 tuần này</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">
                    Content đã triển khai
                  </p>
                  <p className="text-lg font-semibold text-white">32</p>
                  <p className="text-[11px] text-sky-300">AI tự cá nhân hóa</p>
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Giờ học AI</p>
                  <p className="text-lg font-semibold text-white">142</p>
                  <p className="text-[11px] text-amber-300">trong 30 ngày</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter & layout */}
        <section className="grid grid-cols-12 gap-5">
          {/* LEFT: filters & categories */}
          <aside className="col-span-12 space-y-4 lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                <Filter className="h-3.5 w-3.5" />
                Bộ lọc
              </p>

              {/* Search */}
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Tìm theo tên, tag, môn học..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-3 py-2 text-xs text-gray-800 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              {/* Type filter */}
              <div className="mb-3 space-y-2 text-xs">
                <p className="font-semibold text-gray-700">Loại nội dung</p>
                <div className="flex flex-wrap gap-2">
                  {(["all", "Lesson Pack", "Challenge Set", "Project", "Template"] as const).map(
                    (t) => (
                      <button
                        key={t}
                        onClick={() =>
                          setTypeFilter(
                            t === "all" ? "all" : (t as ContentType)
                          )
                        }
                        className={`rounded-full border px-3 py-1 ${
                          typeFilter === t || (t === "all" && typeFilter === "all")
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700 text-[11px]"
                            : "border-gray-200 bg-gray-50 text-gray-600 text-[11px]"
                        }`}
                      >
                        {t === "all" ? "Tất cả" : t}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Level filter */}
              <div className="mb-3 space-y-2 text-xs">
                <p className="font-semibold text-gray-700">Mức độ</p>
                <div className="flex flex-wrap gap-2">
                  {(["all", "Beginner", "Intermediate", "Advanced"] as const).map(
                    (lvl) => (
                      <button
                        key={lvl}
                        onClick={() =>
                          setLevelFilter(
                            lvl === "all" ? "all" : (lvl as Level)
                          )
                        }
                        className={`rounded-full border px-3 py-1 ${
                          levelFilter === lvl ||
                          (lvl === "all" && levelFilter === "all")
                            ? "border-slate-900 bg-slate-900 text-white text-[11px]"
                            : "border-gray-200 bg-gray-50 text-gray-600 text-[11px]"
                        }`}
                      >
                        {lvl === "all"
                          ? "Tất cả"
                          : lvl === "Beginner"
                          ? "Cơ bản"
                          : lvl === "Intermediate"
                          ? "Trung cấp"
                          : "Nâng cao"}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Language filter */}
              <div className="space-y-2 text-xs">
                <p className="font-semibold text-gray-700 flex items-center gap-1">
                  <Languages className="h-3.5 w-3.5 text-gray-500" />
                  Ngôn ngữ
                </p>
                <div className="flex flex-wrap gap-2">
                  {(["all", "vi", "en", "multi"] as const).map((lang) => (
                    <button
                      key={lang}
                      onClick={() =>
                        setLangFilter(lang === "all" ? "all" : (lang as Language))
                      }
                      className={`rounded-full border px-3 py-1 ${
                        langFilter === lang ||
                        (lang === "all" && langFilter === "all")
                          ? "border-sky-500 bg-sky-50 text-sky-700 text-[11px]"
                          : "border-gray-200 bg-gray-50 text-gray-600 text-[11px]"
                      }`}
                    >
                      {lang === "all"
                        ? "Tất cả"
                        : lang === "vi"
                        ? "Tiếng Việt"
                        : lang === "en"
                        ? "English"
                        : "Multi-language"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Trending tags */}
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <p className="mb-2 text-xs font-semibold text-gray-700">
                🔍 Từ khóa đang hot
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  "Grade 7 Math",
                  "AI Simulation",
                  "Media Literacy",
                  "Bilingual",
                  "SEL",
                  "Project-based",
                ].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSearch(tag)}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-700 hover:border-indigo-500 hover:text-indigo-600"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT: list */}
          <main className="col-span-12 lg:col-span-9">
            {/* small meta bar */}
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
              <div>
                <span className="font-medium text-gray-700">
                  {filteredItems.length}
                </span>{" "}
                nội dung được đề xuất cho lớp của bạn
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  Rating trung bình: 4.8/5
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-sky-600">
                  <Users className="h-3.5 w-3.5" />
                  Hơn 10.000 học sinh đã sử dụng
                </span>
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
              {filteredItems.map((item) => (
                <article
                  key={item.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex gap-4 p-4">
                    {/* Thumbnail */}
                    <div className="relative h-24 w-24 shrink-0 rounded-xl bg-gradient-to-br shadow-md sm:h-28 sm:w-28">
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${item.thumbnailColor}`}
                      />
                      <div className="relative flex h-full w-full items-center justify-center text-white">
                        {item.type === "Lesson Pack" && (
                          <BookOpen className="h-9 w-9" />
                        )}
                        {item.type === "Challenge Set" && (
                          <Play className="h-9 w-9" />
                        )}
                        {item.type === "Project" && (
                          <Globe2 className="h-9 w-9" />
                        )}
                        {item.type === "Template" && (
                          <Sparkles className="h-9 w-9" />
                        )}
                      </div>
                      {item.isFree ? (
                        <span className="absolute left-2 top-2 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 shadow">
                          FREE
                        </span>
                      ) : (
                        <span className="absolute left-2 top-2 rounded-full bg-slate-900/90 px-2 py-0.5 text-[10px] font-semibold text-white shadow">
                          {item.price}
                        </span>
                      )}
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1 space-y-1">
                      <div className="flex flex-wrap items-start justify-between gap-1">
                        <h3 className="text-sm font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700">
                          {item.type}
                        </span>
                      </div>
                      <p className="line-clamp-2 text-xs text-gray-600">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-gray-500">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {item.duration}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" />
                          {item.studentsUsed.toLocaleString()} học sinh
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                          {item.rating.toFixed(1)} ({item.reviews} đánh giá)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* bottom meta + actions */}
                  <div className="border-t border-gray-100 bg-gray-50/70 px-4 py-3 text-[11px]">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-3 text-gray-600">
                        <span className="inline-flex items-center gap-1">
                          <Globe2 className="h-3.5 w-3.5 text-gray-400" />
                          {item.provider}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Languages className="h-3.5 w-3.5 text-gray-400" />
                          {languageLabel[item.language]}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Download className="h-3.5 w-3.5 text-gray-400" />
                          Cập nhật: {item.lastUpdated}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-2">
                        <div className="hidden flex-wrap gap-1 sm:flex">
                          {item.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-white px-2 py-0.5 text-[10px] text-gray-600 ring-1 ring-gray-200"
                            >
                              #{tag}
                            </span>
                          ))}
                          {item.tags.length > 2 && (
                            <span className="text-[10px] text-gray-400">
                              +{item.tags.length - 2} tags
                            </span>
                          )}
                        </div>

                        <button className="inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 hover:bg-gray-50">
                          Xem chi tiết
                        </button>
                        <button className="inline-flex items-center rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-medium text-white shadow hover:bg-indigo-700">
                          Thêm vào lớp
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </main>
        </section>
      </div>
    </>
  );
};

export default Marketplace;
