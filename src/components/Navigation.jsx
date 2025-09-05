import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  Menu,
  X,
  Calculator,
  Trophy,
  Briefcase,
  Code
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Academic", href: "/academic", icon: BookOpen },
    { name: "CGPA Calculator", href: "/cgpa-calculator", icon: Calculator },
    { name: "Scholarships", href: "/scholarships", icon: Trophy },
    { name: "Internships", href: "/internships", icon: Briefcase },
    { name: "Hackathons", href: "/hackathons", icon: Code },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            StudyHub
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors w-full",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {item.name}
                </Link>
              );
            })}
            
            <div className="flex flex-col space-y-2 pt-4 border-t border-border">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Login
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsOpen(false)}>
                <Button className="w-full justify-start">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;