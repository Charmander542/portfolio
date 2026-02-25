import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "Accesability Controller";
const SPLINE_URL = "";

const AccessabilityController = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      video="/projects/controller/controller.mp4"
      title="Accessibility Controller"
      subtitle="Hackathon-built RP2040 accessibility controller with modular sensor inputs and bit-banged USB"
      tags={["Embedded Systems", "Hackathon", "3D Printing", "HID"]}
      gradient={["#006633", "#003319"]}
    />

    <SectionWrapper label="Overview" title="Project Summary" accent>
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          Designed and fabricated in 24 hours for a school hackathon, this accessibility controller
          uses an RP2040 chip to support a diverse array of input sensors — touch, vibration, sound,
          sliders, and more — catering to users with limited mobility. The modular design lets users
          swap and position sensors to match their specific needs.
        </p>
        <p>
          The entire assembly mounts securely onto a Logitech controller chosen for its ergonomics and
          wide driver compatibility. Dedicated slots hold each sensor at an optimal angle, and the mount
          is designed for quick sensor swaps without tools.
        </p>
      </div>
    </SectionWrapper>

    <TextImageSection
      label="Software"
      title="Software & Firmware"
      image="/projects/controller/photos/controllermount.png"
      imageAlt="Controller mount with sensors"
    >
      <p className="text-gray-light-2 text-lg leading-relaxed">
        The RP2040 runs TinyUSB, presenting itself to the host as a USB HID device. One core handles
        USB host functions; the other processes sensor data and user inputs. A custom bit-banged USB
        controller was written to work around the RP2040&apos;s single physical USB controller, allowing
        simultaneous sensor data upload and command reception.
      </p>
    </TextImageSection>


    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          Mounting a variety of sensor shapes securely was solved by designing a universal bracket with
          a grid of screw holes so any PCB footprint can be fastened in place.
        </p>
        <p>
          The hardest software challenge was the single-USB-controller limitation on the RP2040. The
          solution was writing a bit-banged USB controller in software, enabling bidirectional data flow
          within a single device — sensor data out, HID commands in — simultaneously.
        </p>
      </div>
    </SectionWrapper>

    <GallerySection
      label="Gallery"
      title="Photos & Gallery"
      cols={3}
      images={[
        { src: "/projects/controller/photos/circuits.png", alt: "Circuit board" },
        { src: "/projects/controller/photos/open.png", alt: "Inside the controller" },
        { src: "/projects/controller/photos/front.jpg", alt: "Front of controller" },
      ]}
    />

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="Controller 3D Model" />}

    <TechStackSection tech={["onshape", "cpp"]} />
  </ProjectLayout>
);

export default AccessabilityController;
