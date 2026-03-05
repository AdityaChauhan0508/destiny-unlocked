import { Sparkles, Star, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const highlights = [
  { icon: Star, text: "100% Personalized" },
  { icon: Zap, text: "Instant Guidance" },
  { icon: Sparkles, text: "Numerology + Name Vibrations" },
  { icon: Heart, text: "Practical Remedies" },
];

const HeroSection = ({ onCTA }: { onCTA: () => void }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Mystical numerology background with sacred geometry" className="w-full h-full object-cover opacity-40" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>
    <div className="relative z-10 container mx-auto px-4 py-20 sm:py-32 text-center max-w-4xl">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-tight fade-in-up">
        Unlock Your Destiny with a <span className="gradient-text">FREE Personalised Numerology Report</span>
      </h1>
      <p className="mt-6 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto fade-in-up fade-in-up-delay-1">
        Understand your Career, Money, Relationships & Life Path — using your Name and Birth Date.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8 fade-in-up fade-in-up-delay-2">
        {highlights.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 bg-secondary/60 backdrop-blur-sm px-4 py-2 rounded-full border border-border/50">
            <Icon className="w-4 h-4 text-accent" />
            <span className="text-sm text-foreground">{text}</span>
          </div>
        ))}
      </div>
      <Button onClick={onCTA} size="lg" className="mt-10 glow-button bg-primary hover:bg-accent text-primary-foreground text-base sm:text-lg px-8 py-6 font-semibold fade-in-up fade-in-up-delay-3">
        <Sparkles className="w-5 h-5 mr-2" />
        Get My Free Numerology Report
      </Button>
    </div>
  </section>
);

export default HeroSection;
