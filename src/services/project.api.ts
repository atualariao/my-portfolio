import { apiFetch } from "@/lib/api";
import { Project } from "@/types/ProjectProps";

export function getProjects(): Promise<Project[]> {
  return apiFetch<Project[]>("/projects");
}
