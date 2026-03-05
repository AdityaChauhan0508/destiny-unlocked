import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const PainPointSection = ({ onCTA }: { onCTA: () => void }) => (
  <section className="py-20 sm:py-28 px-4" aria-label="Why you need numerology">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="text-2xl sm:text-4xl font-bold font-serif fade-in-up">
        Clarity Chahiye? Answers Chahiye?{" "}
        <span className="gradient-text">Your Numbers Can Guide You.</span>
      </h2>
      <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed fade-in-up fade-in-up-delay-1">
        People struggle with confusion in career, relationships, money flow, mental peace, decisions,
        and life direction. Your personal numbers — Life Path, Destiny, Soul Urge — reveal your
        blueprint and provide the clarity you've been searching for.
      </p>
      <Button onClick={onCTA} size="lg" className="mt-8 glow-button bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-5 fade-in-up fade-in-up-delay-2">
        <Sparkles className="w-4 h-4 mr-2" />
        Discover Your Numbers
      </Button>
    </div>
  </section>
);

export default PainPointSection;
