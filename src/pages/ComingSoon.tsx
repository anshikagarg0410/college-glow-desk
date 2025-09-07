import Navigation from "@/components/Navigation";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ComingSoon = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-center px-4">
        <div>
          <Clock className="h-20 w-20 mx-auto text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Coming Soon!
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            We're working hard to bring this feature to you. Please check back
            later!
          </p>
          <Button asChild>
            <Link to="/">Go Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;