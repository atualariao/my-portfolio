import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "My contact details.",
};

export default function Contact() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
    </main>
  );
}
