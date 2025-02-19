import { useState, useEffect } from "react";
import {  RankedProject } from "../types/leaderboard";


interface MetricData {
  tokenAddress: string;
  [key: string]: string | number;
}

export const metricsMap = [
  {
    displayName: "Unique User Views",
    metricName: "Show Visitors",
    description: "The number of unique users who have viewed the project."
  },
  {
    displayName: "Unique dApp Installs on The Grid",
    metricName: "Add Visitors",
    description: "The number of unique users who have installed the project on The Grid."
  },
  {
    displayName: "Unique User Interactions",
    metricName: "Transactions Visitor",
    description: "The number of unique users who have interacted with the project."
  },
  {
    displayName: "Total User Interactions",
    metricName: "Transaction Events",
    description: "The total number of interactions with the project."
  },
  {
    displayName: "Total Universal Profile Followers",
    metricName: "Followers",
    description: "The total number of followers of the project's universal profile."
  }
]


export function useLeaderboard(week: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<RankedProject[]>([]);
  const [metrics, setMetrics] = useState<string[]>([]);
  const [metricKeys, setMetricKeys] = useState<string[]>([]);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `/api?level=${week}`
        );

        const json = await response.json();
        const metrics = json.data;

        // console.log("data: ", metrics);

        const headers = Object.keys(metrics[0]);
        
        const filteredHeaders = headers.filter(
          (header) => metricsMap.some(metric => metric.metricName === header)
        );

        setMetrics(filteredHeaders);
        setMetricKeys(filteredHeaders);

        // console.log("headers: ", headers);

        const projects: RankedProject[] = [];

        metrics.map((element: any) => {
          projects.push({
            rank: 0,
            score: 0,
            project: {
              tokenAddress: element.UP,
              name: element.Project,
              symbol: "",
              twitter: "",
              website: "",
              description: "",
              deployerWallet: ""
            },
            metrics: element
          });
        });
        setProjects(projects);



      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load leaderboard data"
        );
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [week]);

  const sortProjects = (key: string) => {
    let direction: "asc" | "desc" = "desc";

    if (sortConfig?.key === key && sortConfig.direction === "desc") {
      direction = "asc";
    }

    const sorted = [...projects].sort((a, b) => {
      let aValue =
        key === "rank"
          ? a.rank
          : key === "projectName"
            ? a.project.name
            : a.metrics[key];
      let bValue =
        key === "rank"
          ? b.rank
          : key === "projectName"
            ? b.project.name
            : b.metrics[key];

      if (direction === "asc") {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });

    setProjects(sorted);
    setSortConfig({ key, direction });
  };

  return {
    loading,
    error,
    projects,
    metrics,
    metricKeys,
    sortProjects,
    sortConfig,
    lastUpdated
  };
}
