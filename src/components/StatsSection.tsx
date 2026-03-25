import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "250%", label: "Avg. Growth in Organic Traffic" },
  { value: "14×", label: "Return on Ad Spend" },
  { value: "0.8s", label: "Average Page Load Speed" },
  { value: "94%", label: "Client Retention Rate" },
];

const StatsSection = () => (
  <section className="py-24 md:py-32 relative overflow-hidden border-t border-border/50 bg-[#f6f9fc]">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <ScrollReveal className="mb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-border/60 text-xs font-medium text-primary mb-6 shadow-none">
          <span className="w-2 h-2 rounded-full bg-primary" />
          PERFORMANCE
        </div>
        <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-8 text-foreground">
          The Numbers Speak <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">For Themselves</span>
        </h2>
        <Button size="lg" className="rounded-full shadow-soft hover:shadow-hover transition-all" asChild>
          <a href="#portfolio">See Case Studies</a>
        </Button>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <ScrollReveal key={s.label} delay={i * 80}>
            <div className="relative group bg-white/60 backdrop-blur-xl border border-border/60 p-7 rounded-3xl text-center transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft hover:border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
              <p className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {s.value}
              </p>
              <p className="text-sm font-medium text-muted-foreground leading-snug uppercase tracking-wider">{s.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
