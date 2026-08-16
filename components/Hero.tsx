"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Counter from "@/components/Counter";

type Stat = {
  to: number;
  suffix: string;
  label: string;
  staticValue?: boolean;
  decimals?: number;
};

const stats: Stat[] = [
  { to: 1200, suffix: "+", label: "Active Members" },
  { to: 24, suffix: "/7", label: "Open Every Day", staticValue: true },
  { to: 50, suffix: "+", label: "Weekly Classes" },
  { to: 4.9, suffix: "★", label: "Google Rating", decimals: 1 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative overflow-hidden mouse-glow"
      style={{
        "--mouse-x": `${mousePos.x}%`,
        "--mouse-y": `${mousePos.y}%`,
      } as React.CSSProperties}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
          alt="VOLT gym floor with members training"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
        <div className="animate-scan-line" />
      </div>

      <div className="pointer-events-none absolute right-10 bottom-32 hidden h-72 w-72 rounded-full bg-volt/10 blur-3xl lg:block" />
      <div className="pointer-events-none absolute right-40 top-40 hidden h-24 w-24 rounded-full bg-volt/15 blur-2xl lg:block" />
      <div className="pointer-events-none absolute left-10 top-1/3 hidden h-48 w-48 rounded-full bg-volt/5 blur-3xl lg:block" />

      <div className="pointer-events-none absolute right-20 top-1/4 hidden h-16 w-16 rounded-full border border-volt/20 bg-volt/5 backdrop-blur-xl lg:flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-volt/60">
          <path strokeLinecap="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-16 lg:px-8">
        <p
          className="hero-rise mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-volt/40 bg-volt/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-volt backdrop-blur-sm"
          style={{ animationDelay: "100ms" }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-volt" />
          Now enrolling — New Year Transformation Crew
        </p>

        <h1 className="font-display text-7xl leading-[0.9] tracking-wide sm:text-8xl lg:text-9xl">
          <span className="hero-rise block" style={{ animationDelay: "220ms" }}>
            TRAIN <span className="neon-flicker text-volt">HARD.</span>
          </span>
          <span className="hero-rise block" style={{ animationDelay: "360ms" }}>
            LIVE LOUD.
          </span>
        </h1>

        <p
          className="hero-rise mt-6 max-w-xl text-lg text-ash"
          style={{ animationDelay: "500ms" }}
        >
          VOLT isn&apos;t your average gym. It&apos;s a 24/7 playground for
          people who refuse to settle. Elite coaches, brutal classes, and a
          community that shows up — do you?
        </p>

        <div
          className="hero-rise mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "640ms" }}
        >
          <Link
            href="#join"
            className="btn-shine animate-pulse-glow rounded-full bg-volt px-8 py-4 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-volt-dark"
          >
            Claim Free Day Pass
          </Link>
          <Link
            href="#programs"
            className="rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:border-volt hover:text-volt"
          >
            Explore Programs
          </Link>
        </div>

        <dl
          className="hero-rise mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
          style={{ animationDelay: "780ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-volt pl-4">
              <dt className="text-xs uppercase tracking-widest text-ash">
                {stat.label}
              </dt>
              <dd className="font-display text-4xl text-white">
                {stat.staticValue ? (
                  `${stat.to}${stat.suffix}`
                ) : (
                  <Counter
                    to={stat.to}
                    suffix={stat.suffix}
                    decimals={stat.decimals ?? 0}
                  />
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        className="animate-float absolute right-10 bottom-32 hidden w-64 rounded-2xl border border-white/10 bg-carbon/80 p-5 backdrop-blur-xl lg:block"
        style={{ animationDelay: "1.2s" }}
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-volt">
          WOD of the day
        </p>
        <p className="font-display mt-1 text-3xl tracking-wide">21-15-9</p>
        <p className="mt-1 text-sm text-ash">Thrusters · Pull-ups · Burpees</p>
        <div className="mt-4 flex items-end gap-1.5">
          {[38, 62, 45, 80, 56, 95, 70, 88].map((height, i) => (
            <span
              key={i}
              className="animate-bar-pulse w-2 rounded-sm bg-volt"
              style={{ height: `${height}%`, animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </div>
        <p className="mt-3 text-xs font-semibold text-ash">
          Beat it — we&apos;ll add you to the board.
        </p>
      </div>

      <div
        className="animate-float-slow absolute right-40 top-40 hidden h-20 w-20 items-center justify-center rounded-full border border-volt/40 bg-volt/10 text-volt backdrop-blur-xl lg:flex"
        style={{ animationDelay: "2s" }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-9 w-9"
        >
          <path
            strokeLinecap="round"
            d="M7.5 9.5V8h4v2M7.5 9.5V16M4 10h1.5M4 14h1.5m9-5.5v2M14.5 8.5V16m0-2.5h1.5m-1.5 2.5h1.5M2 10v4m20-4v4m-4.5-8.5h.5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-.5"
          />
        </svg>
      </div>
    </section>
  );
}
