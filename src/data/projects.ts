import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Backend API",
    description:
      "ASP.NET Core REST API with authentication and MariaDB integration.",
    techStack: ["ASP.NET Core", "MariaDB", "JWT"],
    repoUrl: "https://github.com/atualariao/my-portfolio-api",
  },
  {
    id: "2",
    title: "Next.js Portfolio",
    description: "Personal portfolio built with Next.js and TypeScript.",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    repoUrl: "https://github.com/atualariao/my-portfolio",
  },
];
