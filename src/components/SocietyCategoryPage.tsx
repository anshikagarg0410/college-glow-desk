// // import React, { useState, useEffect } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import { societiesData } from '@/data/societiesData';
// // import FlippingCard from './FlippingCard';
// // import Navigation from '@/components/Navigation';
// // import Footer from '@/components/Footer';
// // import { ArrowLeft } from 'lucide-react';
// // import '../pages/ExploreSocieties.css'; // Import the shared CSS file

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
// //       <div className="min-h-screen bg-transparent text-gray-900 flex flex-col items-center justify-center p-8 relative z-10">
// //         <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
// //         <Link to="/societies" className="text-blue-500 hover:underline flex items-center">
// //           <ArrowLeft className="h-4 w-4 mr-2" /> Go back to all societies
// //         </Link>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen relative z-10 text-gray-900">
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
// import backgroundImage from '@/assets/download(1).jpg'; // Import the background image

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
//       <div className="min-h-screen bg-transparent text-gray-900 flex flex-col items-center justify-center p-8 relative z-10">
//         <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
//         <Link to="/societies" className="text-blue-500 hover:underline flex items-center">
//           <ArrowLeft className="h-4 w-4 mr-2" /> Go back to all societies
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen relative">
//       <div
//         className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       />
//       <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0" />
//       <div className="relative z-10 text-white">
//         <Navigation />

//         <main className="flex-grow container mx-auto p-4 md:p-8">
//           <Link to="/societies" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 mb-8 mt-4">
//             <ArrowLeft className="h-5 w-5 mr-2" /> Back to Societies
//           </Link>
//           <header className="text-center py-8">
//             <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight animate-fade-in-down">
//               {category.category}
//             </h1>
//           </header>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
//             {category.societies.map((society, index) => (
//               <FlippingCard
//                 key={index}
//                 frontContent={society.name}
//                 backContent={society.description}
//                 className={`card-animation ${animated ? 'is-visible' : ''}`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               />
//             ))}
//           </div>
//         </main>

//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default SocietyCategoryPage;
// src/components/SocietyCategoryPage.tsx

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { societiesData } from '@/data/societiesData';
import FlippingCard from './FlippingCard';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import '../pages/ExploreSocieties.css'; // Import the shared CSS file
import backgroundImage from '@/assets/college-background.jpg'; // Using the correct existing file

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
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 w-full h-full bg-black opacity-50 z-0" />
      <div className="relative z-10 text-white">
        <Navigation />

        <main className="flex-grow container mx-auto p-4 md:p-8">
          <Link to="/societies" className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 mb-8 mt-4">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Societies
          </Link>
          <header className="text-center py-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight animate-fade-in-down">
              {category.category}
            </h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {category.societies.map((society, index) => (
              <FlippingCard
                key={index}
                frontContent={society.name}
                backContent={society.description}
                website={society.website} // Add this line
                className={`card-animation ${animated ? 'is-visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default SocietyCategoryPage;