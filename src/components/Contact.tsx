import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(80),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  message: z.string().trim().min(5, "Message too short").max(800),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "Please check your input");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thanks! Our team will reach out within 24 hours.");
      setForm({ name: "", email: "", phone: "", message: "" });
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Get In Touch</span>
          <h2 className="font-display text-4xl lg:text-5xl mt-3 uppercase">
            Start Your <span className="text-gradient-gold">Journey</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="bg-card border border-gold/20 rounded-2xl overflow-hidden shadow-elegant">
              <iframe
                title="Gold's Gym Nanakramguda Map"
                src="https://www.google.com/maps?q=Gold's+Gym+Nanakramguda+Hyderabad&output=embed"
                className="w-full h-72 border-0"
                loading="lazy"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, label: "Address", value: "Nanakramguda, Hyderabad, 500032" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210" },
                { icon: Mail, label: "Email", value: "nanakramguda@goldsgym.in" },
                { icon: Clock, label: "Hours", value: "5 AM – 11 PM · 24/7 for Elite" },
              ].map((c) => (
                <div key={c.label} className="bg-card border border-border rounded-xl p-4 flex gap-3">
                  <div className="shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center">
                    <c.icon size={18} className="text-gold" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    <div className="text-sm mt-0.5 break-words">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-card border border-gold/20 rounded-2xl p-8 shadow-elegant space-y-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full bg-input border border-border rounded-md px-4 py-3 focus:border-gold focus:outline-none transition"
                placeholder="Your full name"
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 w-full bg-input border border-border rounded-md px-4 py-3 focus:border-gold focus:outline-none transition"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone</label>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1.5 w-full bg-input border border-border rounded-md px-4 py-3 focus:border-gold focus:outline-none transition"
                  placeholder="+91"
                />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5 w-full bg-input border border-border rounded-md px-4 py-3 focus:border-gold focus:outline-none transition resize-none"
                placeholder="Tell us about your fitness goals..."
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-gold text-primary-foreground py-4 rounded-md font-semibold uppercase tracking-wider shadow-gold hover:opacity-90 transition disabled:opacity-50"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
