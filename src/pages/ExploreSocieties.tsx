// // // // // import React from 'react';
// // // // // import { Link } from 'react-router-dom';
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import { societiesData } from '@/data/societiesData';

// // // // // const ExploreSocieties: React.FC = () => {
// // // // //   return (
// // // // //     <div className="container mx-auto p-8">
// // // // //       <h1 className="text-4xl font-bold text-center mb-10">Explore IGDTUW Societies</h1>
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // //         {societiesData.map((category, index) => (
// // // // //           <Link
// // // // //             key={index}
// // // // //             to={`/societies/${category.category.replace(/\s/g, '').toLowerCase()}`}
// // // // //             className="w-full"
// // // // //           >
// // // // //             <Card className="hover:scale-105 transition-transform duration-300 transform-gpu cursor-pointer h-full flex items-center justify-center text-center">
// // // // //               <CardContent className="p-6">
// // // // //                 <h2 className="text-2xl font-semibold">{category.category}</h2>
// // // // //               </CardContent>
// // // // //             </Card>
// // // // //           </Link>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default ExploreSocieties;
// // // // import React, { useEffect, useState } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { Card, CardContent } from "@/components/ui/card";
// // // // import { societiesData } from '@/data/societiesData';
// // // // import Navigation from '@/components/Navigation';

// // // // const ExploreSocieties: React.FC = () => {
// // // //   const [animated, setAnimated] = useState(false);

// // // //   useEffect(() => {
// // // //     setAnimated(true);
// // // //   }, []);

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-900 text-white relative">
// // // //       <Navigation />
// // // //       <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0f0f1d/ffffff?text=Starry+Night')", opacity: 0.3 }} />
// // // //       <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      
// // // //       <div className="relative z-20 container mx-auto p-8">
// // // //         <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 mt-16 drop-shadow-lg animate-fade-in">
// // // //           Explore IGDTUW Societies
// // // //         </h1>
// // // //         <p className="text-xl text-center text-gray-300 mb-12 animate-fade-in delay-200">
// // // //           A tree of knowledge, where every branch leads to a new community.
// // // //         </p>
        
// // // //         <div className="societies-tree flex flex-col items-center py-10">
// // // //           <div className="tree-node main-node animate-node-in" style={{ '--delay': '0s' } as React.CSSProperties}>
// // // //             <div className="node-content text-center">
// // // //               <span className="text-4xl font-bold">IGDTUW</span>
// // // //               <p className="text-sm text-gray-400">Main Campus</p>
// // // //             </div>
// // // //           </div>
          
// // // //           <div className="flex flex-col items-center relative w-full mt-10">
// // // //             <div className="h-10 w-1 bg-gradient-to-b from-blue-400 to-purple-500 animate-line-grow" />
// // // //             <div className="w-full flex justify-between relative mt-8">
// // // //               {societiesData.map((category, index) => (
// // // //                 <Link
// // // //                   key={index}
// // // //                   to={`/societies/${category.category.replace(/\s/g, '').toLowerCase()}`}
// // // //                   className={`tree-node branch-node animate-node-in`}
// // // //                   style={{ '--delay': `${0.3 + index * 0.2}s` } as React.CSSProperties}
// // // //                 >
// // // //                   <Card className="hover:scale-105 transition-transform duration-300 transform-gpu cursor-pointer h-full flex items-center justify-center text-center bg-gray-800/60 backdrop-blur-sm border border-gray-700 hover:border-blue-400/80 shadow-lg hover:shadow-xl hover:shadow-blue-500/30">
// // // //                     <CardContent className="p-6">
// // // //                       <h2 className="text-xl font-bold">{category.category}</h2>
// // // //                     </CardContent>
// // // //                   </Card>
// // // //                 </Link>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default ExploreSocieties;
// // // import React, { useEffect, useState } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { Card, CardContent } from "@/components/ui/card";
// // // import { societiesData } from '@/data/societiesData';
// // // import Navigation from '@/components/Navigation';
// // // import Footer from '@/components/Footer';
// // // import "./ExploreSocieties.css";

// // // const ExploreSocieties: React.FC = () => {
// // //   const [animated, setAnimated] = useState(false);

// // //   useEffect(() => {
// // //     setAnimated(true);
// // //   }, []);

