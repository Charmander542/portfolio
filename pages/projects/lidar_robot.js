import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "LiDaR Robot";
const SPLINE_URL = "";

const LidarRobot = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/cheesebot/photos/inprogress.png"
      title="LiDaR Robot"
      subtitle="Autonomous campus-mapping robot powered by an Nvidia Jetson Nano and ROS"
      tags={["Robotics", "ROS", "SLAM", "Autonomous Navigation"]}
      gradient={["#FFA62E", "#EA4D2C"]}
    />

    <SectionWrapper label="Overview" title="Project Summary" accent>
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          During my junior year of high school I set out to build a robot capable of autonomously
          navigating and mapping my school&apos;s campus. Previous robots I&apos;d built used cameras and AprilTags;
          this project introduced me to the world of LiDAR.
        </p>
        <p>
          I started with a simple Arduino-only proof-of-concept that performed well. Emboldened by that
          success, I spent several months designing a large-scale 3D-printed robot capable of tackling
          more challenging terrain, running navigation in ROS simulations.
        </p>
      </div>
    </SectionWrapper>

    <TextImageSection
      label="Build"
      title="Design Process"
      image="/projects/cheesebot/photos/cadinsides.png"
      imageAlt="Internal CAD view"
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        The robot was designed around spare parts from my school&apos;s robotics lab — a constraint that added
        interesting design challenges. A LiDAR unit sits at the top, emitting a 360° laser sweep and
        measuring time-of-flight returns to build a 2D point-cloud map of the surroundings.
      </p>
    </TextImageSection>

    <GallerySection
      label="Gallery"
      images={[
        { src: "/projects/cheesebot/photos/turtlebot.png", alt: "Prototype robot", fit: "contain" },
        { src: "/projects/cheesebot.png", alt: "Full assembled robot" },
      ]}
    />

    <TextImageSection
      label="Software"
      title="Software"
      image="/projects/cheesebot/photos/map.png"
      imageAlt="Generated LiDAR map"
      reversed
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          I started with little knowledge of LiDAR and point-cloud mapping, learning through tutorials
          and trial and error. After hitting the limits of Arduino, I integrated an Nvidia Jetson Nano
          to run ROS and handle all navigation tasks.
        </p>
        <p>
          Localisation is achieved by fusing wheel encoder counts with onboard accelerometer readings,
          feeding both into a ROS SLAM node that places map points accurately in 2D space.
        </p>
      </div>
    </TextImageSection>

    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        A tricky design problem was ensuring the robot could traverse ledges and medium rocks without
        getting stuck. With two passive and two powered wheels in a cross pattern, both drive wheels
        could lose ground contact simultaneously. Adding springs to the rear wheel mount ensured at
        least one powered wheel always stays in contact with the surface.
      </p>
    </SectionWrapper>

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="LiDaR Robot 3D Model" />}

    <TechStackSection tech={["fusion360", "ros", "nvidia", "cpp"]} />
  </ProjectLayout>
);

export default LidarRobot;
