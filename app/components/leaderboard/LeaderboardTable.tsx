import React from "react";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { RankedProject } from "../../types/leaderboard";
import { formatMetricName, formatMetricValue } from "../../utils/formatters";
import IconWithTooltip from "../IconWithTooltip";
import {ProfileIcon} from "../ProfileIcon";

interface LeaderboardTableProps {
  loading: boolean;
  projects: RankedProject[];
  metrics: string[];
  expandedProject: string | null;
  onToggleProject: (tokenAddress: string) => void;
  onSort: (metric: string) => void;
  winnersCount: number;
}

export function LeaderboardTable({
  loading,
  projects,
  metrics,
  expandedProject,
  onToggleProject,
  onSort,
  winnersCount,
}: LeaderboardTableProps) {
  const formatAddress = (address: string): string => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  if (loading) {
    return (
      <div className="p-12 text-center text-text-secondary">
        Loading leaderboard data...
      </div>
    );
  }

  // Mobile Card View
  const MobileView = () => (
    <div className="space-y-4 p-4 rounded-xl">
      {projects.map((project) => (
        <div
          key={project.project.tokenAddress}
          className={`bg-surface rounded-lg shadow-sm overflow-hidden ${
            project.rank <= winnersCount ? "border-l-4 border-brand" : ""
          }`}
        >
          {/* Header with Rank and Name */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                {project.project.data.profileImages?.[0]?.src && (
                  <ProfileIcon 
                    imageUrl={`${project.project.data.profileImages[0].src}&width=32&dpr=2`}
                  />
                )}
                <span className="font-medium">
                  {project.project.name} 
                </span>
              </div>
              {/* <button
                onClick={() => onToggleProject(project.project.tokenAddress)}
                className="text-text-secondary"
              >
                {expandedProject === project.project.tokenAddress ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button> */}
            </div>

            {/* Description (shown when expanded) */}
            {expandedProject === project.project.tokenAddress && (
              <div className="mt-2 mb-4 space-y-3">
                <p className="text-sm text-text-secondary">
                  {project.project.data.description}
                </p>

                {/* Tags */}
                {project.project.data.tags && project.project.data.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.project.data.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-surface-secondary text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Social Links */}
                {project.project.data.links && project.project.data.links.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {project.project.data.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand hover:opacity-80 transition-opacity inline-flex items-center gap-1 text-sm"
                      >
                        {link.title}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}

                {/* Project ID */}
                <div className="text-xs text-text-secondary">
                  <span className="mr-1">ID:</span>
                  <a
                    href={`https://universaleverything.io/${project.project.data.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand hover:opacity-80 transition-opacity font-mono"
                  >
                    {project.project.data.id}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Metrics */}
          <div className="p-10 pb-4 grid grid-cols-2 gap-3">
            {metrics.map((metric) => (
              <div key={metric} className="text-sm">
                <div className="text-text-secondary">
                  {formatMetricName(metric)}
                  <span className="pl-1">
                    <IconWithTooltip text={metric} />
                  </span>
                </div>
                <div className="font-medium">
                  {formatMetricValue(project.metrics[metric], metric)}
                </div>
              </div>
            ))}
         
          </div>
        </div>
      ))}
    </div>
  );

  // Desktop Table View
  const DesktopView = () => (
    <div className="overflow-hidden rounded-b-xl">
      <table className="w-full">
        <thead className="bg-[#202020]">
          <tr>
            {/* <th
              className="h-[52px] px-6 text-left text-[14px] font-semibold text-[rgba(255,255,255,0.70)] leading-5 tracking-[-0.16px] cursor-pointer hover:bg-opacity-80"
              onClick={() => onSort("rank")}
            >
              <div className="flex items-center gap-2">
                {"Rank"}
                <ArrowUpDown className="w-4 h-4" />
              </div>
            </th> */}
            <th
              className="h-[52px] px-6 text-left text-[14px] font-semibold text-[rgba(255,255,255,0.70)] leading-5 tracking-[-0.16px] cursor-pointer hover:bg-opacity-80"
              onClick={() => onSort("projectName")}
            >
              <div className="flex items-center gap-2">
                {"Project"}
                <ArrowUpDown className="w-4 h-4" />
              </div>
            </th>
            {metrics.map((metric) => (
              <th
                key={metric}
                className="h-[52px] px-6 text-right text-[14px] font-semibold text-[rgba(255,255,255,0.70)] leading-5 tracking-[-0.16px] cursor-pointer hover:bg-opacity-80"
                onClick={() => onSort(metric)}
              >
                <div className="flex items-center justify-end gap-2">
                  {formatMetricName(metric)}
                  <IconWithTooltip text={metric} />
                  <ArrowUpDown className="w-4 h-4" />
                </div>
              </th>
            ))}
            {/* <th className="h-[52px] px-6 text-right text-[14px] font-semibold text-[rgba(255,255,255,0.70)] leading-5 tracking-[-0.16px]">
              Token
            </th> */}
          </tr>
        </thead>
        <tbody className="divide-y divide-[rgba(255,255,255,0.1)]">
          {projects.map((project) => (
            <React.Fragment key={project.project.tokenAddress}>
              <tr
                onClick={() => onToggleProject(project.project.tokenAddress)}
                className={`h-[56.5px] text-white text-[14.125px] font-medium leading-6 tracking-[-0.16px] hover:bg-surface-secondary cursor-pointer transition-colors ${
                  project.rank <= winnersCount
                    ? "bg-[rgba(255,255,255,0.05)]"
                    : "border-t border-[rgba(255,255,255,0.1)]"
                }`}
              >
                {/* <td className="px-6 py-4">
                  {project.rank === 1 && "👑 "}
                  {project.rank === 2 && "🥈 "}
                  {project.rank === 3 && "🥉 "}
                  {project.rank}
                </td> */}
                <td className="px-6 py-4 font-medium">
                  <div className="flex items-center gap-2">
                    {project.project.data.profileImages?.[0]?.src && (
                      <ProfileIcon 
                        imageUrl={`${project.project.data.profileImages[0].src}&width=24&dpr=2`}
                      />
                    )}
                    <span>{project.project.name}</span>
                    {expandedProject === project.project.tokenAddress ? (
                      <ChevronUp className="w-4 h-4 text-text-secondary" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-text-secondary" />
                    )}
                  </div>
                </td>
                {metrics.map((metric) => (
                  <td key={metric} className="px-6 py-4 text-right">
                    {formatMetricValue(project.metrics[metric], metric)}
                  </td>
                ))}
              </tr>
              {expandedProject === project.project.tokenAddress && (
                <tr>
                  <td colSpan={metrics.length + 1} className="bg-[rgba(255,255,255,0.05)] px-6 py-4">
                    <div className="space-y-4">
                      <p className="text-[14px] leading-[20px] text-text-secondary">
                        {project.project.data.description}
                      </p>

                      {/* Social Links */}
                      {project.project.data.links && project.project.data.links.length > 0 && (
                        <div className="flex flex-wrap gap-3">
                          {project.project.data.links.map((link) => (
                            <a
                              key={link.url}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand hover:opacity-80 transition-opacity inline-flex items-center gap-1 text-[14px]"
                            >
                              {link.title}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Project ID */}
                      <div className="text-[14px] text-text-secondary">
                        <span className="mr-1">ID:</span>
                        <a
                          href={`https://universaleverything.io/${project.project.data.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand hover:opacity-80 transition-opacity font-mono"
                        >
                          {project.project.data.id}
                        </a>
                      </div>

                      {/* Tags with label */}
                      {project.project.data.tags && project.project.data.tags.length > 0 && (
                        <div className="flex items-center gap-2">
                          <span className="text-[14px] text-text-secondary">Tags:</span>
                          <div className="flex flex-wrap gap-2">
                            {project.project.data.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 text-[12px] rounded-full bg-surface-secondary text-text-secondary"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <>
      <div className="md:hidden rounded-xl">
        <MobileView />
      </div>
      <div className="hidden md:block rounded-xl">
        <DesktopView />
      </div>
    </>
  );
}
