import TypingText from "@/components/ui/TypingText";

export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center px-4">
      <div className="relative text-center space-y-6">
        {/* 🔥 Top visual anchor */}
        <div
          className="absolute -top-8 left-1/2 h-px w-40 -translate-x-1/2
          bg-linear-to-r from-transparent via-indigo-500 to-transparent"
        />

        <TypingText
          heading="Hi, I'm Troy — Full-Stack Software Engineer"
          paragraph="I build web applications and backend systems, including automated data pipelines and APIs."
        />

        {/* 🌙 Minimal supporting line */}
        <div className="text-xs tracking-wide text-gray-500 dark:text-gray-400">
          .NET • .NET Core • Next.js • Databases • CI/CD • ETL • Messaging
        </div>

        {/* Action buttons */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href="/projects"
            className="rounded-full border border-gray-300 px-4 py-1.5 text-sm
              text-gray-700 transition hover:border-indigo-500 hover:text-indigo-500
              dark:border-gray-700 dark:text-gray-300 dark:hover:border-indigo-400 dark:hover:text-indigo-400"
          >
            Projects
          </a>

          <a
            href="/about"
            className="rounded-full border border-gray-300 px-4 py-1.5 text-sm
              text-gray-700 transition hover:border-purple-500 hover:text-purple-500
              dark:border-gray-700 dark:text-gray-300 dark:hover:border-purple-400 dark:hover:text-purple-400"
          >
            About
          </a>

          <a
            href="/contact"
            className="rounded-full border border-gray-300 px-4 py-1.5 text-sm
              text-gray-700 transition hover:border-cyan-500 hover:text-cyan-500
              dark:border-gray-700 dark:text-gray-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            Contact
          </a>
        </div>

        {/* 🔥 Bottom visual anchor */}
        <div
          className="absolute -bottom-8 left-1/2 h-px w-28 -translate-x-1/2
          bg-linear-to-r from-transparent via-purple-500 to-transparent"
        />
      </div>
    </main>
  );
}
