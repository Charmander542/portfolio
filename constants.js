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
    name: "Research",
    ref: "research",
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
  },
  {
    name: "orcid",
    url: "https://orcid.org/0009-0004-7828-1612",
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

export const RESEARCH = [
  {
    title: "Fault Detection and Response for Safe Control of Artificial Muscles in Soft Robots",
    authors: "C. Van Hook, R. Jing, I. Yang, A. P. Sabelhaus",
    venue: "IEEE Control Systems Letters",
    year: "2025",
    description:
      "Fault detetion system for soft robots using artificial muscles. Combining redundant sensing, model-based state estimation, and Gaussion Process regression.",
    tags: ["Robotics", "Machine Learning", "Soft Robots"],
    links: {
      paper: "https://ieeexplore.ieee.org/document/11165112",
      code: "https://github.com/softroboticscontrollab/SMA-resistance-Measurement",
      // pdf: "/your-paper.pdf",  ← drop a PDF into /public and set the path here
    },
  },
  {
    title: "Scaling Up Parallel Decoding of LoRa Channels",
    authors: "C. Van Hook, T. Adler, D. Starobinski",
    venue: "IEEE ICC 2026 - IOT",
    year: "2026",
    description:
      "Parallel decoding of LoRa channels using GNU Radio. Combining channel estimation, demodulation, and decoding in a single flow.",
    tags: ["GNU Radio", "LoRa", "Software Defined Radio"],
    links: {
      pdf: "/Multiplexing.pdf",
      code: "https://github.com/Charmander542/LoRaMultiplex",
    },
  },
];

export const PROJECTS = [
  {
    name: "Hexapod",
    image: "/projects/hexapod/photos/full.png",
    url: "/projects/hexapod",
    tech: ["python", "fusion360", "cpp", "opencv", "arduino"],
    category: ['Engineering', 'PCB Design', 'Code'],
    tags: ["Robotics", "3D Printing", "Computer Vision", "PCB Design"],
    done: true,
  },
  {
    name: "LiDaR Robot",
    image: "/projects/cheesebot/photos/inprogress.png",
    url: "/projects/lidar_robot",
    tech: ["fusion360", "ros", "nvidia", "cpp"],
    category: ['Engineering', 'Code'],
    tags: ["Robotics", "ROS", "SLAM", "Autonomous Navigation"],
    done: true,
  },
  {
    name: "Robotic Arm",
    image: "/projects/robotarm/photos/parts.png",
    url: "/projects/robot_arm",
    tech: ["fusion360", "ros", "cpp"],
    category: ['Engineering', 'Code'],
    tags: ["Robotics", "3D Printing", "ROS", "CAD"],
    done: true,
  },
  {
    name: "AI Chessboard",
    image: "/projects/chessboard/photos/full.png",
    url: "/projects/chessboard",
    tech: ["altium", "cpp", "fusion360"],
    category: ['Engineering', 'PCB Design', 'Code'],
    tags: ["Robotics", "PCB Design", "AI", "Embedded Systems"],
    done: true,
  },
  {
    name: "Electric Skateboard",
    image: "/projects/skateboard/photos/full.png",
    tech: ["altium", "fusion360"],
    category: ['Engineering', 'PCB Design'],
    tags: ["Engineering", "PCB Design", "CNC", "Power Electronics"],
    done: true,
  },
  {
    name: "Arcade Cabinet",
    image: "/projects/arcade/photos/off2.png",
    tech: ["fusion360"],
    category: ['Engineering'],
    tags: ["Engineering", "CNC", "Woodworking", "Emulation"],
    done: true,
  },
  {
    name: "CNC Machine",
    image: "/projects/cncmachine/photos/full.png",
    tech: ["fusion360"],
    category: ['Engineering', 'Code', 'PCB Design'],
    tags: ["Engineering", "CNC", "Machining", "PCB Design"],
    done: true,
  },
  {
    name: "Accesability Controller",
    image: "/projects/controller/photos/front.jpg",
    tech: ["onshape", "cpp"],
    category: ['Engineering', 'Code'],
    tags: ["Embedded Systems", "Hackathon", "3D Printing", "HID"],
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