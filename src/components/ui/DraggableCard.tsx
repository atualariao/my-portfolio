"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface DraggableCardProps {
  children: React.ReactNode;
  className?: string;
  headerContent: React.ReactNode;
}

export default function DraggableCard({ children, className = "", headerContent }: DraggableCardProps) {
  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className="w-full h-full relative z-20">
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.05}
        whileDrag={{ scale: 1.02, cursor: "grabbing" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-lg shadow-2xl overflow-hidden ${className}`}
        style={{ cursor: "grab" }}
      >
        {/* Draggable Handle */}
        <div className="p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 select-none">
          {headerContent}
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
