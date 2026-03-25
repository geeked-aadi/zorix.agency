import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import zorixLogo from "@/assets/zorix-logo.png";
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "My Work", href: "/portfolio" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        scrolled || open ? "bg-white/80 backdrop-blur border-border/60 shadow-sm" : "bg-transparent border-transparent",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14 md:h-16">
        <a href="#home" className="flex items-center gap-2 z-50 transition-opacity hover:opacity-80">
          <img src={zorixLogo} alt="ZORIX Logo" className="h-14 md:h-16 w-auto mix-blend-multiply" />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <Button size="default" asChild>
            <a href="#cta">Get a Quote</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={[
          "md:hidden absolute left-0 right-0 top-14 z-40 border-t border-border/60 bg-white/80 backdrop-blur overflow-hidden transition-all duration-300 ease-out",
          open ? "opacity-100 translate-y-0 max-h-80" : "opacity-0 -translate-y-2 max-h-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground py-2 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button size="default" className="w-full mt-2" asChild>
            <a href="#cta" onClick={() => setOpen(false)}>
              Get a Quote
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
