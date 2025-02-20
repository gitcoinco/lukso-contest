// Project base data types
export interface Project {
  tokenAddress: string;
  name: string;
  data: ProfileData;
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

type VerifiedImage = {
  width: number;
  src: string;
  verified: "VERIFIED";
};

type Link = {
  title: string;
  url: string;
};

type ProfileData = {
  backgroundImages: VerifiedImage[];
  profileImages: VerifiedImage[];
  fullName: string;
  description: string;
  links: Link[];
  tags: string[];
  name: string;
  id: string;
};