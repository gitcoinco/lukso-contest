import { Project, WeekMetrics } from "../types/leaderboard";
import { formatMetricName } from "./formatters";

export async function loadCSV(url: string): Promise<string[][]> {
  const response = await fetch(url);
  const text = await response.text();
  return text.split("\n").map((line) => line.split(","));
}

export function parseProjectsCSV(data: string[][]): Map<string, Project> {
  const projects = new Map();
  const headers = data[0].map((header) => header.replace(/[\r\n]/g, ""));
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (row.length !== headers.length) continue;

    const tokenAddress = row[headers.indexOf("tokenAddress")].toLowerCase();
    const project: Project = {
      tokenAddress,
      name: row[headers.indexOf("name")],
      // symbol: row[headers.indexOf("symbol")],
      // twitter: formatTwitterUrl(row[headers.indexOf("twitter")]),
      // description: row[headers.indexOf("description")],
      // deployerWallet: row[headers.indexOf("deployerWallet")],
      data: JSON.parse(row[headers.indexOf("Profile Information")]),
    };

    projects.set(tokenAddress, project);
  }
  return projects;
}

export function parseWeeklyMetrics(data: string[][]): {
  metricsMap: Map<string, WeekMetrics>;
  maxValues: { [key: string]: number };
} {
  const metrics = new Map<string, WeekMetrics>();
  const maxValues: { [key: string]: number } = {};
  const headers = data[0].map((header) => header.replace(/[\r\n]/g, ""));

  // Initialize maxValues for each metric
  headers.forEach((header) => {
    if (header !== "tokenAddress") {
      maxValues[header] = 0;
    }
  });

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    if (row.length !== headers.length) continue;

    const tokenAddress = row[headers.indexOf("tokenAddress")].toLowerCase();
    const metric: WeekMetrics = {
      tokenAddress,
    };

    // Add all metrics from headers dynamically
    headers.forEach((header, index) => {
      if (header !== "tokenAddress") {
        const value = Number(row[index]);

        // Only store and compare numeric values
        if (!isNaN(value)) {
          metric[header] = value;
          maxValues[header] = Math.max(maxValues[header], value);
        } else {
          metric[header] = row[index];
        }
      }
    });

    metrics.set(tokenAddress, metric);
  }

  return { metricsMap: metrics, maxValues };
}

export function getMetricsList(data: string[][]): string[] {
  const headers = data[0].map((header) => header.replace(/[\r\n]/g, ""));
  // Filter out tokenAddress and format the metric names
  return headers
    .filter((header) => header !== "tokenAddress")
    .map(formatMetricName);
}

function formatTwitterUrl(twitter: string): string {
  if (!twitter) return "";

  // If it's already a URL, return as is
  if (twitter.startsWith("http://") || twitter.startsWith("https://")) {
    return twitter;
  }

  // Remove @ if present
  const handle = twitter.startsWith("@") ? twitter.substring(1) : twitter;

  // Return formatted URL
  return `https://twitter.com/${handle}`;
}
