import { useEffect, useRef, useState } from "react";
import { Palette, TrendingUp, Camera } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const interests = [
    {
      icon: Palette,
      title: "UX/UI Design",
      description: "Creating intuitive and beautiful digital experiences"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic thinking meets creative execution"
    },
    {
      icon: Camera,
      title: "Fashion & Photography",
      description: "Exploring creativity through different lenses"
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm a passionate <span className="text-primary font-semibold">UX/UI Designer</span> who 
                enjoys creating beautiful, functional, and user-centered digital experiences. I love 
                transforming ideas into designs that not only look good but also solve real problems for people.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                With a background in <span className="text-secondary font-semibold">Product Design</span> and 
                a crash course in Digital Marketing, I bring a unique blend of creativity, strategy, and 
                market insight into every project I work on.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm motivated by curiosity and the joy of making things simple, useful, and enjoyable.
              </p>
            </div>

            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-card p-8 rounded-2xl border border-border shadow-elegant">
                  <blockquote className="text-xl italic text-foreground/80 leading-relaxed">
                    "My goal is to keep growing as a designer while helping brands and businesses 
                    connect with their audiences in meaningful and impactful ways."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div
                key={interest.title}
                className={`group transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elegant hover:-translate-y-2">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <interest.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