// // //   return (
// // //     <div className="flex flex-col min-h-screen bg-white text-gray-900">
// // //       <Navigation />
      
// // //       <main className="flex-grow container mx-auto p-4 md:p-8">
// // //         <header className="text-center py-12 md:py-16">
// // //           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-fade-in-down">
// // //             Explore IGDTUW Societies
// // //           </h1>
// // //           <p className="mt-4 text-lg text-gray-600 animate-fade-in delay-200">
// // //             Discover our vibrant community through diverse technical, cultural, and educational clubs.
// // //           </p>
// // //         </header>
        
// // //         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
// // //           {societiesData.map((category, index) => (
// // //             <Link
// // //               key={index}
// // //               to={`/societies/${category.category.replace(/\s/g, '').toLowerCase()}`}
// // //               className={`block card-animation ${animated ? 'is-visible' : ''}`}
// // //               style={{ animationDelay: `${index * 0.1}s` }}
// // //             >
// // //               <Card className="h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200 border-2 border-gray-100 bg-white rounded-lg">
// // //                 <CardContent className="flex flex-col items-center justify-center p-6 text-center">
// // //                   <div className="bg-blue-50 text-blue-600 rounded-full p-4 mb-4 transition-colors duration-300">
// // //                     <span className="text-4xl">📚</span>
// // //                   </div>
// // //                   <h2 className="text-xl font-bold text-gray-900">{category.category}</h2>
// // //                   <p className="mt-2 text-sm text-gray-500">
// // //                     {category.societies.length} societies
// // //                   </p>
// // //                 </CardContent>
// // //               </Card>
// // //             </Link>
// // //           ))}
// // //         </section>
// // //       </main>
      
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default ExploreSocieties;
// // import React, { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Card, CardContent } from "@/components/ui/card";
// // import { societiesData } from '@/data/societiesData';
// // import Navigation from '@/components/Navigation';
// // import Footer from '@/components/Footer';
// // import "./ExploreSocieties.css";

// // const cardColors = [
// //   "bg-gradient-to-br from-blue-200 to-indigo-300",
// //   "bg-gradient-to-br from-pink-200 to-purple-300",
// //   "bg-gradient-to-br from-green-200 to-teal-300",
// //   "bg-gradient-to-br from-yellow-200 to-orange-300",
// //   "bg-gradient-to-br from-red-200 to-rose-300",
// // ];

// // const ExploreSocieties: React.FC = () => {
// //   const [animated, setAnimated] = useState(false);

// //   useEffect(() => {
// //     setAnimated(true);
// //   }, []);

// //   return (
// //     <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
// //       <Navigation />
      
// //       <main className="flex-grow container mx-auto p-4 md:p-8">
// //         <header className="text-center py-12 md:py-16">
// //           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-fade-in-down">
// //             Explore IGDTUW Societies
// //           </h1>
// //           <p className="mt-4 text-lg text-gray-600 animate-fade-in delay-200">
// //             Discover our vibrant community through diverse technical, cultural, and educational clubs.
// //           </p>
// //         </header>
        
// //         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
// //           {societiesData.map((category, index) => (
// //             <Link
// //               key={index}
// //               to={`/societies/${category.category.replace(/\s/g, '').toLowerCase()}`}
// //               className={`block card-animation ${animated ? 'is-visible' : ''}`}
// //               style={{ animationDelay: `${index * 0.1}s` }}
// //             >
// //               <Card className={`h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200 border-2 border-transparent hover:border-blue-400 rounded-lg overflow-hidden ${cardColors[index % cardColors.length]}`}>
// //                 <CardContent className="flex flex-col items-center justify-center p-6 text-center text-white">
// //                   <div className="bg-white/30 text-white rounded-full p-4 mb-4 transition-colors duration-300 backdrop-blur-sm">
// //                     <span className="text-4xl">
// //                       {index === 0 && '💻'}
// //                       {index === 1 && '🎭'}
// //                       {index === 2 && '📚'}
// //                       {index === 3 && '🎨'}
// //                       {index === 4 && '🎯'}
// //                     </span>
// //                   </div>
// //                   <h2 className="text-xl font-bold">{category.category}</h2>
// //                   <p className="mt-2 text-sm">
// //                     {category.societies.length} societies
// //                   </p>
// //                 </CardContent>
// //               </Card>
// //             </Link>
// //           ))}
// //         </section>
// //       </main>
      
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default ExploreSocieties;
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardContent } from "@/components/ui/card";
// import { societiesData } from '@/data/societiesData';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import "./ExploreSocieties.css";

