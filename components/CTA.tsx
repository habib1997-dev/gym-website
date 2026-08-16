import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section id="join" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-mesh" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-64 w-64 rounded-full bg-volt/5 blur-2xl" />
      <div className="animate-scan-line" />
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal variant="zoom">
          <div className="relative overflow-hidden rounded-3xl bg-volt px-6 py-16 text-center sm:px-12 sm:py-20">
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, black 0, black 2px, transparent 2px, transparent 14px)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-volt/20 via-transparent to-volt/10" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-volt/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-10 bottom-10 h-32 w-32 rounded-full bg-volt/15 blur-2xl" />
            <div className="relative">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-black/60">
                Your first session is on us
              </p>
              <h2 className="font-display text-6xl leading-none tracking-wide text-black sm:text-7xl lg:text-8xl">
                NO EXCUSES.
                <br />
                <span className="hero-rise neon-flicker">FIRST WORKOUT FREE.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-black/70">
                Walk in any time — 24/7 access. We&apos;ll show you around, run
                you through a session and if you&apos;re not hooked, you owe us
                nothing.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="tel:+923452670710"
                  className="btn-shine rounded-full bg-black px-9 py-4 text-sm font-bold uppercase tracking-widest text-volt transition-transform hover:scale-105"
                >
                  Book Free Session
                </a>
                <a
                  href="#top"
                  className="rounded-full border-2 border-black px-9 py-4 text-sm font-bold uppercase tracking-widest text-black transition-colors hover:bg-black/10"
                >
                  Find Us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
