import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";

const PROJECT_NAME = "Electronic Pickleball PCB";

const ElectronicPickleballPCB = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/inprogress.png"
      title="Electronic Pickleball PCB"
      subtitle="Custom PCB for electronic pickleball sensing — design in progress"
      tags={["Embedded Systems", "PCB Design", "Sports Technology"]}
      gradient={["#0f2027", "#203a43"]}
    />

    <SectionWrapper label="Status" title="In Progress" accent>
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          A custom PCB for electronic pickleball sensing and scoring. Schematics, layout, and a
          fuller project page will replace this placeholder once the board is characterized.
        </p>
      </div>
    </SectionWrapper>

    <TechStackSection tech={["altium"]} />
  </ProjectLayout>
);

export default ElectronicPickleballPCB;
