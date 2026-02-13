"use client";

import { useEffect, useRef, useState } from "react";
import { TypingTextProps } from "@/types/TypingTextProps";

interface ExtendedTypingTextProps extends TypingTextProps {
  headingClassName?: string;
  paragraphClassName?: string;
}

export default function TypingText({
  heading = "",
  paragraph = "",
  headingSpeed = 60,
  paragraphSpeed = 40,
  headingClassName = "",
  paragraphClassName = "",
}: ExtendedTypingTextProps) {
  const [displayHeading, setDisplayHeading] = useState("");
  const [displayParagraph, setDisplayParagraph] = useState("");
  const [cursorTarget, setCursorTarget] = useState<"heading" | "paragraph">(
    "heading"
  );

  const headingIndex = useRef(0);
  const paragraphIndex = useRef(0);

  useEffect(() => {
    // If no heading, start typing paragraph immediately
    if (!heading && cursorTarget === "heading") {
      setCursorTarget("paragraph");
    }

    const interval = setInterval(
      () => {
        // Type heading first if it exists
        if (cursorTarget === "heading" && headingIndex.current < heading.length) {
          setDisplayHeading(heading.slice(0, headingIndex.current + 1));
          headingIndex.current++;
          return;
        }

        // Switch to paragraph when heading is done
        if (cursorTarget === "heading") {
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
    <div className="text-center w-full">
      {heading && (
        <h1 className={`text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400 ${headingClassName}`}>
          {displayHeading}
          {cursorTarget === "heading" && <span className="cursor-blink ml-1 border-r-4 border-indigo-500 inline-block h-[0.9em] align-middle animate-pulse" />}
        </h1>
      )}

      {paragraph && (
        <p className={`mt-4 text-xl text-gray-600 dark:text-gray-300 ${paragraphClassName}`}>
          {displayParagraph}
          {cursorTarget === "paragraph" && <span className="cursor-blink ml-1 border-r-2 border-indigo-400 inline-block h-[0.9em] align-middle animate-pulse" />}
        </p>
      )}
    </div>
  );
}
