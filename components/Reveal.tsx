"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  variant?: "up" | "left" | "right" | "zoom";
  delay?: number;
  className?: string;
};

const hiddenByVariant: Record<NonNullable<RevealProps["variant"]>, string> = {
  up: "translate-y-10",
  left: "-translate-x-12",
  right: "translate-x-12",
  zoom: "scale-90",
};

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`${className} will-change-transform transition-all duration-700 ease-out ${
        visible
          ? "translate-x-0 translate-y-0 scale-100 opacity-100"
          : `opacity-0 ${hiddenByVariant[variant]}`
      }`}
    >
      {children}
    </div>
  );
}
