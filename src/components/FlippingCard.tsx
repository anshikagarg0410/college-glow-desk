// // // // // // import React from 'react';
// // // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // // import { cn } from "@/lib/utils";
// // // // // // import './FlippingCard.css';

// // // // // // interface FlippingCardProps {
// // // // // //   frontContent: React.ReactNode;
// // // // // //   backContent: React.ReactNode;
// // // // // //   className?: string;
// // // // // //   style?: React.CSSProperties;
// // // // // // }

// // // // // // const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, className, style }) => {
// // // // // //   return (
// // // // // //     <div className={cn("flipping-card", className)} style={style}>
// // // // // //       <div className="flipping-card-inner">
// // // // // //         <Card className="flipping-card-front bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md border-2 border-blue-200 rounded-lg">
// // // // // //           <CardContent className="flex items-center justify-center p-6 text-center h-full text-gray-900">
// // // // // //             <h3 className="text-xl font-bold">{frontContent}</h3>
// // // // // //           </CardContent>
// // // // // //         </Card>
// // // // // //         <Card className="flipping-card-back bg-gradient-to-br from-indigo-100 to-purple-200 shadow-md border-2 border-indigo-300 rounded-lg">
// // // // // //           <CardContent className="flex items-center justify-center p-6 h-full text-center text-gray-700 text-sm">
// // // // // //             <p className="p-2">{backContent}</p>
// // // // // //           </CardContent>
// // // // // //         </Card>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default FlippingCard;
// // // // // import React from 'react';
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import { cn } from "@/lib/utils";
// // // // // import './FlippingCard.css';
// // // // // import { Button } from '@/components/ui/button';
// // // // // import { Link } from 'lucide-react';

// // // // // interface FlippingCardProps {
// // // // //   frontContent: React.ReactNode;
// // // // //   backContent: React.ReactNode;
// // // // //   website: string;
// // // // //   className?: string;
// // // // //   style?: React.CSSProperties;
// // // // // }

// // // // // const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, website, className, style }) => {
// // // // //   return (
// // // // //     <div className={cn("flipping-card", className)} style={style}>
// // // // //       <div className="flipping-card-inner">
// // // // //         <Card className="flipping-card-front bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md border-2 border-blue-200 rounded-lg">
// // // // //           <CardContent className="flex items-center justify-center p-6 text-center h-full text-gray-900">
// // // // //             <h3 className="text-xl font-bold">{frontContent}</h3>
// // // // //           </CardContent>
// // // // //         </Card>
// // // // //         <Card className="flipping-card-back bg-gradient-to-br from-indigo-100 to-purple-200 shadow-md border-2 border-indigo-300 rounded-lg">
// // // // //           <CardContent className="flex flex-col justify-between items-center p-6 h-full text-center text-gray-700 text-sm">
// // // // //             <p className="p-2">{backContent}</p>
// // // // //             <a href={website} target="_blank" rel="noopener noreferrer">
// // // // //               <Button className="mt-4 px-6 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-300">
// // // // //                 <Link className="h-4 w-4 mr-2" />
// // // // //                 Visit Now
// // // // //               </Button>
// // // // //             </a>
// // // // //           </CardContent>
// // // // //         </Card>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default FlippingCard;
// // // // import React from 'react';
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import { cn } from "@/lib/utils";
// // // // import './FlippingCard.css';
// // // // import { Link } from 'lucide-react';

// // // // interface FlippingCardProps {
// // // //   frontContent: React.ReactNode;
// // // //   backContent: React.ReactNode;
// // // //   website: string;
// // // //   className?: string;
// // // //   style?: React.CSSProperties;
// // // // }

// // // // const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, website, className, style }) => {
// // // //   return (
// // // //     <div className={cn("flipping-card", className)} style={style}>
// // // //       <div className="flipping-card-inner">
// // // //         <Card className="flipping-card-front bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md border-2 border-blue-200 rounded-lg">
// // // //           <CardContent className="flex items-center justify-center p-6 text-center h-full text-gray-900">
// // // //             {/* Updated font styling */}
// // // //             <h3 className="text-2xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-indigo-600">
// // // //               {frontContent}
// // // //             </h3>
// // // //           </CardContent>
// // // //         </Card>
// // // //         <Card className="flipping-card-back bg-gradient-to-br from-indigo-100 to-purple-200 shadow-md border-2 border-indigo-300 rounded-lg">
// // // //           <CardContent className="flex flex-col justify-between items-center p-6 h-full text-center text-gray-700 text-sm">
// // // //             <p className="p-2">{backContent}</p>
// // // //             {/* The <a> tag now has the button styles directly applied to it */}
// // // //             <a 
// // // //               href={website} 
// // // //               target="_blank" 
// // // //               rel="noopener noreferrer" 
// // // //               className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-indigo-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-indigo-700"
// // // //             >
// // // //               <Link className="h-4 w-4 mr-2" />
// // // //               Visit Now
// // // //             </a>
// // // //           </CardContent>
// // // //         </Card>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FlippingCard;
// // // import React from 'react';
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import { cn } from "@/lib/utils";
// // // import './FlippingCard.css'; // Ensure this CSS file is linked
// // // import { Link } from 'lucide-react';

// // // interface FlippingCardProps {
// // //   frontContent: React.ReactNode;
// // //   backContent: React.ReactNode;
// // //   website: string;
// // //   className?: string;
// // //   style?: React.CSSProperties;
// // // }

