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

export const MAINPROJECTS = [
  {
    name: "Hexapod",
    image: "/projects/hexapod.png",
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
    tech: ["fusion360", "ROS", "nvidia", "cpp"],
  },
  {
    name: "Robotic Arm",
    image: "/projects/arm.png",
    description: "3D Printed 8DOF Robotic Arm with ROS Move:it controls",
    gradient: ["#000066", "#6699FF"],
    url: "/projects/robot_arm",
    tech: ["fusion360", "ROS", "cpp"],
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
    gradient: ["#F14658", "#DC2537"],
    url: "/projects/hexapod",
    tech: ["python", "fusion360", "cpp", "opencv", "arduino"],
    category: ['Engineering', 'PCB Design', 'Code'],
    done: true,
    markdown: "/projects/hexapod/hexapod.md"
  },
  {
    name: "LiDaR Robot",
    image: "/projects/cheesebot/photos/inprogress.png",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "/projects/lidar_robot",
    tech: ["fusion360", "ROS", "nvidia", "cpp"],
    category: ['Engineering', 'Code'],
    done: false,
    markdown: "/projects/cheesebot/chessebot.md"
  },
  {
    name: "Robotic Arm",
    image: "/projects/arm.png",
    gradient: ["#000066", "#6699FF"],
    url: "/projects/robot_arm",
    tech: ["fusion360", "ROS", "cpp"],
    category: ['Engineering', 'Code'],
    done: false,
    markdown: "/projects/arm/arm.md"
  },
  {
    name: "AI Chessboard",
    image: "/projects/chessboard/photos/full.png",
    gradient: ["#142D46", "#2E4964"],
    url: "/projects/chessboard",
    tech: ["altium", "cpp", "fusion360"],
    category: ['Engineering', 'PCB Design', 'Code'],
    done: true,
    markdown: "/projects/chessboard/chessboard.md"
  },
  {
    name: "Electric Skateboard",
    image: "/projects/skateboard/photos/full.png",
    gradient: ["#7DCE82", "#35AC3D"],
    tech: ["altium", "fusion360"],
    category: ['Engineering', 'PCB Design'],
    done: true,
    markdown: "/projects/skateboard/skateboard.md"
  },
  {
    name: "Arcade Cabinet",
    image: "/projects/arcade/photos/off2.png",
    gradient: ["#7DCE82", "#35AC3D"],
    tech: ["fusion360"],
    category: ['Engineering', 'Code'],
    done: true,
    markdown: "/projects/arcade/arcade.md"
  },
  {
    name: "CNC Machine",
    image: "/projects/cncmachine/photos/full.png",
    gradient: ["#7DCE82", "#35AC3D"],
    tech: ["fusion360"],
    category: ['Engineering', 'Code'],
    done: true,
    markdown: "/projects/cncmachine/cncmachine.md"
  },

]