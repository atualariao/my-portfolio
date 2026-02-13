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
  {
    id: "3",
    title: "Accounting Microservices",
    description: "Distributed system for processing financial transactions using RabbitMQ.",
    techStack: [".NET Core", "RabbitMQ", "Docker", "SQL Server"],
    repoUrl: "#",
  },
  {
    id: "4",
    title: "DevOps Automation Pipeline",
    description: "CI/CD workflow automation using Jenkins and Docker containers.",
    techStack: ["Jenkins", "Docker", "Bash", "Groovy"],
    repoUrl: "#",
  },
  {
    id: "5",
    title: "Real-time Data Dashboard",
    description: "Interactive dashboard for visualizing high-frequency data streams.",
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
