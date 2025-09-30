import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "E-Commerce Experience",
      category: "UX/UI Design",
      description: "Redesigned the checkout flow, reducing cart abandonment by 35% through intuitive interface design and streamlined user journey.",
      tags: ["User Research", "Wireframing", "Prototyping"]
    },
    {
      title: "Mobile Banking App",
      category: "Product Design",
      description: "Created a secure, user-friendly mobile banking experience focused on accessibility and trust for diverse user demographics.",
      tags: ["Mobile Design", "Accessibility", "User Testing"]
    },
    {
      title: "SaaS Dashboard",
      category: "UI Design",
      description: "Designed a data-rich dashboard with complex information architecture made simple through thoughtful visual hierarchy.",
      tags: ["Data Visualization", "Information Architecture", "UI Design"]
    },
    {
      title: "Brand Identity System",
      category: "Design System",
      description: "Developed a comprehensive design system enabling consistent experiences across multiple products and platforms.",
      tags: ["Design Tokens", "Component Library", "Documentation"]
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A selection of projects showcasing my approach to solving design challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group transition-all duration-700 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-elegant h-full flex flex-col">
                  <div className="h-48 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 border-4 border-primary/30 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                      <span className="text-sm font-medium text-accent">{project.category}</span>
                      <h3 className="text-2xl font-bold mt-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                    >
                      View Case Study
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
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

export default Projects;
