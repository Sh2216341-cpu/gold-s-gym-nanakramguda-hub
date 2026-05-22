import gym from "@/assets/gym-interior.jpg";
import { Award, Users, Clock, Trophy } from "lucide-react";

const features = [
  { icon: Award, title: "World-Class Equipment", desc: "Premium imported machines and free weights across 12,000 sq ft." },
  { icon: Users, title: "Expert Coaching", desc: "Certified trainers with international qualifications guide every session." },
  { icon: Clock, title: "Flexible Hours", desc: "Open 5 AM to 11 PM daily. 24/7 access available for premium members." },
  { icon: Trophy, title: "Proven Results", desc: "Over 15,000 transformations. Hyderabad's most trusted fitness brand." },
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-radial-gold blur-2xl" />
            <img
              src={gym}
              alt="Gold's Gym Nanakramguda interior"
              loading="lazy"
              width={1600}
              height={900}
              className="relative rounded-lg shadow-elegant border border-gold/20"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-gold text-primary-foreground px-6 py-4 rounded-lg shadow-gold hidden sm:block">
              <div className="font-display text-3xl font-bold">Since 2010</div>
              <div className="text-xs uppercase tracking-wider">Iron · Sweat · Legacy</div>
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">About Us</span>
            <h2 className="font-display text-4xl lg:text-5xl mt-3 uppercase leading-tight">
              The Gym That Built <br />
              <span className="text-gradient-gold">Hyderabad's Champions</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              From bodybuilders to busy executives, Gold's Gym Nanakramguda is where Hyderabad comes to transform. We blend the legendary Gold's heritage with cutting-edge training science to deliver the results you deserve.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <f.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg uppercase tracking-wide">{f.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
