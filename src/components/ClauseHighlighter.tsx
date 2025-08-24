"use client";
import { useEffect, useState } from "react";

/**
 * Renders a block of "clause" text where marked spans get an animated highlight sweep.
 * Usage: pass an array of lines with optional highlight ranges.
 */
type Line = {
  text: string;
  highlights?: Array<{ start: number; end: number; tone?: "warn"|"ok" }>;
};

const toneClass = (tone: "warn"|"ok" = "warn") =>
  tone === "warn" ? "bg-yellow-200/70" : "bg-emerald-200/70";

export default function ClauseHighlighter({
  lines,
  autoLoop = true,
  loopMs = 2200,
}: { lines: Line[]; autoLoop?: boolean; loopMs?: number }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!autoLoop) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % lines.length);
    }, loopMs);
    return () => clearInterval(id);
  }, [autoLoop, loopMs, lines.length]);

  return (
    <div className="rounded-xl border bg-white p-4 md:p-6 font-mono text-sm leading-6 text-black/90">
      {lines.map((line, idx) => {
        const isActive = idx === active;
        const parts: React.ReactNode[] = [];
        if (!line.highlights?.length) {
          parts.push(<span key="plain">{line.text}</span>);
        } else {
          let cursor = 0;
          line.highlights.forEach((h, i) => {
            const before = line.text.slice(cursor, h.start);
            const target = line.text.slice(h.start, h.end);
            if (before) parts.push(<span key={`b${i}`}>{before}</span>);
            parts.push(
              <span key={`h${i}`} className={`relative inline-block ${toneClass(h.tone)}`}>
                {/* animated sweep overlay */}
                <span
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent
                              ${isActive ? "block" : "hidden"}`}
                  style={{
                    animation: isActive ? "sweep 1.4s ease-in-out 1" : undefined,
                  }}
                />
                <span className="relative z-10 font-semibold">{target}</span>
              </span>
            );
            cursor = h.end;
          });
          const after = line.text.slice(cursor);
          if (after) parts.push(<span key="after">{after}</span>);
        }

        return (
          <div
            key={idx}
            className={`whitespace-pre-wrap ${isActive ? "text-black" : "text-black/80"}`}
          >
            {parts}
          </div>
        );
      })}
      <div className="mt-3 text-xs text-gray-500">* Animated highlights cycle through key clauses.</div>
    </div>
  );
}
