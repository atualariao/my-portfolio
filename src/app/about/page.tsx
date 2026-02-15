"use client";

import TypingText from "@/components/ui/TypingText";
import DraggableCard from "@/components/ui/DraggableCard";

export default function About() {
  const experience = [
    {
      company: "Eight Under Par (Palawan Pawnshop Operator) Inc.",
      role: "Junior Software Engineer",
      period: "October 2022 - Present",
      description: [
        "Write maintainable code by following SOLID, YAGNI, and KISS principles to adhere to coding standards.",
        "Develop RESTful APIs for frontend applications to ensure fast and scalable integrations.",
        "Implement and maintain CI/CD pipelines using Docker and Jenkins.",
        "Collaborate and communicate effectively with product managers, senior engineers, and other stakeholders.",
        "Implement technology stacks as defined by system architects and senior engineers.",
        "Stay updated on relevant regulations and apply necessary compliance measures.",
        "Create and maintain comprehensive technical documentation for components.",
        "Ensure software complies with security best practices and industry standards.",
        "Develop architectural diagrams and detailed system specifications in collaboration with senior engineers.",
        "Conduct code reviews with peers to give and receive constructive feedback."
      ]
    }
  ];

  const skills = {
    backend: ["C# (.NET Core)"],
    frontend: ["TypeScript (NextJS)", "React", "Tailwind CSS"],
    authentication: ["Keycloak", "Auth0", "Web3 Integration"],
    "Data Engineering": ["Apache Kafka", "Apache NiFi", "RabbitMQ", "ELK Stack"],
    database: ["MySQL", "MSSQL", "SQLite", "MongoDB"],
    devops: ["Docker", "Podman", "Jenkins", "Git"],
    tools: ["Visual Studio 2022", "VS Code"]
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center p-4 sm:p-8 lg:p-12">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-dot-slate-400/30 dark:bg-dot-white/10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto w-full pt-8 lg:pt-0">
        
        {/* Left Column: Bio */}
        <div className="space-y-8 animate-[fade-in_0.8s_ease-out] self-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-800 rounded-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 tracking-wider">SYSTEM_CONFIG // PROFILE_LOADED</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl font-sans font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">
                EFFICIENCY
              </span>
            </h1>
            
            <div className="font-mono text-base sm:text-lg text-gray-600 dark:text-gray-400 border-l-2 border-cyan-500 pl-4 space-y-4">
              <TypingText
                heading=""
                paragraph="As a Junior Software Engineer with three years of experience, I’ve collaborated with professionals to build in-house solutions for accounting processes."
                headingSpeed={0}
                paragraphSpeed={20}
                paragraphClassName="leading-relaxed font-bold text-gray-800 dark:text-gray-200"
              />
              <p className="leading-relaxed text-sm sm:text-base opacity-90">
                This journey has strengthened my skills in software development, testing, and deployment while teaching me the importance of effective communication and teamwork.
              </p>
              <p className="leading-relaxed text-sm sm:text-base opacity-90">
                I thrive in an industry where learning never stops, continuously discovering new technologies and practices to master. I’m passionate about expanding my knowledge in DevOps and contributing to the development of impactful applications that improve daily life.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
             <a
              href="/Grade-Resume.pdf"
              target="_blank"
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-sm font-bold tracking-wide hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-colors shadow-lg"
            >
              [ DOWNLOAD_RESUME ]
            </a>
          </div>
        </div>

        {/* Right Column: Experience Log (Draggable) */}
        <div className="relative w-full h-full min-h-[400px]">
          {/* Header Content for the Card */}
          <DraggableCard
            headerContent={
              <div className="flex justify-between items-center pointer-events-none">
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-gray-500 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    System_Logs
                  </span>
                  <span className="font-mono text-lg font-bold text-gray-900 dark:text-white">PROFESSIONAL_DATA</span>
                </div>
                <div className="flex gap-2 opacity-50">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
            }
          >
            {/* Scrollable Content Area */}
            <div className="space-y-6 font-mono text-sm select-text cursor-auto max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700" onPointerDown={(e) => e.stopPropagation()}>
              
              {/* Experience Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase text-gray-400 tracking-wider">
                   <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"/>
                   Latest_Entry
                </div>
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-6 border-l border-gray-200 dark:border-gray-800">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-cyan-500/20 rounded-full border border-cyan-500" />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      {job.role}
                    </h3>
                    <div className="text-cyan-600 dark:text-cyan-400 font-bold mb-1">
                      {job.company}
                    </div>
                    <div className="text-xs text-gray-500 mb-3 font-mono">
                      {job.period}
                    </div>
                    <ul className="space-y-2">
                       {job.description.map((point, i) => (
                         <li key={i} className="flex gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                           <span className="text-cyan-500 select-none">troy@portfolio:~$</span>
                           <span>{point}</span>
                         </li>
                       ))}
                    </ul>
                  </div>
                ))}
              </div>

               {/* Divider */}
               <div className="h-px bg-gray-200 dark:bg-gray-800 my-4" />

               {/* Skills Section */}
               <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs uppercase text-gray-400 tracking-wider">
                   <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"/>
                   Technical_Arsenal
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="space-y-2">
                      <span className="text-xs uppercase font-bold text-gray-500">{category}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs border border-gray-200 dark:border-gray-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors cursor-default">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
               </div>
              
              {/* Decorative Footer */}
              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-[10px] uppercase font-mono text-gray-400 flex justify-between">
                <span>DATA_INTEGRITY // VERIFIED</span>
                <span className="animate-pulse text-green-500">● SYNCED</span>
              </div>
            </div>
          </DraggableCard>
          
          {/* Offset Border Decoration (Static Background) */}
          <div className="absolute top-4 left-4 w-full h-full border-2 border-dashed border-gray-300 dark:border-gray-700 -z-10 rounded-lg opacity-30 pointer-events-none" />
        </div>

      </div>
    </div>
  );
}
