import { apiFetch } from "@/lib/api";
import { Project } from "@/types/project";

export function getProjects(): Promise<Project[]> {
  return apiFetch<Project[]>("/projects");
}
