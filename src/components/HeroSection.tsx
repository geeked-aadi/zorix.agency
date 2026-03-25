import { PhoneCall, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden bg-[#f6f9fc]">
      {/* Subtle animated gradient blobs (kept minimal) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-gradient-to-r from-cyan-200/40 via-blue-200/25 to-purple-200/20 blur-[90px] opacity-60 motion-safe:animate-pulse-glow" />
        <div
          className="absolute -bottom-24 -left-24 w-[32rem] h-[32rem] rounded-full bg-gradient-to-r from-indigo-200/30 via-cyan-200/20 to-transparent blur-[110px] opacity-50 motion-safe:animate-float-delayed"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left: Text Content */}
        <ScrollReveal>
          <div className="flex flex-col gap-8 text-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit border border-border/60 bg-white/60 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wider text-primary uppercase">ZORIX - Next-Gen Solutions</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.06]">
              Taking Your Business To{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
                New Heights!
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              We build precision-crafted funnels, stunning experiences, and scalable growth systems that deliver measurable results.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="tel:7483147208"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:opacity-90 w-full sm:w-auto"
              >
                <PhoneCall size={18} />
                Contact Sales
              </a>

              <Button size="lg" variant="outline" className="rounded-full px-6 w-full sm:w-auto" asChild>
                <a href="/#portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>


      </div>
    </section>
  );
};

export default HeroSection;
