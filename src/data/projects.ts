import { Project } from "@/types/ProjectProps";

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
  {
    id: "3",
    title: "Accounting System Architecture",
    description: [
      "Contributed to the continuous enhancement of an internal multi-branch Accounting System for consolidation and reporting.",
      "Delivered new features in agile sprints while maintaining production reliability.",
      "Provided L3 support and Root Cause Analysis (RCA) collaborating with L1/L2 teams.",
      "Supported UAT and QA cycles to ensure financial workflow accuracy and stability.",
    ],
    techStack: [
      ".NET Core and Framework",
      "WPF",
      "RESTful APIs",
      "Next.js",
      "SQL Server",
    ],
    repoUrl: "#",
  },
  {
    id: "4",
    title: "DevOps Automation Pipeline",
    description:
      "CI/CD workflow automation using Jenkins and Docker containers.",
    techStack: ["Jenkins", "Docker", "Bash", "Groovy"],
    repoUrl: "#",
  },
  {
    id: "5",
    title: "Real-time Data Dashboard",
    description:
      "Interactive dashboard for visualizing high-frequency data streams.",
    techStack: ["React", "SignalR", "Apache Kafka", "Redis"],
    repoUrl: "#",
  },
  {
    id: "6",
    title: "Web3 Identity Service",
    description: "Decentralized identity verification integrated with Auth0.",
    techStack: ["Solidity", "Auth0", "Next.js", "Ethereum"],
    repoUrl: "#",
  },
];
