import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 border-b border-border/70">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-xs md:text-sm font-semibold tracking-[0.32em] uppercase text-foreground/70 hover:text-foreground transition-colors"
          >
            Compassion&nbsp;Kaboti
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs tracking-[0.24em] uppercase transition-all duration-300 relative ${
                  isActive(link.path)
                    ? "text-foreground"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 h-[1px] bg-foreground transition-all duration-300 ${
                    isActive(link.path) ? "w-full opacity-100" : "w-0 opacity-40 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 animate-slide-in">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive(link.path) ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
