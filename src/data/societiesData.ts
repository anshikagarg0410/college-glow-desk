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
//         name: "GDSC IGDTUW",
//         description: "GDSC IGDTUW is a student community focused on Google technologies. They offer workshops and projects in areas like Android, Flutter, and Cloud Computing to help students solve real-world problems",
//       },
//       {
//         name: "MSC",
//         description: "MSC provides guidance for students' engineering journeys. They offer sessions and events where students can learn from the experiences of experts, seniors, and peers",
        
//       },
//       {
//         name: "IEEE Student Chapter",
//         description: "A platform for women engineers. The society encourages technical excellence and innovation through various events, competitions, and conferences, with the goal of contributing to a globally.",
//       },
//       {
//         name: "Techneeds",
//         description: "It is a community for tech enthusiasts .The organization hosts hackathons to promote innovation and speaker sessions with industry experts to share knowledge and experiences.",
//       },
//       {
//         name: "Assetmarkle",
//         description: "AssetMerkle isn't just a society—it's a family dedicated to helping students navigate the complex world of blockchain and Web3.",
//       },
//       {
//         name: "Optica",
//         description: "It aims to enrich the typical technical college experience by providing opportunities to broaden your knowledge and perspectives.",
//       },
//       {
//         name: "Lean In",
//         description: "Lean In offers a range of events throughout the year, including an annual hackathon that attracts over 800 coders",
//       },
//       {
//         name: "AWS",
//         description: "dedicated to fostering a vibrant, student-driven community focused on the exploration and application of Amazon Web Services (AWS).",
//       },
//       {
//         name: "HackClub",
//         description: "To cultivate an inspiring and dynamic community where tech enthusiasts of all levels can come together to learn, innovate, collaborate and grow.",
//       },
//       {
//         name: "Nirvana",
//         description: "The Design Club of IGDTUW, our motto is Design. Innovate. Inspire We envision being the leading platform for design innovation",
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
  website: string;
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
        name: "GDSC IGDTUW",
        description: "GDSC IGDTUW is a student community focused on Google technologies. They offer workshops and projects in areas like Android, Flutter, and Cloud Computing to help students solve real-world problems",
        website: "https://www.instagram.com/gdsc_igdtuw/",
      },
      {
        name: "MSC",
        description: "MSC provides guidance for students' engineering journeys. They offer sessions and events where students can learn from the experiences of experts, seniors, and peers",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "IEEE Student Chapter",
        description: "A platform for women engineers. The society encourages technical excellence and innovation through various events, competitions, and conferences, with the goal of contributing to a globally.",
        website: "https://ieee-igdtuw.github.io/IEEE-IGDTUW-Official-Website/",
      },
      {
        name: "Techneeds",
        description: "It is a community for tech enthusiasts .The organization hosts hackathons to promote innovation and speaker sessions with industry experts to share knowledge and experiences.",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "Assetmarkle",
        description: "AssetMerkle isn't just a society—it's a family dedicated to helping students navigate the complex world of blockchain and Web3.",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "Optica",
        description: "It aims to enrich the typical technical college experience by providing opportunities to broaden your knowledge and perspectives.",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "Lean In",
        description: "Lean In offers a range of events throughout the year, including an annual hackathon that attracts over 800 coders",
        website: "https://leanin.org/circles-network/lean-in--igdtuw",
      },
      {
        name: "AWS",
        description: "dedicated to fostering a vibrant, student-driven community focused on the exploration and application of Amazon Web Services (AWS).",
        website: "https://www.meetup.com/ko-KR/aws-cloud-club-igdtuw/",
      },
      {
        name: "HackClub",
        description: "To cultivate an inspiring and dynamic community where tech enthusiasts of all levels can come together to learn, innovate, collaborate and grow.",
        website: "https://www.hackwithindia.in/Chapters",
      },
      {
        name: "Nirvana",
        description: "The Design Club of IGDTUW, our motto is Design. Innovate. Inspire We envision being the leading platform for design innovation",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "AI CLUB",
        description: "The AI Club is a society for students interested in Artificial Intelligence and Machine Learning, providing a platform to learn and build projects.",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "CodeBenders",
        description: "CodeBenders is a coding community that aims to improve students' coding skills and prepare them for technical challenges.",
        website: "https://codebendersigdtuw.github.io/Codebender-22/",
      },
      {
        name: "Minerva (virtual tech forum)",
        description: "Minerva is a virtual tech forum that hosts online discussions and workshops on the latest technologies.",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "ROBOLUTION (robotics team)",
        description: "ROBOLUTION is the official robotics team of the college, where students design, build, and program robots for various competitions.",
        website: "https://robolution.in/",
      },
    ],
  },
  {
    category: "Cultural Societies",
    societies: [
      {
        name: "Tarannum (music society)",
        description: "Tarannum is the music society of IGDTUW, dedicated to promoting and celebrating music in all its forms.",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "ZENA (Fashion Society)",
        description: "ZENA is the fashion society that provides a platform for students to showcase their creativity and passion for fashion.",
        website: "https://www.instagram.com/zena.igdtuw/",
      },
      {
        name: "RAHNUMA (Dramatics Society)",
        description: "RAHNUMA is the dramatics society that helps students hone their acting and stage performance skills.",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "HYPNOTICS (Dance Society)",
        description: "HYPNOTICS is the dance society that promotes and celebrates various dance forms among the students.",
        website: "https://www.igdtuw.ac.in/",
      },
    ],
  },
  {
    category: "Literary and Educational Societies",
    societies: [
      {
        name: "B.H.A.V.-The literary and public speaking society of IGDTUW",
        description: "BHAV is the literary and public speaking society that aims to improve communication and writing skills among students.",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "Finivesta (finance and economic society)",
        description: "Finivesta is the finance and economic society that helps students understand the world of finance and economics.",
        website: "https://official-website-finivesta.vercel.app/",
      },
      {
        name: "Technoliterati (The Literary Society)",
        description: "Technoliterati is the literary society that provides a platform for students to express their thoughts through writing and literature.",
        website: "https://m.youtube.com/@technoliteratiigdtuw3596",
      },
    ],
  },
  {
    category: "Media and Creative Societies",
    societies: [
      {
        name: "Soch",
        description: "Soch is the media and creative society that covers and documents various events and activities of the college.",
        website: "https://www.igdtuw.ac.in/",
      },
      {
        name: "PREKSHYA",
        description: "PREKSHYA is a creative society dedicated to art, photography, and other creative pursuits.",
        website: "https://www.igdtuw.ac.in/",
      },
    ],
  },
  {
    category: "Life Skill and Career-oriented Societies",
    societies: [
      {
        name: "Protege (mentorship society)",
        description: "Protege is a mentorship society that connects students with mentors to guide them in their academic and career paths.",
        website: "https://protege-mentoring.com/",
      },
      {
        name: "INSTINCT (The Peer Educator's and Life Skills society)",
        description: "INSTINCT is a society that focuses on developing life skills and providing peer education to the students.",
        website: "https://www.igdtuw.ac.in/",
      },
    ],
  },
];