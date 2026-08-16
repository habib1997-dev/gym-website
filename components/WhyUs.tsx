import Image from "next/image";
import Reveal from "@/components/Reveal";

const features = [
  {
    title: "Open 24/7",
    desc: "Midnight sessions, 5am PRs, post-work pumps. The doors never close — neither do you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path strokeLinecap="round" d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    title: "Elite Coaches",
    desc: "Certified, ripped and obsessed with your progress. Every program is built around you.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM12 14a7 7 0 0 1 7 7H5a7 7 0 0 1 7-7Z" />
      </svg>
    ),
  },
  {
    title: "Smart Tracking",
    desc: "Free VOLT app syncs your workouts, body stats and streaks. Watch yourself level up.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-6 4h3M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
      </svg>
    ),
  },
  {
    title: "Serious Community",
    desc: "Weekly events, challenges and the loudest hype squad in town. Results are shared here.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm7 7a5 5 0 0 0-10 0M19 11a2.5 2.5 0 1 0 0-5M21 19a4.5 4.5 0 0 0-4-4" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="why-volt" className="relative bg-mesh">
      <div className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-volt/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal variant="left">
            <div className="relative">
              <div className="absolute -top-6 -left-6 -z-10 h-40 w-40 rounded-full bg-volt/20 blur-3xl" />
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=800&auto=format&fit=crop"
                    alt="Woman training with a coach"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
                    alt="Dumbbells rack on the gym floor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-volt">
                Why VOLT
              </p>
              <h2 className="font-display text-5xl leading-none tracking-wide sm:text-6xl">
                MORE THAN A GYM. <br />
                <span className="text-volt">A LIFESTYLE.</span>
              </h2>
              <p className="mt-5 max-w-lg text-ash">
                Built for the 20-something grinders — the ones who work hard
                and want a body and a community that matches the energy.
                Everything here is designed to make you stronger, fitter and
                obsessed with showing up.
              </p>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.title} className="group">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-volt/30 bg-volt/10 text-volt transition-all duration-300 group-hover:scale-110 group-hover:bg-volt group-hover:text-black">
                      {feature.icon}
                    </div>
                    <h3 className="font-display text-2xl tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ash">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
