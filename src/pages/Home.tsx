// // // import { Link } from "react-router-dom";
// // // import { Button } from "@/components/ui/button";
// // // import { Card } from "@/components/ui/card";
// // // import { Badge } from "@/components/ui/badge";
// // // import Navigation from "@/components/Navigation";
// // // import collegeBackground from "@/assets/image.png";

// // // import {
// // //   BookOpen,
// // //   Calculator,
// // //   Trophy,
// // //   Briefcase,
// // //   Crown,
// // //   ArrowRight,
// // //   GraduationCap
// // // } from "lucide-react";

// // // const Home = () => {
// // //   const branches = [
// // //     "CSE-AI", "CSE", "IT", "AI/ML", "ECE-AI", "ECE", "Mathematical & Computing"
// // //   ];

// // //   const features = [
// // //     {
// // //       icon: BookOpen,
// // //       title: "Academic Resources",
// // //       description: "Notes, PDFs, tutorials, PYQs, and YouTube links for all subjects",
// // //       href: "/academic",
// // //       color: "bg-indigo-500",
// // //       iconColor: "text-indigo-500"
// // //     },
// // //     {
// // //       icon: Calculator,
// // //       title: "CGPA Calculator",
// // //       description: "Calculate your CGPA easily with our intuitive calculator",
// // //       href: "/cgpa-calculator",
// // //       color: "bg-blue-500",
// // //       iconColor: "text-blue-500"
// // //     },
// // //     {
// // //       icon: Trophy,
// // //       title: "Scholarships",
// // //       description: "Discover scholarship opportunities and application guidance",
// // //       href: "/scholarships",
// // //       color: "bg-yellow-500",
// // //       iconColor: "text-yellow-500",
// // //       premium: true
// // //     },
// // //     {
// // //       icon: Briefcase,
// // //       title: "Internships",
// // //       description: "Find internship opportunities and application tips",
// // //       href: "/internships",
// // //       color: "bg-purple-500",
// // //       iconColor: "text-purple-500",
// // //       premium: true
// // //     }
// // //   ];

// // //   return (
// // //     <div className="min-h-screen bg-background dark:bg-gray-900">
// // //       <Navigation />

// // //       {/* Hero Section */}
// // //       <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center">
// // //         {/* Animated Background Image */}
// // //         <div
// // //           className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-parallax"
// // //           style={{ backgroundImage: `url(${collegeBackground})` }}
// // //         />
// // //         <div className="absolute inset-0 bg-gradient-to-t from-background to-background/50 dark:to-background/70" />
        
// // //         <div className="relative max-w-7xl mx-auto px-4 py-20 text-center z-10">
// // //           <div className="mb-12">
// // //             <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight drop-shadow-md">
// // //               StudyHub
// // //             </h1>
// // //             <p className="text-xl md:text-2xl text-muted-foreground font-medium drop-shadow-sm">
// // //               Your comprehensive resource center for academic excellence at IGDTUW
// // //             </p>
// // //           </div>
// // //           <p className="text-2xl md:text-3xl text-foreground font-medium mb-12 max-w-4xl mx-auto leading-relaxed">
// // //              Unlock your potential with curated resources, tools, and opportunities.
// // //           </p>
// // //           <div className="flex flex-col sm:flex-row gap-6 justify-center">
// // //             <Link to="/academic">
// // //               <Button size="lg" className="text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
// // //                 Explore Resources
// // //                 <ArrowRight className="ml-3 h-6 w-6" />
// // //               </Button>
// // //             </Link>
// // //             <Link to="/about">
// // //               <Button size="lg" variant="outline" className="text-xl px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
// // //                 Learn More
// // //               </Button>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Branches Section */}
// // //       <section className="py-24 px-4 bg-muted/20 dark:bg-gray-800">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
// // //               All Branches Covered
// // //             </h2>
// // //             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
// // //               Comprehensive resources for every engineering discipline at IGDTUW.
// // //             </p>
// // //           </div>

