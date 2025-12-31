"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact" },
    { href: "/blogs", label: "Blogs" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/20 bg-transparent backdrop-blur-md dark:border-gray-800/20 dark:bg-transparent">
      <div className="mx-auto flex max-w-4xl items-center gap-4 px-4 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight transition-colors hover:text-purple-600 dark:hover:text-purple-400"
        >
          Adriane Troy
        </Link>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex gap-1 text-sm">
            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-md px-3 py-2 transition-all duration-200
                    ${
                      active
                        ? "bg-white/30 text-purple-700 backdrop-blur-sm dark:bg-purple-900/30 dark:text-purple-300"
                        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="ml-2 border-l border-gray-300 pl-2 dark:border-gray-700">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
