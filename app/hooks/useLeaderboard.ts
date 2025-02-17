import { useState, useEffect } from 'react';
import { Project, RankedProject, WeekMetrics } from '../types/leaderboard';
import { loadCSV, parseProjectsCSV, parseWeeklyMetrics } from '../utils/csvLoader';
import { calculateScore, createZeroMetrics } from '../utils/scoring';
import { prizes } from '../components/PrizesSection';

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
    direction: 'asc' | 'desc';
  } | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);

        // Load project base data
        const projectsData = await loadCSV('https://docs.google.com/spreadsheets/d/e/2PACX-1vRxSPB3HP9zCiD7gOWuzDiGX1fWLAWEvm8Dyj1tVQ34KjgFGxLW0jGxZXH89ItBH99lAkHt08yu-uHY/pub?gid=0&single=true&output=csv');
        // console.log(projectsData);
        const projectsMap = parseProjectsCSV(projectsData);

        const data1 = await fetch(`https://polygon-contest-api-xpp5w.ondigitalocean.app/api/data${week}`);
        // TODO Sorry this is hacky stuff lol
        // const data1 = await fetch(`http://localhost:6969/api/data${week}`);
        const metricsData = await data1.json();
        // console.log("metrics: ", metricsData);

        const metricKeys = ["tokenAddress", ...Object.keys(prizes[week - 1].weights || {})];
        const weeksMetricData = metricsData.data.map((metric: MetricData) => {
          const metricValues = metricKeys.map(key => metric[key]);
          return metricValues;
        });

        setLastUpdated(metricsData.lastUpdate);
 
        const fullMetricsData = [metricKeys, ...weeksMetricData];

        const { metricsMap, maxValues } = parseWeeklyMetrics(fullMetricsData);

        // Get formatted metric names and original keys
        const headers = fullMetricsData[0].filter((header: string) => header !== 'tokenAddress');
        const formattedMetrics = headers.map((header: string) => header);
        setMetrics(formattedMetrics);
        setMetricKeys(headers);

        // Combine and calculate scores
        const combinedProjects: RankedProject[] = [];
        // First, add projects with metrics
        metricsMap.forEach((metrics, tokenAddress) => {
          const project = projectsMap.get(tokenAddress);
          if (project) {
            // @ts-ignore
            const score = calculateScore(metrics, maxValues, prizes[week - 1].weights);
            combinedProjects.push({
              rank: 0, // Will be set after sorting
              score,
              project,
              metrics
            });
          }
        });

        // Add projects without metrics (with zero values)
        projectsMap.forEach((project, tokenAddress) => {
           if (!metricsMap.has(tokenAddress)) {
            const zeroMetrics = createZeroMetrics(Object.keys(maxValues));
            combinedProjects.push({
              rank:1000,
              score: 0,
              project,
              metrics: zeroMetrics
            });
          }
        });

        // Sort by score and assign ranks
        combinedProjects.sort((a, b) => b.score - a.score);
        combinedProjects.forEach((project, index) => {
          project.rank = index + 1;
        });

        setProjects(combinedProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load leaderboard data');
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [week]);

  const sortProjects = (key: string) => {
    let direction: 'asc' | 'desc' = 'desc';

    if (sortConfig?.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }

    const sorted = [...projects].sort((a, b) => {
      let aValue =
        key === 'rank'
          ? a.rank
          : key === 'projectName'
          ? a.project.name
          : a.metrics[key];
      let bValue =
        key === 'rank'
          ? b.rank
          : key === 'projectName'
          ? b.project.name
          : b.metrics[key];

      if (direction === 'asc') {
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
