import { Button } from "@/components/ui/button";
import { Sparkles, Award, BookOpen, Users } from "lucide-react";

const AboutExpert = ({ onCTA }: { onCTA: () => void }) => (
  <section id="about" className="py-20 sm:py-28 px-4 bg-secondary/30" aria-label="About the expert">
    <div className="container mx-auto max-w-4xl">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden shrink-0 border-4 border-primary/30 shadow-xl">
          <img 
            src="/jyotishi.png" 
            alt="Numerology Expert" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif">
            Meet Your Numerology Expert at <span className="gradient-text">NumeroVibe</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            With years of deep study in Vedic Numerology, Name Vibration Science, and Life Path Analysis,
            our expert team has helped thousands of people gain clarity about their career, finances,
            relationships, and personal growth. Our approach combines ancient wisdom with modern
            practical guidance — delivering real, actionable insights.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            {[
              { icon: Award, text: "Certified Experts" },
              { icon: BookOpen, text: "10+ Years Experience" },
              { icon: Users, text: "5000+ Reports Delivered" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-foreground">
                <Icon className="w-4 h-4 text-accent" />
                {text}
              </div>
            ))}
          </div>
          <Button onClick={onCTA} size="lg" className="mt-8 glow-button bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-5">
            <Sparkles className="w-4 h-4 mr-2" />
            Get My Free Report
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default AboutExpert;
