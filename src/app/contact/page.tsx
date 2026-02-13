import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "My contact details.",
};

export default function Contact() {
  return (
    <main className="min-h-[calc(100vh-4rem)] p-4 sm:p-8 relative">
       {/* Background Texture */}
       <div className="absolute inset-0 bg-dot-slate-400/30 dark:bg-dot-white/10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-8 pt-12 animate-[fade-in_0.5s_ease-out]">
        <h1 className="text-4xl font-mono font-bold tracking-tight text-gray-900 dark:text-white">
          COMM_LINK
        </h1>
        
        <div className="p-6 border border-yellow-200 bg-yellow-50/50 dark:border-yellow-900/50 dark:bg-yellow-900/20 rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>
            <span className="font-mono text-yellow-700 dark:text-yellow-500 font-bold">SYSTEM_STATUS: CHANNEL_OFFLINE</span>
          </div>
          <p className="font-mono text-sm text-yellow-800 dark:text-yellow-400 opacity-80">
             // Communication protocols are being established. Please try again later.
          </p>
        </div>
      </div>
    </main>
  );
}
