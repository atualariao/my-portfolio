"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import DraggableCard from "@/components/ui/DraggableCard";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Layers, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "ACCOUNTING_SYSTEM_ARCHITECTURE",
    description: [
      "Contributed to the continuous enhancement of an internal multi-branch Accounting System used for financial transaction consolidation and reporting.",
      "Delivered new features in an agile development environment while maintaining system reliability in production.",
      "Acted as L3 application support, collaborating with L1/L2 IT engineers to investigate and resolve production incidents through structured Root Cause Analysis (RCA).",
      "Supported User Acceptance Testing (UAT) with business users and coordinated with QA teams for component-level validation to ensure financial workflow accuracy and system stability."
    ],
    images: [
      "/accounting_system_context_diagram.jpg",
      "/sample.jpg", 
    ],
    tags: ["Agile Development", "L3 Support (RCA)", ".NET Core and Framework", "WPF", "RESTful APIs", "Next.js"],
    status: "ACTIVE_MAINTENANCE",
    link: "#"
  }
];

export default function Projects() {
  const [gallery, setGallery] = useState<{ projectId: string; index: number } | null>(null);

  const activeProject = gallery ? projects.find(p => p.id === gallery.projectId) : null;
  const currentImage = activeProject ? activeProject.images[gallery!.index] : null;

  const nextImage = useCallback(() => {
    if (!activeProject || !gallery) return;
    setGallery({
      ...gallery,
      index: (gallery.index + 1) % activeProject.images.length
    });
  }, [activeProject, gallery]);

  const prevImage = useCallback(() => {
    if (!activeProject || !gallery) return;
    setGallery({
      ...gallery,
      index: (gallery.index - 1 + activeProject.images.length) % activeProject.images.length
    });
  }, [activeProject, gallery]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gallery) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setGallery(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [gallery, nextImage, prevImage]);

  return (
    <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-8 lg:p-12 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-dot-slate-400/30 dark:bg-dot-white/10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto space-y-12 pt-12 animate-[fade-in_0.5s_ease-out]">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-mono font-bold tracking-tighter text-gray-900 dark:text-white">
            PROJECT_MANIFEST<span className="animate-pulse">_</span>
          </h1>
          <p className="font-mono text-sm text-gray-500 dark:text-gray-400 max-w-2xl">
            // Accessing archived and active deployments. Most projects are proprietary in-house systems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="relative group min-h-[500px]">
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
                  {/* Stacked Image Gallery */}
                  <div className="relative h-[250px] w-full flex items-center justify-center pt-4">
                    <div 
                      className="relative w-full max-w-[320px] aspect-[4/3] group/stack cursor-zoom-in"
                      onClick={() => setGallery({ projectId: project.id, index: 0 })}
                    >
                      {/* Background Layers (Stacked Effect) */}
                      {project.images.slice(1, 3).map((img, idx) => (
                        <div 
                          key={idx}
                          className="absolute inset-0 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded shadow-md transition-all duration-500"
                          style={{
                            transform: `translate(${(idx + 1) * 8}px, ${(idx + 1) * -8}px) rotate(${(idx + 1) * 2}deg)`,
                            zIndex: 10 - idx
                          }}
                        />
                      ))}

                      {/* Top Image */}
                      <motion.div 
                        className="absolute inset-0 z-20 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-xl overflow-hidden group-hover/stack:-translate-y-2 transition-transform duration-500"
                        whileHover={{ scale: 1.02 }}
                      >
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-contain p-2"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/stack:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover/stack:opacity-100">
                          <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
                        </div>
                      </motion.div>

                      {/* Badge */}
                      <div className="absolute -bottom-2 -right-2 z-30 bg-indigo-600 text-white text-[10px] font-mono px-2 py-1 rounded flex items-center gap-1.5 shadow-lg border border-indigo-500">
                        <Layers size={12} />
                        {project.images.length} ASSETS_STAKED
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="font-mono text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {Array.isArray(project.description) ? (
                        <ul className="space-y-2 list-none">
                          {project.description.map((point, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-indigo-500 shrink-0 select-none">›</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{project.description}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-1 bg-gray-50 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800 rounded-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-gray-100 dark:border-gray-800/50 flex justify-between items-center text-[10px] font-mono">
                      <span className="text-gray-400 tracking-tighter">PRJ_ID: {project.id}_ALPHA</span>
                      <a href={project.link} className="font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
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
          <div className="relative group min-h-[500px] opacity-40 grayscale hover:grayscale-0 transition-all border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg flex flex-col items-center justify-center text-center space-y-4 p-8">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              <span className="font-mono text-xs text-yellow-700 dark:text-yellow-500 font-bold uppercase">Uplink_Pending</span>
            </div>
            <p className="font-mono text-[10px] text-gray-500 dark:text-gray-400 max-w-[200px]">
              // Encrypted modules detected. Awaiting decryption keys for project visualization.
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {gallery && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
          >
            {/* Background click to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setGallery(null)} />

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-[85vh] w-full h-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex justify-between items-center mb-4 z-10">
                <div className="font-mono text-xs text-indigo-400 bg-indigo-950/50 px-3 py-1.5 rounded border border-indigo-500/30">
                  FILE_{gallery.index + 1}_OF_{activeProject?.images.length} // {activeProject?.title}
                </div>
                <button 
                  className="text-white hover:text-indigo-400 transition-colors flex items-center gap-2 font-mono text-sm group"
                  onClick={() => setGallery(null)}
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">[ EXIT_VIEW ]</span>
                   <X className="w-6 h-6 border border-white/20 rounded-full p-1" />
                </button>
              </div>
              
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Prev Button */}
                {activeProject && activeProject.images.length > 1 && (
                  <button 
                    className="absolute left-0 lg:-left-16 z-20 p-2 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md lg:bg-transparent"
                    onClick={prevImage}
                  >
                    <ChevronLeft size={48} />
                  </button>
                )}

                <div className="relative w-full h-full flex items-center justify-center bg-gray-900/40 rounded-lg overflow-hidden border border-white/5 shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImage}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={currentImage}
                        alt="Enlarged project view"
                        fill
                        className="object-contain"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Next Button */}
                {activeProject && activeProject.images.length > 1 && (
                  <button 
                    className="absolute right-0 lg:-right-16 z-20 p-2 text-white/50 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-md lg:bg-transparent"
                    onClick={nextImage}
                  >
                    <ChevronRight size={48} />
                  </button>
                )}
              </div>

              <div className="mt-8 text-center space-y-2">
                <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
                  Technical_Visual_Inspection // Full_Resolution_Scan
                </p>
                <div className="flex gap-2 justify-center">
                  {activeProject?.images.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1 w-8 rounded-full transition-all duration-300 ${idx === gallery.index ? 'bg-indigo-500 w-12' : 'bg-gray-800'}`}
                      onClick={() => setGallery({ ...gallery, index: idx })}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
