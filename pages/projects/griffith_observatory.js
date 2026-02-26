import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import EmbedSection from "@/components/ProjectLayout/EmbedSection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";

const PROJECT_NAME = "Griffith Observatory Celestial Globe";
const FUSION_URL =
  "https://windwardschool11.autodesk360.com/shares/public/SH28cd1QT2badd0ea72bbeddad2962b31fe2?mode=embed";

const GriffithObservatory = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/griffith_observatory/photos/celestial.jpg"
      title="Griffith Observatory Celestial Globe"
      subtitle="Mechanical design, mesh preparation, and structural optimisation of 88 cast-bronze constellation figures for the Celestial Globe in Griffith Observatory's Gravity's Stairway — Engineering Intern, 2020–2023"
      tags={["Structural Engineering", "Nonlinear Programming", "Mesh Repair", "Mechanical Design", "Foundry Prep"]}
      gradient={["#0a0a1a", "#1a1a3d"]}
    />

  <SectionWrapper label="Overview" title="Project Summary" accent>
    <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
      <p>
        The Celestial Globe in Griffith Observatory&apos;s Gravity&apos;s Stairway is a massive rotating
        sculpture by Cindy Ingraham Keefer, accurately mapping the ancient Greek constellations
        from the Farnese Atlas onto a sphere that spins as the Greeks imagined the sky turning in
        Atlas&apos;s grip. I worked on this project as an intern from May 2020 to November 2023,
        contributing across mechanical design, mesh preparation, and structural optimisation to
        take the artist&apos;s 3D models all the way to foundry-ready bronze castings.
      </p>
      <p>
        The artist provided detailed 3D models for all 88 constellations. My responsibilities
        spanned three areas: designing mounting hardware so every figure could attach to the
        globe&apos;s curved surface, repairing and sealing artist meshes so the foundry&apos;s software
        could process them, and optimising internal geometry to minimise the bronze required
        while maintaining structural integrity.
      </p>
    </div>
    </SectionWrapper>

    <TextImageSection
      label="Mechanical Design"
      title="Mounting & Attachments"
      image="/projects/griffith_observatory/photos/constelations.jpg"
      imageAlt="Constellation figures on the globe"
      reversed
    >
      <p>
        Each of the 88 constellation figures needed to mount onto the curved surface of the
        globe at a precise angular position. I designed the mounting interfaces in Fusion 360 —
        custom brackets and threaded inserts that conform to the local curvature of the sphere
        while providing enough bearing area to transfer loads from each figure into the globe&apos;s
        main structure without stress concentrations.
      </p>
      <p>
        Because every figure is a different shape and sits at a different latitude on the globe,
        each mount is unique. The designs had to account for the figure&apos;s weight, its offset
        centre of mass, and the rotational inertia loads generated as the globe spins — all
        while remaining invisible from the public-facing side of the installation.
      </p>
    </TextImageSection>

    <TextImageSection
      label="Mesh Prep"
      title="Filling Meshes for the Foundry"
      image="/projects/griffith_observatory/photos/atlas.jpg"
      imageAlt="Farnese Atlas sculpture — the historical reference for the globe"
    >
      <p>
        Artist-created 3D models are rarely watertight — they often contain open edges, inverted
        normals, and internal geometry that causes slicing and casting software to fail. Before
        any structural analysis or optimisation could begin, each mesh had to be cleaned and made
        manifold so the foundry could generate toolpaths and pour reliably.
      </p>
      <p>
        I worked through all 88 constellation meshes, identifying and filling holes, merging
        coincident vertices, correcting face orientation, and removing non-manifold geometry.
        The goal was a fully closed, single-shell solid for each figure — a prerequisite for
        both the finite-element stress analysis and the lost-wax casting process the foundry uses.
      </p>
    </TextImageSection>

    <SectionWrapper label="Optimisation" title="Nonlinear Programming & Structural Analysis">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          With clean, watertight meshes and defined mounting loads in hand, a custom Python
          pipeline applied nonlinear programming to each figure — parametrically varying wall
          thicknesses and internal rib configurations to find the minimum-bronze solution that
          still satisfied stress and deflection constraints at every mount point.
        </p>
        <p>
          MATLAB processed the shear and stress data from the torques generated by each figure&apos;s
          position on the rotating globe, factoring in rotational inertia, mounting geometry, and
          bronze material properties to produce per-figure load envelopes that fed back into the
          optimisation loop. The result: every figure has the minimum bronze cross-section that
          passes its structural envelope, reducing total casting weight and cost across all 88
          pieces without compromising the sculpture&apos;s longevity.
        </p>
      </div>
    </SectionWrapper>

    <GallerySection
      images={[
        { src: "/projects/griffith_observatory/photos/celestial.jpg", alt: "Celestial Globe" },
        { src: "/projects/griffith_observatory/photos/constelations.jpg", alt: "Constellation figures" },
        { src: "/projects/griffith_observatory/photos/atlas.jpg", alt: "Farnese Atlas reference sculpture" },
      ]}
    />

    <EmbedSection
      url={FUSION_URL}
      label="3D Model"
      title="Constellation Figure — Fusion 360"
      height="600px"
      hint="Scroll to zoom · Click and drag to orbit · Right-click to pan"
    />

    <TechStackSection tech={["python", "fusion360"]} />
  </ProjectLayout>
);

export default GriffithObservatory;
