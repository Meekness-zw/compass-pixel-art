import FloatingElements from "@/components/FloatingElements";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Basketball Training",
      fileName: "Sports Equipment Galore",
      image: "/projects/basketball-training.jpg",
    },
    {
      title: "Home Pool Tables",
      fileName: "Kabo Billiards",
      image: "/projects/kabo-home-pool-tables.jpg",
    },
    {
      title: "Quality Sports Gear",
      fileName: "Sports Equipment Galore",
      image: "/projects/sports-galore-price-list.jpg",
    },
    {
      title: "New Design Release",
      fileName: "Kabo Billiards",
      image: "/projects/kabo-soccer-table-release.jpg",
    },
    {
      title: "Built to Perform",
      fileName: "Sports Equipment Galore",
      image: "/projects/sports-galore-basketballs.jpg",
    },
    {
      title: "Every Sport. Every Game.",
      fileName: "Sports Equipment Galore",
      image: "/projects/sports-galore-every-sport.jpg",
    },
    {
      title: "Delivered. On Time.",
      fileName: "Sports Equipment Galore",
      image: "/projects/sports-galore-delivered.jpg",
    },
    {
      title: "Gear Up. Play Hard.",
      fileName: "Sports Equipment Galore",
      image: "/projects/sports-galore-gear-up.jpg",
    },
    {
      title: "Every Sport. Every Player.",
      fileName: "Sports Equipment Galore",
      image: "/projects/sports-galore-every-player.jpg",
    },
    {
      title: "Your Game. Our Gear.",
      fileName: "Sports Equipment Galore",
      image: "/projects/sports-galore-racket-sports.jpg",
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
                    className="aspect-[3/4] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.fileName}
                  </p>
                  <a
                    href={project.image}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-primary hover:opacity-80"
                  >
                    View full design →
                  </a>
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
