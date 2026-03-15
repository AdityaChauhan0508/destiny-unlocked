import { PenLine, Building2, HeartHandshake, FileText } from "lucide-react";

const services = [
  { icon: PenLine, title: "Name Correction", desc: "Align your name vibrations for success and prosperity." },
  { icon: Building2, title: "Business Name Analysis", desc: "Choose the perfect business name backed by numerology." },
  { icon: HeartHandshake, title: "Compatibility Report", desc: "Understand relationship dynamics through numbers." },
  { icon: FileText, title: "Detailed Life Report", desc: "Comprehensive numerology analysis with remedies." },
];

const PaidServices = () => (
  <section className="py-20 sm:py-28 px-4 bg-secondary/30" aria-label="Premium services">
    <div className="container mx-auto max-w-5xl text-center">
      <h2 className="text-2xl sm:text-4xl font-bold font-serif">
        Premium <span className="gradient-text">Services</span>
      </h2>
      <p className="mt-4 text-muted-foreground">Take your numerology journey deeper</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 text-center hover:shadow-[var(--shadow-purple)]">
            <Icon className="w-8 h-8 text-accent mx-auto" />
            <h3 className="text-lg font-semibold mt-4 text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PaidServices;
