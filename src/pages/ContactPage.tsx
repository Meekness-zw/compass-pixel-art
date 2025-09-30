import { Mail, Linkedin, Github, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElements from "@/components/FloatingElements";

const ContactPage = () => {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:hello@compasionkaboti.com", color: "hover:text-primary" },
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-accent" },
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-secondary" },
    { icon: Twitter, label: "Twitter", href: "#", color: "hover:text-primary" }
  ];

  return (
    <div className="min-h-screen relative pt-32 pb-20">
      <FloatingElements />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
                Let's Create Together
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Card */}
            <div className="backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-glow-primary)] animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Get in Touch</h2>
              <div className="space-y-4">
                <Button 
                  className="w-full justify-start bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-glow-primary)] transition-all duration-300 hover:scale-105"
                  onClick={() => window.location.href = 'mailto:hello@compasionkaboti.com'}
                >
                  <Mail className="mr-3 w-5 h-5" />
                  hello@compasionkaboti.com
                </Button>
                
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">
                    Or find me on social media:
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className={`w-12 h-12 rounded-xl border-2 border-border backdrop-blur-sm flex items-center justify-center text-muted-foreground ${link.color} hover:border-current transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                      >
                        <link.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="backdrop-blur-xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-[var(--glass-border)] rounded-2xl p-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Quick Info</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="text-foreground font-medium">Open to Remote Work</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Availability</p>
                  <p className="text-foreground font-medium">Open for Projects</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                  <p className="text-foreground font-medium">Within 24 hours</p>
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-2 text-accent">
                    <Send className="w-4 h-4" />
                    <span className="text-sm font-medium">Currently accepting new projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl p-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Have a project in mind?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can work together to bring your vision to life with thoughtful design and user experience.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground shadow-[var(--shadow-glow-primary)] hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = 'mailto:hello@compasionkaboti.com'}
            >
              <Mail className="mr-2 w-5 h-5" />
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-12 border-t border-border relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center text-muted-foreground">
            <p className="text-sm">
              © {new Date().getFullYear()} Compasion Kaboti. Crafted with passion & precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
