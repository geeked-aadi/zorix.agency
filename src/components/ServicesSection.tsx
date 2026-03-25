import ScrollReveal from "@/components/ScrollReveal";
import { BarChart3, Globe, Lightbulb, Mail, Megaphone, MonitorSmartphone, Search, ShoppingBag } from "lucide-react";

const services = [
  { icon: Lightbulb, title: "Digital Strategy & Planning", desc: "Custom blueprints that align your marketing with measurable business goals." },
  { icon: Megaphone, title: "Social Media Marketing", desc: "Engage audiences across platforms with campaigns that drive real conversations." },
  { icon: MonitorSmartphone, title: "Website Design & Development", desc: "High-converting, responsive websites crafted for speed and user experience." },
  { icon: Search, title: "SEO Optimization", desc: "Rank higher, attract qualified traffic, and dominate search results organically." },
  { icon: Globe, title: "Content & Video Marketing", desc: "Compelling stories and visual content that captivate and convert your audience." },
  { icon: Mail, title: "Email Marketing", desc: "Personalized campaigns that nurture leads and maximize customer lifetime value." },
  { icon: BarChart3, title: "Web Analytics", desc: "Turn raw data into actionable insights with advanced tracking and reporting." },
  { icon: ShoppingBag, title: "Shopify Development", desc: "End-to-end Shopify stores built for scale, performance, and seamless checkout." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-[#f6f9fc]">
    {/* Decorative background elements */}
    <div className="absolute top-48 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[110px] pointer-events-none" />
    <div className="absolute bottom-24 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <ScrollReveal className="mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-border/60 text-xs font-medium text-primary shadow-none mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          WHAT WE DO
        </div>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight mb-6 text-foreground">
          Performance-Driven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Services</span>
        </h2>
      </ScrollReveal>

      {/* Horizontal scrollable tabs */}
      <ScrollReveal delay={80} className="flex flex-wrap gap-3 mb-12 border-b border-border/50 pb-6">
        {["Digital", "Strategy", "Creative", "SEO", "Analytics", "E-Commerce"].map((tab) => (
          <span
            key={tab}
            className="px-4 py-2 text-sm font-medium text-muted-foreground border border-border/50 rounded-full hover:bg-primary/5 hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer bg-white/60"
          >
            {tab}
          </span>
        ))}
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 60}>
            <div className="group relative bg-white/60 p-6 h-full rounded-2xl border border-border/60 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/20 hover:bg-white shadow-soft cursor-pointer">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-all duration-300">
                <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl tracking-tight mb-3 text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