// // //           <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
// // //             {branches.map((branch, index) => (
// // //               <Badge key={index} variant="secondary" className="text-lg py-3 px-6 rounded-full font-medium transition-all duration-300 hover:scale-105">
// // //                 {branch}
// // //               </Badge>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Features Section */}
// // //       <section className="py-24 px-4">
// // //         <div className="max-w-7xl mx-auto">
// // //           <div className="text-center mb-20">
// // //             <h2 className="text-5xl font-bold text-foreground mb-6">
// // //               Everything You Need to Excel
// // //             </h2>
// // //             <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
// // //               From academic resources to career opportunities
// // //             </p>
// // //           </div>

// // //           <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
// // //             {features.map((feature, index) => (
// // //               <Card key={index} className="p-8 hover:shadow-academic transition-all duration-500 group cursor-pointer border-2 hover:border-primary/20 rounded-2xl">
// // //                 <Link to={feature.href}>
// // //                   <div className="flex items-start gap-6">
// // //                     <div className={`${feature.color} p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
// // //                       <feature.icon className="h-10 w-10 text-white" />
// // //                     </div>
// // //                     <div className="flex-1">
// // //                       <div className="flex items-center gap-3 mb-3">
// // //                         <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
// // //                         {feature.premium && <Crown className="h-5 w-5 text-yellow-500" />}
// // //                       </div>
// // //                       <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
// // //                     </div>
// // //                   </div>
// // //                 </Link>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="bg-green-50 dark:bg-gray-800 border-t border-border py-12 px-4">
// // //         <div className="max-w-7xl mx-auto text-center">
// // //           <div className="flex items-center justify-center gap-3 mb-4">
// // //             <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
// // //               <GraduationCap className="h-5 w-5 text-primary-foreground" />
// // //             </div>
// // //             <h3 className="text-xl font-bold text-primary dark:text-white">StudyHub</h3>
// // //           </div>
// // //           <p className="text-muted-foreground text-sm">
// // //             Empowering students with comprehensive academic resources and opportunities.
// // //           </p>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // export default Home;
// // import React from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Link } from 'react-router-dom';
// // import { ChevronRight } from 'lucide-react';
// // import Navigation from '@/components/Navigation';
// // import Footer from '@/components/Footer';

// // const Home = () => {
// //     return (
// //         <div className="flex flex-col min-h-screen bg-gray-50">
// //             <Navigation />
// //             <main className="flex-grow">
// //                 {/* Hero Section */}
// //                 <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/college-background.jpg')" }}>
// //                     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
// //                         <div className="text-center text-white p-4">
// //                             <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">
// //                                 Welcome to IGDTUW Glow Desk
// //                             </h1>
// //                             <p className="mt-4 text-lg md:text-xl font-medium">
// //                                 Your one-stop platform for academic resources, society information, and more.
// //                             </p>
// //                             <div className="mt-8 flex justify-center space-x-4">
// //                                 <Link to="/academic-resources" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 font-semibold">
// //                                     Explore Academic Resources
// //                                 </Link>
// //                                 <Link to="/societies" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 font-semibold">
// //                                     Discover Societies
// //                                 </Link>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </section>

