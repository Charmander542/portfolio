import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";

const PROJECT_NAME = "Electronic Twister";

const ElectronicTwister = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      video="/projects/electronic_twister/twister.mp4"
      title="Electronic Twister"
      subtitle="Kernel-space Twister game on a BeagleBone — 12 3D-printed buttons, full display driver, and game logic written entirely in the Linux kernel"
      tags={["Embedded Systems", "BeagleBone", "Linux", "Kernel Space", "3D Printing"]}
      gradient={["#1a0a2e", "#2d1060"]}
    />

    <TextImageSection
      label="Overview"
      title="Project Summary"
      image="/projects/electronic_twister/photos/twisterfull.JPG"
      imageAlt="Full Electronic Twister board"
      accent
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          Electronic Twister is a fully self-contained version of the classic party game, built
          on a BeagleBone Black. Twelve 3D-printed buttons — one per colour-limb combination —
          are polled to detect whether a player has correctly placed their hand or foot on the
          called spot.
        </p>
        <p>
          The entire program — button polling, display driver, game logic, and random spin
          generation — was written as a personal challenge to run <em>entirely in kernel space</em>.
          No user-space processes are involved once the module is loaded; the kernel owns the
          game from start to finish.
        </p>
      </div>
    </TextImageSection>

    <TextImageSection
      label="Hardware"
      title="Buttons & Physical Build"
      image="/projects/electronic_twister/photos/twister.JPG"
      imageAlt="3D-printed button array"
      reversed
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          Each of the twelve playing positions is a custom 3D-printed button housing a tactile
          switch. The buttons are colour-coded and labelled for the four limbs across three
          colours, exactly matching a standard Twister layout.
        </p>
        <p>
          All buttons are wired to GPIO pins on the BeagleBone. The kernel module continuously
          polls the GPIO state to detect presses, debounces the signal in software, and maps
          each pin to its corresponding colour-limb move.
        </p>
      </div>
    </TextImageSection>

    <TextImageSection
      label="Software"
      title="Kernel-Space Game Engine"
      image="/projects/electronic_twister/photos/twisterscreen.JPG"
      imageAlt="Game display output"
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          Writing the entire game in kernel space — display, input, game state, and randomiser —
          was the core challenge and goal of this project. A Linux kernel module drives the
          display directly via the BeagleBone&apos;s I2C bus without any user-space library.
          The display driver renders the current instruction (e.g. &quot;Right Hand → Red&quot;) and
          tracks which moves have been called.
        </p>
        <p>
          A kernel timer fires at each game step to advance the spinner and output the next
          instruction. Player button presses are read from GPIO inside an interrupt handler
          registered directly in the module, which cross-checks the pressed button against
          the expected move and updates the per-player state accordingly.
        </p>
      </div>
    </TextImageSection>

    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          Writing display and input drivers without any standard library support is significantly
          harder than in user space — every byte sent to the display requires direct I2C register
          manipulation. Debugging kernel code is also more constrained: printk and kernel logs
          are the only real tools when there is no user-space debugger to attach.
        </p>
        <p>
          Debouncing mechanical buttons reliably inside the kernel required carefully tuned
          timing windows to avoid spurious interrupts from switch bounce without introducing
          noticeable input lag for the player.
        </p>
      </div>
    </SectionWrapper>

    <GallerySection
      label="Gallery"
      title="Photos"
      cols={3}
      images={[
        { src: "/projects/electronic_twister/photos/twisterfull.JPG", alt: "Full board assembled" },
        { src: "/projects/electronic_twister/photos/twister.JPG", alt: "Button array detail" },
        { src: "/projects/electronic_twister/photos/twisterscreen.JPG", alt: "Display showing game output" },
      ]}
    />

    <TechStackSection tech={["cpp", "python"]} />
  </ProjectLayout>
);

export default ElectronicTwister;
