import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          © {currentYear} Iyiade Boluwatife. Built with
          <Heart size={14} className="text-primary" />
          and code.
        </p>
      </div>
    </footer>
  );
}
