import Reveal from "@/components/Reveal";

const impactStats = [
  { value: "50K+", label: "Workouts Completed" },
  { value: "98%", label: "Member Retention" },
  { value: "4.9★", label: "Average Rating" },
  { value: "12", label: "Trainers on Floor" },
];

export default function Impact() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-carbon/80">
      <div className="absolute inset-0 bg-gradient-to-r from-volt/5 via-transparent to-volt/5" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100} variant="up">
              <div className="glass-card rounded-2xl p-6 text-center volt-glow">
                <p className="font-display text-4xl tracking-wide text-volt sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-ash">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}