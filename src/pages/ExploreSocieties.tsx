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