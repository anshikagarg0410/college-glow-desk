// // // // // import React from 'react';
// // // // // import { useParams, Link } from 'react-router-dom';
// // // // // import { societiesData } from '@/data/societiesData';
// // // // // import FlippingCard from './FlippingCard';
// // // // // import { ArrowLeft } from 'lucide-react';

// // // // // const SocietyCategoryPage: React.FC = () => {
// // // // //   const { categoryName } = useParams<{ categoryName: string }>();

// // // // //   // Find the category based on the URL parameter
// // // // //   const category = societiesData.find(
// // // // //     (cat) => cat.category.replace(/\s/g, '').toLowerCase() === categoryName?.toLowerCase()
// // // // //   );

// // // // //   if (!category) {
// // // // //     return (
// // // // //       <div className="container mx-auto p-8">
// // // // //         <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
// // // // //         <Link to="/societies" className="text-blue-500 hover:underline flex items-center">
// // // // //           <ArrowLeft className="h-4 w-4 mr-2" /> Go back to all societies
// // // // //         </Link>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="container mx-auto p-8">
// // // // //       <Link to="/societies" className="text-blue-500 hover:underline flex items-center mb-8">
// // // // //         <ArrowLeft className="h-4 w-4 mr-2" /> Back to Societies
// // // // //       </Link>
// // // // //       <h1 className="text-4xl font-bold text-center mb-10">{category.category}</h1>
// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// // // // //         {category.societies.map((society, index) => (
// // // // //           <FlippingCard
// // // // //             key={index}
// // // // //             frontContent={society.name}
// // // // //             backContent={society.description}
// // // // //           />
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SocietyCategoryPage;

// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams, Link } from 'react-router-dom';
// // // // import { societiesData } from '@/data/societiesData';
// // // // import FlippingCard from './FlippingCard';
// // // // import Navigation from '@/components/Navigation';
// // // // import { ArrowLeft } from 'lucide-react';

// // // // const SocietyCategoryPage: React.FC = () => {
// // // //   const { categoryName } = useParams<{ categoryName: string }>();
// // // //   const [visibleCards, setVisibleCards] = useState<number[]>([]);

// // // //   // Find the category based on the URL parameter
// // // //   const category = societiesData.find(
// // // //     (cat) => cat.category.replace(/\s/g, '').toLowerCase() === categoryName?.toLowerCase()
// // // //   );

// // // //   useEffect(() => {
// // // //     if (category) {
// // // //       // Staggered animation
// // // //       category.societies.forEach((_, index) => {
// // // //         setTimeout(() => {
// // // //           setVisibleCards(prev => [...prev, index]);
// // // //         }, index * 100); // 100ms delay between each card
// // // //       });
// // // //     }
// // // //   }, [category]);

// // // //   if (!category) {
// // // //     return (
// // // //       <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
// // // //         <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
// // // //         <Link to="/societies" className="text-blue-500 hover:underline flex items-center">
// // // //           <ArrowLeft className="h-4 w-4 mr-2" /> Go back to all societies
// // // //         </Link>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-900 text-white relative">
// // // //       <Navigation />
// // // //       <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080/0f0f1d/ffffff?text=Starry+Night')", opacity: 0.3 }} />
// // // //       <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      
// // // //       <div className="relative z-20 container mx-auto p-8">
// // // //         <Link to="/societies" className="flex items-center text-gray-400 hover:text-white transition-colors duration-200 mb-8">
// // // //           <ArrowLeft className="h-5 w-5 mr-2" /> Back to Societies
// // // //         </Link>
// // // //         <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-10 drop-shadow-lg">
// // // //           {category.category}
// // // //         </h1>
// // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
// // // //           {category.societies.map((society, index) => (
// // // //             <FlippingCard
// // // //               key={index}
// // // //               frontContent={society.name}
// // // //               backContent={society.description}
// // // //               className={`${visibleCards.includes(index) ? 'opacity-100' : 'opacity-0'}`}
// // // //               style={{ animationDelay: `${index * 0.1}s` }}
// // // //             />
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SocietyCategoryPage;
// // // import React, { useState, useEffect } from 'react';
// // // import { useParams, Link } from 'react-router-dom';
// // // import { societiesData } from '@/data/societiesData';
// // // import FlippingCard from './FlippingCard';
// // // import Navigation from '@/components/Navigation';
// // // import Footer from '@/components/Footer';
// // // import { ArrowLeft } from 'lucide-react';

// // // const SocietyCategoryPage: React.FC = () => {
// // //   const { categoryName } = useParams<{ categoryName: string }>();
// // //   const [animated, setAnimated] = useState(false);

// // //   // Find the category based on the URL parameter
// // //   const category = societiesData.find(
// // //     (cat) => cat.category.replace(/\s/g, '').toLowerCase() === categoryName?.toLowerCase()
// // //   );
  
// // //   useEffect(() => {
// // //     setAnimated(true);
// // //   }, []);

// // //   if (!category) {
// // //     return (
// // //       <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center p-8">
// // //         <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
// // //         <Link to="/societies" className="text-blue-500 hover:underline flex items-center">
// // //           <ArrowLeft className="h-4 w-4 mr-2" /> Go back to all societies
// // //         </Link>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-white text-gray-900 relative">
// // //       <Navigation />
      
