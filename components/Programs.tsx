import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

const programs = [
  {
    title: "Strength",
    desc: "Squat, bench, deadlift — built on progressive overload with coaching eyes on every set.",
    tag: "Most Popular",
    image:
      "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1200&auto=format&fit=crop",
    alt: "Athlete lifting a barbell",
  },
  {
    title: "HIIT",
    desc: "30 minutes of pure chaos. Torch up to 600 calories and walk out dripping.",
    tag: "Fastest Results",
    image:
      "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop",
    alt: "Man pushing through a high intensity workout",
  },
  {
    title: "Boxing",
    desc: "Pads, bags and conditioning. Learn to punch properly — then punch harder.",
    tag: "New",
    image:
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop",
    alt: "Boxer training with gloves",
  },
  {
    title: "Recovery",
    desc: "Mobility, stretching and breathwork so the grind never breaks you down.",
    tag: "Level Up",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
    alt: "Woman stretching in a yoga pose",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-volt">
              Pick your poison
            </p>
            <h2 className="font-display text-5xl leading-none tracking-wide sm:text-6xl">
              PROGRAMS THAT HIT
            </h2>
          </div>
          <p className="max-w-md text-ash">
            Every program is coached, tracked and pushed to your limit. No
            wandering around the floor wondering what to do.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={index * 110}>
              <Link
                href="#join"
                className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-carbon/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-volt/50 hover:shadow-[0_20px_60px_-20px_rgba(204,255,0,0.35)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-volt/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-black backdrop-blur-sm">
                    {program.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-3xl tracking-wide transition-colors group-hover:text-volt">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ash">
                    {program.desc}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
