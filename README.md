# Charles Van Hook - Engineering Portfolio

<div align="center">
  <img src="public/logo.svg" alt="Portfolio Logo" width="200"/>
  
  <h3>🚀 Interactive Portfolio Showcasing Robotics & Engineering Projects</h3>
  
  <p>
    <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
    <img alt="Next.js" src="https://img.shields.io/badge/Next.js-12.0.1-black" />
    <img alt="React" src="https://img.shields.io/badge/React-18.2.0-blue" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-4.9.5-blue" />
  </p>
</div>

---

## 📸 Screenshots

### 🏠 Homepage
<!-- Add your homepage screenshot here -->
![Homepage Screenshot](homepage.png)

### 🤖 Interactive 3D Robot
<!-- Add your 3D robot interaction screenshot here -->
![3D Robot Interaction](3d-robot.png)

### 📱 Responsive Design
<!-- Add your mobile/tablet screenshots here -->
![Mobile View](mobile-view.png)

### 🎯 Projects Section
<!-- Add your projects showcase screenshot here -->
![Projects Showcase](projects-showcase.png)

### Custom Loading Screen

![Loading Screen](custom-loading.png)

---

## ✨ Features

- **🎭 Interactive 3D Robot**: Animated 3D model that responds to mouse movement using Three.js
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **🎨 Modern UI/UX**: Smooth animations powered by GSAP and Framer Motion
- **⚡ Performance Optimized**: Built with Next.js for optimal loading speeds
- **🎯 Project Showcase**: Detailed portfolio of robotics and engineering projects
- **📧 Contact Integration**: EmailJS integration for seamless communication
- **🎵 Audio Integration**: Sound effects using Howler.js
- **🔄 Real-time Updates**: Dynamic content loading and state management

---

## 🛠️ Tech Stack

### Frontend Framework
<div align="center">
  <img src="https://img.shields.io/badge/Next.js-12.0.1-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
</div>

### Styling & Animation
<div align="center">
  <img src="https://img.shields.io/badge/Tailwind_CSS-2.2.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Sass-1.43.4-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass"/>
  <img src="https://img.shields.io/badge/GSAP-3.8.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP"/>
  <img src="https://img.shields.io/badge/Framer_Motion-10.16.16-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion"/>
</div>

### 3D Graphics & Visualization
<div align="center">
  <img src="https://img.shields.io/badge/Three.js-0.160.0-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js"/>
  <img src="https://img.shields.io/badge/React_Three_Fiber-8.15.13-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="React Three Fiber"/>
  <img src="https://img.shields.io/badge/React_Three_Drei-9.93.0-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="React Three Drei"/>
</div>

### Development Tools
<div align="center">
  <img src="https://img.shields.io/badge/Node.js-16-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Webpack-5.89.0-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack"/>
  <img src="https://img.shields.io/badge/ESLint-<8.0.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/>
</div>

### Additional Libraries
<div align="center">
  <img src="https://img.shields.io/badge/EmailJS-3.4.0-D44638?style=for-the-badge&logo=gmail&logoColor=white" alt="EmailJS"/>
  <img src="https://img.shields.io/badge/Howler.js-2.2.3-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white" alt="Howler.js"/>
  <img src="https://img.shields.io/badge/Typed.js-2.0.12-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white" alt="Typed.js"/>
  <img src="https://img.shields.io/badge/Vanilla_Tilt-1.7.2-FF6B6B?style=for-the-badge&logo=javascript&logoColor=white" alt="Vanilla Tilt"/>
</div>

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16 or higher
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run the development server**
   ```bash
   yarn dev
   ```

4. **Open your browser**
   Navigate to [`http://localhost:3000`](http://localhost:3000) to view the application.

### Available Scripts

- `yarn dev` - Starts the development server
- `yarn build` - Builds the application for production
- `yarn start` - Starts the production server
- `yarn lint` - Runs ESLint for code quality

---

## 📁 Project Structure

```
portfolio/
├── components/          # React components
│   ├── Button/         # Reusable button component
│   ├── Card/           # Card components
│   ├── Contact/        # Contact form
│   ├── Header/         # Navigation and menu
│   ├── Hero/           # Hero section with 3D robot
│   ├── Projects/       # Project showcase
│   ├── Skills/         # Skills section
│   └── ...
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   ├── projects/       # Individual project pages
│   └── ...
├── public/             # Static assets
│   ├── projects/       # Project images and media
│   ├── skills/         # Technology icons
│   └── ...
├── styles/             # Global styles
└── ...
```

---

## 🎯 Key Projects Showcased

### 🤖 Hexapod Robot
- **Description**: Robotic Hexapod with AI Controlled Arm
- **Technologies**: Python, Fusion 360, C++, OpenCV, Arduino
- **Features**: Autonomous movement, computer vision integration

### 🗺️ LiDaR Robot
- **Description**: Nvidia Jetson Controlled Robot with Autonomous Mapping and Navigation
- **Technologies**: Fusion 360, ROS, NVIDIA Jetson, C++
- **Features**: SLAM navigation, real-time mapping

### 🦾 Robotic Arm
- **Description**: 3D Printed 8DOF Robotic Arm with ROS MoveIt controls
- **Technologies**: Fusion 360, ROS, C++
- **Features**: Inverse kinematics, trajectory planning

### ♟️ AI Chessboard
- **Description**: AI Controlled Chessboard that Emulates Players
- **Technologies**: Fusion 360, Altium Designer, C++
- **Features**: Computer vision, move validation

---

## 🎨 Design Features

- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Interactive Elements**: Hover effects, tilt animations, and micro-interactions
- **3D Integration**: Three.js-powered 3D robot model with mouse tracking
- **Responsive Layout**: Mobile-first design with Tailwind CSS
- **Performance Optimized**: Image optimization and lazy loading
- **Accessibility**: ARIA labels and keyboard navigation support

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by Charles Van Hook</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
