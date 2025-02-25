import { useState, useEffect } from "react";
import { RankedProject } from "../types/leaderboard";
import { getTotalValue, metricsMap } from "../constants/weeks";
import { getTotalValueNumber, processMetrics } from "../utils/scoring";

interface MetricData {
  tokenAddress: string;
  [key: string]: string | number;
}

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

        const response = await fetch(`/api?level=${week}`);

        const json = await response.json();
        const metrics = json.data;

        // grab the keys from the first item in the spreadsheet
        const headers = Object.keys(metrics[0]);
        // we only care about the metrics defined in the metrics map
        const filteredHeaders = headers.filter((header) =>
          metricsMap.some((metric) => metric.metricName === header)
        );
        setMetrics(filteredHeaders);
        setMetricKeys(filteredHeaders);

        // we need to zero out any missing or empty values of the metrics we care about
        metrics.forEach((metric: MetricData) => {
          filteredHeaders.forEach((header) => {
            if (!metric[header]) {
              metric[header] = 0;
            }
          });
        });

        const projects = processMetrics(metrics, metricsMap);

        setProjects(projects);
        setLastUpdated(json.lastUpdated);
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
      const metric = metricsMap.find((metric) => metric.metricName === key);
      let aValue =
        key === "rank"
          ? a.rank
          : key === "projectName"
            ? a.project.name
            : Number(a.metrics[key]) +
              Number(a.metrics[metric!.startingMetric]);
      let bValue =
        key === "rank"
          ? b.rank
          : key === "projectName"
            ? b.project.name
            : Number(b.metrics[key]) +
              Number(b.metrics[metric!.startingMetric]);

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
    lastUpdated,
  };
}
