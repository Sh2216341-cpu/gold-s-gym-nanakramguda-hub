import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const msg = encodeURIComponent("Hi! I'd like to know more about Gold's Gym Nanakramguda memberships.");
  return (
    <a
      href={`https://wa.me/919876543210?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant animate-pulse-gold hover:scale-110 transition"
    >
      <MessageCircle size={26} fill="white" />
    </a>
  );
}
