import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import GallerySection from "@/components/ProjectLayout/GallerySection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";
import { RESEARCH } from "../../constants";

const PROJECT_NAME = "Scaling Up Parallel Decoding of LoRa Channels";

const CURRENT_TITLE = PROJECT_NAME;
const currentIndex = RESEARCH.findIndex((r) => r.title === CURRENT_TITLE);
const prevIndex = currentIndex === -1 ? null : (currentIndex - 1 + RESEARCH.length) % RESEARCH.length;
const nextIndex = currentIndex === -1 ? null : (currentIndex + 1) % RESEARCH.length;

const ScalingParallelLoRa = () => (
  <ProjectLayout projectName={PROJECT_NAME} showFooterNav={false}>
    <HeroSection
      title="Scaling Parallel LoRa Decoding"
      subtitle="Software-defined radio pipeline for decoding multiple LoRa channels in parallel using GNU Radio."
      gradient={["#0F172A", "#22C55E"]}
      tags={["LoRa", "GNU Radio", "Software Defined Radio", "Signal Processing"]}
      image="/research/lora/flowgraph.jpg"
    />

    <SectionWrapper label="Overview" title="Research Summary" accent>
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          This project explores how to scale the decoding of LoRa signals by exploiting parallelism in
          software-defined radio pipelines. Instead of decoding a single channel at a time, we design a
          receiver that can handle many channels concurrently on the same hardware.
        </p>
        <p>
          The system is implemented in GNU Radio, combining channel estimation, demodulation, and
          decoding into a single flowgraph that can be replicated across channels.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper label="Method" title="System Design">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          We model the LoRa physical layer in GNU Radio, then replicate the critical DSP blocks for
          multiple center frequencies. Careful attention is paid to buffering, scheduling, and CPU
          utilization so that added channels do not linearly degrade performance.
        </p>
        <p>
          This design allows a single SDR front-end to monitor a large number of LoRa channels in
          parallel, which is valuable for dense IoT deployments.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper label="Publication" title="Paper & Code">
      <p className="text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        This work appears in <span className="font-semibold">IEEE ICC 2026 - IoT</span>. The full paper
        and supporting code are publicly available.
      </p>
      <div className="flex flex-wrap gap-3 mt-4">
        <a
          href="/Multiplexing.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium border border-yellow text-yellow hover:bg-yellow hover:text-gray-dark-5 transition-all duration-200"
        >
          Paper (PDF)
        </a>
        <a
          href="https://github.com/Charmander542/LoRaMultiplex"
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
      title="Flowgraphs & Spectra"
      cols={2}
      images={[
        {
          src: "/research/lora/dsp.jpg",
          alt: "GNU Radio flowgraph for parallel LoRa decoding",
        },
        {
          src: "/research/lora/diagram.jpg",
          alt: "Spectrum view of multiple LoRa channels",
        },
      ]}
    />

    <TechStackSection tech={["python"]} />

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

export default ScalingParallelLoRa;