// // //       <main className="flex-grow container mx-auto p-4 md:p-8">
// // //         <Link to="/societies" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8 mt-4">
// // //           <ArrowLeft className="h-5 w-5 mr-2" /> Back to Societies
// // //         </Link>
// // //         <header className="text-center py-8">
// // //           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-fade-in-down">
// // //             {category.category}
// // //           </h1>
// // //         </header>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
// // //           {category.societies.map((society, index) => (
// // //             <FlippingCard
// // //               key={index}
// // //               frontContent={society.name}
// // //               backContent={society.description}
// // //               className={`card-animation ${animated ? 'is-visible' : ''}`}
// // //               style={{ animationDelay: `${index * 0.1}s` }}
// // //             />
// // //           ))}
// // //         </div>
// // //       </main>
      
// // //       <Footer />
// // //     </div>
// // //   );
// // // };

// // // export default SocietyCategoryPage;
// // import React, { useState, useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import { societiesData } from '@/data/societiesData';
// // import FlippingCard from './FlippingCard';
// // import Navigation from '@/components/Navigation';
// // import Footer from '@/components/Footer';
// // import { ArrowLeft } from 'lucide-react';

// // const SocietyCategoryPage: React.FC = () => {
// //   const { categoryName } = useParams<{ categoryName: string }>();
// //   const [animated, setAnimated] = useState(false);

// //   const category = societiesData.find(
// //     (cat) => cat.category.replace(/\s/g, '').toLowerCase() === categoryName?.toLowerCase()
// //   );
  
// //   useEffect(() => {
// //     setAnimated(true);
// //   }, []);

// //   if (!category) {
// //     return (
// //       <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-8">
// //         <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
// //         <Link to="/societies" className="text-blue-500 hover:underline flex items-center">
// //           <ArrowLeft className="h-4 w-4 mr-2" /> Go back to all societies
// //         </Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-gray-50 text-gray-900 relative">
// //       <Navigation />
      
// //       <main className="flex-grow container mx-auto p-4 md:p-8">
// //         <Link to="/societies" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8 mt-4">
// //           <ArrowLeft className="h-5 w-5 mr-2" /> Back to Societies
// //         </Link>
// //         <header className="text-center py-8">
// //           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-fade-in-down">
// //             {category.category}
// //           </h1>
// //         </header>

// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
// //           {category.societies.map((society, index) => (
// //             <FlippingCard
// //               key={index}
// //               frontContent={society.name}
// //               backContent={society.description}
// //               className={`card-animation ${animated ? 'is-visible' : ''}`}
// //               style={{ animationDelay: `${index * 0.1}s` }}
// //             />
// //           ))}
// //         </div>
// //       </main>
      
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default SocietyCategoryPage;
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { societiesData } from '@/data/societiesData';
// import FlippingCard from './FlippingCard';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';
// import { ArrowLeft } from 'lucide-react';
// import '../pages/ExploreSocieties.css'; // Import the shared CSS file

// const SocietyCategoryPage: React.FC = () => {
//   const { categoryName } = useParams<{ categoryName: string }>();
//   const [animated, setAnimated] = useState(false);

//   const category = societiesData.find(
//     (cat) => cat.category.replace(/\s/g, '').toLowerCase() === categoryName?.toLowerCase()
//   );
  
//   useEffect(() => {
//     setAnimated(true);
//   }, []);

//   if (!category) {
//     return (
//       <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center justify-center p-8">
//         <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
//         <Link to="/societies" className="text-blue-500 hover:underline flex items-center">
//           <ArrowLeft className="h-4 w-4 mr-2" /> Go back to all societies
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen relative text-gray-900">
//       <div className="animated-background" />
//       <Navigation />
      
//       <main className="flex-grow container mx-auto p-4 md:p-8 relative z-10">
//         <Link to="/societies" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8 mt-4">
//           <ArrowLeft className="h-5 w-5 mr-2" /> Back to Societies
//         </Link>
//         <header className="text-center py-8">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-fade-in-down">
//             {category.category}
//           </h1>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//           {category.societies.map((society, index) => (
//             <FlippingCard
//               key={index}
//               frontContent={society.name}
//               backContent={society.description}
//               className={`card-animation ${animated ? 'is-visible' : ''}`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             />
//           ))}
//         </div>
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default SocietyCategoryPage;
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { societiesData } from '@/data/societiesData';
import FlippingCard from './FlippingCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import '../pages/ExploreSocieties.css'; // Import the shared CSS file

const SocietyCategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [animated, setAnimated] = useState(false);

  const category = societiesData.find(
    (cat) => cat.category.replace(/\s/g, '').toLowerCase() === categoryName?.toLowerCase()
  );
  
  useEffect(() => {
    setAnimated(true);
  }, []);

  if (!category) {
    return (
      <div className="min-h-screen bg-transparent text-gray-900 flex flex-col items-center justify-center p-8 relative z-10">
        <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
        <Link to="/societies" className="text-blue-500 hover:underline flex items-center">
          <ArrowLeft className="h-4 w-4 mr-2" /> Go back to all societies
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative z-10 text-gray-900">
      <Navigation />
      
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <Link to="/societies" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200 mb-8 mt-4">
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Societies
        </Link>
        <header className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight animate-fade-in-down">
            {category.category}
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {category.societies.map((society, index) => (
            <FlippingCard
              key={index}
              frontContent={society.name}
              backContent={society.description}
              className={`card-animation ${animated ? 'is-visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SocietyCategoryPage;