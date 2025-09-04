import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import {
  BookOpen,
  Calculator,
  Trophy,
  Briefcase,
  Users,
  Crown,
  GraduationCap,
  Star,
  ArrowRight
} from "lucide-react";

const Home = () => {
  const branches = [
    "CSE-AI", "CSE", "IT", "AI/ML", "ECE-AI", "ECE", "Mathematical & Computing"
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Academic Resources",
      description: "Notes, PDFs, tutorials, PYQs, and YouTube links for all subjects",
      href: "/academic",
      color: "bg-primary"
    },
    {
      icon: Calculator,
      title: "CGPA Calculator",
      description: "Calculate your CGPA easily with our intuitive calculator",
      href: "/cgpa-calculator",
      color: "bg-blue-500"
    },
    {
      icon: Trophy,
      title: "Scholarships",
      description: "Discover scholarship opportunities and application guidance",
      href: "/scholarships",
      color: "bg-premium-gold",
      premium: true
    },
    {
      icon: Briefcase,
      title: "Internships",
      description: "Find internship opportunities and application tips",
      href: "/internships",
      color: "bg-purple-500",
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-primary">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <GraduationCap className="h-16 w-16 text-primary-foreground mx-auto mb-4" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            StudyHub
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Your comprehensive resource center for Technical College studies. 
            Access notes, tutorials, calculators, and premium opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/academic">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Explore Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From academic resources to career opportunities, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-academic transition-all duration-300 group cursor-pointer">
                <Link to={feature.href}>
                  <div className="flex flex-col items-center text-center">
                    <div className={`${feature.color} p-4 rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      {feature.premium && <Crown className="h-4 w-4 text-premium-gold" />}
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              All Branches Covered
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive resources for every engineering discipline
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {branches.map((branch, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
                {branch}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-gradient-to-r from-premium-gold/10 to-primary/10 border-premium-gold/20">
            <div className="text-center">
              <Crown className="h-12 w-12 text-premium-gold mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Premium Features</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Unlock exclusive opportunities for just ₹9
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-premium-gold" />
                  <span>Scholarship Opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-premium-gold" />
                  <span>Internship Programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-premium-gold" />
                  <span>Hackathon Notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-premium-gold" />
                  <span>Senior Guidance</span>
                </div>
              </div>

              <Button size="lg" className="bg-premium-gold hover:bg-premium-gold/90 text-black font-semibold">
                Upgrade to Premium - ₹9
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-primary">StudyHub</h3>
          </div>
          <p className="text-muted-foreground">
            Empowering students with comprehensive academic resources and opportunities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;