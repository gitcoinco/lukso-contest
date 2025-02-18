// Convert camelCase to Title Case with spaces
export function formatMetricName(name: string): string {
  // First, split the camelCase string into words
  const words = name
    // Insert a space before any capital letter that follows a lowercase letter
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    // Insert a space before any capital letter that follows a number
    .replace(/([0-9])([A-Z])/g, "$1 $2")
    // Split into words
    .split(" ");

  // Capitalize first letter of each word
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Format number values based on metric type
export function formatMetricValue(
  value: number | string,
  metric: string
): string {
  if (typeof value !== "number") return value.toString();

  const formattedMetric = formatMetricName(metric).toLowerCase();
  if (formattedMetric.includes("cap") || formattedMetric.includes("volume")) {
    return `$${value.toLocaleString()}`;
  }
  return value.toLocaleString();
}
