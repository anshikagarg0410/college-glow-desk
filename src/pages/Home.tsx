import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import collegeBackground from "@/assets/image.png";

import {
  BookOpen,
  Calculator,
  Trophy,
  Briefcase,
  Crown,
  ArrowRight,
  GraduationCap
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
      color: "bg-indigo-500",
      iconColor: "text-indigo-500"
    },
    {
      icon: Calculator,
      title: "CGPA Calculator",
      description: "Calculate your CGPA easily with our intuitive calculator",
      href: "/cgpa-calculator",
      color: "bg-blue-500",
      iconColor: "text-blue-500"
    },
    {
      icon: Trophy,
      title: "Scholarships",
      description: "Discover scholarship opportunities and application guidance",
      href: "/scholarships",
      color: "bg-yellow-500",
      iconColor: "text-yellow-500",
      premium: true
    },
    {
      icon: Briefcase,
      title: "Internships",
      description: "Find internship opportunities and application tips",
      href: "/internships",
      color: "bg-purple-500",
      iconColor: "text-purple-500",
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">
        {/* Animated Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-parallax"
          style={{ backgroundImage: `url(${collegeBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/50 dark:to-background/70" />
        
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center z-10">
          <div className="mb-12">
            <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight drop-shadow-md">
              StudyHub
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium drop-shadow-sm">
              Your comprehensive resource center for academic excellence at IGDTUW
            </p>
          </div>
          <p className="text-2xl md:text-3xl text-foreground font-medium mb-12 max-w-4xl mx-auto leading-relaxed">
             Unlock your potential with curated resources, tools, and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/academic">
              <Button size="lg" className="text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Explore Resources
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-24 px-4 bg-muted/20 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              All Branches Covered
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive resources for every engineering discipline at IGDTUW.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {branches.map((branch, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-3 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105">
                {branch}
              </Badge>
            ))}
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

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-academic transition-all duration-500 group cursor-pointer border-2 hover:border-primary/20 rounded-2xl">
                <Link to={feature.href}>
                  <div className="flex items-start gap-6">
                    <div className={`${feature.color} p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                        {feature.premium && <Crown className="h-5 w-5 text-yellow-500" />}
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

      {/* Footer */}
      <footer className="bg-green-50 dark:bg-gray-800 border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white">StudyHub</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            Empowering students with comprehensive academic resources and opportunities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;