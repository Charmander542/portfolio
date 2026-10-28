import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "AI Chessboard";
const SPLINE_URL = "https://my.spline.design/untitled-b720bd546b27eb17e1c73717636074c5/";

const Chessboard = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/chessboard/photos/full.jpg"
      title="AI Chessboard"
      subtitle="Self-playing chessboard with a core-XY gantry and personalized AI opponent"
      tags={["Robotics", "PCB Design", "AI", "Embedded Systems"]}
      gradient={["#142D46", "#2E4964"]}
    />

    <SectionWrapper label="Overview" title="Project Summary" accent>
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        This project blends traditional chess with modern technology. The board uses a 3D-printed
        core-XY gantry and an electromagnet to move pieces from underneath, with reed switches on
        every square to detect piece presence. A standout feature is the board&apos;s ability to learn
        from a player&apos;s gameplay and build a personalised opponent the more they play.
      </p>
    </SectionWrapper>

    <TextImageSection
      label="Build"
      title="Design Process"
      image="/projects/chessboard/photos/corexy.jpg"
      imageAlt="CoreXY gantry diagram"
      objectFit="contain"
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        The core-XY gantry forms the movement system, allowing the board to move pieces to any square.
        Each square is fitted with a reed switch so the system always knows the exact game state.
        The electromagnet strength was carefully tuned to engage the piece directly above without
        affecting neighbouring pieces.
      </p>
    </TextImageSection>

    <GallerySection
      label="Gallery"
      images={[
        { src: "/projects/chessboard/photos/reedswitches.jpg", alt: "Reed switches" },
        { src: "/projects/chessboard/photos/open.jpg", alt: "Board open showing gantry" },
      ]}
    />

    <TextImageSection
      label="Software & Hardware"
      title="Software & Hardware"
      image="/projects/chessboard/photos/board.jpg"
      imageAlt="Control PCB"
      reversed
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        A custom PCB powered by a Raspberry Pi runs the show. Basic gameplay uses a minimax algorithm;
        more advanced engines are accessible via internet connection. The hardware and software work
        in harmony to offer adjustable difficulty levels, and the machine-learning layer builds a
        personalised bot from the player&apos;s historical move patterns.
      </p>
    </TextImageSection>

    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        The hardest challenge was keeping the electromagnet from influencing neighbouring pieces while
        still activating the reed switch in the target square. The solution involved carefully orienting
        the magnets inside the pieces and increasing the distance between the gantry and the underside
        of the board.
      </p>
    </SectionWrapper>

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="Chessboard 3D Model" />}

    <TechStackSection tech={["altium", "cpp", "fusion360"]} />
  </ProjectLayout>
);

export default Chessboard;
