"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Why Volt", href: "#why-volt" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="#top" className="group flex items-center gap-2" aria-label="VOLT Fitness home">
          <Image
            src="/volt-logo.png"
            alt="VOLT Fitness logo"
            width={40}
            height={40}
            priority
            className="h-14 w-14 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
          />
          <span className="font-display text-4xl tracking-wider">
            VOLT<span className="text-volt">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ash transition-colors hover:text-volt"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="#join"
            className="btn-shine animate-pulse-glow rounded-full bg-volt px-5 py-2 text-sm font-bold uppercase tracking-wide text-black transition-colors hover:bg-volt-dark"
          >
            Join Now
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-xl md:hidden">
          <ul className="mx-auto max-w-7xl space-y-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-ash transition-colors hover:bg-white/5 hover:text-volt"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#join"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-volt px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-black"
              >
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
