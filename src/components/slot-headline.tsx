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
const FRAME_DURATION = 40;
const CYCLES_PER_CHAR = 8;

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

      const startDelay = delay + charIndex * 35;
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

  return (
    <Component
      ref={containerRef}
      className={className}
      aria-label={text}
      style={{ letterSpacing: "var(--tracking-display)", fontFamily: "var(--font-display)" }}
    >
      {displayed.map((char, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="inline-block"
          style={{
            minWidth: char === " " ? "0.3em" : "auto",
            color: done ? "inherit" : "var(--accent)",
            transition: done ? "color 0.3s ease" : "none",
          }}
        >
          {char}
        </span>
      ))}
    </Component>
  );
}
