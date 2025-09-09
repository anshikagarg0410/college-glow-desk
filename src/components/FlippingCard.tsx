// // // // // import React from 'react';
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import { cn } from "@/lib/utils";
// // // // // import './FlippingCard.css'; // Make sure to create this CSS file

// // // // // interface FlippingCardProps {
// // // // //   frontContent: React.ReactNode;
// // // // //   backContent: React.ReactNode;
// // // // //   className?: string;
// // // // // }

// // // // // const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, className }) => {
// // // // //   return (
// // // // //     <div className={cn("flipping-card", className)}>
// // // // //       <div className="flipping-card-inner">
// // // // //         <Card className="flipping-card-front">
// // // // //           <CardContent className="flex items-center justify-center p-6 text-center h-full">
// // // // //             <h3 className="text-xl font-semibold">{frontContent}</h3>
// // // // //           </CardContent>
// // // // //         </Card>
// // // // //         <Card className="flipping-card-back">
// // // // //           <CardContent className="flex items-center justify-center p-6 h-full text-center text-sm">
// // // // //             <p>{backContent}</p>
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

// // // // interface FlippingCardProps {
// // // //   frontContent: React.ReactNode;
// // // //   backContent: React.ReactNode;
// // // //   className?: string;
// // // // }

// // // // const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, className }) => {
// // // //   return (
// // // //     <div className={cn("flipping-card", className)}>
// // // //       <div className="flipping-card-inner">
// // // //         <Card className="flipping-card-front bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm shadow-2xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
// // // //           <CardContent className="flex items-center justify-center p-6 text-center h-full text-white">
// // // //             <h3 className="text-xl font-bold">{frontContent}</h3>
// // // //           </CardContent>
// // // //         </Card>
// // // //         <Card className="flipping-card-back bg-gray-800 backdrop-blur-sm shadow-2xl border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300">
// // // //           <CardContent className="flex items-center justify-center p-6 h-full text-center text-gray-200 text-sm">
// // // //             <p className="p-2">{backContent}</p>
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
// // // import './FlippingCard.css';

// // // interface FlippingCardProps {
// // //   frontContent: React.ReactNode;
// // //   backContent: React.ReactNode;
// // //   className?: string;
// // //   style?: React.CSSProperties; // Add the style prop here
// // // }

// // // const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, className, style }) => {
// // //   return (
// // //     <div className={cn("flipping-card", className)} style={style}>
// // //       <div className="flipping-card-inner">
// // //         <Card className="flipping-card-front bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm shadow-2xl border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
// // //           <CardContent className="flex items-center justify-center p-6 text-center h-full text-white">
// // //             <h3 className="text-xl font-bold">{frontContent}</h3>
// // //           </CardContent>
// // //         </Card>
// // //         <Card className="flipping-card-back bg-gray-800 backdrop-blur-sm shadow-2xl border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-300">
// // //           <CardContent className="flex items-center justify-center p-6 h-full text-center text-gray-200 text-sm">
// // //             <p className="p-2">{backContent}</p>
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

// // interface FlippingCardProps {
// //   frontContent: React.ReactNode;
// //   backContent: React.ReactNode;
// //   className?: string;
// //   style?: React.CSSProperties;
// // }

// // const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, className, style }) => {
// //   return (
// //     <div className={cn("flipping-card", className)} style={style}>
// //       <div className="flipping-card-inner">
// //         <Card className="flipping-card-front bg-white backdrop-blur-sm shadow-lg border-2 border-gray-100 hover:border-blue-400 transition-all duration-300 rounded-lg">
// //           <CardContent className="flex items-center justify-center p-6 text-center h-full text-gray-900">
// //             <h3 className="text-xl font-bold">{frontContent}</h3>
// //           </CardContent>
// //         </Card>
// //         <Card className="flipping-card-back bg-gray-100 backdrop-blur-sm shadow-lg border-2 border-gray-100 hover:border-blue-400 transition-all duration-300 rounded-lg">
// //           <CardContent className="flex items-center justify-center p-6 h-full text-center text-gray-700 text-sm">
// //             <p className="p-2">{backContent}</p>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FlippingCard;
// import React from 'react';
// import { Card, CardContent } from "@/components/ui/card";
// import { cn } from "@/lib/utils";
// import './FlippingCard.css';

// interface FlippingCardProps {
//   frontContent: React.ReactNode;
//   backContent: React.ReactNode;
//   className?: string;
//   style?: React.CSSProperties;
// }

// const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, className, style }) => {
//   return (
//     <div className={cn("flipping-card", className)} style={style}>
//       <div className="flipping-card-inner">
//         <Card className="flipping-card-front bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md border-2 border-blue-200 rounded-lg">
//           <CardContent className="flex items-center justify-center p-6 text-center h-full text-gray-900">
//             <h3 className="text-xl font-bold">{frontContent}</h3>
//           </CardContent>
//         </Card>
//         <Card className="flipping-card-back bg-gradient-to-br from-indigo-100 to-purple-200 shadow-md border-2 border-indigo-300 rounded-lg">
//           <CardContent className="flex items-center justify-center p-6 h-full text-center text-gray-700 text-sm">
//             <p className="p-2">{backContent}</p>
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

interface FlippingCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FlippingCard: React.FC<FlippingCardProps> = ({ frontContent, backContent, className, style }) => {
  return (
    <div className={cn("flipping-card", className)} style={style}>
      <div className="flipping-card-inner">
        <Card className="flipping-card-front bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md border-2 border-blue-200 rounded-lg">
          <CardContent className="flex items-center justify-center p-6 text-center h-full text-gray-900">
            <h3 className="text-xl font-bold">{frontContent}</h3>
          </CardContent>
        </Card>
        <Card className="flipping-card-back bg-gradient-to-br from-indigo-100 to-purple-200 shadow-md border-2 border-indigo-300 rounded-lg">
          <CardContent className="flex items-center justify-center p-6 h-full text-center text-gray-700 text-sm">
            <p className="p-2">{backContent}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FlippingCard;