import { Palette, TrendingUp, Camera } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";

const AboutPage = () => {
  const interests = [
    {
      icon: Camera,
      title: "Visual Storytelling",
      description: "Using layout, imagery, and motion to tell calm, memorable stories for products and brands."
    },
    {
      icon: Palette,
      title: "Visual Design",
      description: "Clean, minimal layouts and art direction that support the story in each image."
    },
    {
      icon: Camera,
      title: "Fashion & Style",
      description: "Working with styling, fabric, and texture to create refined, editorial moments."
    }
  ];

  return (
    <div className="min-h-screen relative pt-32 pb-20">
      <FloatingElements />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-xs tracking-[0.28em] uppercase text-muted-foreground mb-3">
              Behind the work
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 font-serif">
              A quiet eye for detail.
            </h1>
          </div>

          <div className="space-y-8 mb-20">
            <div className="backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-8 md:p-12 shadow-[var(--shadow-elevation)] animate-fade-in">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                I'm a product and visual designer who cares about quiet, considered interfaces. My work focuses
                on clear layouts, thoughtful typography, and small details that say a lot without feeling loud.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                A background in <span className="text-accent font-semibold">product design and digital marketing</span>{" "}
                helps me understand how design lives in the real world – in products, campaigns, and brand systems.
                That mix of strategy and creativity shapes how I approach every project.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                Outside of client work, I explore fashion, textiles, and everyday scenes. Those influences show up in my
                design through texture, rhythm, and the way light and space are used on the screen.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-[var(--glass-border)] rounded-2xl p-8 md:p-12 shadow-[var(--shadow-elevation)] animate-fade-in">
              <blockquote className="text-xl md:text-2xl italic text-foreground leading-relaxed text-center">
                "My goal is to create interfaces and visuals that feel calm, intentional, and human – work that clients
                are proud to share, and people feel comfortable using every day."
              </blockquote>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="group backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow-primary)] animate-fade-in rounded-none"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 rounded-none">
                  <interest.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
