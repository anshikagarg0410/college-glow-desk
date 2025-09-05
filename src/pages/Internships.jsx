import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Briefcase, MapPin, Clock, IndianRupee, ExternalLink, Lock, Building } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      duration: "3 months",
      stipend: "₹15,000/month",
      type: "Full-time",
      skills: ["React", "Node.js", "Python"],
      posted: "2 days ago"
    },
    {
      title: "Data Science Intern",
      company: "Analytics Pro",
      location: "Mumbai, India",
      duration: "6 months",
      stipend: "₹20,000/month",
      type: "Remote",
      skills: ["Python", "Machine Learning", "SQL"],
      posted: "1 week ago"
    },
    {
      title: "AI Research Intern",
      company: "Innovation Labs",
      location: "Hyderabad, India",
      duration: "4 months",
      stipend: "₹25,000/month",
      type: "Hybrid",
      skills: ["TensorFlow", "PyTorch", "Computer Vision"],
      posted: "3 days ago"
    },
    {
      title: "Frontend Developer Intern",
      company: "WebTech Studios",
      location: "Delhi, India",
      duration: "3 months",
      stipend: "₹12,000/month",
      type: "Full-time",
      skills: ["React", "JavaScript", "CSS"],
      posted: "5 days ago"
    }
  ];

  const InternshipCard = ({ internship }) => (
    <Card className="p-6 hover:shadow-academic transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">{internship.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <Building className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{internship.company}</span>
          </div>
          <Badge variant="secondary">{internship.type}</Badge>
        </div>
        <Briefcase className="h-6 w-6 text-primary" />
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2">
          <IndianRupee className="h-4 w-4 text-green-600" />
          <span className="font-semibold">{internship.stipend}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{internship.location}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{internship.duration} • Posted {internship.posted}</span>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-2">Required Skills:</p>
          <div className="flex flex-wrap gap-1">
            {internship.skills.map((skill, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button className="flex-1">
          Apply Now
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
        <Button variant="outline">
          Save
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Briefcase className="h-10 w-10 text-primary" />
              <Crown className="h-6 w-6 text-premium-gold" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Internships</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            Find the perfect internship to kickstart your career
          </p>
          <Badge variant="outline" className="text-premium-gold border-premium-gold">
            <Crown className="h-4 w-4 mr-2" />
            Premium Feature
          </Badge>
        </div>

        {/* Premium Notice */}
        <Card className="p-8 mb-8 bg-gradient-to-r from-premium-gold/10 to-primary/10 border-premium-gold/20">
          <div className="text-center">
            <Lock className="h-12 w-12 text-premium-gold mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Unlock Internship Opportunities</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Access exclusive internship listings, application tracking, and career guidance for just ₹9
            </p>
            <Button size="lg" className="bg-premium-gold hover:bg-premium-gold/90 text-black font-semibold">
              Upgrade to Premium - ₹9
            </Button>
          </div>
        </Card>

        {/* Internships Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 opacity-60">
          {internships.map((internship, index) => (
            <InternshipCard key={index} internship={internship} />
          ))}
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Internship Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exclusive Listings</h3>
              <p className="text-muted-foreground">
                Access to premium internships not available elsewhere
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Clock className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Application Tracking</h3>
              <p className="text-muted-foreground">
                Keep track of your applications and their status
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <ExternalLink className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Career Guidance</h3>
              <p className="text-muted-foreground">
                Resume reviews and interview preparation tips
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;