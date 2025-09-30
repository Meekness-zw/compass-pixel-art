import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElements from "@/components/FloatingElements";

const ProjectsPage = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      category: "UX/UI Design",
      description: "Complete redesign of checkout flow reducing cart abandonment by 35% through intuitive interface and streamlined user journey.",
      tags: ["User Research", "Wireframing", "Prototyping", "A/B Testing"],
      color: "from-primary to-accent"
    },
    {
      title: "Mobile Banking Application",
      category: "Product Design",
      description: "Secure, user-friendly mobile banking experience focused on accessibility and trust for diverse demographics.",
      tags: ["Mobile Design", "Accessibility", "User Testing", "Security"],
      color: "from-secondary to-primary"
    },
    {
      title: "SaaS Analytics Dashboard",
      category: "UI Design",
      description: "Data-rich dashboard with complex information architecture made simple through thoughtful visual hierarchy.",
      tags: ["Data Visualization", "Information Architecture", "UI Design"],
      color: "from-accent to-secondary"
    },
    {
      title: "Brand Design System",
      category: "Design System",
      description: "Comprehensive design system enabling consistent experiences across multiple products and platforms.",
      tags: ["Design Tokens", "Component Library", "Documentation"],
      color: "from-primary via-secondary to-accent"
    },
    {
      title: "Social Media App",
      category: "Mobile UX",
      description: "Engaging social platform with focus on user interaction patterns and community building features.",
      tags: ["Mobile UX", "Social Features", "Engagement"],
      color: "from-accent to-primary"
    },
    {
      title: "Healthcare Portal",
      category: "Web Application",
      description: "Patient-focused healthcare portal simplifying appointment booking and medical record access.",
      tags: ["Healthcare", "Accessibility", "HIPAA Compliance"],
      color: "from-secondary to-accent"
    }
  ];

  return (
    <div className="min-h-screen relative pt-32 pb-20">
      <FloatingElements />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects showcasing my approach to solving design challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--shadow-glow-primary)] animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-white/30 rounded-full animate-spin-slow" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-md border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                  >
                    View Case Study
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
