import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "Arcade Cabinet";
const SPLINE_URL = "";

const ArcadeCabinet = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/arcade/photos/off1.jpg"
      title="Arcade Cabinet"
      subtitle="Full-size retro arcade cabinet CNC-cut from plywood with custom controller hardware and emulation OS"
      tags={["Engineering", "CNC", "Woodworking", "Emulation"]}
      gradient={["#4a0080", "#1a003d"]}
    />

    <SectionWrapper label="Overview" title="Project Summary" accent>
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        With a deep passion for retro games and a brother eager to collaborate, I built a full-size arcade
        cabinet from scratch. Using an old Dell desktop as the brain, I crafted custom controller hardware,
        a wooden enclosure styled after classic arcade aesthetics, and dialled in cooling to run demanding
        titles like PS2 games without throttling.
      </p>
    </SectionWrapper>

    <TextImageSection
      label="Build"
      title="Design Process"
      image="/projects/arcade/photos/back.jpg"
      imageAlt="Cabinet rear showing internals"
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        The cabinet was modelled in CAD by importing a side-profile drawing and scaling compartments around
        the available hardware. Unlike my 3D-printed projects, the entire enclosure is cut from 2D plywood
        sheets on my homemade CNC machine. Only the speaker grills and component mounts were 3D printed.
      </p>
    </TextImageSection>

    <GallerySection
      label="Construction"
      images={[
        { src: "/projects/arcade/photos/sanding.jpg", alt: "Sanding the panels" },
        { src: "/projects/arcade/photos/pieces.jpg", alt: "Cut pieces laid out" },
      ]}
    />

    <TextImageSection
      label="Electronics"
      title="Electronics & Software"
      image="/projects/arcade/photos/buttonpanel.jpg"
      imageAlt="Custom button panel"
      reversed
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        The CPU was upgraded and a salvaged monitor fitted. A laptop sound card was rewired to the PC.
        The software stack is a custom Linux emulation distro with a performance overlay tuned to the
        specific screen resolution and GPU. A custom microcontroller board handles all the arcade buttons
        and joystick inputs via USB HID.
      </p>
    </TextImageSection>

    <GallerySection
      label="Finished"
      title="Completed Cabinet"
      cols={2}
      images={[
        { src: "/projects/arcade/photos/on1.jpg", alt: "Boot screen" },
        { src: "/projects/arcade/photos/step5.jpg", alt: "All assembled" },
        { src: "/projects/arcade/photos/off2.jpg", alt: "Cabinet powered off" },
        { src: "/projects/arcade/photos/on2.jpg", alt: "Playing a game" },
      ]}
    />

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="Arcade Cabinet 3D Model" />}

    <TechStackSection tech={["fusion360"]} />
  </ProjectLayout>
);

export default ArcadeCabinet;
