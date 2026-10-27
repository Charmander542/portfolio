import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";

const PROJECT_NAME = "Password Manager";

const PasswordManager = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/inprogress.png"
      title="Password Manager"
      subtitle="Hardware-backed password manager — PCB design and embedded crypto in progress"
      tags={["Embedded Systems", "PCB Design", "Security", "Cryptography"]}
      gradient={["#1a1a2e", "#16213e"]}
    />

    <SectionWrapper label="Status" title="In Progress" accent>
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          This project is an offline, hardware-backed password manager pairing a custom PCB with
          embedded cryptography. A full write-up, photos, and schematics will land here when the
          board comes back from fab and firmware is further along.
        </p>
      </div>
    </SectionWrapper>

    <TechStackSection tech={["cpp", "altium"]} />
  </ProjectLayout>
);

export default PasswordManager;
