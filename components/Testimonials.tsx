import Image from "next/image";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Walked in skinny at 22, walked out with a 2-plate bench and zero excuses left. The coaches genuinely care about your progress.",
    name: "Haris Khan",
    tag: "Member for 14 months",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    alt: "Portrait of Haris Khan",
  },
  {
    quote:
      "I've tried every gym in the city. VOLT is the first one where people actually talk to you and classes feel like a squad thing.",
    name: "Ayesha Malik",
    tag: "HIIT regular",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    alt: "Portrait of Ayesha Malik",
  },
  {
    quote:
      "Lost 18kg in 7 months with Sofia's program. The app streaks thing is dangerously addictive — in a good way.",
    name: "Bilal Ahmed",
    tag: "Member for 7 months",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    alt: "Portrait of Bilal Ahmed",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-volt/5 blur-3xl" />
      <div className="bg-mesh mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-volt">
            Real talk
          </p>
          <h2 className="font-display text-5xl leading-none tracking-wide sm:text-6xl">
            MEMBERS WHO STAYED
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ash">
            Don&apos;t take our word for it. Here&apos;s what the 20-something
            crew says after their first few months.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Reveal key={t.name} delay={index * 120}>
              <figure className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-carbon p-6 transition-all duration-500 hover:-translate-y-2 hover:border-volt/50 hover:shadow-[0_20px_60px_-20px_rgba(204,255,0,0.25)]">
                <div className="absolute inset-0 bg-gradient-to-br from-volt/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex gap-1 text-volt" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                        <path d="M10 1.5 12.6 7l6 .6-4.5 4 1.3 5.9L10 14.4l-5.4 3.1L5.9 11.6l-4.5-4 6-.6L10 1.5Z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="flex-1 text-sm leading-relaxed text-foreground/90">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <Image
                      src={t.image}
                      alt={t.alt}
                      width={44}
                      height={44}
                      className="rounded-full border border-white/10 object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-ash">{t.tag}</p>
                    </div>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