// const cardColors = [
//   "bg-gradient-to-br from-blue-200 to-indigo-300",
//   "bg-gradient-to-br from-pink-200 to-purple-300",
//   "bg-gradient-to-br from-green-200 to-teal-300",
//   "bg-gradient-to-br from-yellow-200 to-orange-300",
//   "bg-gradient-to-br from-red-200 to-rose-300",
// ];

// const ExploreSocieties: React.FC = () => {
//   const [animated, setAnimated] = useState(false);

//   useEffect(() => {
//     setAnimated(true);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen relative text-gray-900">
//       <div className="animated-background" />
//       <Navigation />
      
//       <main className="flex-grow container mx-auto p-4 md:p-8 relative z-10">
//         <header className="text-center py-12 md:py-16">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-fade-in-down">
//             Explore IGDTUW Societies
//           </h1>
//           <p className="mt-4 text-lg text-gray-600 animate-fade-in delay-200">
//             Discover our vibrant community through diverse technical, cultural, and educational clubs.
//           </p>
//         </header>
        
//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//           {societiesData.map((category, index) => (
//             <Link
//               key={index}
//               to={`/societies/${category.category.replace(/\s/g, '').toLowerCase()}`}
//               className={`block card-animation ${animated ? 'is-visible' : ''}`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <Card className={`h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200 border-2 border-transparent hover:border-blue-400 rounded-lg overflow-hidden ${cardColors[index % cardColors.length]}`}>
//                 <CardContent className="flex flex-col items-center justify-center p-6 text-center text-white">
//                   <div className="bg-white/30 text-white rounded-full p-4 mb-4 transition-colors duration-300 backdrop-blur-sm">
//                     <span className="text-4xl">
//                       {index === 0 && '💻'}
//                       {index === 1 && '🎭'}
//                       {index === 2 && '📚'}
//                       {index === 3 && '🎨'}
//                       {index === 4 && '🎯'}
//                     </span>
//                   </div>
//                   <h2 className="text-xl font-bold">{category.category}</h2>
//                   <p className="mt-2 text-sm">
//                     {category.societies.length} societies
//                   </p>
//                 </CardContent>
//               </Card>
//             </Link>
//           ))}
//         </section>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default ExploreSocieties;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { societiesData } from '@/data/societiesData';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import "./ExploreSocieties.css";

const cardColors = [
  "bg-gradient-to-br from-blue-200 to-indigo-300",
  "bg-gradient-to-br from-pink-200 to-purple-300",
  "bg-gradient-to-br from-green-200 to-teal-300",
  "bg-gradient-to-br from-yellow-200 to-orange-300",
  "bg-gradient-to-br from-red-200 to-rose-300",
];

const ExploreSocieties: React.FC = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative z-10 text-gray-900">
      <Navigation />
      
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <header className="text-center py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-fade-in-down">
            Explore IGDTUW Societies
          </h1>
          <p className="mt-4 text-lg text-gray-600 animate-fade-in delay-200">
            Discover our vibrant community through diverse technical, cultural, and educational clubs.
          </p>
        </header>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {societiesData.map((category, index) => (
            <Link
              key={index}
              to={`/societies/${category.category.replace(/\s/g, '').toLowerCase()}`}
              className={`block card-animation ${animated ? 'is-visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className={`h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200 border-2 border-transparent hover:border-blue-400 rounded-lg overflow-hidden ${cardColors[index % cardColors.length]}`}>
                <CardContent className="flex flex-col items-center justify-center p-6 text-center text-white">
                  <div className="bg-white/30 text-white rounded-full p-4 mb-4 transition-colors duration-300 backdrop-blur-sm">
                    <span className="text-4xl">
                      {index === 0 && '💻'}
                      {index === 1 && '🎭'}
                      {index === 2 && '📚'}
                      {index === 3 && '🎨'}
                      {index === 4 && '🎯'}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold">{category.category}</h2>
                  <p className="mt-2 text-sm">
                    {category.societies.length} societies
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ExploreSocieties;