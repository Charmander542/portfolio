import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "Persistance of Vision Globe";
const SPLINE_URL = "https://my.spline.design/untitled-b08c21b62a072526aa315f35f5b99e86/";

const PersistanceOfVisionGlobe = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      video="/projects/pov_globe/globevideo.mp4"
      title="Persistence of Vision Globe"
      subtitle="Spherical LED display rendering arbitrary images through precisely timed rotating arms — 2nd Place BU Lutron Light Competition 2024"
      tags={["Embedded Systems", "3D Printing", "Persistence of Vision", "Laser Cutting"]}
      gradient={["#006633", "#003319"]}
    />

    <SectionWrapper label="Overview" title="Project Summary" accent>
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          This project was undertaken to explore the principles of persistence of vision (POV) and push
          the boundaries of custom display technology. The goal was to engineer a spherical display
          capable of rendering arbitrary images through precisely timed LEDs on rapidly rotating arms.
        </p>
        <p>
          Built over one month in January–February 2024 with a team of two electrical engineers, the
          globe won 2nd Place at the BU Lutron Light Competition 2024.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper label="Design" title="Design Process">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          The globe utilises a central rotational axis equipped with four distinct arms, each holding
          a line of LEDs. The arms are mechanically offset from one another. As they spin rapidly, the
          offset positioning combined with precise LED timing creates a spherical display surface with
          an effective resolution of 180×50 pixels — visible through the viewer&apos;s persistence of vision.
        </p>
        <p>
          The enclosure and arm structure were designed in Onshape and laser-cut, minimising weight
          while maximising rotational balance. Slip rings handle power and data transmission to the
          spinning arms without wire entanglement.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper label="Electronics" title="Software & Electronics">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          The electrical design drives numerous LEDs on spinning arms, requiring power and data
          transmission through slip rings. Precise timing control synchronises LED activation with
          the rotational position detected via a Hall-effect sensor.
        </p>
        <p>
          Custom Python software takes standard image files, processes them into a spherical mapping,
          and converts them into timed sequences of LED on/off states needed to render the image
          correctly across the globe surface. The microcontroller receives these sequences over serial
          and fires the LED columns at the correct angular position.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          Achieving high rotational speeds smoothly and without vibration was a significant mechanical
          challenge — careful balancing of the four arms was essential. Electrically, reliably
          transmitting power and high-speed data to the spinning arms through slip rings required
          several prototypes before achieving stable signal integrity.
        </p>
        <p>
          Software challenges included efficiently processing images into the correct spherical format
          and ensuring the extremely precise microsecond timing required for the POV effect to produce
          a stable, clear image across the full globe surface.
        </p>
      </div>
    </SectionWrapper>

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="POV Globe 3D Model" />}

    <TechStackSection tech={["onshape", "arduino", "python"]} />
  </ProjectLayout>
);

export default PersistanceOfVisionGlobe;
