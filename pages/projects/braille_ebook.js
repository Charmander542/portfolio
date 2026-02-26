import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import EmbedSection from "@/components/ProjectLayout/EmbedSection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import SplineSection from "@/components/ProjectLayout/SplineSection";

const PROJECT_NAME = "Braille Ebook";
const SPLINE_URL = "https://my.spline.design/untitled-3dcb070148858e4e1ed9a211dffcd2ab/";
const ALTIUM_URL =
  "https://kernel-viewer-cdn1.365.altium.com/93/client/index.html?feature=embed&source=AB5BBE4A-9E95-4DCB-904F-D761870E66D8&activeView=Gerber";

const BrailleEbook = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/braille_ebook/photos/braille.webp"
      title="Braille Ebook Reader"
      subtitle="Refreshable Braille display that renders any digital text as tactile Braille cells — making ebooks accessible to visually impaired readers"
      tags={["Embedded Systems", "3D Printing", "Braille", "PCB Design"]}
      gradient={["#2c1654", "#1a0c33"]}
    />

    <TextImageSection
      label="Overview"
      title="Project Summary"
      image="/projects/braille_ebook/photos/BrailleVue.png"
      imageAlt="Braille Ebook Reader overview"
      accent
      objectFit="contain"
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          The Braille Ebook Reader is a refreshable Braille display that converts digital text — from
          ebooks, PDFs, or web pages — into tactile Braille dots using an array of motorised pins.
          Each Braille cell consists of six solenoid-driven pins that extend or retract to form the
          correct Braille character under firmware control.
        </p>
        <p>
          A custom PCB drives the solenoid matrix, and a 3D-printed enclosure houses the pin array at
          the precise spacing specified by the Braille standard. Text is streamed to the device over
          USB and rendered one line at a time.
        </p>
      </div>
    </TextImageSection>

    <TextImageSection
      label="PCB"
      title="PCB Design"
      image="/projects/braille_ebook/photos/braile_pcb.jpg"
      imageAlt="Custom Braille driver PCB"
      reversed
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          The custom PCB uses a multiplexed driver architecture to control up to 40 cells
          (240 pins) with minimal GPIO. Pin array spacing follows the Braille standard exactly:
          2.5 mm dot pitch within a cell and 6 mm between cells.
        </p>
        <p>
          The board was designed in Altium Designer. Each solenoid channel has a flyback diode
          to suppress inductive kickback, and bulk capacitance smooths the current spikes from
          simultaneous solenoid firings so the device runs reliably from a single USB 3.0 port.
        </p>
      </div>
    </TextImageSection>

    <TextImageSection
      label="Hardware"
      title="Micro Diodes & Assembly"
      image="/projects/braille_ebook/photos/microdiodes.jpg"
      imageAlt="Close-up of micro diodes on PCB"
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          Each solenoid driver channel is protected by a miniature SMD flyback diode placed
          directly across the solenoid driver transistor. At the density required for a
          full Braille cell array, every millimetre of board space matters — the diodes
          are hand-placed at 0402 footprint.
        </p>
        <p>
          The 3D-printed guide layer that holds the pins was resin-printed to achieve the
          sub-0.1 mm tolerances needed for consistent pin actuation across all cells.
          FDM printing introduced too much variance in the guide holes, causing intermittent
          binding.
        </p>
      </div>
    </TextImageSection>

    <TextImageSection
      label="Software"
      title="Firmware & Testing"
      image="/projects/braille_ebook/photos/testing.jpg"
      imageAlt="Testing the Braille display"
      reversed
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          A C++ firmware library on the RP2040 implements Grade 1 Braille encoding — mapping
          each Latin character and punctuation mark to its 6-bit Braille cell value. A USB CDC
          interface receives plain-text from a host running a lightweight Python companion app
          that parses ebook files and streams lines on demand.
        </p>
        <p>
          The driver firmware fires solenoids column by column at timed intervals to prevent
          inrush current spikes. Each column fires, settles, and the next column fires before
          the display is ready for the next character — keeping peak current within USB limits.
        </p>
      </div>
    </TextImageSection>

    <EmbedSection
      url={ALTIUM_URL}
      label="PCB Viewer"
      title="Interactive Gerber Viewer"
      height="650px"
      hint="Scroll to zoom · Click and drag to pan · Right-click to rotate"
    />

    <GallerySection
      label="Gallery"
      title="Photos"
      cols={3}
      images={[
        { src: "/projects/braille_ebook/photos/BrailleVue.png", alt: "Full device render", fit: "contain" },
        { src: "/projects/braille_ebook/photos/braile_pcb.jpg", alt: "PCB top view" },
        { src: "/projects/braille_ebook/photos/microdiodes.jpg", alt: "Micro diodes close-up" },
        { src: "/projects/braille_ebook/photos/testing.jpg", alt: "Device under test" },
        { src: "/projects/braille_ebook/photos/altium_view.jpg", alt: "Altium PCB layout" },
      ]}
    />

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="Braille Ebook 3D Model" />}

    <TechStackSection tech={["onshape", "cpp", "altium", "python"]} />
  </ProjectLayout>
);

export default BrailleEbook;
