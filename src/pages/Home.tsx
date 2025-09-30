import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElements from "@/components/FloatingElements";

const Home = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Available for projects</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-tight">
            <span className="block text-foreground">Compasion</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-pulse-glow">
              Kaboti
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            UX/UI Designer crafting digital experiences that blend beauty with purpose
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/projects">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow-primary)] hover:scale-105 transition-all duration-300"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm"
              >
                Let's Connect
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "50+", label: "Projects Completed" },
              { number: "30+", label: "Happy Clients" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
