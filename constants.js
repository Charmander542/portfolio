export const METADATA = {
  author: "Charles Van Hook",
  title: "Charles Van Hook | EE PhD · Chip Design & Robotics",
  description:
    "Portfolio of Charles Van Hook — Stanford EE PhD student. Chip design, ASIC/RTL, Verilog, robotics, and embedded systems. Former Tesla Robotics Engineer.",
  siteUrl: "https://charlesvanhook.com",
  image: "/logo.svg",
  twitterHandle: "",
  keywords: [
    "Charles Van Hook",
    "Electrical Engineering",
    "Stanford EE PhD",
    "Chip Design",
    "ASIC",
    "RTL",
    "SystemVerilog",
    "Verilog",
    "FPGA",
    "Cadence Virtuoso",
    "Robotics",
    "Soft Robots",
    "Tesla",
    "Portfolio",
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

// Roles only — the name stays as fixed text in the hero for SEO / no-JS.
export const TYPED_STRINGS = [
  "an Engineer",
  "a Researcher",
  "a Chip Designer",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto:cvanhook@stanford.edu",
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

export const SKILL_NAMES = {
  cpp:         "C++",
  c:           "C",
  python:      "Python",
  verilog:     "Verilog",
  matlab:      "MATLAB",
  javascript:  "JavaScript",
  typescript:  "TypeScript",
  git:         "Git",
  tensorflow:  "TensorFlow",
  opencv:      "OpenCV",
  ros:         "ROS",
  react:       "React",
  nextjs:      "Next.js",
  linux:       "Linux",
  tailwindcss: "Tailwind",
  nodejs:      "Node.js",
  arduino:     "Arduino",
  nvidia:      "NVIDIA",
  altium:      "Altium",
  fusion360:   "Fusion 360",
  onshape:     "Onshape",
  solidworks:  "SolidWorks",
  xilinx:      "Xilinx",
  cadence:     "Cadence Virtuoso",
  synopsys:    "Synopsys",
  vivado:      "Vivado",
  spice:       "SPICE",
};

export const SKILLS = {
  languagesAndTools: [
    "cpp",
    "python",
    "c",
    "verilog",
    "matlab",
    "javascript",
    "git",
  ],
  librariesAndFrameworks: [
    "tensorflow",
    "opencv",
    "ros",
    "react",
    "tailwindcss",
    "linux",
  ],
  software: [
    "cadence",
    "synopsys",
    "vivado",
    "spice",
    "xilinx",
    "altium",
    "fusion360",
    "onshape",
    "solidworks",
    "arduino",
  ],
};

export const MAINPROJECTS = [
  {
    name: "FPGA Microcontroller",
    image: "/projects/fpga_microcontroller/photos/fpga.jpg",
    description: "Five-stage MIPS-like CPU in Verilog on a Digilent Nexys A7 (Artix-7)",
    gradient: ["#0a0a2e", "#1a1a5c"],
    url: "/projects/fpga_microcontroller",
    tech: ["verilog", "vivado", "xilinx", "python"],
  },
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
    description: "Nvidia Jetson Controlled Robot with Autonomous Mapping and Navigation",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "/projects/lidar_robot",
    tech: ["fusion360", "ros", "nvidia", "cpp"],
  },
  {
    name: "Robotic Arm",
    image: "/projects/arm.png",
    description: "3D Printed 7-DOF Robotic Arm with ROS MoveIt controls",
    gradient: ["#000066", "#6699FF"],
    url: "/projects/robotic_arm",
    tech: ["fusion360", "ros", "cpp"],
  },
];

export const RESEARCH = [
  {
    title: "Fault Detection and Response for Safe Control of Artificial Muscles in Soft Robots",
    authors: "R. Jing*, C. Van Hook*, I. Yang, A. P. Sabelhaus (*equal contribution)",
    venue: "IEEE Control Systems Letters",
    year: "2025",
    description:
      "Fault detection system for soft robots using artificial muscles. Combining redundant sensing, model-based state estimation, and Gaussian Process regression.",
    tags: ["Robotics", "Machine Learning", "Soft Robots"],
    links: {
      paper: "https://ieeexplore.ieee.org/document/11165112",
      pdf: "/research/fault/paper.pdf",
      // Code repo previously linked 404s; omit until a public repo is available.
    },
    slug: "fault_detection_safe_soft_robots",
  },
  {
    title: "Scaling Up Parallel Decoding of LoRa Channels",
    authors: "C. Van Hook, T. Adler, D. Starobinski",
    venue: "IEEE ICC 2026 - IoT",
    year: "2026",
    description:
      "Parallel decoding of LoRa channels using GNU Radio. Combining channel estimation, demodulation, and decoding in a single flow.",
    tags: ["GNU Radio", "LoRa", "Software Defined Radio"],
    links: {
      pdf: "/Multiplexing.pdf",
      code: "https://github.com/Charmander542/LoRaMultiplex",
    },
    slug: "scaling_parallel_lora_channels",
  },
];

export const PROJECTS = [
  {
    name: "FPGA Microcontroller",
    image: "/projects/fpga_microcontroller/photos/fpga.jpg",
    url: "/projects/fpga_microcontroller",
    tech: ["verilog", "vivado", "xilinx", "python"],
    category: ["Engineering", "Code"],
    tags: ["FPGA", "Verilog", "RTL", "Computer Architecture", "Artix-7"],
    done: true,
  },
  {
    name: "Griffith Observatory Celestial Globe",
    image: "/projects/griffith_observatory/photos/celestial.jpg",
    url: "/projects/griffith_observatory",
    tech: ["python", "fusion360"],
    category: ["Engineering"],
    tags: ["Structural Engineering", "Nonlinear Programming", "Mesh Repair", "Bronze Casting"],
    done: true,
  },
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
    url: "/projects/robotic_arm",
    tech: ["fusion360", "ros", "cpp"],
    category: ['Engineering', 'Code'],
    tags: ["Robotics", "3D Printing", "ROS", "CAD"],
    done: true,
  },
  {
    name: "AI Chessboard",
    image: "/projects/chessboard/photos/full.png",
    url: "/projects/ai_chessboard",
    tech: ["altium", "cpp", "fusion360"],
    category: ['Engineering', 'PCB Design', 'Code'],
    tags: ["Robotics", "PCB Design", "AI", "Embedded Systems"],
    done: true,
  },
  {
    name: "Electric Skateboard",
    image: "/projects/skateboard/photos/full.png",
    url: "/projects/electric_skateboard",
    tech: ["altium", "fusion360"],
    category: ['Engineering', 'PCB Design'],
    tags: ["Engineering", "PCB Design", "CNC", "Power Electronics"],
    done: true,
  },
  {
    name: "Arcade Cabinet",
    image: "/projects/arcade/photos/off2.png",
    url: "/projects/arcade_cabinet",
    tech: ["fusion360"],
    category: ['Engineering'],
    tags: ["Engineering", "CNC", "Woodworking", "Emulation"],
    done: true,
  },
  {
    name: "CNC Machine",
    image: "/projects/cncmachine/photos/full.png",
    url: "/projects/cnc_machine",
    tech: ["fusion360"],
    category: ['Engineering', 'Code', 'PCB Design'],
    tags: ["Engineering", "CNC", "Machining", "PCB Design"],
    done: true,
  },
  {
    name: "Accessibility Controller",
    image: "/projects/controller/photos/front.jpg",
    url: "/projects/accessibility_controller",
    tech: ["onshape", "cpp"],
    category: ['Engineering', 'Code'],
    tags: ["Embedded Systems", "Hackathon", "3D Printing", "HID"],
    done: true,
  },
  {
    name: "Stabilizing Mug",
    image: "/projects/stabilizing_mug/photos/cup.JPG",
    url: "/projects/stabilizing_mug",
    tech: ["onshape", "cpp"],
    category: ['Engineering', '3D Printing'],
    tags: ["Embedded Systems", "3D Printing", "Gyroscope", "Accelerometer"],
    done: true,
  },
  {
    name: "Braille Ebook",
    image: "/projects/braille_ebook/photos/braille.webp",
    url: "/projects/braille_ebook",
    tech: ["onshape", "cpp", "altium"],
    category: ['Engineering', '3D Printing'],
    tags: ["Embedded Systems", "3D Printing", "Braille", "PCB Design"],
    done: true,
  },
  {
    name: "Persistence of Vision Globe",
    image: "/projects/pov_globe/photos/globe.jpg",
    url: "/projects/pov_globe",
    tech: ["onshape", "arduino", "python"],
    category: ['Engineering', '3D Printing'],
    tags: ["Embedded Systems", "3D Printing", "Persistence of Vision", "Laser Cutting"],
    done: true,
  },
  {
    name: "Electronic Twister",
    image: "/projects/electronic_twister/photos/twisterfull.JPG",
    url: "/projects/electronic_twister",
    tech: ["cpp", "python"],
    category: ['Engineering', 'Code'],
    tags: ["Embedded Systems", "BeagleBone", "Linux Kernel", "3D Printing"],
    done: true
  },
  {
    name: "Password Manager",
    image: "/projects/inprogress.png",
    url: "/projects/password_manager",
    tech: ["cpp", "altium"],
    category: ['Engineering', 'PCB Design', 'Code'],
    tags: ["Embedded Systems", "PCB Design", "Security", "Cryptography"],
    done: false,
  },
  {
    name: "Electronic Pickleball PCB",
    image: "/projects/inprogress.png",
    url: "/projects/electronic_pickleball_pcb",
    tech: ["altium"],
    category: ['Engineering', 'PCB Design'],
    tags: ["Embedded Systems", "PCB Design", "Sports Technology"],
    done: false,
  },
];