// //                 {/* Quick Links Section */}
// //                 <section className="container mx-auto py-16">
// //                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quick Links</h2>
// //                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //                         <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
// //                             <CardHeader>
// //                                 <CardTitle className="text-xl font-bold">Academic Resources</CardTitle>
// //                             </CardHeader>
// //                             <CardContent>
// //                                 <p className="text-gray-600">Find notes, question papers, and other study materials.</p>
// //                                 <Link to="/academic-resources" className="text-blue-600 flex items-center mt-4">
// //                                     Go to Resources <ChevronRight className="ml-1 h-4 w-4" />
// //                                 </Link>
// //                             </CardContent>
// //                         </Card>
// //                         <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
// //                             <CardHeader>
// //                                 <CardTitle className="text-xl font-bold">CGPA Calculator</CardTitle>
// //                             </CardHeader>
// //                             <CardContent>
// //                                 <p className="text-gray-600">Calculate your CGPA effortlessly with our simple tool.</p>
// //                                 <Link to="/cgpa-calculator" className="text-blue-600 flex items-center mt-4">
// //                                     Calculate CGPA <ChevronRight className="ml-1 h-4 w-4" />
// //                                 </Link>
// //                             </CardContent>
// //                         </Card>
// //                         <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
// //                             <CardHeader>
// //                                 <CardTitle className="text-xl font-bold">Internships & Jobs</CardTitle>
// //                             </CardHeader>
// //                             <CardContent>
// //                                 <p className="text-gray-600">Explore internship and job opportunities.</p>
// //                                 <Link to="/internships" className="text-blue-600 flex items-center mt-4">
// //                                     View Opportunities <ChevronRight className="ml-1 h-4 w-4" />
// //                                 </Link>
// //                             </CardContent>
// //                         </Card>
// //                         <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
// //                             <CardHeader>
// //                                 <CardTitle className="text-xl font-bold">Hackathons</CardTitle>
// //                             </CardHeader>
// //                             <CardContent>
// //                                 <p className="text-gray-600">Discover and participate in upcoming hackathons.</p>
// //                                 <Link to="/hackathons" className="text-blue-600 flex items-center mt-4">
// //                                     Find Hackathons <ChevronRight className="ml-1 h-4 w-4" />
// //                                 </Link>
// //                             </CardContent>
// //                         </Card>
// //                          <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
// //                             <CardHeader>
// //                                 <CardTitle className="text-xl font-bold">Explore Societies</CardTitle>
// //                             </CardHeader>
// //                             <CardContent>
// //                                 <p className="text-gray-600">Discover all the technical and cultural societies at IGDTUW.</p>
// //                                 <Link to="/societies" className="text-blue-600 flex items-center mt-4">
// //                                     Discover Societies <ChevronRight className="ml-1 h-4 w-4" />
// //                                 </Link>
// //                             </CardContent>
// //                         </Card>
// //                     </div>
// //                 </section>
// //             </main>
// //             <Footer />
// //         </div>
// //     );
// // };

// // export default Home;
// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Link } from 'react-router-dom';
// import { ChevronRight } from 'lucide-react';
// import Navigation from '@/components/Navigation';
// import Footer from '@/components/Footer';

// const Home = () => {
//     return (
//         <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
//             <Navigation />
//             <main className="flex-grow">
//                 {/* Hero Section */}
//                 <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/college-background.jpg')" }}>
//                     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                         <div className="text-center text-white p-4">
//                             <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter">
//                                 Welcome to IGDTUW Glow Desk
//                             </h1>
//                             <p className="mt-4 text-lg md:text-xl font-medium">
//                                 Your one-stop platform for academic resources, society information, and more.
//                             </p>
//                             <div className="mt-8 flex justify-center space-x-4">
//                                 <Link to="/academic-resources" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 font-semibold">
//                                     Explore Academic Resources
//                                 </Link>
//                                 <Link to="/societies" className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 font-semibold">
//                                     Discover Societies
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Quick Links Section */}
//                 <section className="container mx-auto py-16">
//                     <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Quick Links</h2>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                         <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
//                             <CardHeader>
//                                 <CardTitle className="text-xl font-bold">Academic Resources</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-gray-600">Find notes, question papers, and other study materials.</p>
//                                 <Link to="/academic" className="text-blue-600 flex items-center mt-4">
//                                     Go to Resources <ChevronRight className="ml-1 h-4 w-4" />
//                                 </Link>
//                             </CardContent>
//                         </Card>
//                         <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
//                             <CardHeader>
//                                 <CardTitle className="text-xl font-bold">CGPA Calculator</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-gray-600">Calculate your CGPA effortlessly with our simple tool.</p>
//                                 <Link to="/cgpa-calculator" className="text-blue-600 flex items-center mt-4">
//                                     Calculate CGPA <ChevronRight className="ml-1 h-4 w-4" />
//                                 </Link>
//                             </CardContent>
//                         </Card>
//                         <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
//                             <CardHeader>
//                                 <CardTitle className="text-xl font-bold">Internships & Jobs</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-gray-600">Explore internship and job opportunities.</p>
//                                 <Link to="/internships" className="text-blue-600 flex items-center mt-4">
//                                     View Opportunities <ChevronRight className="ml-1 h-4 w-4" />
//                                 </Link>
//                             </CardContent>
//                         </Card>
//                         <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
//                             <CardHeader>
//                                 <CardTitle className="text-xl font-bold">Hackathons</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-gray-600">Discover and participate in upcoming hackathons.</p>
//                                 <Link to="/hackathons" className="text-blue-600 flex items-center mt-4">
//                                     Find Hackathons <ChevronRight className="ml-1 h-4 w-4" />
//                                 </Link>
//                             </CardContent>
//                         </Card>
//                          <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
//                             <CardHeader>
//                                 <CardTitle className="text-xl font-bold">Explore Societies</CardTitle>
//                             </CardHeader>
//                             <CardContent>
//                                 <p className="text-gray-600">Discover all the technical and cultural societies at IGDTUW.</p>
//                                 <Link to="/societies" className="text-blue-600 flex items-center mt-4">
//                                     Discover Societies <ChevronRight className="ml-1 h-4 w-4" />
//                                 </Link>
//                             </CardContent>
//                         </Card>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default Home;
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import collegeBackground from "@/assets/image.png";

