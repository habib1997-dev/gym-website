import Image from "next/image";
import Reveal from "@/components/Reveal";

const trainers = [
  {
    name: "Marcus Reed",
    role: "Head Coach — Strength",
    bio: "Powerlifter, 10+ years coaching. Will fix your form before you can say 'one more set'.",
    image:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    alt: "Coach Marcus Reed standing in the gym",
  },
  {
    name: "Sofia Almeida",
    role: "HIIT & Conditioning",
    bio: "Ex-pro athlete. Her classes break people — in the best possible way.",
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=800&auto=format&fit=crop",
    alt: "Coach Sofia Almeida with arms crossed",
  },
  {
    name: "Devon Park",
    role: "Boxing & Cardio",
    bio: "Amateur champ turned coach. Fast hands, faster motivation.",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
    alt: "Coach Devon Park coaching a client",
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-volt/5 blur-3xl" />
      <div className="bg-mesh mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-volt">
              The squad
            </p>
            <h2 className="font-display text-5xl leading-none tracking-wide sm:text-6xl">
              MEET YOUR COACHES
            </h2>
          </div>
          <p className="max-w-md text-ash">
            Certified, battle-tested and personally invested in your
            gains. Book a free session with any of them.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.name} delay={index * 120}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-carbon transition-all duration-500 hover:-translate-y-2 hover:border-volt/50 hover:shadow-[0_20px_60px_-20px_rgba(204,255,0,0.3)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={trainer.image}
                    alt={trainer.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-transparent" />
                  <div className="absolute inset-x-5 bottom-5">
                    <h3 className="font-display text-3xl tracking-wide">
                      {trainer.name}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-widest text-volt">
                      {trainer.role}
                    </p>
                  </div>
                </div>
                <p className="p-5 text-sm leading-relaxed text-ash">
                  {trainer.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
