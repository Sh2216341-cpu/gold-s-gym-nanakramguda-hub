import t1 from "@/assets/transform-1.jpg";
import t2 from "@/assets/transform-2.jpg";
import t3 from "@/assets/transform-3.jpg";

const items = [
  { img: t1, name: "Rohan K.", result: "Lost 22 kg · 6 months", quote: "The coaches at Gold's changed my life." },
  { img: t2, name: "Aisha M.", result: "Body recomp · 8 months", quote: "Stronger, leaner, more confident than ever." },
  { img: t3, name: "Karthik S.", result: "Gained 9 kg lean · 1 year", quote: "Best decision I've made for myself." },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Transformations</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3 uppercase">
            Real People. <span className="text-gradient-gold">Real Results.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hundreds of members reshape their lives at Gold's Gym Nanakramguda every year.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((it) => (
            <figure key={it.name} className="group relative overflow-hidden rounded-2xl border border-border hover:border-gold/40 transition">
              <img
                src={it.img}
                alt={`${it.name} transformation`}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm italic text-foreground/90">"{it.quote}"</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-display uppercase tracking-wider">{it.name}</span>
                  <span className="text-xs text-gold uppercase tracking-wider">{it.result}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
