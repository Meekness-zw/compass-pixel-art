import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElements from "@/components/FloatingElements";

const Home = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <FloatingElements />
      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-12 items-center max-w-6xl mx-auto">
          {/* Intro */}
          <div className="space-y-8 animate-fade-in text-left">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.32em] uppercase text-muted-foreground">
                Compassion Kaboti
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight font-serif">
                Product designer for calm interfaces.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                A product designer crafting clean, minimal interfaces with a focus on typography, composition,
                and calm, considered experiences for brands and products.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/projects">
              <Button 
                size="lg"
                  className="bg-primary hover:bg-primary/90 text-background px-8 shadow-[var(--shadow-glow-primary)] hover:scale-[1.02] transition-all duration-300 rounded-none"
              >
                  View portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                  variant="outline"
                  className="border border-white/40 hover:bg-white/40 rounded-none"
              >
                  Let's collaborate
              </Button>
            </Link>
          </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 max-w-md">
              {[
                { number: "1", label: "Year designing" },
                { number: "10+", label: "Projects completed" },
                { number: "10+", label: "Happy clients" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <div className="text-xs uppercase tracking-[0.24em] text-muted-foreground mb-1">
                    {stat.label}
                  </div>
                  <div className="text-2xl md:text-3xl font-semibold text-foreground">
                    {stat.number}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero preview grid with aesthetic project images */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: "120ms" }}>
            <div className="grid grid-rows-3 gap-4 h-[420px]">
              <div className="row-span-2 overflow-hidden border border-border rounded-none">
                <img
                  src="/poster ad.png"
                  alt="Poster ad project"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden border border-border rounded-none">
                  <img
                    src="/Linkedin banner.png"
                    alt="LinkedIn banner project"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden border border-border rounded-none">
                  <img
                    src="/flora.png"
                    alt="Flora branding project"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground text-right">
              Selected work &nbsp;—&nbsp; interface & brand projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
