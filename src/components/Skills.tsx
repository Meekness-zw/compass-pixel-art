import { useEffect, useRef, useState } from "react";

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite", "Principle", "Framer"]
    },
    {
      title: "Core Skills",
      skills: ["User Research", "Wireframing", "Prototyping", "User Testing", "Information Architecture", "Interaction Design"]
    },
    {
      title: "Strategy",
      skills: ["Design Thinking", "Digital Marketing", "Brand Strategy", "User Journey Mapping", "A/B Testing", "Analytics"]
    },
    {
      title: "Collaboration",
      skills: ["Cross-functional Teams", "Client Communication", "Agile Methodology", "Design Systems", "Documentation", "Stakeholder Management"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className={`transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg h-full">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full mr-4"></span>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-muted hover:bg-primary/10 text-foreground rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default"
                        style={{ 
                          animationDelay: `${isVisible ? (index * 100 + skillIndex * 50) : 0}ms` 
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
