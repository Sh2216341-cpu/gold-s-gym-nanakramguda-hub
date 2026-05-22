import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Plans } from "@/components/Plans";
import { Trainers } from "@/components/Trainers";
import { BMI } from "@/components/BMI";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gold's Gym Nanakramguda · Premium Fitness in Hyderabad" },
      {
        name: "description",
        content:
          "Gold's Gym Nanakramguda — Hyderabad's premier strength & fitness facility. Elite trainers, world-class equipment, transformation programs, and flexible memberships.",
      },
      { property: "og:title", content: "Gold's Gym Nanakramguda · Hyderabad" },
      { property: "og:description", content: "Forge your strongest self. Premium gym in Nanakramguda, Hyderabad." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Plans />
        <Trainers />
        <BMI />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster theme="dark" position="top-right" richColors />
    </div>
  );
}
