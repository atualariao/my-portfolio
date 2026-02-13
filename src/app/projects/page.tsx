"use client";

import DraggableCard from "@/components/ui/DraggableCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-8 lg:p-12">
       {/* Background Texture */}
       <div className="absolute inset-0 bg-dot-slate-400/30 dark:bg-dot-white/10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-2 animate-[fade-in_0.5s_ease-out]">
          <h1 className="text-4xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">
            PROJECT_MANIFEST
          </h1>
          <p className="text-gray-500 font-mono text-sm max-w-2xl">
            // A collection of deployed systems and experimental prototypes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <div key={project.id} className="min-h-[300px] animate-[fade-in_0.5s_ease-out]" style={{ animationDelay: `${index * 100}ms` }}>
              <DraggableCard
                className="h-full flex flex-col"
                headerContent={
                  <div className="flex justify-between items-center pointer-events-none">
                     <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-200 truncate max-w-[150px]">
                          {project.title.replace(/\s+/g, '_')}
                        </span>
                     </div>
                     <span className="text-[10px] font-mono text-gray-400">PID:{project.id.padStart(4, '0')}</span>
                  </div>
                }
              >
                <div className="flex flex-col h-full select-text cursor-auto" onPointerDown={(e) => e.stopPropagation()}>
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                         <span key={tech} className="px-2 py-0.5 text-[10px] uppercase font-mono bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded border border-gray-200 dark:border-gray-700">
                           {tech}
                         </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex gap-3">
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 text-xs font-mono font-bold bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors rounded-sm"
                      >
                        SOURCE_CODE
                      </a>
                    )}
                    {/* Placeholder for live link if added later */}
                     <button 
                        className="px-3 py-2 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors rounded-sm"
                        title="View Details"
                      >
                        <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                     </button>
                  </div>
                </div>
              </DraggableCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
