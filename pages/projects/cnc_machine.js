import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "CNC Machine";
const SPLINE_URL = "";

const CNCMachine = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      video="/projects/cncmachine/firstmoves.mp4"
      title="CNC Machine"
      subtitle="Homemade 1 m × 1 m CNC router capable of milling wood and aluminium"
      tags={["Engineering", "CNC", "Machining", "PCB Design"]}
      gradient={["#1a472a", "#2d6a4f"]}
    />

    <SectionWrapper label="Overview" title="Project Summary" accent>
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        The homemade CNC machine project was an endeavour to create a versatile and efficient milling tool.
        With a working area of 1 m × 1 m it can mill both wood and aluminium, built from 3D-printed parts,
        80×20 aluminium V-extrusion, and driven by custom hardware running open-source firmware.
      </p>
    </SectionWrapper>

    <TextImageSection
      label="Build"
      title="Design Process"
      image="/projects/cncmachine/photos/full.jpg"
      imageAlt="Full CNC machine"
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        The structure uses 80×20 V-extrusion for rigidity. All mounting brackets, carriage plates, and
        motor mounts are 3D-printed and designed in Fusion 360. The spindle is capable of running
        carbide end-mills for wood routing and aluminium pocketing.
      </p>
    </TextImageSection>

    <GallerySection
      label="Build Gallery"
      images={[
        { src: "/projects/cncmachine/photos/box.jpg", alt: "Electronics enclosure" },
        { src: "/projects/cncmachine/photos/close.jpg", alt: "Spindle close-up" },
      ]}
    />

    <TextImageSection
      label="Electronics"
      title="Software & Hardware"
      image="/projects/cncmachine/photos/open.jpg"
      imageAlt="Control board internals"
      reversed
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        A custom stepper-driver board runs GRBL (open-source CNC firmware) for precise G-code
        interpretation. A robust power management system handles the stepper motor supplies, limit
        switches, and spindle speed control via PWM.
      </p>
    </TextImageSection>

    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        Motor selection was the hardest hurdle. Cheaper steppers skipped steps under load, ruining cuts.
        Upgrading to larger NEMA 23 motors with proper current tuning solved the issue. Tramming the
        spindle perpendicular to the bed also required several iterations of adjustment.
      </p>
    </SectionWrapper>

    <GallerySection
      label="Things I Made"
      title="Stuff I Made"
      cols={2}
      images={[
        { src: "/projects/cncmachine/photos/caliperscase.jpg", alt: "Calipers case" },
        { src: "/projects/cncmachine/photos/costers.jpg", alt: "Coaster gift set" },
        { src: "/projects/cncmachine/photos/dnddice.jpg", alt: "D&D dice holder" },
        { src: "/projects/cncmachine/photos/coastercam.jpg", alt: "CAM setup for coasters" },
      ]}
    />

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="CNC Machine 3D Model" />}

    <TechStackSection tech={["fusion360"]} />
  </ProjectLayout>
);

export default CNCMachine;
