// import { Link } from "react-router-dom";
// import Navigation from "@/components/Navigation";
// import { Card } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";

// const teamMembers = [
//   {
//     name: "Anshika Garg",
//     image: "src/assets/Anshika.jpg",
//     description: (
//       <>
//         2nd Year CSE <br /> anshika024btcse24@igdtuw.ac.in <br /><a href="https://www.linkedin.com/in/anshika-garg-8a9b62324/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">Connect</a>
//       </>
//     ),
//   },
//   {
//     name: "Khushi",
//     image: "src/assets/Khushi.jpg",
//     description: (
//       <>
//         2nd Year CSE-AI <br /> khushi096btcseai24@igdtuw.ac.in <br /><a href="https://www.linkedin.com/in/khushi-260785323/ " className="text-blue-500 hover:text-blue-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">Connect</a>
//       </>
//     ),
//   },
//   {
//     name: "Bhumika Goyal",
//     image: "src/assets/Bhumika.jpg",
//     description: (
//       <>
//         2nd Year IT <br /> bhumika026btit24@igdtuw.ac.in <br /><a href="https://www.linkedin.com/in/bhumika-goyal-70299a336/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">Connect</a>
//       </>
//     ),
//   },
//   {
//     name: "Arshi",
//     image: "src/assets/Arshi.jpg",
//     description: (
//       <>
//         2nd Year CSE-AI <br /> arshi044btcseai24@igdtuw.ac.in <br /><a href="https://www.linkedin.com/in/arshi-arya-a88248313/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300" target="_blank" rel="noopener noreferrer">Connect</a>
//       </>
//     ),
//   },
// ];

// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
//       <Navigation />
//       <div className="max-w-7xl mx-auto px-4 py-16 text-gray-800 dark:text-gray-200">
//         <header className="text-center mb-16">
//           <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
//             About Us
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
//             Welcome to the ultimate resource hub for IGDTUW students!
//           </p>
//         </header>

//         {/* Main Content Section */}
//         <Card className="p-10 shadow-2xl bg-white dark:bg-gray-800 rounded-2xl mb-16 border border-gray-200 dark:border-gray-700">
//           <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
//             Our Mission
//           </h2>
//           <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
//             We are a group of students creating a comprehensive resource site for the IGDTUW community. Our goal is to make academic life and career preparation easier by providing a centralized platform for essential resources.
//           </p>
//           <ul className="list-disc list-inside space-y-3 mt-8 text-gray-700 dark:text-gray-300 text-base">
//             <li><span className="font-semibold text-gray-900 dark:text-white">Notes and PYQs:</span> Easily accessible notes and Previous Year Question papers to help with exam preparation.</li>
//             <li><span className="font-semibold text-gray-900 dark:text-white">YouTube Playlists:</span> Curated playlists of video resources for various subjects.</li>
//             <li><span className="font-semibold text-gray-900 dark:text-white">CGPA Calculator:</span> A handy tool to track and calculate your academic performance.</li>
//             <li><span className="font-semibold text-gray-900 dark:text-white">Opportunities Hub:</span> Information on scholarships, hackathons, and other opportunities to boost your career.</li>
//             <li><span className="font-semibold text-gray-900 dark:text-white">Senior Guidance:</span> A platform for students to get valuable advice and mentorship from their seniors.</li>
//           </ul>
//         </Card>

//         {/* Team Section */}
//         <div className="text-center mb-10">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
//             Meet Our Creators
//           </h2>
//           <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
//             The dedicated team behind this initiative.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
//           {teamMembers.map((member, index) => (
//             <Card key={index} className="p-8 text-center bg-white dark:bg-gray-800 shadow-xl rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
//               <Avatar className="w-36 h-36 mx-auto mb-5 border-4 border-indigo-400 dark:border-indigo-600">
//                 <AvatarImage src={member.image} alt={member.name} className="object-cover" />
//                 <AvatarFallback className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-3xl font-bold">
//                   {member.name.split(' ').map(n => n[0]).join('')}
//                 </AvatarFallback>
//               </Avatar>
//               <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
//               <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">{member.description}</p>
//             </Card>
//           ))}
//         </div>

