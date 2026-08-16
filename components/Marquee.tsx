const items = [
  "Strength",
  "HIIT",
  "Cardio",
  "Boxing",
  "CrossFit",
  "Yoga",
  "Mobility",
  "Spin",
  "Personal Training",
  "Nutrition Coaching",
];

export default function Marquee() {
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y-4 border-background">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-volt/5 to-transparent" />
      <div className="relative bg-volt py-4">
        <div className="animate-marquee flex w-max items-center gap-8">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-8 whitespace-nowrap font-display text-2xl uppercase tracking-wider text-black"
            >
              {item}
              <span className="text-black/50">✕</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
