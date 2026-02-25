import DraggableCard from "@/components/ui/DraggableCard";
import { ProjectItem } from "@/types/ProjectItemProps";

const getTagStyles = (tag: string) => {
  const t = tag.toLowerCase();

  // Backend
  if (
    t.includes("backend") ||
    t.includes(".net") ||
    t.includes("api") ||
    t.includes("c#") ||
    t.includes("restful")
  ) {
    return "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800";
  }

  // Frontend / UI
  if (
    t.includes("frontend") ||
    t.includes("wpf") ||
    t.includes("next.js") ||
    t.includes("react") ||
    t.includes("tailwind") ||
    t.includes("typescript")
  ) {
    return "bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 border-sky-100 dark:border-sky-800";
  }

  // DevOps / Process
  if (
    t.includes("devops") ||
    t.includes("agile") ||
    t.includes("jenkins") ||
    t.includes("docker") ||
    t.includes("git")
  ) {
    return "bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 border-amber-100 dark:border-amber-800";
  }

  // Support / QA
  if (
    t.includes("support") ||
    t.includes("rca") ||
    t.includes("uat") ||
    t.includes("qa") ||
    t.includes("testing")
  ) {
    return "bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 border-rose-100 dark:border-rose-800";
  }

  // Database
  if (
    t.includes("database") ||
    t.includes("sql") ||
    t.includes("mongodb") ||
    t.includes("mariadb")
  ) {
    return "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800";
  }

  // Data Engineering / Microservices
  if (
    t.includes("kafka") ||
    t.includes("rabbitmq") ||
    t.includes("nifi") ||
    t.includes("microservices")
  ) {
    return "bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800";
  }

  // Default
  return "bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800";
};

const projects: ProjectItem[] = [
  {
    id: "01",
    title: "INTERNAL ACCOUNTING SYSTEM",
    description: [
      "Contributed to the continuous enhancement and technical documentation of an internal multi-branch Cash Accounting System used for nationwide financial transaction consolidation and reporting.",
      "Designed and implemented new features in an agile development environment, ensuring alignment with business requirements and maintaining production stability.",
      "Produced and maintained technical documentation including C4 architecture diagrams (Context & Container), component-level designs, API integration flows, and database schema references to support system clarity and knowledge sharing.",
      "Acted as L3 Application Support, collaborating with L1/L2 IT engineers to investigate and resolve production incidents through structured Root Cause Analysis (RCA) and post-incident remediation.",
      "Supported User Acceptance Testing (UAT) with business stakeholders and worked closely with QA teams for component-level validation to ensure financial workflow accuracy, data integrity, and system reliability.",
    ],
    tags: [
      "Agile Development",
      "L3 Support (RCA)",
      ".NET Core and Framework",
      "WPF",
      "RESTful APIs",
      "Next.js",
    ],
    status: "ACTIVE_MAINTENANCE",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-8 lg:p-12 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-dot-slate-400/30 dark:bg-dot-white/10 mask-[radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-12 pt-12 animate-[fade-in_0.5s_ease-out]">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-mono font-bold tracking-tighter text-gray-900 dark:text-white">
            PROJECT_MANIFEST<span className="animate-pulse">_</span>
          </h1>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
            {
              "// A curated collection of projects showcasing architectural design, development, and support expertise across various domains. Each entry includes detailed descriptions, technical stacks, and visual documentation to provide insights into the challenges faced and solutions implemented."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project: ProjectItem) => (
            <div key={project.id} className="relative group min-h-125">
              <DraggableCard
                headerContent={
                  <div className="flex justify-between items-center pointer-events-none">
                    <div className="flex flex-col text-left">
                      <span className="font-mono text-[10px] text-gray-500 uppercase flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        Project_{project.id}
                      </span>
                      <span className="font-mono text-base font-bold text-gray-900 dark:text-white truncate">
                        {project.title}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono px-1.5 py-0.5 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 rounded">
                        {project.status}
                      </span>
                    </div>
                  </div>
                }
              >
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="font-mono text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {Array.isArray(project.description) ? (
                        <ul className="space-y-2 list-none">
                          {project.description.map(
                            (point: string, i: number) => (
                              <li key={i} className="flex gap-2">
                                <span className="text-indigo-500 shrink-0 select-none">
                                  ›
                                </span>
                                <span>{point}</span>
                              </li>
                            ),
                          )}
                        </ul>
                      ) : (
                        <p>{project.description}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className={`text-[10px] font-mono px-2 py-1 border rounded-sm transition-colors ${getTagStyles(tag)}`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-gray-100 dark:border-gray-800/50 flex justify-between items-center text-[10px] font-mono">
                      <span className="text-gray-400 tracking-tighter">
                        PRJ_ID: {project.id}_ALPHA
                      </span>
                      <a
                        href={project.link}
                        className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        [ SYSTEM_LOGS ]
                      </a>
                    </div>
                  </div>
                </div>
              </DraggableCard>
              {/* Offset Decoration */}
              <div className="absolute top-4 left-4 w-full h-full border border-dashed border-gray-300 dark:border-gray-700 -z-10 rounded-lg opacity-20 pointer-events-none" />
            </div>
          ))}

          {/* Pending Entry */}
          <div className="relative group min-h-125 opacity-40 grayscale hover:grayscale-0 transition-all border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg flex flex-col items-center justify-center text-center space-y-4 p-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              <span className="font-mono text-xs text-yellow-700 dark:text-yellow-500 font-bold uppercase">
                Uplink_Pending
              </span>
            </div>
            <p className="font-mono text-[10px] text-gray-500 dark:text-gray-400 max-w-50">
              {
                "// Encrypted modules detected. Awaiting decryption keys for project visualization."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