//         {/* Keep Learning Section */}
//         <div className="text-center py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-3xl shadow-3xl">
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
//             Keep Learning, Keep Growing!
//           </h2>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
//             We are continuously working to expand our resources and features to empower every IGDTUW student.
//           </p>
//           <Link to="/academic">
//             <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 dark:text-blue-600 dark:hover:bg-gray-200 transition-all duration-300 shadow-xl text-lg px-8 py-6 rounded-full font-semibold">
//               Explore Resources
//             </Button>
//           </Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default About;
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// Images ko sahi tareeke se import kiya gaya hai
import AnshikaImage from "@/assets/Anshika.jpg";
import KhushiImage from "@/assets/Khushi.jpg";
import BhumikaImage from "@/assets/Bhumika.jpg";
import ArshiImage from "@/assets/Arshi.jpg";

const teamMembers = [
  {
    name: "Anshika Garg",
    image: AnshikaImage, // Imported image ka use
    description: (
      <>
        2nd Year CSE <br /> anshika024btcse24@igdtuw.ac.in<br /><a href="https://www.linkedin.com/in/anshika-garg-8a9b62324/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300 inline-block mt-2" target="_blank" rel="noopener noreferrer">Connect</a>
      </>
    ),
  },
  {
    name: "Khushi",
    image: KhushiImage, // Imported image ka use
    description: (
      <>
        2nd Year CSE-AI <br /> khushi096btcseai24@igdtuw.ac.in <br /><a href="https://www.linkedin.com/in/khushi-260785323/ " className="text-blue-500 hover:text-blue-700 transition-colors duration-300 inline-block mt-2" target="_blank" rel="noopener noreferrer">Connect</a>
      </>
    ),
  },
  {
    name: "Bhumika Goyal",
    image: BhumikaImage, // Imported image ka use
    description: (
      <>
        2nd Year IT <br /> bhumika026btit24@igdtuw.ac.in <br /><a href="https://www.linkedin.com/in/bhumika-goyal-70299a336/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300 inline-block mt-2" target="_blank" rel="noopener noreferrer">Connect</a>
      </>
    ),
  },
  {
    name: "Arshi",
    image: ArshiImage, // Imported image ka use
    description: (
      <>
        2nd Year CSE-AI <br /> arshi044btcseai24@igdtuw.ac.in <br /><a href="https://www.linkedin.com/in/arshi-arya-a88248313/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300 inline-block mt-2" target="_blank" rel="noopener noreferrer">Connect</a>
      </>
    ),
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-16 text-gray-800 dark:text-gray-200">
        <header className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Welcome to the ultimate resource hub for IGDTUW students!
          </p>
        </header>

        {/* Main Content Section */}
        <Card className="p-10 shadow-2xl bg-white dark:bg-gray-800 rounded-2xl mb-16 border border-gray-200 dark:border-gray-700">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            We are a group of students creating a comprehensive resource site for the IGDTUW community. Our goal is to make academic life and career preparation easier by providing a centralized platform for essential resources.
          </p>
          <ul className="list-disc list-inside space-y-3 mt-8 text-gray-700 dark:text-gray-300 text-base">
            <li><span className="font-semibold text-gray-900 dark:text-white">Notes and PYQs:</span> Easily accessible notes and Previous Year Question papers to help with exam preparation.</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">YouTube Playlists:</span> Curated playlists of video resources for various subjects.</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">CGPA Calculator:</span> A handy tool to track and calculate your academic performance.</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">Opportunities Hub:</span> Information on scholarships, hackathons, and other opportunities to boost your career.</li>
            <li><span className="font-semibold text-gray-900 dark:text-white">Senior Guidance:</span> A platform for students to get valuable advice and mentorship from their seniors.</li>
          </ul>
        </Card>

        {/* Team Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Meet Our Creators
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            The dedicated team behind this initiative.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-8 text-center bg-white dark:bg-gray-800 shadow-xl rounded-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
              <Avatar className="w-36 h-36 mx-auto mb-5 border-4 border-indigo-400 dark:border-indigo-600">
                <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                <AvatarFallback className="bg-indigo-200 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200 text-3xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed break-words">{member.description}</p>
            </Card>
          ))}
        </div>

        {/* Keep Learning Section */}
        <div className="text-center py-16 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-3xl shadow-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Keep Learning, Keep Growing!
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            We are continuously working to expand our resources and features to empower every IGDTUW student.
          </p>
          <Link to="/academic">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 dark:text-blue-600 dark:hover:bg-gray-200 transition-all duration-300 shadow-xl text-lg px-8 py-6 rounded-full font-semibold">
              Explore Resources
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default About;