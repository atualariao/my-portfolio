"use client";

import Link from "next/link";
import TypingText from "@/components/ui/TypingText";
import DraggableCard from "@/components/ui/DraggableCard";

export default function Contact() {
  const contactLinks = [
    {
      name: "GitHub",
      href: "https://github.com/atualariao",
      description: "Check out my repositories and contributions.",
      color: "hover:text-gray-900 dark:hover:text-white",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/adriane-troy-alariao-363a8123b/",
      description: "Connect with me professionally.",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "mailto:adrianetroyalariao@gmail.com",
      description: "Send me a direct message.",
      color: "hover:text-red-500 dark:hover:text-red-400",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      name: "Upwork",
      href: "https://www.upwork.com/freelancers/~01fa2a8422c579a09b?mp_source=share",
      description: "Hire me for freelance projects.",
      color: "hover:text-green-600 dark:hover:text-green-400",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
        </svg>
      ),
    },
    {
      name: "Indeed",
      href: "https://profile.indeed.com/p/adrianetroya-z47yg1r",
      description: "My professional resume.",
      color: "hover:text-blue-700 dark:hover:text-blue-500",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M11.566 21.5v-8.535a1.02 1.02 0 00-1.018-1.018.988.988 0 00-.958 1.018v8.535a.958.958 0 001.976 0zm1.283-13.034c-.382 1.409-1.409 2.436-2.877 3.03V9.431C11.744 8.862 13.33 7.476 14 5.69c.67-1.887.25-4.09-1.164-5.28A4.509 4.509 0 0010.49 0C8.744 0 7.15.61 6.063 1.677c-2.14 2.1-2.14 5.5 0 7.6.67.67 1.468 1.13 2.316 1.468v2.436c-2.616-.67-4.87-2.316-6.16-4.582C.848 6.063 0 3.327 0 .33v-.33h2.436v.33c0 2.436.67 4.752 1.857 6.608 1.13 1.677 2.676 2.975 4.503 3.625V8.225c-.61-.25-1.2-.61-1.677-1.13-1.409-1.408-1.409-3.684 0-5.092.728-.729 1.677-1.13 2.676-1.13a3.66 3.66 0 012.676 1.13c.909.908 1.18 2.316.67 3.463z" />
        </svg>
      ),
    },
    {
      name: "Stack Overflow",
      href: "https://stackoverflow.com/users/20227059/troyurtiz",
      description: "My contributions to the developer community.",
      color: "hover:text-orange-500 dark:hover:text-orange-400",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z" />
        </svg>
      ),
    },
  ];

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
            <span className="text-xs font-mono font-bold text-green-700 dark:text-green-400 tracking-wider">SYSTEM_ONLINE // COMM_CHANNEL_OPEN</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl font-sans font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-500">
                SOMETHING GREAT
              </span>
            </h1>
            
            <div className="font-mono text-base sm:text-lg text-gray-600 dark:text-gray-400 border-l-2 border-indigo-500 pl-4 space-y-4">
              <TypingText
                heading=""
                paragraph="Whether you have a question, a project in mind, or just want to say hi, I'm always open to discussing new opportunities and collaborations."
                headingSpeed={0}
                paragraphSpeed={30}
                paragraphClassName="leading-relaxed font-bold text-gray-800 dark:text-gray-200"
              />
              <p className="leading-relaxed text-sm sm:text-base opacity-90">
                I specialize in building scalable, user-centric applications. Let's turn your ideas into reality.
              </p>
            </div>
          </div>

          {/* Quick Email Button */}
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:adrianetroyalariao@gmail.com"
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-mono text-sm font-bold tracking-wide hover:bg-indigo-600 dark:hover:bg-indigo-400 transition-colors shadow-lg"
            >
              [ SEND_EMAIL ]
            </a>
          </div>
        </div>

        {/* Right Column: Contact Links (Draggable) */}
        <div className="relative w-full h-full min-h-[400px]">
          {/* Header Content for the Card */}
          <DraggableCard
            headerContent={
              <div className="flex justify-between items-center pointer-events-none">
                <div className="flex flex-col">
                  <span className="font-mono text-xs text-gray-500 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    System_Connectivity
                  </span>
                  <span className="font-mono text-lg font-bold text-gray-900 dark:text-white">CONTACT_PROTOCOLS</span>
                </div>
                <div className="flex gap-2 opacity-50">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
            }
          >
            {/* Content List */}
            <div className="grid grid-cols-1 gap-4 font-mono select-none" onPointerDown={(e) => e.stopPropagation()}>
              {contactLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-sm hover:shadow-md cursor-pointer ${link.color}`}
                >
                  <div className="p-2 bg-white dark:bg-gray-900 rounded-md border border-gray-200 dark:border-gray-700 shadow-sm group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {link.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {link.description}
                    </span>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500">
                    →
                  </div>
                </Link>
              ))}
              
              {/* Decorative Footer */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 text-[10px] uppercase font-mono text-gray-400 flex justify-between">
                <span>ENCRYPTED_CONNECTION // SECURE</span>
                <span className="animate-pulse text-green-500">● ONLINE</span>
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
