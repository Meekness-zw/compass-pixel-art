import FloatingElements from "@/components/FloatingElements";

const ProjectsPage = () => {
  const projects = [
    {
      title: "LinkedIn Banner",
      fileName: "Linkedin banner.png",
      image: "/Linkedin banner.png",
    },
    {
      title: "New Logo",
      fileName: "NEW LOGO.png",
      image: "/NEW LOGO.png",
    },
    {
      title: "Logo Combo",
      fileName: "logo combo.png",
      image: "/logo combo.png",
    },
    {
      title: "TAAS Guidelines",
      fileName: "TAAS GUIDELINES.png",
      image: "/TAAS GUIDELINES.png",
      link: "https://drive.google.com/file/d/1q_IZO3M9PCjOYfpOuPd4le2Zkv1LO7_h/view?usp=drive_link",
    },
    {
      title: "Flora",
      fileName: "flora.png",
      image: "/flora.png",
    },
    {
      title: "Elora",
      fileName: "elora.png",
      image: "/elora.png",
    },
    {
      title: "Poster Ad",
      fileName: "poster ad.png",
      image: "/poster ad.png",
    },
    {
      title: "Brochure",
      fileName: "BROCHURE.png",
      image: "/BROCHURE.png",
    },
    {
      title: "Poster Concept 01",
      fileName: "POSTER_1.png",
      image: "/POSTER_1.png",
    },
  ];

  return (
    <div className="min-h-screen relative pt-32 pb-20">
      <FloatingElements />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-xs tracking-[0.28em] uppercase text-muted-foreground mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 font-serif">
              Selected project files.
            </h1>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-card border border-border overflow-hidden hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow-primary)] animate-fade-in rounded-none"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent px-4 py-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/75">
                    <span>{project.title}</span>
                    <span>{project.fileName}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.fileName}
                  </p>
                  {"link" in project && project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-primary hover:opacity-80"
                    >
                      View project →
                    </a>
                  ) : null}
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
