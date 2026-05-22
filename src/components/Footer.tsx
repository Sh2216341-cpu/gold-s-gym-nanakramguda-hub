export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl tracking-wider">
          GOLD'S <span className="text-gradient-gold">GYM</span> · Nanakramguda
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gold's Gym Nanakramguda. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
