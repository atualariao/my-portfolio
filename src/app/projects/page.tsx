import type { Metadata } from "next";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects as mockProjects } from "@/data/projects";
import { getProjects } from "@/services/project.api";
import { Project } from "@/types/project";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of projects showcasing backend systems, APIs, and full-stack development.",
};

export default async function Projects() {
  const projects: Project[] = mockProjects;

  try {
    // Uncomment when backend is live
    // projects = await getProjects();
  } catch (error) {
    console.error("Failed to fetch projects, using mock data");
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
