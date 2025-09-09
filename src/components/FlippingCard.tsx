import React, { useRef, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import './FlippingCard.css';
import { Link, Rotate3d } from 'lucide-react';

interface FlippingCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  website: string;
  className?: string;
  style?: React.CSSProperties;
}

const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, website, className, style }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div ref={cardRef} className={cn("flipping-card group", className)} style={style}>
      <div className="flipping-card-inner">
        
        {/* --- FRONT WRAPPER --- */}
        <div className="flipping-card-front">
          <Card className="relative h-full w-full overflow-hidden rounded-xl border border-white/20 bg-black/25 shadow-xl backdrop-blur-lg">
            <CardContent className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center text-white">
              <Rotate3d className="absolute right-4 top-4 h-6 w-6 text-white/40 transition-transform duration-500 group-hover:rotate-180" />
              <h3 className="text-3xl font-black tracking-tight transition-all duration-300 group-hover:scale-105">
                {frontContent}
              </h3>
            </CardContent>
          </Card>
        </div>
        
        {/* --- BACK WRAPPER --- */}
        <div className="flipping-card-back">
          <Card className="h-full w-full overflow-hidden rounded-xl border border-white/20 bg-black/25 shadow-xl backdrop-blur-lg">
            {/* START: MODIFIED SECTION */}
            <CardContent className="flex h-full flex-col items-center justify-center p-4 text-center text-gray-200">
              {/* This div will take up the available space and scroll if content overflows */}
              <div className="flex-grow overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                <p className="text-sm">{backContent}</p>
              </div>
              
              {/* The button is now outside the scrollable area and won't get pushed out */}
              <a 
                href={website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-3 flex-shrink-0 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-purple-700 hover:shadow-purple-500/50 hover:scale-105"
              >
                <Link className="mr-2 h-4 w-4" />
                Visit Now
              </a>
            </CardContent>
            {/* END: MODIFIED SECTION */}
          </Card>
        </div>

      </div>
    </div>
  );
};

export default FlippingCard;