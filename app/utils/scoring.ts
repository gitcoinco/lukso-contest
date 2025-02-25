import { RankedProject } from "../types/leaderboard";
import { MetricConfig } from "../constants/weeks";
import { getTotalValue } from "../constants/weeks";

type MetricData = Record<string, string>; // Dynamic object structure

function isIntegerValue(value: string): boolean {
  return /^-?\d+$/.test(value.trim()); // Regex to check if a string is an integer
}

const getTotalValueNumber = (metric: MetricData, key: string): number => {
  return Number(getTotalValue(metric, key));
};

export function processMetrics(
  metrics: MetricData[],
  metricsMap?: MetricConfig[]
) {
  const integerKeys: Set<string> = new Set();
  const minValues: Record<string, number> = {};
  const maxValues: Record<string, number> = {};

  if (metricsMap && metricsMap.length > 0) {
    metricsMap.forEach(({ metricName }) => {
      integerKeys.add(metricName);
    });
  } else {
    // No metric map provided → detect all integer-based keys dynamically
    metrics.forEach((metric) => {
      Object.entries(metric).forEach(([key, value]) => {
        if (isIntegerValue(value)) integerKeys.add(key);
      });
    });
  }

  // Step 1: Compute min/max using the total metric value
  metrics.forEach((metric) => {
    integerKeys.forEach((key) => {
      const totalValue = getTotalValueNumber(metric, key); // Use total value now
      minValues[key] = Math.min(minValues[key] ?? Infinity, totalValue);
      maxValues[key] = Math.max(maxValues[key] ?? -Infinity, totalValue);
    });
  });

  // @ts-ignore
  const projects: RankedProject[] = metrics.map((element) => {
    let sumNormalized = 0;
    let count = 0;

    const normalizedMetrics: Record<string, number> = {};

    integerKeys.forEach((key) => {
      const totalValue = getTotalValueNumber(element, key); // Use total value
      const min = minValues[key];
      const max = maxValues[key];

      // Avoid division by zero
      let normalized = min === max ? 0 : (totalValue - min) / (max - min);
      normalizedMetrics[key] = normalized;

      sumNormalized += normalized;
      count++;
    });

    const averageScore = count > 0 ? sumNormalized / count : 0;

    return {
      rank: 0,
      score: isNaN(averageScore) ? 0 : averageScore, // Fix NaN by setting default
      project: {
        tokenAddress: element.UP,
        name: element.Project,
        data: JSON.parse(element["Profile Information"] || "{}"),
      },
      metrics: element,
    };
  });

  // Step 3: Rank projects by score
  projects.sort((a, b) => b.score - a.score);
  projects.forEach((project, index) => {
    project.rank = index + 1;
  });

  return projects;
}