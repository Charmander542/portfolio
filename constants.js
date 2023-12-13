export const METADATA = {
  author: "Charles Van Hook",
  title: "Portfolio | Charles Van Hook",
  siteUrl: "",
  keywords: [
    "Charles Van Hook",
    "Frontend Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  " Charles Van Hook",
  " An Engineer",
  " A Developer",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: cvanhook@bu.edu",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/charles-van-hook",
  },
  {
    name: "github",
    url: "https://github.com/charmander542",
  }
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "cpp",
    "java",
    "python",
    "ros",
    "nodejs",
    //"webpack",
    //"vite",
    "firebase",
    // "moralis",
    // "stripe",
    // "figma",
    //"tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    //"redux",
    "nextjs",
    "tailwindcss",
    //"styledcomponents",
    //"antdesign",
    //"chakra-ui",
  ],
  software: [
    "altium",
    "fusion360",
    "onshape",
    "solidworks"
  ],
};

export const PROJECTS = [
  {
    name: "Hexapod",
    image: "/projects/hexapod.png",
    description: "Robotic Hexapod with AI Controlled Arm",
    gradient: ["#F14658", "#DC2537"],
    url: "/hexapod",
    tech: ["python", "fusion360", "cpp", "opencv", "arduino"],
  },
  {
    name: "LiDaR Robot",
    image: "/projects/cheesebot.png",
    description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "/lidar_robot",
    tech: ["fusion360", "ROS", "nvidia", "cpp"],
  },
  {
    name: "Robotic Arm",
    image: "/projects/arm.png",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["fusion360", "ROS", "cpp"],
  },
  {
    name: "AI Chessboard",
    image: "/projects/chessboard.png",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["altium", "cpp"],
  },
];