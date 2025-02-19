"use client";

import React, { useState } from "react";
import { useLeaderboard } from "../../hooks/useLeaderboard";
import { WeekTabs } from "../leaderboard/WeekTabs";
import { LeaderboardTable } from "../leaderboard/LeaderboardTable";
import { Pagination } from "../leaderboard/Pagination";
import { useTheme } from "../../contexts/ThemeContext";
import Pill from "../Pill";

import Image from "next/image";
const WINNERS_COUNT = 20;
const PAGE_SIZES = [25, 50, 100];
const DISABLE_CURRENT_WEEK = false;

interface LeaderboardPageProps {
  defaultWeek?: number;
}

export function LeaderboardPage({ defaultWeek = 1 }: LeaderboardPageProps) {
  const { theme } = useTheme();
  const [activeWeek, setActiveWeek] = useState(defaultWeek);
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(PAGE_SIZES[0]);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const { loading, error, projects, metrics, sortProjects, lastUpdated } =
    useLeaderboard(activeWeek);

  const totalPages = Math.ceil(projects.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const toggleProjectDetails = (tokenAddress: string) => {
    setExpandedProject(expandedProject === tokenAddress ? null : tokenAddress);
  };

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Error Loading Leaderboard
        </h2>
        <p className="text-text-secondary">{error}</p>
      </div>
    );
  }

  // Check if currentProjects is empty or if at least two metrics have zero values
  const isZero =
    currentProjects.length === 0 ||
    Object.values(currentProjects[0].metrics).filter((value) => value === 0)
      .length >= 2;

  return (
    <div className="min-h-[calc(100vh-100px)] pt-[72px]">
      {/* Hero Section */}
      <div
        className={`relative overflow-hidden ${
          theme === "dark" ? "bg-[#0a090d]" : "bg-brand"
        } p-10`}
      >
        {/* Background */}
        {/* <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ margin: "0 -50px" }}
        >
          <BgHero/>
        </div> */}

        {/* Content */}
        <div className="relative z-10 mx-auto text-center text-white">
          <Image
            src="/brand/headerLeaderboard.svg"
            alt="Header Leaderboard"
            width={1440}
            height={380}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* Leaderboard Table */}
      {activeWeek > 0 ? (
        <>
          <WeekTabs activeWeek={activeWeek} onWeekChange={setActiveWeek} />
          <div className="max-w-7xl mx-auto p-10 py-8">
            {DISABLE_CURRENT_WEEK && activeWeek === defaultWeek ? (
              <div className="bg-surface rounded-xl shadow-lg p-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Current Round Rankings Coming Soon
                </h2>
                <p className="text-lg sm:text-xl opacity-90 mb-4">
                  The leaderboard for this round will be displayed once we have
                  collected sufficient project data.
                </p>
                <p className="text-base opacity-75">
                  Please check back later or view previous rounds' rankings.
                </p>
              </div>
            ) : (
              <div className="bg-surface shadow-lg overflow-hidden">
                <div className="flex justify-between items-center p-6 bg-[rgba(255,255,255,0.05)]">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      Level {activeWeek} Rankings
                    </h2>
                    {lastUpdated && (
                      <p className="text-sm opacity-90 font-normal">
                        Discover the top-performing mini dApps from Hack The
                        Grid.
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span>Show</span>
                    <select
                      value={entriesPerPage}
                      onChange={(e) => {
                        setEntriesPerPage(Number(e.target.value));
                        setCurrentPage(1);
                      }}
                      className={`bg-white ${
                        theme === "dark" ? "text-[#0a090d]" : "text-brand"
                      } rounded px-2 py-1`}
                    >
                      {PAGE_SIZES.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    <span>entries</span>
                  </div>
                </div>

                <LeaderboardTable
                  loading={loading}
                  projects={
                    activeWeek === defaultWeek
                      ? currentProjects
                      : currentProjects.filter((project) => project.score !== 0)
                  }
                  metrics={metrics}
                  expandedProject={expandedProject}
                  onToggleProject={toggleProjectDetails}
                  onSort={sortProjects}
                  winnersCount={WINNERS_COUNT}
                />

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  startIndex={startIndex}
                  endIndex={endIndex}
                  totalItems={projects.length}
                  onPageChange={handlePageChange}
                />
              </div>
            )}

            {/* <MetricsInfo
              week={activeWeek}
              metrics={metrics}
              winnersCount={WINNERS_COUNT}
            /> */}
            <div className="h-[212px] p-6 bg-white/5 rounded-xl shadow-lg flex-col justify-start items-start gap-4 inline-flex overflow-hidden mt-12">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-5 h-5 relative"></div>
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-white text-xl font-bold leading-7">
                    How the Leaderboard Works
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[120px] px-6 flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch h-[120px] flex-col justify-start items-start flex">
                  <div className="self-stretch text-white/70 text-base font-normal leading-normal">
                    The leaderboard updates daily and tracks mini dApps
                    submitted to Hack The Grid. It provides a transparent view
                    of adoption, activity, and ecosystem impact. Rankings are
                    determined by the average performance across all five KPIs.
                    Grant-winning projects are tagged based on their funding
                    level, with indicators showing which have met the KPI
                    threshold to unlock their second milestone.
                  </div>
                  <div className="self-stretch text-white/70 text-base font-normal leading-normal mt-4 flex gap-4">
                    <span>🥇 Prime Grant Recipient</span>
                    <span>🥈 Core Grant Recipient</span>
                    <span>🥉 Origin Grant Recipient</span>
                    <span>🚀 Milestone 2 Unlocked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="max-w-7xl mx-auto p-10 py-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Gathering Data
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-4">
            The leaderboard will be displayed once we have sufficient project
            data
          </p>
          <p className="text-base opacity-75">
            Want to participate? Apply now to join the competition!
          </p>
        </div>
      )}

      {/* CTA Section */}
      <section
        className={`p-4 ${
          theme === "dark" ? "bg-[#0a090d]" : "bg-brand"
        } mt-auto`}
      >
        <div className="flex gap-2 justify-center">
          <Pill variant="black">Build your mini dApp</Pill>
          <Pill variant="black">Follow LUKSO for updates</Pill>
        </div>
      </section>
    </div>
  );
}
