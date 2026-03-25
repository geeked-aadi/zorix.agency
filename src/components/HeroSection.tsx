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

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
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
                <a href="/portfolio">View Portfolio</a>
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: Product-like mockup */}
        <ScrollReveal delay={120}>
          <div className="relative w-full flex items-center justify-center">
            <div className="absolute inset-0 -z-10 w-full h-full rounded-[3rem] bg-gradient-to-br from-primary/10 via-purple-500/10 to-transparent blur-2xl" />

            <div className="w-full max-w-md m-4 md:m-0 rounded-[2.5rem] border border-border/70 bg-white/65 backdrop-blur p-6 md:p-8 shadow-soft transition-transform duration-300 hover:-translate-y-0.5">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Growth Snapshot</h3>
                  <p className="text-sm text-muted-foreground">What we optimize every week</p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary">
                  <TrendingUp size={20} />
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-border/60 bg-white/70 p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center text-emerald-600">
                    <Target size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Conversion</p>
                    <p className="text-2xl font-bold text-foreground">4.8%</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-white/70 p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center text-blue-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Active Users</p>
                    <p className="text-2xl font-bold text-foreground">12.4k</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-white/70 p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/15 flex items-center justify-center text-purple-600">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Campaigns</p>
                    <p className="text-2xl font-bold text-foreground">18 Active</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border/60 bg-white/60 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last 7 days</span>
                  <span className="font-semibold text-foreground">+124.5%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-primary/10 overflow-hidden">
                  <div className="h-full w-2/3 bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-300 hover:w-full" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
