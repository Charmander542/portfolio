import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "Electric Skateboard";
const SPLINE_URL = "https://my.spline.design/skatebaord-75e0cb7f2c18e91e37fa0e17d726a733/";

const ElectricSkateboard = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      video="/projects/skateboard/skateboard.mp4"
      title="Electric Skateboard"
      subtitle="Custom-built brushless electric skateboard with a recycled laptop battery pack and CNC-machined trucks"
      tags={["Engineering", "PCB Design", "CNC", "Power Electronics"]}
      gradient={["#1a1a2e", "#16213e"]}
    />

    <SectionWrapper label="Overview" title="Project Summary" accent>
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        Born out of a desire for efficient campus transportation, this project — shared with my brothers —
        combines repurposed components, custom PCB design, and CNC manufacturing into a fully functional
        electric skateboard. The dual objectives were performance and sustainability.
      </p>
    </SectionWrapper>

    <TextImageSection
      label="Build"
      title="Design Process"
      image="/projects/skateboard/photos/version1.jpg"
      imageAlt="Version 1 with independent suspension"
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        Several iterations were explored, including designs with independent suspension. Ensuring
        reliable turning in that configuration proved too complex, so I moved to all-metal trucks
        machined on my CNC. Brushless motors drive the rear wheels, which were repurposed from old
        robots. A custom battery assembled from salvaged laptop cells provides power through a
        handmade BMS board with an attached heatsink.
      </p>
    </TextImageSection>


    <TextImageSection
      label="Electronics"
      title="Software & Electronics"
      image="/projects/skateboard/photos/battery.jpg"
      imageAlt="Custom battery pack"
      reversed
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        The custom control board provides intelligent speed management for both front and rear motors,
        offering six speed modes and a reversing function. The BMS monitors cell balance, temperature,
        and current draw, protecting the recycled lithium cells from damage under aggressive riding.
      </p>
    </TextImageSection>

    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        The biggest challenge was the independent-suspension turning geometry — the maths to keep all
        four wheels tracking correctly through a turn was complex. Switching to rigid CNC trucks resolved
        this cleanly. Balancing power delivery across both motor controllers while drawing from a recycled
        cell pack also required careful BMS tuning.
      </p>
    </SectionWrapper>

    <GallerySection
      label="Gallery"
      title="Photos & Gallery"
      cols={2}
      images={[
        { src: "/projects/skateboard/photos/truckclose.jpg", alt: "CNC-machined truck detail", fit: "contain" },
        { src: "/projects/skateboard/photos/front.jpg", alt: "Front control board" },
        { src: "/projects/skateboard/photos/open.jpg", alt: "Battery compartment open" },
        { src: "/projects/skateboard/photos/P1.jpg", alt: "Version 1 assembled" },
      ]}
    />

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="Skateboard 3D Model" />}

    <TechStackSection tech={["altium", "fusion360"]} />
  </ProjectLayout>
);

export default ElectricSkateboard;
