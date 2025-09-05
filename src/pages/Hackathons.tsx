import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, Calendar, Trophy, MapPin, ExternalLink, Lock, Code, Gift } from "lucide-react";

const Hackathons = () => {
  const hackathons = [
    {
      title: "Smart India Hackathon 2024",
      organizer: "Government of India",
      date: "March 20-22, 2024",
      location: "Multiple Cities",
      prizes: "₹10 Lakhs",
      participants: "500+ teams",
      theme: "AI for Social Good",
      status: "Registrations Open",
      difficulty: "Advanced"
    },
    {
      title: "HackTech Innovation Challenge",
      organizer: "TechCorp",
      date: "April 15-16, 2024",
      location: "Bangalore",
      prizes: "₹5 Lakhs",
      participants: "200+ teams",
      theme: "Fintech Solutions",
      status: "Early Bird",
      difficulty: "Intermediate"
    },
    {
      title: "CodeFest Hackathon",
      organizer: "Engineering College",
      date: "May 10-11, 2024",
      location: "Online",
      prizes: "₹2 Lakhs",
      participants: "150+ teams",
      theme: "Web3 & Blockchain",
      status: "Coming Soon",
      difficulty: "Beginner"
    },
    {
      title: "Green Tech Hackathon",
      organizer: "EcoTech Foundation",
      date: "June 5-7, 2024",
      location: "Delhi",
      prizes: "₹8 Lakhs",
      participants: "300+ teams",
      theme: "Sustainable Technology",
      status: "Registrations Open",
      difficulty: "Advanced"
    }
  ];

  const HackathonCard = ({ hackathon }: { hackathon: any }) => {
    const getStatusColor = (status: string) => {
      switch (status) {
        case "Registrations Open": return "bg-green-100 text-green-700";
        case "Early Bird": return "bg-blue-100 text-blue-700";
        case "Coming Soon": return "bg-yellow-100 text-yellow-700";
        default: return "bg-gray-100 text-gray-700";
      }
    };

    const getDifficultyColor = (difficulty: string) => {
      switch (difficulty) {
        case "Beginner": return "border-green-500 text-green-600";
        case "Intermediate": return "border-blue-500 text-blue-600";
        case "Advanced": return "border-red-500 text-red-600";
        default: return "border-gray-500 text-gray-600";
      }
    };

    return (
      <Card className="p-6 hover:shadow-academic transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">{hackathon.title}</h3>
            <p className="text-muted-foreground mb-2">{hackathon.organizer}</p>
            <div className="flex gap-2 mb-2">
              <Badge className={getStatusColor(hackathon.status)}>
                {hackathon.status}
              </Badge>
              <Badge variant="outline" className={getDifficultyColor(hackathon.difficulty)}>
                {hackathon.difficulty}
              </Badge>
            </div>
          </div>
          <Code className="h-6 w-6 text-primary" />
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-premium-gold" />
            <span className="font-semibold">{hackathon.prizes} Prize Pool</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{hackathon.date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{hackathon.location}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground">{hackathon.participants} expected</span>
          </div>
          
          <div>
            <p className="text-sm text-muted-foreground mb-1">Theme:</p>
            <Badge variant="secondary">{hackathon.theme}</Badge>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button className="flex-1">
            Register Now
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
          <Button variant="outline">
            Details
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Code className="h-10 w-10 text-primary" />
              <Crown className="h-6 w-6 text-premium-gold" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Hackathons</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            Participate in exciting hackathons and showcase your skills
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
            <h2 className="text-2xl font-bold mb-4">Unlock Hackathon Opportunities</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Get early access to hackathons, team formation help, and submission guidance for just ₹9
            </p>
            <Button size="lg" className="bg-premium-gold hover:bg-premium-gold/90 text-black font-semibold">
              Upgrade to Premium - ₹9
            </Button>
          </div>
        </Card>

        {/* Hackathons Grid */}
        <div className="grid md:grid-cols-2 gap-6 opacity-60">
          {hackathons.map((hackathon, index) => (
            <HackathonCard key={index} hackathon={hackathon} />
          ))}
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Hackathon Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Formation</h3>
              <p className="text-muted-foreground">
                Connect with like-minded participants to form winning teams
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Early Access</h3>
              <p className="text-muted-foreground">
                Get notified about hackathons before public announcements
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Gift className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Submission Help</h3>
              <p className="text-muted-foreground">
                Get guidance on creating winning hackathon submissions
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hackathons;