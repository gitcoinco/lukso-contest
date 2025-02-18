"use client";

import React, { useState } from "react";
import { useLeaderboard } from "../../hooks/useLeaderboard";
import { WeekTabs } from "../leaderboard/WeekTabs";
import { LeaderboardTable } from "../leaderboard/LeaderboardTable";
import { Pagination } from "../leaderboard/Pagination";
import { MetricsInfo } from "../leaderboard/MetricsInfo";
import { useTheme } from "../../contexts/ThemeContext";
import BgHero from "../media/BgHero";
import Button from "../Button";
import { ArrowRight } from "lucide-react";

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
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ margin: "0 -50px" }}
        >
          <BgHero/>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white py-32">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Live Memecoin Rankings
          </h1>
          <p className="text-lg sm:text-xl opacity-90">
            Track the competition. Watch the charts. Stay based.
          </p>
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
                  The leaderboard for this round will be displayed once we have collected sufficient project data.
                </p>
                <p className="text-base opacity-75">
                  Please check back later or view previous rounds' rankings.
                </p>
              </div>
            ) : (
              <div className="bg-surface rounded-xl shadow-lg overflow-hidden">
                <div
                  className={`p-4 sm:p-6 ${
                    theme === "dark" ? "bg-[#0a090d]" : "bg-brand"
                  } text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4`}
                >
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      Round {activeWeek} Rankings
                    </h2>
                    {lastUpdated && (
                      <p className="text-sm opacity-90">
                        {activeWeek === defaultWeek ? (
                          <>
                            Last updated: {new Date(lastUpdated).toLocaleDateString('en-US', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                              second: '2-digit',
                              hour12: true
                            }).replace(/(\d+)(?=(st|nd|rd|th))/, '$1$2')}
                          </>
                        ) : (
                          'This round has ended. Rankings are final.'
                        )}
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
                  projects={activeWeek === defaultWeek ? currentProjects : currentProjects.filter(project => project.score !== 0)}
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

            <MetricsInfo
              week={activeWeek}
              metrics={metrics}
              winnersCount={WINNERS_COUNT}
            />
          </div>
        </>
      ) : (
        <div className="max-w-7xl mx-auto p-10 py-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Gathering Data
          </h2>
          <p className="text-lg sm:text-xl opacity-90 mb-4">
            The leaderboard will be displayed once we have sufficient project data
          </p>
          <p className="text-base opacity-75">
            Want to participate? Apply now to join the competition!
          </p>
        </div>
      )}

      {/* CTA Section */}
      <section
        className={`py-12 sm:py-16 p-10 ${
          theme === "dark" ? "bg-[#0a090d]" : "bg-brand"
        } mt-auto`}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Ready to Join the Battle?
          </h2>
          <div className="flex justify-center items-center">
            <Button
              onClick={() =>
                window.open("https://apply.polygon.gitcoin.co", "_blank")
              }
              variant="secondary"
            >
              Apply Now <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
