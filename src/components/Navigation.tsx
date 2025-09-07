import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  BookOpen,
  Calculator,
  Crown,
  Trophy,
  Briefcase,
  Users,
  Menu,
  GraduationCap,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: BookOpen },
    { href: "/academic", label: "Academic Resources", icon: BookOpen },
    { href: "/cgpa-calculator", label: "CGPA Calculator", icon: Calculator },
    { href: "/scholarships", label: "Scholarships", icon: Trophy },
    { href: "/internships", label: "Internships", icon: Briefcase },
    { href: "/hackathons", label: "Hackathons", icon: Users },
  ];

  const NavItem = ({ href, label, icon: Icon }: any) => {
    const isActive = location.pathname === href;

    return (
      <Link
        to={href}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
          isActive
            ? "bg-primary text-primary-foreground shadow-academic"
            : "hover:bg-accent hover:text-accent-foreground"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <Icon className="h-4 w-4" />
        <span className="font-medium">{label}</span>
      </Link>
    );
  };

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Site Title */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">StudyHub</h1>
              <p className="text-xs text-muted-foreground">
                Technical College Resources
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 flex-grow justify-center">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  <NavItem key={item.href} {...item} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;