// // // const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, website, className, style }) => {
// // //   return (
// // //     <div className={cn("flipping-card", "group", className)} style={style}>
// // //       <div className="flipping-card-inner">
// // //         <Card className="flipping-card-front bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md border-2 border-blue-200 rounded-lg relative overflow-hidden"> {/* Added relative and overflow-hidden */}
// // //           {/* Sparkle/Bubble animation overlay */}
// // //           <div className="sparkle-overlay"></div> {/* This is our new element for animation */}

// // //           <CardContent className="flex items-center justify-center p-6 text-center h-full text-gray-900 relative z-10"> {/* Added relative z-10 for text to be above sparkles */}
// // //             <h3 className="text-2xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-indigo-600">
// // //               {frontContent}
// // //             </h3>
// // //           </CardContent>
// // //         </Card>
// // //         <Card className="flipping-card-back bg-gradient-to-br from-indigo-100 to-purple-200 shadow-md border-2 border-indigo-300 rounded-lg">
// // //           <CardContent className="flex flex-col justify-between items-center p-6 h-full text-center text-gray-700 text-sm">
// // //             <p className="p-2">{backContent}</p>
// // //             <a 
// // //               href={website} 
// // //               target="_blank" 
// // //               rel="noopener noreferrer" 
// // //               className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-indigo-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-indigo-700"
// // //             >
// // //               <Link className="h-4 w-4 mr-2" />
// // //               Visit Now
// // //             </a>
// // //           </CardContent>
// // //         </Card>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default FlippingCard;
// // import React from 'react';
// // import { Card, CardContent } from "@/components/ui/card";
// // import { cn } from "@/lib/utils";
// // import './FlippingCard.css';
// // import { Link } from 'lucide-react';

// // interface FlippingCardProps {
// //   frontContent: React.ReactNode;
// //   backContent: React.ReactNode;
// //   website: string;
// //   className?: string;
// //   style?: React.CSSProperties;
// // }

// // const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, website, className, style }) => {
// //   return (
// //     <div className={cn("flipping-card", className)} style={style}>
// //       <div className="flipping-card-inner">
// //         <Card className="flipping-card-front bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md border-2 border-blue-200 rounded-lg">
// //           <CardContent className="flex items-center justify-center p-6 text-center h-full text-gray-900">
// //             <h3 className="text-2xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-indigo-600">
// //               {frontContent}
// //             </h3>
// //           </CardContent>
// //         </Card>
// //         <Card className="flipping-card-back bg-gradient-to-br from-indigo-100 to-purple-200 shadow-md border-2 border-indigo-300 rounded-lg">
// //           <CardContent className="flex flex-col justify-between items-center p-6 h-full text-center text-gray-700 text-sm">
// //             <p className="p-2">{backContent}</p>
// //             {/* The <a> tag now has the button styles and correctly opens the link */}
// //             <a 
// //               href={website} 
// //               target="_blank" 
// //               rel="noopener noreferrer" 
// //               className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-indigo-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-indigo-700"
// //             >
// //               <Link className="h-4 w-4 mr-2" />
// //               Visit Now
// //             </a>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FlippingCard;
// // In src/components/FlippingCard.tsx

// import React from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import './FlippingCard.css';
// import { Link } from 'lucide-react';

// interface FlippingCardProps {
//   frontContent: React.ReactNode;
//   backContent: React.ReactNode;
//   website: string;
//   className?: string;
//   style?: React.CSSProperties;
// }

// const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, website, className, style }) => {
//   return (
//     <div className={cn("flipping-card hover-effect", className)} style={style}>
//       <div className="flipping-card-inner">
//         <Card className="flipping-card-front bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md border-2 border-blue-200 rounded-lg">
//           <CardContent className="flex items-center justify-center p-6 text-center h-full text-gray-900">
//             <h3 className="text-2xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-indigo-600">
//               {frontContent}
//             </h3>
//           </CardContent>
//         </Card>
//         <Card className="flipping-card-back bg-gradient-to-br from-indigo-100 to-purple-200 shadow-md border-2 border-indigo-300 rounded-lg">
//           <CardContent className="flex flex-col justify-between items-center p-6 h-full text-center text-gray-700 text-sm">
//             <p className="p-2">{backContent}</p>
//             <a 
//               href={website} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-indigo-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-indigo-700"
//             >
//               <Link className="h-4 w-4 mr-2" />
//               Visit Now
//             </a>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default FlippingCard;
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import './FlippingCard.css';
import { Link } from 'lucide-react';

interface FlippingCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  website: string;
  className?: string;
  style?: React.CSSProperties;
}

const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, website, className, style }) => {
  return (
    <div className={cn("flipping-card", className)} style={style}>
      <div className="flipping-card-inner">
        <Card className="flipping-card-front bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md border-2 border-blue-200 rounded-lg">
          <CardContent className="flex items-center justify-center p-6 text-center h-full text-gray-900">
            <h3 className="text-2xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-indigo-600">
              {frontContent}
            </h3>
          </CardContent>
        </Card>
        <Card className="flipping-card-back bg-gradient-to-br from-indigo-100 to-purple-200 shadow-md border-2 border-indigo-300 rounded-lg">
          <CardContent className="flex flex-col justify-between items-center p-6 h-full text-center text-gray-700 text-sm">
            <p className="p-2">{backContent}</p>
            {/* The <a> tag now has the button styles and correctly opens the link */}
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-indigo-600 px-6 py-2 text-white transition-colors duration-300 hover:bg-indigo-700"
            >
              <Link className="h-4 w-4 mr-2" />
              Visit Now
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlippingCard;