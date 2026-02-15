"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const isActive = (path: string) => pathname === path;

  const links = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/about", label: "ABOUT" },
    { href: "/blogs", label: "LOGS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 dark:border-gray-800 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-tighter text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors z-50"
          onClick={() => setIsOpen(false)}
        >
          ADRIANE_TROY<span className="text-indigo-500">.DEV</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-mono font-medium tracking-wide transition-colors duration-200
                  ${
                    active
                      ? "text-indigo-600 dark:text-indigo-400 underline underline-offset-4 decoration-2"
                      : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4 z-50">
           {/* Mobile Menu Trigger */}
           <div className="md:hidden">
             <button
               onClick={() => setIsOpen(!isOpen)}
               className="p-2 text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors"
               aria-label="Toggle menu"
             >
               {isOpen ? <X size={24} /> : <Menu size={24} />}
             </button>
           </div>

          <div className="pl-4 border-l border-gray-200 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "calc(100vh - 4rem)" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-16 left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 md:hidden flex flex-col overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 p-8">
            {links.map((link, index) => {
               const active = isActive(link.href);
               return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-mono font-medium tracking-wide transition-colors duration-200
                      ${
                        active
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                      }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
               );
            })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
