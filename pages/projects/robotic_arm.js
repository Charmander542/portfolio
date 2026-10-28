import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "Robotic Arm";
const SPLINE_URL = "";

const RoboticArm = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/robotarm/photos/parts.jpg"
      title="Robotic Arm"
      subtitle="Seven-DOF 3D-printed arm designed in Fusion 360 with ROS MoveIt! integration"
      tags={["Robotics", "3D Printing", "ROS", "CAD"]}
      gradient={["#000066", "#6699FF"]}
    />

    <SectionWrapper label="Overview" title="Project Summary" accent>
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        In pursuit of expanding my knowledge in robotics, I designed a seven-degree-of-freedom robotic arm
        entirely in Fusion 360 and printed all components in-house. Although I was unable to secure funding for
        the NEMA motors required for full completion, the project became a deep dive into kinematics, ROS, and
        mechanical design.
      </p>
    </SectionWrapper>

    <TextImageSection
      label="Build"
      title="Design Process"
      image="/projects/robotarm/photos/armcad.png"
      imageAlt="Arm CAD model"
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        Each of the seven joints is driven by a NEMA motor with an encoder for precise position feedback.
        One DOF uses a custom-designed linear actuator to extend the arm&apos;s reach. The original plan was to
        machine parts from aluminium; 3D printing was used as a proof-of-concept path that still fully
        demonstrates the kinematics and control logic.
      </p>
    </TextImageSection>

    <GallerySection
      label="Gallery"
      images={[
        { src: "/projects/robotarm/photos/moveit.jpg", alt: "MoveIt! simulation" },
        { src: "/projects/robotarm/photos/dofdiagram.png", alt: "DOF diagram" },
      ]}
    />

    <TextImageSection
      label="Software"
      title="Software & Hardware"
      image="/projects/robotarm/photos/examplecode.png"
      imageAlt="Control code"
      reversed
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        The arm was programmed in ROS with MoveIt! for motion planning. Despite the absence of physical
        motors, I was able to simulate the full range of motion and program it to follow G-code instructions.
        An Arduino handles the low-level servo interface while ROS manages path planning and collision
        avoidance.
      </p>
    </TextImageSection>

    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        Programming the arm in ROS required a steep learning curve in robotics software and control theory.
        Sourcing NEMA motors and the custom linear actuator proved difficult within budget. Despite these
        hurdles, building custom motion programs that respond to G-code instructions deepened my understanding
        of robotics design significantly.
      </p>
    </SectionWrapper>

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="Robotic Arm 3D Model" />}

    <TechStackSection tech={["fusion360", "ros", "cpp"]} />
  </ProjectLayout>
);

export default RoboticArm;
