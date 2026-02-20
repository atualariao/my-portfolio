export type Project = {
  id: string;
  title: string;
  description: string | string[];
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
};
