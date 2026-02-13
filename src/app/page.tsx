"use client";

import TypingText from "@/components/ui/TypingText";
import DraggableCard from "@/components/ui/DraggableCard";

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center p-4 sm:p-8 lg:p-12">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-dot-slate-400/30 dark:bg-dot-white/10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto w-full pt-8 lg:pt-0">
        
        {/* Left Column: Intro */}
        <div className="space-y-8 animate-[fade-in_0.8s_ease-out] self-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-mono font-bold text-green-700 dark:text-green-400 tracking-wider">SYSTEM_ONLINE // EXP_LEVEL_3</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl font-sans font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                IMPACTFUL APPS
              </span>
            </h1>
            
            <div className="font-mono text-base sm:text-lg text-gray-600 dark:text-gray-400 border-l-2 border-indigo-500 pl-4 space-y-4">
              <TypingText
                heading=""
                paragraph="Junior Software Engineer specialized in .NET Core, Next.js, and scalable backend systems."
                headingSpeed={0}
                paragraphSpeed={30}
                paragraphClassName="leading-relaxed font-bold text-gray-800 dark:text-gray-200"
              />
              <p className="leading-relaxed text-sm sm:text-base opacity-90">
                With 3 years of experience building in-house accounting solutions, I thrive on effective communication and continuous learning. Passionate about DevOps and improving daily life through code.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/projects"
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-sm font-bold tracking-wide hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors shadow-lg"
            >
              [ VIEW_WORK ]
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-mono text-sm font-bold tracking-wide hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              CONTACT_ME
            </a>
          </div>
        </div>

        {/* Right Column: Technical Spec Sheet (Draggable) */}
        <div className="relative w-full h-full min-h-[400px]">
          {/* Header Content for the Card */}
          <DraggableCard
            headerContent={
              <div className="flex justify-between items-center pointer-events-none">
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-gray-500 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    System_Capabilities
                  </span>
                  <span className="font-mono text-lg font-bold text-gray-900 dark:text-white">TECHNICAL_STACK</span>
                </div>
                <div className="flex gap-2 opacity-50">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
            }
          >
            {/* Content Table */}
            <div className="space-y-5 font-mono text-xs sm:text-sm select-text cursor-auto" onPointerDown={(e) => e.stopPropagation()}>
              {/* Backend */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 border-b border-gray-100 dark:border-gray-800/50 pb-3">
                <span className="text-gray-500 uppercase tracking-wider font-semibold">Backend</span>
                <div className="col-span-3 flex flex-wrap gap-1.5">
                  {['C#', '.NET Core', 'RabbitMQ', 'Apache Kafka', 'Apache NiFi'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded border border-indigo-100 dark:border-indigo-800 hover:scale-105 transition-transform cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 border-b border-gray-100 dark:border-gray-800/50 pb-3">
                <span className="text-gray-500 uppercase tracking-wider font-semibold">Frontend</span>
                <div className="col-span-3 flex flex-wrap gap-1.5">
                  {['TypeScript', 'Next.js', 'React', 'Tailwind'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-sky-50 dark:bg-sky-900/20 text-sky-700 dark:text-sky-300 rounded border border-sky-100 dark:border-sky-800 hover:scale-105 transition-transform cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data & Cloud */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 border-b border-gray-100 dark:border-gray-800/50 pb-3">
                <span className="text-gray-500 uppercase tracking-wider font-semibold">Data</span>
                <div className="col-span-3 flex flex-wrap gap-1.5">
                  {['MySQL', 'MSSQL', 'SQLite', 'MongoDB', 'Elasticsearch'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded border border-emerald-100 dark:border-emerald-800 hover:scale-105 transition-transform cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pb-1">
                <span className="text-gray-500 uppercase tracking-wider font-semibold">DevOps</span>
                <div className="col-span-3 flex flex-wrap gap-1.5">
                  {['Docker', 'Podman', 'Jenkins', 'Git', 'Visual Studio'].map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-300 rounded border border-amber-100 dark:border-amber-800 hover:scale-105 transition-transform cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Footer */}
              <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-[10px] uppercase font-mono text-gray-400 flex justify-between">
                <span>SYSTEM_SECURE // READY_TO_DEPLOY</span>
                <span className="animate-pulse text-green-500">● 100% Uptime</span>
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
