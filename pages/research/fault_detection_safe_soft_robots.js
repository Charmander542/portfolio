import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import { RESEARCH } from "../../constants";

const PROJECT_NAME = "Fault Detection and Response for Safe Control of Artificial Muscles in Soft Robots";

const CURRENT_TITLE = PROJECT_NAME;
const currentIndex = RESEARCH.findIndex((r) => r.title === CURRENT_TITLE);
const prevIndex = currentIndex === -1 ? null : (currentIndex - 1 + RESEARCH.length) % RESEARCH.length;
const nextIndex = currentIndex === -1 ? null : (currentIndex + 1) % RESEARCH.length;

const FaultDetectionSoftRobots = () => (
  <ProjectLayout projectName={PROJECT_NAME} showFooterNav={false}>
    <HeroSection
      video="/research/fault/fault.mp4"
      title="Fault Detection for Soft Robots"
      subtitle="Safe control architecture for artificial-muscle-driven soft robots using redundant sensing and learning-based fault detection."
      gradient={["#4F46E5", "#0EA5E9"]}
      tags={["Soft Robotics", "Fault Detection", "Gaussian Processes", "Control Systems"]}
    />

    <SectionWrapper label="Overview" title="Research Summary" accent>
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          This work presents a fault detection and response framework for soft robots driven by
          artificial muscles. These actuators are lightweight and powerful, but they can fail in
          subtle ways that are not immediately visible from motion alone.
        </p>
        <p>
          We combine redundant sensing, model-based state estimation, and Gaussian Process regression
          to detect anomalies in actuator behavior and trigger safe responses before damage or loss
          of control occurs.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper label="Method" title="Approach & Architecture">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          The controller observes actuator resistance, temperature, and motion, and compares them to
          a nominal model learned from experimental data. Deviations beyond a learned uncertainty
          bound are classified as potential faults, at which point the controller transitions to a
          safe mode.
        </p>
        <p>
          Gaussian Processes provide both predictions and calibrated uncertainty, which is crucial
          for making safe decisions under modeling error and noisy measurements.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper label="Publication" title="Paper & Code">
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        This work appears in <span className="font-semibold">IEEE Control Systems Letters</span>.
        You can read the paper on IEEE Xplore and explore the accompanying code on GitHub.
      </p>
      <div className="flex flex-wrap gap-3 mt-4">
        <a
          href="https://ieeexplore.ieee.org/document/11165112"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium border border-yellow text-yellow hover:bg-yellow hover:text-gray-dark-5 transition-all duration-200"
        >
          Paper
        </a>
        <a
          href="https://github.com/softroboticscontrollab/SMA-resistance-Measurement"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium border border-gray-dark-1 text-gray-light-2 hover:border-yellow hover:text-yellow transition-all duration-200"
        >
          Code
        </a>
      </div>
    </SectionWrapper>

    <GallerySection
      label="Figures"
      title="Conceptual Diagrams"
      cols={2}
      images={[
        {
          src: "/research/fault_soft_robots/diagram_1.png",
          alt: "Fault detection architecture diagram",
        },
        {
          src: "/research/fault_soft_robots/diagram_2.png",
          alt: "Soft robot and sensing layout",
        },
      ]}
    />

    <TechStackSection tech={["python", "matlab"]} />

    {currentIndex !== -1 && (
      <div className="section-container py-16 border-t border-gray-dark-1">
        <div className="flex justify-between items-center">
          <a
            href={`/research/${RESEARCH[prevIndex].slug}`}
            className="group flex items-center gap-3 text-gray-light-3 hover:text-yellow transition-colors duration-200"
          >
            <span className="font-mono text-sm">
              <span className="block text-xs text-gray-light-4 mb-0.5">Previous paper</span>
              {RESEARCH[prevIndex].title}
            </span>
          </a>

          <a
            href={`/research/${RESEARCH[nextIndex].slug}`}
            className="group flex items-center gap-3 text-gray-light-3 hover:text-yellow transition-colors duration-200 text-right"
          >
            <span className="font-mono text-sm">
              <span className="block text-xs text-gray-light-4 mb-0.5">Next paper</span>
              {RESEARCH[nextIndex].title}
            </span>
          </a>
        </div>
      </div>
    )}
  </ProjectLayout>
);

export default FaultDetectionSoftRobots;

