import { useEffect, useRef, useState } from "react";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
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

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:hello@compasionkaboti.com" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center transition-all duration-700 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full mb-8"></div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className={`mb-12 transition-all duration-700 delay-200 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = 'mailto:hello@compasionkaboti.com'}
              >
                <Mail className="mr-2 w-5 h-5" />
                Get In Touch
              </Button>
            </div>

            <div className={`flex justify-center gap-6 transition-all duration-700 delay-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-12 h-12 rounded-full border-2 border-border hover:border-primary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  style={{ transitionDelay: `${300 + index * 50}ms` }}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © {new Date().getFullYear()} Compasion Kaboti. Designed with passion & attention to detail.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
