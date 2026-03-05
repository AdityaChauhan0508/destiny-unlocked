import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const FinalCTA = ({ onCTA }: { onCTA: () => void }) => (
  <section className="py-20 sm:py-28 px-4 text-center" aria-label="Final call to action">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-2xl sm:text-4xl font-bold font-serif">
        Take the First Step Toward a{" "}
        <span className="gradient-text">Better, Clearer & Happier Life</span>
      </h2>
      <p className="mt-4 text-muted-foreground text-lg">
        Your numbers are waiting to reveal your true potential.
      </p>
      <Button onClick={onCTA} size="lg" className="mt-8 glow-button bg-primary hover:bg-accent text-primary-foreground text-lg px-10 py-6 font-semibold">
        <Sparkles className="w-5 h-5 mr-2" />
        Get My Free Numerology Report
      </Button>
    </div>
  </section>
);

export default FinalCTA;
