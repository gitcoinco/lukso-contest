// Project base data types
export interface Project {
  tokenAddress: string;
  name: string;
  symbol: string;
  twitter?: string;
  website?: string;
  description?: string;
  deployerWallet: string;
}

// Dynamic metrics interface
export interface WeekMetrics {
  tokenAddress: string;
  [key: string]: string | number; // Allow any metric name
}

// Combined project data with rank
export interface RankedProject {
  rank: number;
  score: number;
  project: Project;
  metrics: WeekMetrics;
}