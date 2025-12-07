import React from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ChallengeOverviewCard from "./ChallengeOverviewCard";
import ChallengePerformanceChart from "./ChallengePerformanceChart";
import ChallengeRecommendationCard from "./ChallengeRecommendationCard";
import ChallengeListTable from "./ChallengeListTable";

export default function ChallengeLabPage() {
  return (
    <>
      <PageMeta
        title="AI Challenge & Lab"
        description="Theo dõi tiến độ Challenge, AI Lab và gợi ý AI Insight"
      />

      <PageBreadcrumb pageTitle="AI Challenge & Lab" />

      <div className="space-y-6 pb-10">
        {/* OVERVIEW ROW */}
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-4">
            <ChallengeOverviewCard />
          </div>

          <div className="col-span-12 lg:col-span-8">
            <ChallengePerformanceChart />
          </div>
        </div>

        {/* AI INSIGHT */}
        <ChallengeRecommendationCard />

        {/* CHALLENGE TABLE */}
        <ChallengeListTable />
      </div>
    </>
  );
}
