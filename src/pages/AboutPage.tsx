import { Palette, TrendingUp, Camera } from "lucide-react";
import FloatingElements from "@/components/FloatingElements";

const AboutPage = () => {
  const interests = [
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Creating intuitive and beautiful digital experiences that users love"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic thinking meets creative execution for brand growth"
    },
    {
      icon: Camera,
      title: "Fashion & Photography",
      description: "Exploring creativity through different artistic lenses"
    }
  ];

  return (
    <div className="min-h-screen relative pt-32 pb-20">
      <FloatingElements />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="space-y-8 mb-20">
            <div className="backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-8 md:p-12 shadow-[var(--shadow-elevation)] animate-fade-in">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                I'm a passionate <span className="text-primary font-semibold">UX/UI Designer</span> who 
                enjoys creating beautiful, functional, and user-centered digital experiences. I love 
                transforming ideas into designs that not only look good but also solve real problems for people.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                With a background in <span className="text-accent font-semibold">Product Design</span> and 
                a crash course in Digital Marketing, I bring a unique blend of creativity, strategy, and 
                market insight into every project I work on.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm motivated by curiosity and the joy of making things simple, useful, and enjoyable. 
                Outside of design, I also enjoy fashion designing and exploring my creativity through 
                photography—both allow me to see the world from fresh perspectives.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-[var(--glass-border)] rounded-2xl p-8 md:p-12 shadow-[var(--shadow-elevation)] animate-fade-in">
              <blockquote className="text-xl md:text-2xl italic text-foreground leading-relaxed text-center">
                "My goal is to keep growing as a designer while helping brands and businesses 
                connect with their audiences in meaningful and impactful ways."
              </blockquote>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className="group backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-glow-primary)] animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
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
