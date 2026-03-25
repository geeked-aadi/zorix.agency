import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const CTASection = () => (
  <section id="cta" className="py-24 md:py-32 relative overflow-hidden bg-[#f6f9fc]">
    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <ScrollReveal>
        <div className="max-w-3xl mx-auto text-center p-8 md:p-16 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-border/60 shadow-soft relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="font-display text-5xl md:text-7xl tracking-tight mb-6 text-foreground">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Accelerate</span>?
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed" style={{ textWrap: "pretty" }}>
              Let's build something amazing together. Book a free strategy call and discover how ZORIX can transform your brand.
            </p>
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg shadow-soft hover:shadow-hover transition-all hover:-translate-y-0.5"
              asChild
            >
              <a href="#about">Start Your Project</a>
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection;
