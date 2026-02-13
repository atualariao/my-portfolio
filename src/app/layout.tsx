import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google"; // Modern, clean fonts

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Adriane Troy | Full-Stack Developer",
    template: "%s | Adriane Troy",
  },
  description:
    "Full-Stack Developer building scalable web applications and backend systems with modern technologies.",
  keywords: [
    "Full-Stack Developer",
    "Backend Developer",
    "ASP.NET Core",
    "C#",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <ThemeProvider>
          {/* Background Elements */}
          <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-purple-400/30 blur-[100px] animate-blob mix-blend-multiply dark:mix-blend-normal dark:bg-purple-900/20" />
            <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-indigo-400/30 blur-[100px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-normal dark:bg-indigo-900/20" />
            <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] rounded-full bg-blue-400/30 blur-[100px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-normal dark:bg-blue-900/20" />
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-grid-slate-200/20 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-800/10" />
          </div>

          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
