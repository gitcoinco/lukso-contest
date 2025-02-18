import { WeekMetrics } from "../types/leaderboard";

export function createZeroMetrics(metricKeys: string[]): WeekMetrics {
  return Object.fromEntries(metricKeys.map((key) => [key, 0])) as WeekMetrics;
}

export function calculateScore(
  metrics: WeekMetrics,
  maxValues: { [key: string]: number },
  weights?: { [key: string]: number }
): number {
  const metricKeys = Object.keys(maxValues).filter(
    (key) => key !== "tokenAddress"
  );

  // Ensure all metrics exist, even if with zero values
  const normalizedMetrics = { ...createZeroMetrics(metricKeys), ...metrics };

  const metricKeysNumber = metricKeys.filter(
    (key) => typeof normalizedMetrics[key] === "number"
  );

  // Use provided weights or calculate equal weights
  const metricWeights =
    weights ||
    Object.fromEntries(
      metricKeysNumber.map((key) => [key, 1 / metricKeysNumber.length])
    );

  // Calculate normalized and weighted score
  const normalizedScore = metricKeysNumber.reduce((score, key) => {
    const value = normalizedMetrics[key] as number;
    const normalizedValue = maxValues[key] > 0 ? value / maxValues[key] : 0;
    return score + normalizedValue * (metricWeights[key] || 0);
  }, 0);

  return normalizedScore;
}
