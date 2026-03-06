import { Button } from "@/components/ui/button";
import { Hash, Target, User, Heart, Clover, Shield, Briefcase, Users, CalendarDays, Pill, Sparkles } from "lucide-react";

const insights = [
  { icon: Hash, label: "Life Path Number" },
  { icon: Target, label: "Destiny Number" },
  { icon: User, label: "Personality Number" },
  { icon: Heart, label: "Soul Urge Number" },
  { icon: Clover, label: "Lucky Numbers & Colors" },
  { icon: Shield, label: "Strengths & Weaknesses" },
  { icon: Briefcase, label: "Career & Money Guidance" },
  { icon: Users, label: "Relationship Insights" },
  { icon: CalendarDays, label: "12-Month Prediction" },
  { icon: Pill, label: "Personalized Remedies" },
];

const FreeReportSection = ({ onCTA }: { onCTA: () => void }) => (
  <section id="free-report" className="py-20 sm:py-28 px-4 bg-secondary/30" aria-label="What you get">
    <div className="container mx-auto max-w-5xl text-center">
      <h2 className="text-2xl sm:text-4xl font-bold font-serif">
        Your Free Report Includes <span className="gradient-text">10 Powerful Insights</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
        {insights.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 p-5 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-purple)]">
            <Icon className="w-7 h-7 text-accent" />
            <span className="text-sm font-medium text-foreground text-center">{label}</span>
          </div>
        ))}
      </div>
      <Button onClick={onCTA} size="lg" className="mt-10 glow-button bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-5">
        <Sparkles className="w-4 h-4 mr-2" />
        Claim Your Free Report
      </Button>
    </div>
  </section>
);

export default FreeReportSection;
