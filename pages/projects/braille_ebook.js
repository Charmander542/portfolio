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
const BU_ARTICLE_URL = "https://www.bu.edu/eng/2026/05/28/beyond-visionary/";
const GITHUB_URL = "https://github.com/Charmander542/Senior-Design-Group-6-Braille";

const BrailleEbook = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/braille_ebook/photos/imagineering_demo.jpg"
      title="Refreshable Braille Display"
      subtitle="Affordable microfluidic tactile display — from freshman solenoid prototypes to an Imagineering-winning electrofluidic Braille surface"
      tags={["Microfluidics", "PCB Design", "Accessibility", "Embedded Systems", "Assistive Tech"]}
      gradient={["#1a0f2e", "#2c1654"]}
    />

    <TextImageSection
      label="Overview"
      title="Braille that can afford to scale"
      image="/projects/braille_ebook/photos/societal_impact.webp"
      imageAlt="ECE Day Societal Impact Award recognition"
      accent
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          Commercial refreshable Braille devices still price most readers out — heavy, expensive,
          and hard to expand beyond a single line of text. This project started with a simple goal:
          build a sensory display for the visually impaired that is both functional and financially
          accessible.
        </p>
        <p>
          What began as a freshman solenoid ebook reader grew into a senior-design microfluidic
          Braille module, then into a Dean&apos;s Imagineering Competition entry that placed{" "}
          <span className="text-white">first</span> among ten teams. Along the way the work earned
          the inaugural ECE Senior Design{" "}
          <span className="text-white">Societal Impact Award</span> and{" "}
          <span className="text-white">3rd place</span> at the Frontiers in New Manufacturing
          symposium.
        </p>
      </div>
    </TextImageSection>

    <TextImageSection
      label="Origins"
      title="Freshman Solenoid Prototype"
      image="/projects/braille_ebook/photos/BrailleVue.png"
      imageAlt="BrailleVue early device render"
      reversed
      objectFit="contain"
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          The earliest BrailleVue-style prototype used large solenoids to raise tactile dots in a
          3D-printed guide layer, driven by a custom Altium PCB with multiplexed channels, flyback
          protection, and USB-powered column firing so peak current stayed within port limits.
        </p>
        <p>
          That mechanical approach proved the interaction model — stream text, encode Grade-1
          Braille, fire a cell — but also showed why commercial pin arrays stay costly and bulky.
          The senior-design reboot attacked the same literacy problem with a different actuator
          physics.
        </p>
      </div>
    </TextImageSection>

    <TextImageSection
      label="Hardware"
      title="Electroosmotic Braille Cells"
      image="/projects/braille_ebook/photos/concept_board.webp"
      imageAlt="Braille cell hardware bring-up board"
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          Instead of mechanical pins, the senior-design module uses{" "}
          <span className="text-white">electroosmotic pumps</span> to push fluid and raise dots in
          flexible silicone membranes — a quieter, lower-power path with room to scale cell count
          without a solenoid per dot.
        </p>
        <p>
          My focus was making the pumps work outside the lab notebook: adhesives, PCB sizing, and
          manufacturing techniques so dots would not leak and would raise high enough for a blind
          reader to feel them. Teammate Leah Jones led schematics and KiCad PCB layouts for the cell
          controller and conductor boards that drive the array.
        </p>
      </div>
    </TextImageSection>

    <SectionWrapper label="Software" title="From Text to Spatial Touch">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          On the software side, a Python braille converter and Arduino/C++ libraries map ASCII into
          6-dot (and experimental 8-dot) cell patterns, with document tooling for PDF, EPUB, DOCX,
          and Project Gutenberg sources. A Windows companion driver adds OCR of screen regions so
          live text can be pushed to the hardware over serial.
        </p>
        <p>
          For Imagineering I also built programs that treat the surface as more than a line of
          letters: a <span className="text-white">spatial tactile field</span> that converts video
          into touchable scenes, a sports mapper for player and ball motion without relying only on
          audio commentary, and dynamic math/geometry renderers for graphs and vector fields — aiming
          at tactile experiences that are not just translations of sighted UI.
        </p>
        <p>
          Firmware and converter code:{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow hover:underline"
          >
            Senior-Design-Group-6-Braille
          </a>
          .
        </p>
      </div>
    </SectionWrapper>

    <TextImageSection
      label="Team"
      title="Senior Design Collaborators"
      image="/projects/braille_ebook/photos/senior_team.webp"
      imageAlt="Senior design team photo"
      reversed
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          Capstone teammates:{" "}
          <span className="text-white">
            Wenyuan Liu, Leah Jones, Tadiwa Zinyongo, Astrid Elder, and Yena Yu
          </span>
          . Leah has written about the microfluidic module and KiCad bring-up; I owned the pump
          reliability path and later extended the concept for Imagineering.
        </p>
        <p>
          The same accessibility thread continues into PhD work at Stanford, including controllers
          for related tactile systems.
        </p>
      </div>
    </TextImageSection>

    <SectionWrapper label="Recognition" title="Imagineering & ECE Day">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          BU Engineering covered the Imagineering win in{" "}
          <a
            href={BU_ARTICLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow hover:underline"
          >
            Beyond Visionary
          </a>
          , framing the display as Societal Engineering in practice — functional, affordable, and
          centered on how blind readers actually perceive information. Judges included Diane
          Joseph-McCarthy, Richard Lally, and Anna Swan.
        </p>
      </div>
    </SectionWrapper>

    <EmbedSection
      url={ALTIUM_URL}
      label="Early PCB"
      title="Solenoid-Era Gerber Viewer"
      height="650px"
      hint="Scroll to zoom · Click and drag to pan · Right-click to rotate"
    />

    <GallerySection
      label="Gallery"
      title="Photos"
      cols={3}
      images={[
        {
          src: "/projects/braille_ebook/photos/imagineering_demo.webp",
          alt: "Demonstrating the tactile display at Imagineering",
        },
        {
          src: "/projects/braille_ebook/photos/imagineering_present.webp",
          alt: "Presenting the Imagineering entry",
        },
        {
          src: "/projects/braille_ebook/photos/module_portrait.webp",
          alt: "Refreshable Braille module",
          fit: "contain",
        },
        {
          src: "/projects/braille_ebook/photos/BrailleVue.png",
          alt: "Early BrailleVue render",
          fit: "contain",
        },
        {
          src: "/projects/braille_ebook/photos/braile_pcb.jpg",
          alt: "Early solenoid driver PCB",
        },
        {
          src: "/projects/braille_ebook/photos/senior_team.webp",
          alt: "Senior design team",
        },
      ]}
    />

    {SPLINE_URL && <SplineSection url={SPLINE_URL} title="Early Enclosure 3D Model" />}

    <TechStackSection tech={["cpp", "python", "altium", "onshape"]} />
  </ProjectLayout>
);

export default BrailleEbook;
