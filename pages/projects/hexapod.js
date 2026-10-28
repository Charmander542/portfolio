import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "Hexapod";
// To embed a Spline model, paste your Spline embed URL below:
const SPLINE_URL = "https://my.spline.design/hexapod-4c51c5ac5cdd2032c10b2e00223c4aa9/"; // e.g. "https://my.spline.design/yoursceneurl/"

const Hexapod = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      video="/projects/hexapod/spiderwalk.mp4"
      title="Hexapod Robot"
      subtitle="Six-legged autonomous robot with AI-controlled arm and computer vision"
      tags={["Robotics", "3D Printing", "Computer Vision", "PCB Design"]}
      gradient={["#F14658", "#DC2537"]}
    />

    <SectionWrapper label="Overview" title="Project Summary" accent>
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          During my sophomore year of high school, when the Covid pandemic left me with ample free time,
          I embarked on an ambitious project: a hexapod robot. This was a departure from the wheeled robots
          I had previously built for clubs and projects, and it presented a unique challenge I was eager to tackle.
        </p>
        <p>
          I took inspiration from real hexapods and various interpretations by others, and modeled the entire robot
          myself. The process involved 3D printing the robot, coding its movements, and creating a printed circuit
          board (PCB) to control it.
        </p>
        <p>
          In addition to the hexapod, I programmed a robotic arm equipped with a camera capable of picking up
          objects automatically — a feature that required me to delve into computer communication and computer vision.
        </p>
      </div>
    </SectionWrapper>

    <TextImageSection
      label="Build"
      title="Design Process"
      image="/projects/hexapod/photos/bottom.png"
      imageAlt="Hexapod underside"
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        The design uses three servos per leg to control the tibia, femur, and coxa — 18 servos total.
        An off-the-shelf robotic arm is mounted on top. The shell is entirely 3D printed. An Arduino Mega
        controls all the servos and power management, while a Raspberry Pi runs a custom computer vision
        script to move the arm toward objects for pickup.
      </p>
    </TextImageSection>


    <TextImageSection
      label="Software"
      title="Software"
      image="/projects/hexapod/photos/dof.jpg"
      imageAlt="Degrees of freedom diagram"
      reversed
      objectFit="contain"
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        C++ runs on the Arduino Mega, while Python handles the Raspberry Pi. Solving the inverse kinematics
        was the most interesting part — I implemented four different gaits to emulate how real six-legged
        creatures walk. The image recognition software uses OpenCV for object detection and converts the
        x/y screen position into a movement algorithm to pick up objects.
      </p>
    </TextImageSection>

    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        My initial approach used linear actuators, but their sluggish response and cost led me to pivot to
        servo motors. Servos introduced their own issues — a tendency to break under strain. To mitigate
        this I integrated temperature and current sensors to safeguard the motors from damage.
      </p>
    </SectionWrapper>

    <GallerySection
      label="Gallery"
      title="Photos & Gallery"
      cols={3}
      images={[
        { src: "/projects/spider.png", alt: "Hexapod full view", fit: "contain" },
        { src: "/projects/hexapod/photos/spider_arm.png", alt: "Hexapod arm in action" },
        { src: "/projects/hexapod/photos/1.jpg", alt: "Hexapod detail 1" },
        { src: "/projects/hexapod/photos/2.jpg", alt: "Hexapod detail 2" },
        { src: "/projects/hexapod/photos/3.jpg", alt: "Hexapod detail 3" },
        { src: "/projects/hexapod/photos/walking.jpg", alt: "Hexapod walking" },
      ]}
    />

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="Hexapod 3D Model" />}

    <TechStackSection tech={["python", "fusion360", "cpp", "opencv", "arduino"]} />
  </ProjectLayout>
);

export default Hexapod;
