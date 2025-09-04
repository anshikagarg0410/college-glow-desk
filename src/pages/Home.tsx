import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import collegeBackground from "@/assets/college-background.jpg";
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
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${collegeBackground})` }}
        />
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <GraduationCap className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-left">
                <h1 className="text-6xl md:text-7xl font-bold text-primary mb-2">
                  StudyHub
                </h1>
                <p className="text-lg text-muted-foreground font-medium">IGDTUW</p>
              </div>
            </div>
          </div>
          <p className="text-2xl md:text-3xl text-foreground font-medium mb-12 max-w-4xl mx-auto leading-relaxed">
            Your comprehensive resource center for academic excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/academic">
              <Button size="lg" className="text-xl px-10 py-4 rounded-xl shadow-lg">
                Explore Resources
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="text-xl px-10 py-4 rounded-xl border-2">
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Everything You Need to Excel
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              From academic resources to career opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-academic transition-all duration-500 group cursor-pointer border-2 hover:border-primary/20">
                <Link to={feature.href}>
                  <div className="flex items-start gap-6">
                    <div className={`${feature.color} p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                        {feature.premium && <Crown className="h-5 w-5 text-premium-gold" />}
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              All Branches Covered
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive resources for every engineering discipline
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {branches.map((branch, index) => (
              <Badge key={index} variant="secondary" className="text-xl py-3 px-6 rounded-full font-medium">
                {branch}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-12 bg-gradient-to-r from-premium-gold/15 to-primary/15 border-premium-gold/30 border-2">
            <div className="text-center">
              <Crown className="h-16 w-16 text-premium-gold mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Premium Features</h2>
              <p className="text-2xl text-muted-foreground mb-12">
                Unlock exclusive opportunities for just ₹9
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4 text-lg">
                  <Star className="h-6 w-6 text-premium-gold flex-shrink-0" />
                  <span className="font-medium">Scholarship Opportunities</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <Star className="h-6 w-6 text-premium-gold flex-shrink-0" />
                  <span className="font-medium">Internship Programs</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <Star className="h-6 w-6 text-premium-gold flex-shrink-0" />
                  <span className="font-medium">Hackathon Notifications</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <Star className="h-6 w-6 text-premium-gold flex-shrink-0" />
                  <span className="font-medium">Senior Guidance</span>
                </div>
              </div>

              <Button size="lg" className="bg-premium-gold hover:bg-premium-gold/90 text-black font-semibold text-xl px-12 py-4 rounded-xl shadow-lg">
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