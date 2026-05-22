import heroImg from "@/assets/hero-gym.jpg";
import { ArrowRight, Dumbbell } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Gold's Gym Nanakramguda" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <div className="max-w-3xl animate-float-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-card/50 backdrop-blur mb-6">
            <Dumbbell size={16} className="text-gold" />
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
              Nanakramguda · Hyderabad
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] uppercase">
            Forge Your <br />
            <span className="text-gradient-gold">Strongest</span> Self
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Step into Hyderabad's most iconic strength temple. World-class equipment, elite coaching, and a community built to push you beyond limits.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#plans"
              className="group inline-flex items-center gap-2 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-md font-semibold uppercase tracking-wider shadow-gold hover:scale-[1.02] transition"
            >
              View Plans
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#bmi"
              className="inline-flex items-center gap-2 border border-gold/50 text-foreground px-8 py-4 rounded-md font-semibold uppercase tracking-wider hover:bg-gold/10 transition"
            >
              Calculate BMI
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md">
            {[
              { num: "15K+", label: "Members" },
              { num: "50+", label: "Trainers" },
              { num: "24/7", label: "Access" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl lg:text-4xl text-gradient-gold font-bold">{s.num}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
