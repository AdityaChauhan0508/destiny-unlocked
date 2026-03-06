const HowItWorks = () => (
  <section id="how-it-works" className="py-20 sm:py-28 px-4" aria-label="How numerology works">
    <div className="container mx-auto max-w-3xl text-center">
      <h2 className="text-2xl sm:text-4xl font-bold font-serif">
        How <span className="gradient-text">Numerology</span> Works
      </h2>
      <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
        Every letter in your name and every digit in your birth date carries a specific vibration.
        Numerology decodes these vibrations to reveal your personality traits, life purpose, hidden
        talents, and future cycles. By understanding these patterns, you gain powerful insight into
        why you experience certain events — and how to align with your highest potential.
      </p>
      <div className="grid sm:grid-cols-3 gap-6 mt-12">
        {[
          { step: "01", title: "Your Name", desc: "Each letter vibrates at a unique frequency that shapes your identity." },
          { step: "02", title: "Your Birth Date", desc: "Your date of birth reveals your life path, destiny, and karmic lessons." },
          { step: "03", title: "Your Blueprint", desc: "Combined, they create a personal map for career, love, health & growth." },
        ].map((s) => (
          <div key={s.step} className="p-6 rounded-xl bg-card border border-border/50 text-left">
            <span className="text-3xl font-bold gradient-text font-serif">{s.step}</span>
            <h3 className="text-lg font-semibold mt-3 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
