import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const SiteFooter = () =>
  <footer className="py-12 px-4 border-t border-border/50 bg-secondary/20" aria-label="Footer">
    <div className="container mx-auto max-w-6xl">
      <div className="grid sm:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <img src={logo} alt="NumeroVibe logo" className="w-8 h-8" />
            <h3 className="font-bold font-serif text-lg gradient-text">NumeroVibe</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Helping you decode your destiny through the power of numbers.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Contact</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href="mailto:hello@numerology.com" className="flex items-center justify-center sm:justify-start gap-2 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" /> hello@numerology.com
            </a>
            <a href="tel:+919999999999" className="flex items-center justify-center sm:justify-start gap-2 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" /> +91 99999 99999
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
          <div className="flex justify-center sm:justify-start gap-4">
            {[Instagram, Facebook, Youtube].map((Icon, i) =>
              <a key={i} href="#" className="text-muted-foreground hover:text-accent transition-colors" aria-label="Social media link">
                <Icon className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground space-y-1">
        <p>Disclaimer: Numerology is for guidance purposes only. Results may vary.</p>
        <p>© {new Date().getFullYear()} NumeroVibe. All rights reserved.</p>
      </div>
    </div>
  </footer>;

export default SiteFooter;
