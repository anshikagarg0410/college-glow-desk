// interface Society {
//   name: string;
//   description: string;
// }

// interface SocietyCategory {
//   category: string;
//   societies: Society[];
// }

// export const societiesData: SocietyCategory[] = [
//   {
//     category: "Technical Societies",
//     societies: [
//       {
//         name: "GDSC",
//         description: "GDSC is a Google Developers student club that helps students bridge the gap between theory and practice and build their skills in the field of technology.",
//       },
//       {
//         name: "MSC",
//         description: "MSC is a Microsoft Student Community that aims to empower students to build, innovate, and connect with the latest Microsoft technologies.",
//       },
//       {
//         name: "IEEE Student Chapter",
//         description: "The IEEE Student Chapter provides a platform for students to explore their interests in various technical fields and gain professional experience.",
//       },
//       {
//         name: "Techneeds",
//         description: "Techneeds focuses on providing technical skills and knowledge to students through workshops and events.",
//       },
//       {
//         name: "Assetmarkle",
//         description: "Assetmarkle is a technical society that provides a platform for students to learn and work on real-world projects in the field of technology.",
//       },
//       {
//         name: "Optica",
//         description: "Optica is a society dedicated to the science and applications of light, focusing on optics and photonics.",
//       },
//       {
//         name: "Lean In",
//         description: "Lean In is a community that encourages women to achieve their ambitions and provides a platform for professional growth and support.",
//       },
//       {
//         name: "AWS",
//         description: "The AWS Student Club aims to help students learn and work on Amazon Web Services technologies.",
//       },
//       {
//         name: "HackClub",
//         description: "HackClub is a global nonprofit network of student-led coding clubs where students build things and learn to code.",
//       },
//       {
//         name: "Nirvana",
//         description: "Nirvana is a technical society focused on various fields of engineering and technology.",
//       },
//       {
//         name: "AI CLUB",
//         description: "The AI Club is a society for students interested in Artificial Intelligence and Machine Learning, providing a platform to learn and build projects.",
//       },
//       {
//         name: "CodeBenders",
//         description: "CodeBenders is a coding community that aims to improve students' coding skills and prepare them for technical challenges.",
//       },
//       {
//         name: "Minerva (virtual tech forum)",
//         description: "Minerva is a virtual tech forum that hosts online discussions and workshops on the latest technologies.",
//       },
//       {
//         name: "ROBOLUTION (robotics team)",
//         description: "ROBOLUTION is the official robotics team of the college, where students design, build, and program robots for various competitions.",
//       },
//     ],
//   },
//   {
//     category: "Cultural Societies",
//     societies: [
//       {
//         name: "Tarannum (music society)",
//         description: "Tarannum is the music society of IGDTUW, dedicated to promoting and celebrating music in all its forms.",
//       },
//       {
//         name: "ZENA (Fashion Society)",
//         description: "ZENA is the fashion society that provides a platform for students to showcase their creativity and passion for fashion.",
//       },
//       {
//         name: "RAHNUMA (Dramatics Society)",
//         description: "RAHNUMA is the dramatics society that helps students hone their acting and stage performance skills.",
//       },
//       {
//         name: "HYPNOTICS (Dance Society)",
//         description: "HYPNOTICS is the dance society that promotes and celebrates various dance forms among the students.",
//       },
//     ],
//   },
//   {
//     category: "Literary and Educational Societies",
//     societies: [
//       {
//         name: "B.H.A.V.-The literary and public speaking society of IGDTUW",
//         description: "BHAV is the literary and public speaking society that aims to improve communication and writing skills among students.",
//       },
//       {
//         name: "Finivesta (finance and economic society)",
//         description: "Finivesta is the finance and economic society that helps students understand the world of finance and economics.",
//       },
//       {
//         name: "Technoliterati (The Literary Society)",
//         description: "Technoliterati is the literary society that provides a platform for students to express their thoughts through writing and literature.",
//       },
//     ],
//   },
//   {
//     category: "Media and Creative Societies",
//     societies: [
//       {
//         name: "Soch",
//         description: "Soch is the media and creative society that covers and documents various events and activities of the college.",
//       },
//       {
//         name: "PREKSHYA",
//         description: "PREKSHYA is a creative society dedicated to art, photography, and other creative pursuits.",
//       },
//     ],
//   },
//   {
//     category: "Life Skill and Career-oriented Societies",
//     societies: [
//       {
//         name: "Protege (mentorship society)",
//         description: "Protege is a mentorship society that connects students with mentors to guide them in their academic and career paths.",
//       },
//       {
//         name: "INSTINCT (The Peer Educator's and Life Skills society)",
//         description: "INSTINCT is a society that focuses on developing life skills and providing peer education to the students.",
//       },
//     ],
//   },
// ];
interface Society {
  name: string;
  description: string;
}

