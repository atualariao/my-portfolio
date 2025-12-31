"use client";

import { useEffect, useRef, useState } from "react";
import { TypingTextProps } from "@/types/TypingTextProps";

export default function TypingText({
  heading = "",
  paragraph = "",
  headingSpeed = 60,
  paragraphSpeed = 40,
}: TypingTextProps) {
  const [displayHeading, setDisplayHeading] = useState("");
  const [displayParagraph, setDisplayParagraph] = useState("");
  const [cursorTarget, setCursorTarget] = useState<"heading" | "paragraph">(
    "heading"
  );

  const headingIndex = useRef(0);
  const paragraphIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(
      () => {
        // Type heading first
        if (headingIndex.current < heading.length) {
          setDisplayHeading(heading.slice(0, headingIndex.current + 1));
          headingIndex.current++;
          return;
        }

        // Switch cursor once heading is done
        if (cursorTarget !== "paragraph") {
          setCursorTarget("paragraph");
          return;
        }

        // Type paragraph
        if (paragraphIndex.current < paragraph.length) {
          setDisplayParagraph(paragraph.slice(0, paragraphIndex.current + 1));
          paragraphIndex.current++;
        }
      },
      cursorTarget === "heading" ? headingSpeed : paragraphSpeed
    );

    return () => clearInterval(interval);
  }, [heading, paragraph, headingSpeed, paragraphSpeed, cursorTarget]);

  return (
    <div className="text-center max-w-5xl">
      <h1 className="text-5xl font-bold tracking-tight">
        {displayHeading}
        {cursorTarget === "heading" && <span className="cursor" />}
      </h1>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {displayParagraph}
        {cursorTarget === "paragraph" && <span className="cursor" />}
      </p>
    </div>
  );
}
