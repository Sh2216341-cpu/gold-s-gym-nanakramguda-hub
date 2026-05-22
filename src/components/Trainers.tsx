import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import { Instagram } from "lucide-react";

const trainers = [
  { img: t1, name: "Arjun Reddy", role: "Head Coach · Strength", spec: "Powerlifting, Hypertrophy" },
  { img: t2, name: "Priya Sharma", role: "Women's Fitness Lead", spec: "HIIT, Body Recomposition" },
  { img: t3, name: "Vikram Singh", role: "Bodybuilding Specialist", spec: "Competition Prep, Nutrition" },
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Meet The Team</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 uppercase">
              Coaches Who <span className="text-gradient-gold">Push Limits</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Internationally certified. Locally relentless. Our trainers carry decades of combined expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {trainers.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-gold/40 transition">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={t.img}
                  alt={t.name}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs uppercase tracking-widest text-gold font-medium">{t.role}</span>
                <h3 className="font-display text-2xl uppercase mt-1">{t.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.spec}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-primary-foreground transition">
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
