import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

interface StickyNavbarProps {
  onCTA: () => void;
}

const StickyNavbar = ({ onCTA }: StickyNavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
  { label: "Why Numerology", href: "#pain-points" },
  { label: "Free Report", href: "#free-report" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" }];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ?
      "bg-background/90 backdrop-blur-md border-b border-border shadow-lg" :
      "bg-transparent"}`
      }>
      
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 font-serif text-xl font-bold gradient-text">
          <img src={logo} alt="NumeroVibe logo" className="w-8 h-8" />
          NumeroVibe
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            
              {link.label}
            </a>
          )}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            onClick={onCTA}
            size="sm"
            className="hidden sm:inline-flex glow-button bg-primary hover:bg-accent text-primary-foreground">
            
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Free Report
          </Button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu">
            
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen &&
      <nav className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-4 pb-4 space-y-2">
          {navLinks.map((link) =>
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
          
              {link.label}
            </a>
        )}
          <Button
          onClick={() => {
            setMobileMenuOpen(false);
            onCTA();
          }}
          size="sm"
          className="w-full sm:hidden glow-button bg-primary hover:bg-accent text-primary-foreground mt-2">
          
            <Sparkles className="w-3.5 h-3.5 mr-1.5" />
            Free Report
          </Button>
        </nav>
      }
    </header>);

};

export default StickyNavbar;