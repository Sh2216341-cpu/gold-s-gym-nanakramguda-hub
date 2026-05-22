import { Check, Crown } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "1,999",
    period: "/ month",
    desc: "Perfect for beginners stepping into fitness.",
    features: ["Full gym floor access", "Locker facility", "1 free trainer session", "Weekday access 6 AM – 10 PM"],
    highlight: false,
  },
  {
    name: "Elite",
    price: "3,499",
    period: "/ month",
    desc: "Our most popular plan for serious lifters.",
    features: ["24/7 unlimited access", "All group classes", "4 PT sessions / month", "Diet & nutrition plan", "Sauna & steam", "Guest passes (2/mo)"],
    highlight: true,
  },
  {
    name: "Annual Pro",
    price: "29,999",
    period: "/ year",
    desc: "Maximum savings, maximum commitment.",
    features: ["Everything in Elite", "12 PT sessions free", "Body composition analysis", "Priority booking", "Branded merchandise"],
    highlight: false,
  },
];

export function Plans() {
  return (
    <section id="plans" className="py-24 lg:py-32 bg-gradient-dark relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Membership</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3 uppercase">
            Choose Your <span className="text-gradient-gold">Path</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 transition hover:-translate-y-1 ${
                p.highlight
                  ? "bg-gradient-to-b from-card to-secondary border-2 border-gold shadow-gold"
                  : "bg-card border border-border hover:border-gold/40"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-gold text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Crown size={14} /> Most Popular
                </div>
              )}

              <h3 className="font-display text-2xl uppercase tracking-wider">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-2 min-h-[3rem]">{p.desc}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-2xl text-gold">₹</span>
                <span className="font-display text-5xl font-bold">{p.price}</span>
                <span className="text-muted-foreground text-sm">{p.period}</span>
              </div>

              <a
                href="#contact"
                className={`mt-8 block text-center py-3 rounded-md font-semibold uppercase tracking-wider text-sm transition ${
                  p.highlight
                    ? "bg-gradient-gold text-primary-foreground shadow-gold hover:opacity-90"
                    : "border border-gold/50 text-foreground hover:bg-gold/10"
                }`}
              >
                Get Started
              </a>

              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm">
                    <Check size={18} className="text-gold shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
