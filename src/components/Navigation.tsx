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
  LogIn,
  UserPlus
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: BookOpen },
    { href: "/academic", label: "Academic Resources", icon: BookOpen },
    { href: "/cgpa-calculator", label: "CGPA Calculator", icon: Calculator },
    { href: "/scholarships", label: "Scholarships", icon: Trophy, premium: true },
    { href: "/internships", label: "Internships", icon: Briefcase, premium: true },
    { href: "/hackathons", label: "Hackathons", icon: Users, premium: true },
  ];

  const NavItem = ({ href, label, icon: Icon, premium = false }: any) => {
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
        {premium && <Crown className="h-3 w-3 text-premium-gold" />}
      </Link>
    );
  };

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">StudyHub</h1>
              <p className="text-xs text-muted-foreground">Technical College Resources</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <LogIn className="h-4 w-4 mr-2" />
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="default" size="sm" className="hidden sm:flex">
                <UserPlus className="h-4 w-4 mr-2" />
                Sign Up
              </Button>
            </Link>

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
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-col gap-2">
                      <Link to="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start">
                          <LogIn className="h-4 w-4 mr-2" />
                          Login
                        </Button>
                      </Link>
                      <Link to="/signup" onClick={() => setIsOpen(false)}>
                        <Button variant="default" className="w-full justify-start">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;