import {
  BookOpen,
  Calculator,
  Trophy,
  Briefcase,
  Crown,
  ArrowRight,
  GraduationCap,
  Users // Added icon for societies
} from "lucide-react";

const Home = () => {
  const branches = [
    "CSE-AI", "CSE", "IT", "AI/ML", "ECE-AI", "ECE", "MAE","Mathematical & Computing"
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Academic Resources",
      description: "Notes, PDFs, tutorials, PYQs, and YouTube links for all subjects",
      href: "/academic",
      color: "bg-indigo-500",
      iconColor: "text-indigo-500",
      premium: true
    },
    {
      icon: Calculator,
      title: "CGPA Calculator",
      description: "Calculate your CGPA easily with our intuitive calculator",
      href: "/cgpa-calculator",
      color: "bg-blue-500",
      iconColor: "text-blue-500",
      premium: true
    },
    {
      icon: Trophy,
      title: "Scholarships",
      description: "Discover scholarship opportunities and application guidance",
      href: "/scholarships",
      color: "bg-yellow-500",
      iconColor: "text-yellow-500",
      premium: true
    },
    { // New feature object for Societies
      icon: Users,
      title: "Explore Societies",
      description: "Discover all the technical, cultural, and other societies at IGDTUW.",
      href: "/societies",
      color: "bg-purple-500",
      iconColor: "text-purple-500",
      premium: true
    }
  ];

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-start">
        {/* Background Image with Enhanced Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-parallax"
          style={{ backgroundImage: `url(${collegeBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

        <div className="absolute max-w-6xl ml-8 lg:ml-16 px-6 py-20 z-10 mt-16 mb-0">
          <div className="text-left space-y-6">
            {/* Main Heading - StudyHub */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 leading-none tracking-tight drop-shadow-2xl font-poppins">
              StudyHub
            </h1>
            
            {/* Secondary Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-100 mb-4 leading-tight drop-shadow-lg font-poppins">
              Unlock Your Potential at IGDTUW
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light mb-10 leading-relaxed max-w-2xl drop-shadow-md font-inter">
              Your comprehensive resource center for academic excellence
            </p>
          </div>
          
          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Link to="/academic">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg font-semibold px-12 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border-0 font-inter">
                Explore Resources
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/90 text-gray-900 bg-white/95 hover:bg-white hover:text-gray-800 text-lg font-semibold px-12 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm font-inter"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 leading-tight font-poppins">
              All Branches Covered
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-inter">
              Comprehensive resources for every engineering discipline at IGDTUW
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {branches.map((branch, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-lg font-semibold py-4 px-8 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 text-gray-800 dark:text-white hover:from-green-100 hover:to-blue-100 dark:hover:from-green-800 dark:hover:to-blue-800 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl cursor-pointer font-inter"
              >
                {branch}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Everything You Need to Excel
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              From academic resources to career opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-academic transition-all duration-500 group cursor-pointer border-2 hover:border-primary/20 rounded-2xl">
                <Link to={feature.href}>
                  <div className="flex items-start gap-6">
                    <div className={`${feature.color} p-5 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-semibold text-foreground">{feature.title}</h3>
                        {feature.premium && <Crown className="h-5 w-5 text-yellow-500" />}
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-50 dark:bg-gray-800 border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-primary dark:text-white">StudyHub</h3>
          </div>
          <p className="text-muted-foreground text-sm">
            Empowering students with comprehensive academic resources and opportunities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;