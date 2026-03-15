import { Star } from "lucide-react";

const testimonials = [
  { name: "Priya S.", feedback: "The career insights were spot on! I finally understood why I was stuck and what direction to take. Truly eye-opening.", highlight: "Career clarity" },
  { name: "Rahul K.", feedback: "I was skeptical at first, but the report was incredibly accurate. My lucky numbers actually worked in my favour!", highlight: "Lucky numbers" },
  { name: "Anita M.", feedback: "The relationship insights helped me understand my partner better. We communicate so much better now.", highlight: "Relationship healing" },
  { name: "Deepak T.", feedback: "My name vibration score was off. After the correction suggested by Vivek, my business started growing!", highlight: "Name correction" },
  { name: "Sneha R.", feedback: "The 12-month prediction has been amazingly accurate so far. I feel more prepared for life now.", highlight: "Future prediction" },
  { name: "Amit V.", feedback: "Financial guidance from the report helped me make better investment decisions. Highly recommend!", highlight: "Financial growth" },
];

const Testimonials = () => (
  <section id="testimonials" className="py-20 sm:py-28 px-4" aria-label="Testimonials">
    <div className="container mx-auto max-w-6xl text-center">
      <h2 className="text-2xl sm:text-4xl font-bold font-serif">
        What People Are <span className="gradient-text">Saying</span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {testimonials.map((t) => (
          <div key={t.name} className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-300 text-left">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">"{t.feedback}"</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-semibold text-sm text-foreground">{t.name}</span>
              <span className="text-xs bg-primary/20 text-accent px-2 py-1 rounded-full">{t.highlight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
