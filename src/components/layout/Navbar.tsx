"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
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
          className="font-mono text-lg font-bold tracking-tighter text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
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

        <div className="flex items-center gap-4">
           {/* Mobile Menu Placeholder */}
           <div className="flex md:hidden">
             {/* Future Drawer Trigger */}
           </div>

          <div className="pl-4 border-l border-gray-200 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
