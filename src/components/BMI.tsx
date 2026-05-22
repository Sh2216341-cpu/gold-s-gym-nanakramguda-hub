import { useState } from "react";
import { Activity } from "lucide-react";

export function BMI() {
  const [h, setH] = useState("");
  const [w, setW] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const bmi = (() => {
    const hn = parseFloat(h);
    const wn = parseFloat(w);
    if (!hn || !wn) return null;
    if (unit === "metric") return wn / Math.pow(hn / 100, 2);
    return (wn / Math.pow(hn, 2)) * 703;
  })();

  const category = bmi
    ? bmi < 18.5
      ? { label: "Underweight", color: "text-blue-400" }
      : bmi < 25
        ? { label: "Healthy", color: "text-green-400" }
        : bmi < 30
          ? { label: "Overweight", color: "text-orange-400" }
          : { label: "Obese", color: "text-red-400" }
    : null;

  return (
    <section id="bmi" className="py-24 lg:py-32 bg-gradient-dark">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Free Tool</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3 uppercase">
            BMI <span className="text-gradient-gold">Calculator</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Know your number. Plan your transformation.</p>
        </div>

        <div className="bg-card border border-gold/20 rounded-2xl p-8 lg:p-12 shadow-elegant">
          <div className="flex justify-center gap-2 mb-8">
            {(["metric", "imperial"] as const).map((u) => (
              <button
                key={u}
                onClick={() => setUnit(u)}
                className={`px-5 py-2 rounded-md text-sm uppercase tracking-wider font-medium transition ${
                  unit === u ? "bg-gradient-gold text-primary-foreground" : "border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {u === "metric" ? "Metric (cm / kg)" : "Imperial (in / lb)"}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Height ({unit === "metric" ? "cm" : "inches"})
              </label>
              <input
                type="number"
                value={h}
                onChange={(e) => setH(e.target.value)}
                placeholder={unit === "metric" ? "175" : "69"}
                className="mt-2 w-full bg-input border border-border rounded-md px-4 py-3 text-lg focus:border-gold focus:outline-none transition"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Weight ({unit === "metric" ? "kg" : "lb"})
              </label>
              <input
                type="number"
                value={w}
                onChange={(e) => setW(e.target.value)}
                placeholder={unit === "metric" ? "70" : "154"}
                className="mt-2 w-full bg-input border border-border rounded-md px-4 py-3 text-lg focus:border-gold focus:outline-none transition"
              />
            </div>
          </div>

          {bmi && category && (
            <div className="mt-10 text-center border-t border-border pt-8 animate-float-up">
              <Activity className="mx-auto text-gold" size={32} />
              <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">Your BMI</div>
              <div className="font-display text-6xl lg:text-7xl text-gradient-gold mt-2 font-bold">
                {bmi.toFixed(1)}
              </div>
              <div className={`mt-2 text-lg font-semibold uppercase tracking-wider ${category.color}`}>
                {category.label}
              </div>
              <a
                href="#contact"
                className="inline-block mt-6 bg-gradient-gold text-primary-foreground px-8 py-3 rounded-md text-sm font-semibold uppercase tracking-wider shadow-gold"
              >
                Get a Custom Plan
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
