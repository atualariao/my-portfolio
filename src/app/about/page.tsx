import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About me here.",
};

export default function About() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight">About</h1>
    </main>
  );
}
