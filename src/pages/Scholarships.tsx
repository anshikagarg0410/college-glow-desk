import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Crown, Trophy, Calendar, IndianRupee, ExternalLink, Lock } from "lucide-react";

const Scholarships = () => {
  const scholarships = [
    {
      title: "National Merit Scholarship",
      amount: "₹50,000",
      eligibility: "CGPA ≥ 8.5",
      deadline: "March 15, 2024",
      category: "Merit-based",
      status: "Active"
    },
    {
      title: "Minority Community Scholarship",
      amount: "₹25,000",
      eligibility: "Income < ₹2 Lakhs",
      deadline: "April 30, 2024",
      category: "Need-based",
      status: "Active"
    },
    {
      title: "Women in STEM Scholarship",
      amount: "₹75,000",
      eligibility: "Female students in CSE/ECE",
      deadline: "May 20, 2024",
      category: "Gender-specific",
      status: "New"
    },
    {
      title: "First Generation Scholar Award",
      amount: "₹40,000",
      eligibility: "First in family to attend college",
      deadline: "June 10, 2024",
      category: "Social Impact",
      status: "Active"
    }
  ];

  const ScholarshipCard = ({ scholarship }: { scholarship: any }) => (
    <Card className="p-6 hover:shadow-academic transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{scholarship.title}</h3>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{scholarship.category}</Badge>
            {scholarship.status === "New" && (
              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">New</Badge>
            )}
          </div>
        </div>
        <Trophy className="h-6 w-6 text-premium-gold" />
      </div>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-2">
          <IndianRupee className="h-4 w-4 text-premium-gold" />
          <span className="font-semibold text-lg">{scholarship.amount}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">Deadline: {scholarship.deadline}</span>
        </div>
        
        <div>
          <p className="text-sm text-muted-foreground mb-1">Eligibility:</p>
          <p className="font-medium">{scholarship.eligibility}</p>
        </div>
      </div>
      
      <div className="flex gap-2">
        <Button className="flex-1">
          Apply Now
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
        <Button variant="outline">
          Details
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
              <Trophy className="h-10 w-10 text-premium-gold" />
              <Crown className="h-6 w-6 text-premium-gold" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Scholarships</h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            Discover scholarship opportunities to fund your education
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
            <h2 className="text-2xl font-bold mb-4">Unlock Scholarship Opportunities</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Access curated scholarship listings, application guidance, and deadline reminders for just ₹9
            </p>
            <Button size="lg" className="bg-premium-gold hover:bg-premium-gold/90 text-black font-semibold">
              Upgrade to Premium - ₹9
            </Button>
          </div>
        </Card>

        {/* Scholarships Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60">
          {scholarships.map((scholarship, index) => (
            <ScholarshipCard key={index} scholarship={scholarship} />
          ))}
        </div>

        {/* Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">What You Get with Premium</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <Trophy className="h-12 w-12 text-premium-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Curated Listings</h3>
              <p className="text-muted-foreground">
                Hand-picked scholarship opportunities matching your profile
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <Calendar className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deadline Alerts</h3>
              <p className="text-muted-foreground">
                Never miss an application deadline with timely reminders
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <ExternalLink className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Application Guidance</h3>
              <p className="text-muted-foreground">
                Step-by-step help with scholarship applications
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;