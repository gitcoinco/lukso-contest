import { formatMetricValue } from "../utils/formatters";

// This would normally come from your backend
export const CURRENT_WEEK = 1;

// const startDate = new Date("2025-01-27");
// const today = new Date();

// // Calculate the difference in days
// const diffTime = today.getTime() - startDate.getTime();
// const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

// // Calculate current week (0-based)
// export const CURRENT_WEEK = Math.min(
//   Math.max(0, Math.floor(diffDays / 7) + 1), // Add 1 since weeks are 1-based
//   4 // Cap at week 4
// );

export const weeks = [
  { id: 1, dateRange: "Jan 27 - Feb 2" },
  { id: 2, dateRange: "Feb 3 - Feb 9" },
  { id: 3, dateRange: "Feb 10 - Feb 16" },
  { id: 4, dateRange: "Feb 17 - Feb 23" },
].map((week) => ({
  ...week,
  status:
    week.id < CURRENT_WEEK
      ? "past"
      : week.id === CURRENT_WEEK
        ? "active"
        : "upcoming",
}));



export const metricsMap = [
  {
    displayName: "Views",
    metricName: "Show Visitors",
    description: "Number of unique user impressions of the dApp",
    startingMetric: "Start Show Visitors",
    threshold: 1000,
  },
  {
    displayName: "Grid Installs",
    metricName: "Add Visitors",
    description: "Number of unique users that installed the dApp on their Grid",
    startingMetric: "Start Add Visitors",
    threshold: 50,
  },
  {
    displayName: "Unique Interactions",
    metricName: "Transactions Visitor",
    description: "Number of unique user transactions",
    startingMetric: "Start Transactions Visitor",
    threshold: 50,
  },
  {
    displayName: "Total Interactions",
    metricName: "Transaction Events",
    description: "Number of total user transactions",
    startingMetric: "Start Transaction Events",
    threshold: 100,
  },
  {
    displayName: "UP Followers",
    metricName: "Followers",
    description: "Number of total Universal Profile followers",
    startingMetric: "Start Followers",
    threshold: 200, // this one is not an increment but an absolute...
  }
]

export function isOverThreshold(metrics: any, metricName: string) {  
  const metric = metricsMap.find(metric => metric.metricName === metricName)
  const growth = Math.max(0, Number(metrics[metricName]) - Number(metrics[metric!.startingMetric]));

  let rocket = "";

  //special case followers
  if (metricName === "Followers") {
    if(Number(metrics[metricName]) >= metric!.threshold){
      rocket = "🚀"
    }
  }else  if (growth >= metric!.threshold) {
    rocket = "🚀"
  }

  return rocket;
}

export function getTotalValue(metrics: any, metricName: string) {
  const metric = metricsMap.find(metric => metric.metricName === metricName)
  const sum = Number(metrics[metricName]) + Number(metrics[metric!.startingMetric]);

  return formatMetricValue(sum, metricName)

}

export function getMetricDisplayname(metricName: string) {
  const metric = metricsMap.find(metric => metric.metricName === metricName)
  return metric ? metric.displayName : metricName
}

export function getMetricDescription(metricName: string) {
  const metric = metricsMap.find(metric => metric.metricName === metricName)
  return metric ? metric.description : ""
}



