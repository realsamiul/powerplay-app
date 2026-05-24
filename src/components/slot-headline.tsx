"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  triggerOnMount?: boolean;
  elementTag?: "h1" | "h2";
};

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./-";
const FRAME_DURATION = 35;
const CYCLES_PER_CHAR = 4;

export function SlotHeadline({
  text,
  className,
  delay = 0,
  triggerOnMount = false,
  elementTag = "h2",
}: Props) {
  const reduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState<string[]>(() => text.split("").map(() => " "));
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const chars = text.split("");
    const lastSettlingIndex = chars.reduce((last, char, index) => (char === " " ? last : index), -1);

    chars.forEach((targetChar, charIndex) => {
      if (targetChar === " ") {
        setDisplayed((prev) => {
          const next = [...prev];
          next[charIndex] = " ";
          return next;
        });
        return;
      }

      const startDelay = delay + charIndex * 20;
      const totalFrames = CYCLES_PER_CHAR + charIndex * 2;

      let frame = 0;
      const tick = () => {
        if (frame < totalFrames) {
          const randChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          setDisplayed((prev) => {
            const next = [...prev];
            next[charIndex] = randChar;
            return next;
          });
          frame++;
          window.setTimeout(tick, FRAME_DURATION);
        } else {
          setDisplayed((prev) => {
            const next = [...prev];
            next[charIndex] = targetChar;
            return next;
          });
          if (charIndex === lastSettlingIndex) {
            setDone(true);
          }
        }
      };

      window.setTimeout(tick, startDelay);
    });
  }, [delay, text]);

  useEffect(() => {
    let obs: IntersectionObserver | undefined;
    const id = window.setTimeout(() => {
      setDisplayed(text.split("").map(() => " "));
      setDone(false);
      hasAnimated.current = false;

      if (reduceMotion) {
        setDisplayed(text.split(""));
        setDone(true);
        return;
      }

      if (triggerOnMount) {
        animate();
        return;
      }

      const el = containerRef.current;
      if (!el) return;

      obs = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            animate();
            obs?.disconnect();
          }
        },
        { threshold: 0.2, rootMargin: "-40px" },
      );
      obs.observe(el);
    }, 0);

    return () => {
      window.clearTimeout(id);
      obs?.disconnect();
    };
  }, [animate, reduceMotion, text, triggerOnMount]);

  const Component = elementTag;
  const words = text.split(" ");

  return (
    <Component
      ref={containerRef}
      className={className}
      aria-label={text}
      style={{ letterSpacing: "var(--tracking-display)", fontFamily: "var(--font-display)" }}
    >
      {words.map((word, wIdx) => {
        const startIndex = words.slice(0, wIdx).reduce((sum, previousWord) => sum + previousWord.length + 1, 0);
        const wordChars = displayed.slice(startIndex, startIndex + word.length);

        return (
          <span key={wIdx} className="relative inline-block whitespace-nowrap">
            <span className="invisible">{word}</span>

            <span className="absolute inset-0 flex" aria-hidden="true">
              {wordChars.map((char, cIdx) => (
                <span
                  key={cIdx}
                  className="inline-block"
                  style={{
                    color: done ? "inherit" : "var(--accent)",
                    transition: done ? "color 0.2s ease-out" : "none",
                  }}
                >
                  {char}
                </span>
              ))}
            </span>

            {wIdx < words.length - 1 ? (
              <span className="inline-block" style={{ width: "0.25em" }}>
                {" "}
              </span>
            ) : null}
          </span>
        );
      })}
    </Component>
  );
}