interface SocietyCategory {
  category: string;
  societies: Society[];
}

export const societiesData: SocietyCategory[] = [
  {
    category: "Technical Societies",
    societies: [
      {
        name: "GDSC",
        description: "GDSC is a Google Developers student club that helps students bridge the gap between theory and practice and build their skills in the field of technology.",
      },
      {
        name: "MSC",
        description: "MSC is a Microsoft Student Community that aims to empower students to build, innovate, and connect with the latest Microsoft technologies.",
      },
      {
        name: "IEEE Student Chapter",
        description: "The IEEE Student Chapter provides a platform for students to explore their interests in various technical fields and gain professional experience.",
      },
      {
        name: "Techneeds",
        description: "Techneeds focuses on providing technical skills and knowledge to students through workshops and events.",
      },
      {
        name: "Assetmarkle",
        description: "Assetmarkle is a technical society that provides a platform for students to learn and work on real-world projects in the field of technology.",
      },
      {
        name: "Optica",
        description: "Optica is a society dedicated to the science and applications of light, focusing on optics and photonics.",
      },
      {
        name: "Lean In",
        description: "Lean In is a community that encourages women to achieve their ambitions and provides a platform for professional growth and support.",
      },
      {
        name: "AWS",
        description: "The AWS Student Club aims to help students learn and work on Amazon Web Services technologies.",
      },
      {
        name: "HackClub",
        description: "HackClub is a global nonprofit network of student-led coding clubs where students build things and learn to code.",
      },
      {
        name: "Nirvana",
        description: "Nirvana is a technical society focused on various fields of engineering and technology.",
      },
      {
        name: "AI CLUB",
        description: "The AI Club is a society for students interested in Artificial Intelligence and Machine Learning, providing a platform to learn and build projects.",
      },
      {
        name: "CodeBenders",
        description: "CodeBenders is a coding community that aims to improve students' coding skills and prepare them for technical challenges.",
      },
      {
        name: "Minerva (virtual tech forum)",
        description: "Minerva is a virtual tech forum that hosts online discussions and workshops on the latest technologies.",
      },
      {
        name: "ROBOLUTION (robotics team)",
        description: "ROBOLUTION is the official robotics team of the college, where students design, build, and program robots for various competitions.",
      },
    ],
  },
  {
    category: "Cultural Societies",
    societies: [
      {
        name: "Tarannum (music society)",
        description: "Tarannum is the music society of IGDTUW, dedicated to promoting and celebrating music in all its forms.",
      },
      {
        name: "ZENA (Fashion Society)",
        description: "ZENA is the fashion society that provides a platform for students to showcase their creativity and passion for fashion.",
      },
      {
        name: "RAHNUMA (Dramatics Society)",
        description: "RAHNUMA is the dramatics society that helps students hone their acting and stage performance skills.",
      },
      {
        name: "HYPNOTICS (Dance Society)",
        description: "HYPNOTICS is the dance society that promotes and celebrates various dance forms among the students.",
      },
    ],
  },
  {
    category: "Literary and Educational Societies",
    societies: [
      {
        name: "B.H.A.V.-The literary and public speaking society of IGDTUW",
        description: "BHAV is the literary and public speaking society that aims to improve communication and writing skills among students.",
      },
      {
        name: "Finivesta (finance and economic society)",
        description: "Finivesta is the finance and economic society that helps students understand the world of finance and economics.",
      },
      {
        name: "Technoliterati (The Literary Society)",
        description: "Technoliterati is the literary society that provides a platform for students to express their thoughts through writing and literature.",
      },
    ],
  },
  {
    category: "Media and Creative Societies",
    societies: [
      {
        name: "Soch",
        description: "Soch is the media and creative society that covers and documents various events and activities of the college.",
      },
      {
        name: "PREKSHYA",
        description: "PREKSHYA is a creative society dedicated to art, photography, and other creative pursuits.",
      },
    ],
  },
  {
    category: "Life Skill and Career-oriented Societies",
    societies: [
      {
        name: "Protege (mentorship society)",
        description: "Protege is a mentorship society that connects students with mentors to guide them in their academic and career paths.",
      },
      {
        name: "INSTINCT (The Peer Educator's and Life Skills society)",
        description: "INSTINCT is a society that focuses on developing life skills and providing peer education to the students.",
      },
    ],
  },
];