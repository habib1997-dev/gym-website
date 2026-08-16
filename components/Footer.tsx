import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Why Volt", href: "#why-volt" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

const hours = [
  { day: "Monday — Friday", time: "24 hours" },
  { day: "Saturday", time: "24 hours" },
  { day: "Sunday", time: "24 hours" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a4 4 0 1 0 4 4V4c.5 2.5 2.5 4 5 4" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.8 12c0-2.7.3-4.4.5-5.2a3 3 0 0 1 2-2C6.4 4.3 9 4.2 12 4.2s5.6.1 6.7.6a3 3 0 0 1 2 2c.2.8.5 2.5.5 5.2s-.3 4.4-.5 5.2a3 3 0 0 1-2 2c-1.1.5-3.7.6-6.7.6s-5.6-.1-6.7-.6a3 3 0 0 1-2-2c-.2-.8-.5-2.5-.5-5.2Z" />
        <path strokeLinecap="round" d="m10 9.5 5 2.5-5 2.5v-5Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923452670710",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
        />
        <path
          strokeLinecap="round"
          d="M8.5 9.5c.5 3 2.5 5 5.5 6l1.5-1.5-2-1.5-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1.5-2-1 1Z"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-carbon/80">
      <div className="absolute inset-0 bg-gradient-to-r from-volt/3 via-transparent to-volt/3" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-volt/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/volt-logo.png"
                alt="VOLT Fitness logo"
                width={44}
                height={44}
                className="h-14 w-14"
              />
              <p className="font-display text-4xl tracking-wider">
                VOLT<span className="text-volt">.</span>
              </p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ash">
              The 24/7 gym for people who train hard and live loud. Block 12,
              Gulistan-e-Jauhar, Karachi.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-ash">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-volt"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-ash">
              Hours
            </h3>
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <li key={h.day} className="text-sm text-foreground/80">
                  <span className="text-volt">{h.time}</span> — {h.day}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-ash">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-foreground/80">
              <li>
                <a href="tel:+923452670710" className="hover:text-volt">
                  +92 345 2670710
                </a>
              </li>
              <li>
                <a href="mailto:hello@voltfit.pk" className="hover:text-volt">
                  hello@voltfit.pk
                </a>
              </li>
              <li>Block 12, Gulistan-e-Jauhar, Karachi</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ash transition-colors hover:border-volt hover:text-volt"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-xs text-ash">
            © {new Date().getFullYear()} VOLT Fitness. All rights reserved.
          </p>
          <p className="text-xs text-ash">
            Train hard. Live loud. Stay hydrated.
          </p>
        </div>
      </div>
    </footer>
  );
}
