export const METADATA = {
  author: "Charles Van Hook",
  title: "Charles Van Hook | Portfolio",
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
  " an Engineer",
  " a Developer"
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:cvanhook@bu.edu",
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

export const MAINPROJECTS = [
  {
    name: "Hexapod",
    image: "/projects/spider.png",
    description: "Robotic Hexapod with AI Controlled Arm",
    gradient: ["#F14658", "#DC2537"],
    url: "/projects/hexapod",
    tech: ["python", "fusion360", "cpp", "opencv", "arduino"],
  },
  {
    name: "LiDaR Robot",
    image: "/projects/cheesebot.png",
    description: "Nvidia Jetson Controled Robot with Autonomous Maping and Navigation",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "/projects/lidar_robot",
    tech: ["fusion360", "ros", "nvidia", "cpp"],
  },
  {
    name: "Robotic Arm",
    image: "/projects/arm.png",
    description: "3D Printed 8DOF Robotic Arm with ROS Move:it controls",
    gradient: ["#000066", "#6699FF"],
    url: "/projects/robot_arm",
    tech: ["fusion360", "ros", "cpp"],
  },
  {
    name: "AI Chessboard",
    image: "/projects/chessboard.png",
    description: "An AI Controlled Chessboard that Emulates Players",
    gradient: ["#142D46", "#2E4964"],
    url: "/projects/chessboard",
    tech: ["fusion360", "altium", "cpp"],
  },
];

export const PROJECTS = [
  {
    name: "Hexapod",
    image: "/projects/hexapod/photos/full.png",
    url: "/projects/hexapod",
    tech: ["python", "fusion360", "cpp", "opencv", "arduino"],
    category: ['Engineering', 'PCB Design', 'Code'],
    done: true,
  },
  {
    name: "LiDaR Robot",
    image: "/projects/cheesebot/photos/inprogress.png",
    url: "/projects/lidar_robot",
    tech: ["fusion360", "ros", "nvidia", "cpp"],
    category: ['Engineering', 'Code'],
    done: true,
  },
  {
    name: "Robotic Arm",
    image: "/projects/robotarm/photos/parts.png",
    url: "/projects/robot_arm",
    tech: ["fusion360", "ros", "cpp"],
    category: ['Engineering', 'Code'],
    done: true,
  },
  {
    name: "AI Chessboard",
    image: "/projects/chessboard/photos/full.png",
    url: "/projects/chessboard",
    tech: ["altium", "cpp", "fusion360"],
    category: ['Engineering', 'PCB Design', 'Code'],
    done: true,
  },
  {
    name: "Electric Skateboard",
    image: "/projects/skateboard/photos/full.png",
    tech: ["altium", "fusion360"],
    category: ['Engineering', 'PCB Design'],
    done: true,
  },
  {
    name: "Arcade Cabinet",
    image: "/projects/arcade/photos/off2.png",
    tech: ["fusion360"],
    category: ['Engineering'],
    done: true,
  },
  {
    name: "CNC Machine",
    image: "/projects/cncmachine/photos/full.png",
    tech: ["fusion360"],
    category: ['Engineering', 'Code', 'PCB Design'],
    done: true,
  },
  {
    name: "Accesability Controller",
    image: "/projects/controller/photos/front.jpg",
    tech: ["onshape", "cpp"],
    category: ['Engineering', 'Code'],
    done: true,
  },



]
/*
  {
    name: "POV Globe",
    image: "/projects/cncmachine/photos/full.png",
    tech: ["onshape", "arduino"],
    category: ['Engineering', 'Code'],
    done: true,
  },
  {
    name: "Altoids Speaker",
    image: "/projects/speaker/photos/full.png",
    tech: ["onshape", "altium"],
    category: ['Engineering', 'PCB Design'],
    done: true,
  },*/