import FloatingElements from "@/components/FloatingElements";

const SkillsPage = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "Adobe Creative Suite", "Principle", "Framer", "InVision"]
    },
    {
      title: "Core Skills",
      skills: ["User Research", "Wireframing", "Prototyping", "User Testing", "Information Architecture", "Interaction Design", "Usability Testing"]
    },
    {
      title: "Strategy & Marketing",
      skills: ["Design Thinking", "Digital Marketing", "Brand Strategy", "User Journey Mapping", "A/B Testing", "Analytics", "SEO"]
    },
    {
      title: "Development",
      skills: ["HTML/CSS", "Responsive Design", "Design Systems", "Version Control", "Collaboration Tools"]
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Leadership", "Client Management", "Presentation", "Critical Thinking"]
    },
    {
      title: "Creative",
      skills: ["Fashion Design", "Visual Design", "Branding", "Typography", "Color Theory", "Art Direction"]
    }
  ];

  return (
    <div className="min-h-screen relative pt-32 pb-20">
      <FloatingElements />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-primary)] animate-fade-in rounded-none"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-1 h-10 bg-gradient-to-b from-primary to-accent mr-4" />
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="group relative px-4 py-2 bg-muted/30 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 text-foreground border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-default animate-fade-in rounded-none"
                      style={{ 
                        animationDelay: `${index * 75 + skillIndex * 25}ms` 
                      }}
                    >
                      <span className="relative z-10">{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Experience Timeline */}
          <div className="mt-20 backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] p-8 md:p-12 animate-fade-in rounded-none">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Experience Highlights
            </h2>
            <div className="space-y-6">
              {[
                { years: "2020 - Present", role: "Senior UX/UI Designer", company: "Digital Agency" },
                { years: "2018 - 2020", role: "Product Designer", company: "Tech Startup" },
                { years: "2016 - 2018", role: "UI Designer", company: "Creative Studio" }
              ].map((exp, index) => (
                <div 
                  key={exp.years}
                  className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center border-l-2 border-primary/30 pl-6 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-accent font-medium whitespace-nowrap">
                    {exp.years}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h4>
                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
