import { useRef, useEffect } from "react";
import ProjectLayout from "@/components/ProjectLayout/ProjectLayout";
import HeroSection from "@/components/ProjectLayout/HeroSection";
import SectionWrapper from "@/components/ProjectLayout/SectionWrapper";
import TextImageSection from "@/components/ProjectLayout/TextImageSection";
import TechStackSection from "@/components/ProjectLayout/TechStackSection";

const PROJECT_NAME = "FPGA Microcontroller";
const GITHUB_URL = "https://github.com/ZowProgramming/EC311Final";
const YOUTUBE_ID = "9FqrKM6fkw4";

// Inline YouTube embed that blocks page scroll while hovering (same pattern as SplineSection)
const YouTubeSection = ({ videoId }) => {
  const wrapperRef = useRef(null);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const stopWheel = (e) => { if (hoveringRef.current) e.preventDefault(); };
    document.addEventListener("wheel", stopWheel, { passive: false });
    const onEnter = () => { hoveringRef.current = true; };
    const onLeave = () => { hoveringRef.current = false; };
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("wheel", stopWheel);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      hoveringRef.current = false;
    };
  }, []);

  return (
    <SectionWrapper label="Demo" title="Project Demo">
      <div
        ref={wrapperRef}
        className="w-full rounded-2xl overflow-hidden border border-gray-dark-1 bg-gray-dark-3"
        style={{ aspectRatio: "16/9" }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="FPGA Microcontroller Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </SectionWrapper>
  );
};

const FPGAMicrocontroller = () => (
  <ProjectLayout projectName={PROJECT_NAME}>
    <HeroSection
      image="/projects/fpga_microcontroller/photos/fpga.jpg"
      title="FPGA Microcontroller"
      subtitle="Full MIPS-inspired microcontroller implemented in Verilog on a Zynq A7 FPGA — complete with custom compiler and UART programmer"
      tags={["Embedded Systems", "FPGA", "Verilog", "Computer Architecture"]}
      gradient={["#0a0a2e", "#1a1a5c"]}
    />

<SectionWrapper label="Overview" title="Project Summary" accent>
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          This project served as the final capstone for a logic design course, undertaken with a team
          of two electrical engineers and one computer engineer over one month (November–December 2024).
          The primary goal was to design, implement, and program a complete MIPS processor entirely on
          an AMD Zynq A7 FPGA platform.
        </p>
        <p>
          The result is a fully functional microcontroller — microprocessor, interrupt handler, and
          peripheral bus — synthesised and running on real FPGA hardware, programmable over UART from
          code written in a custom higher-level language compiled by our own toolchain.
        </p>
      </div>
    </SectionWrapper>

    <TextImageSection
      label="Architecture"
      title="Design & Architecture"
      image="/projects/fpga_microcontroller/photos/fullcpi.png"
      imageAlt="Processor block diagram"
      reversed
      objectFit="contain"
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          The processor implements a MIPS-inspired ISA with a classic five-stage pipeline: Fetch,
          Decode, Execute, Memory, and Writeback. Hazard detection and forwarding logic handle data
          and control hazards without stalling in most cases. The control unit decodes the custom
          instruction set and drives the datapath accordingly.
        </p>
        <p>
          Harvard architecture separates instruction memory from data memory, enabling simultaneous
          fetch and data access. A peripheral bus connects the processor to a UART controller and
          general-purpose I/O, mapped into the address space via memory-mapped I/O registers.
        </p>
      </div>
    </TextImageSection>

    <TextImageSection
      label="Toolchain"
      title="Compiler & Programmer"
      image="/projects/fpga_microcontroller/photos/encoder.png"
      imageAlt="Encoder circuit"
      objectFit="contain"
    >
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed">
        <p>
          A custom assembler and compiler toolchain was written in Python to convert programs written
          in a simplified C-like language into machine code for the bespoke ISA. The assembler
          resolves labels and pseudo-instructions; the compiler handles expressions, control flow,
          and function calls with a simple stack convention.
        </p>
        <p>
          Compiled binaries are transmitted to the FPGA over UART using a lightweight bootloader
          running on the soft-core itself. The FPGA listens on startup, receives the program into
          instruction RAM, and begins execution — allowing rapid iteration without re-synthesising
          the hardware design.
        </p>
      </div>
    </TextImageSection>

    <SectionWrapper label="Obstacles" title="Challenges Encountered">
      <div className="space-y-4 text-gray-light-2 text-lg leading-relaxed max-w-3xl">
        <p>
          Designing a complete processor in Verilog from scratch requires deep familiarity with
          digital logic and hardware timing. Pipeline hazards — particularly load-use and control
          hazards — required careful analysis and inserting forwarding paths and flush logic.
        </p>
        <p>
          Debugging FPGA designs is far harder than software: logic analyser captures and simulation
          waveforms were the primary tools. The custom compiler also required several rounds of
          testing to ensure correct code generation for all control-flow constructs and edge cases
          in the ISA.
        </p>
      </div>
    </SectionWrapper>

    <YouTubeSection videoId={YOUTUBE_ID} />

    <SectionWrapper label="Code" title="Source Code">
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border font-mono text-sm transition-all duration-200"
        style={{ borderColor: "#323133", color: "#8a8a8a" }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "#FFFF00";
          e.currentTarget.style.color = "#FFFF00";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "#323133";
          e.currentTarget.style.color = "#8a8a8a";
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
        ZowProgramming / EC311Final
      </a>
    </SectionWrapper>

    <TechStackSection tech={["cpp", "python", "xilinx"]} />
  </ProjectLayout>
);

export default FPGAMicrocontroller;
