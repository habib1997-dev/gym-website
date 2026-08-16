import Link from "next/link";
import Reveal from "@/components/Reveal";

const plans = [
  {
    name: "Day Pass",
    price: "1,500",
    period: "per visit",
    tagline: "Test the waters. Feel the burn.",
    features: ["Full gym access", "1 group class", "Locker & shower access", "Free intro coaching"],
    highlighted: false,
    cta: "Get Day Pass",
  },
  {
    name: "Monthly",
    price: "12,000",
    period: "per month",
    tagline: "The grind starts here. No contract, cancel anytime.",
    features: [
      "Unlimited 24/7 gym access",
      "Unlimited group classes",
      "Free VOLT app tracking",
      "1 PT session / month",
      "Guest pass every month",
    ],
    highlighted: true,
    cta: "Start Monthly",
  },
  {
    name: "Annual",
    price: "110,000",
    period: "per year",
    tagline: "For the committed. Two months free.",
    features: [
      "Everything in Monthly",
      "2 PT sessions / month",
      "Nutrition plan included",
      "Free VOLT merch pack",
      "Priority class booking",
    ],
    highlighted: false,
    cta: "Go Annual",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-volt/5 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-volt">
            No hidden fees
          </p>
          <h2 className="font-display text-5xl leading-none tracking-wide sm:text-6xl">
            PRICING THAT WORKS
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-ash">
            Student friendly. Grinder approved. Prices in PKR — switch to your
            local currency anytime.
          </p>
        </Reveal>

        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 130} variant={index === 1 ? "zoom" : "up"}>
            <div
              className={`relative flex flex-col rounded-2xl border p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                plan.highlighted
                  ? "border-volt bg-carbon/80 shadow-[0_0_60px_-15px_rgba(204,255,0,0.35)] hover:shadow-[0_0_90px_-15px_rgba(204,255,0,0.55)]"
                  : "border-white/10 bg-carbon/60 hover:border-white/30"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-volt px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-black backdrop-blur-sm">
                  Most Popular
                </span>
              )}

              <h3 className="font-display text-3xl tracking-wide">{plan.name}</h3>
              <p className="mt-1 text-sm text-ash">{plan.tagline}</p>

              <p className="mt-6">
                <span className="font-display text-6xl tracking-wide">
                  PKR {plan.price}
                </span>
                <span className="ml-2 text-sm text-ash">{plan.period}</span>
              </p>

              <ul className="mt-7 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="mt-0.5 h-4 w-4 shrink-0 text-volt"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4 10 4 4 8-8" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="#join"
                className={`btn-shine mt-8 rounded-full py-3.5 text-center text-sm font-bold uppercase tracking-widest transition-colors ${
                  plan.highlighted
                    ? "bg-volt text-black hover:bg-volt-dark"
                    : "border border-white/25 text-white hover:border-volt hover:text-volt"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-ash">
          Got a friend? Bring them — both of you get a week free.
        </p>
      </div>
    </section>
  );
}
