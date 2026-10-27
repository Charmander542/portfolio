import { useEffect, useRef } from "react";
import useDownloader from "react-use-downloader";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Nav from "@/components/Header/Nav.js";
import Button from "@/components/Button/Button.js";
import { FaDownload } from "react-icons/fa";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Resume() {
  gsap.registerPlugin(ScrollTrigger);
  const router = useRouter();
  const { download } = useDownloader();
  const targetSection = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );
  }, []);

  const fileUrl = "/resume.pdf";
  const filename = "CharlesVanHookResume.pdf";

  return (
    <>
      <Head>
        <title>Resume | Charles Van Hook — EE PhD, Chip Design & Robotics</title>
        <meta
          name="description"
          content="Resume of Charles Van Hook: Stanford EE PhD, Tesla Robotics, chip design (Verilog/ASIC), publications in IEEE L-CSS and ICC."
        />
      </Head>
      <Nav />
      <ProgressIndicator />
      <section
        className="w-full relative select-none mt-20"
        ref={targetSection}
        style={{ opacity: 0 }}
      >
        <main className="flex flex-col resume-wrapper">
          <div className="seq" />
          <div className="mt-0 w-full relative select-none section-container transform-gpu justify-center">
            <section id="education" className="seq">
              <h1 className="text-5xl font-bold sm:text-left sm:text-7xl">
                EDUCATION
              </h1>
              <hr className="h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white" />
              <div className="flex justify-between mb-4">
                <div>
                  <h2 className="text-mush-light text-4xl font-semibold">
                    Stanford University
                  </h2>
                  <p className="text-lg font-medium">
                    Ph.D., Electrical Engineering
                  </p>
                </div>
                <div className="text-right">
                  <p>Stanford, CA</p>
                  <p className="italic">Current</p>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div>
                  <h2 className="text-mush-light text-4xl font-semibold">
                    Boston University
                  </h2>
                  <p className="text-lg font-medium">
                    B.S., Computer Engineering
                  </p>
                </div>
                <div className="text-right">
                  <p>Boston, MA</p>
                  <p>4.0 GPA</p>
                  <p className="italic">May 2026</p>
                </div>
              </div>
            </section>

            <section id="publications" className="seq">
              <h2 className="text-5xl font-bold sm:text-left sm:text-7xl">
                PUBLICATIONS
              </h2>
              <hr className="h-1 mx-auto mb-4 border-2 rounded md:mb-10 bg-white" />
              <div className="mb-6">
                <p className="text-lg font-medium">
                  Fault Detection and Response for Safe Control of Artificial
                  Muscles in Soft Robots
                </p>
                <p className="text-base text-gray-light-2">
                  R. Jing*, C. Van Hook*, I. Yang, A. P. Sabelhaus (*equal
                  contribution). IEEE Control Systems Letters, vol. 9, 2025.
                  (co-first author)
                </p>
              </div>
              <div className="mb-8">
                <p className="text-lg font-medium">
                  Scaling Up Parallel Decoding of LoRa Channels (LoRa-MUX)
                </p>
                <p className="text-base text-gray-light-2">
                  C. Van Hook, T. Adler, D. Starobinski. IEEE ICC 2026 (IoT).
                  (first author)
                </p>
              </div>
            </section>

            <section id="experience" className="seq">
              <h2 className="text-5xl font-bold sm:text-left sm:text-7xl">
                EXPERIENCE
              </h2>
              <hr className="h-1 mx-auto mb-4 border-2 rounded md:mb-10 bg-white" />

              <div className="flex justify-between mb-4">
                <div>
                  <h2 className="text-mush-light text-4xl font-semibold">
                    Tesla
                  </h2>
                  <p className="text-lg font-medium">Robotics Engineer</p>
                </div>
                <div className="text-right">
                  <p>Palo Alto, CA</p>
                  <p className="italic">May 2026 – December 2026</p>
                </div>
              </div>
              <div className="mb-8">
                <p>● Worked on robotic finger structures for robot hands</p>
                <p>● Developed tactile designs for robotic sensing and contact</p>
              </div>

              <div className="flex justify-between mb-4">
                <div>
                  <h2 className="text-mush-light text-4xl font-semibold">
                    Boeing
                  </h2>
                  <p className="text-lg font-medium">Technical Intern</p>
                </div>
                <div className="text-right">
                  <p>El Segundo, CA</p>
                  <p className="italic">2020–2021</p>
                </div>
              </div>
              <div className="mb-8">
                <p>
                  ● Modeled helical antennas and generated radiation patterns to
                  optimize design parameters in a team of three
                </p>
                <p>
                  ● Presented findings on helical-antenna and large-array
                  satellite-disk efficiency; built RF strength test equipment and
                  coordinated lab measurements with senior engineers
                </p>
              </div>

              <div className="flex justify-between mb-4">
                <div>
                  <h2 className="text-mush-light text-4xl font-semibold">
                    Griffith Observatory
                  </h2>
                  <p className="text-lg font-medium">Engineering Consultant</p>
                </div>
                <div className="text-right">
                  <p>Los Angeles, CA</p>
                  <p className="italic">2020–2023</p>
                </div>
              </div>
              <div className="mb-8">
                <p>
                  ● Created 3D models of 88 constellations and coordinated with a
                  foundry for bronze casting of celestial-globe elements
                </p>
                <p>
                  ● Used MATLAB to evaluate mounting concepts for structural
                  integrity and to estimate surface area / casting cost from OBJ
                  geometry
                </p>
              </div>
            </section>

            <section id="projects" className="seq">
              <h2 className="text-5xl font-bold sm:text-left sm:text-7xl">
                SELECTED PROJECTS
              </h2>
              <hr className="h-1 mx-auto mb-4 border-2 rounded md:mb-10 bg-white" />
              <div className="mb-6">
                <p className="text-lg font-medium">
                  Tiny Tapeout 8-bit Floating-Point MAC (Verilog / ASIC)
                </p>
                <p>
                  Designed an 8-bit floating-point multiply-and-accumulate unit
                  for Tiny Tapeout, targeting compact silicon for low-precision
                  edge / ML-adjacent arithmetic.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-lg font-medium">
                  Reimplementation of a 28nm Configurable Memory (Cadence
                  Virtuoso / SPICE)
                </p>
                <p>
                  Complete VLSI design flow: schematic capture and layout in
                  Cadence Virtuoso through post-layout simulation. Verification
                  across process corners (FF, SS, TT) with SPICE for PPA.
                </p>
              </div>
              <div className="mb-6">
                <p
                  className="text-lg font-medium text-blue cursor-pointer"
                  onClick={() => router.push("/projects/fpga_microcontroller")}
                >
                  FPGA 5-Stage MIPS-like Pipeline (Verilog / Xilinx)
                </p>
                <p>
                  Implemented a five-stage pipelined MIPS-like CPU in Verilog on
                  a Xilinx Artix-7 FPGA, covering fetch/decode/execute/memory/
                  writeback and hazard handling.
                </p>
              </div>
              <div className="mb-8">
                <p className="text-lg font-medium">
                  ROS/SLAM Autonomous Robot &amp; MoveIt Arm / Hexapod
                </p>
                <p>
                  LiDAR-equipped robot with SLAM on Nvidia Jetson; 3D-printed
                  multi-DOF arm with MoveIt; hexapod with custom PCBs, IK, and
                  vision for object pickup.
                </p>
              </div>
            </section>

            <section id="skills" className="seq">
              <h2 className="text-5xl font-bold sm:text-left sm:text-7xl">
                SKILLS
              </h2>
              <hr className="h-1 mx-auto mb-4 border-2 rounded md:mb-10 bg-white" />
              <div className="mb-8 space-y-2">
                <p>
                  <span className="font-semibold">Languages:</span> C++, Python,
                  C, Verilog, MATLAB, JavaScript/React
                </p>
                <p>
                  <span className="font-semibold">Systems &amp; ML:</span>{" "}
                  TensorFlow, OpenCV, ROS, Linux, Xilinx, Arduino
                </p>
                <p>
                  <span className="font-semibold">Hardware / EDA:</span> Cadence
                  Virtuoso, SPICE, Synopsys, Vivado, Altium, Fusion 360, Onshape,
                  SolidWorks
                </p>
              </div>
            </section>

            <section id="awards" className="seq">
              <h2 className="text-5xl font-bold sm:text-left sm:text-7xl">
                AWARDS
              </h2>
              <hr className="h-1 mx-auto mb-4 border-2 rounded md:mb-10 bg-white" />
              <div className="flex justify-between mb-8">
                <div>
                  <h2 className="text-mush-light text-4xl font-semibold">
                    Hardware Hackathon — 1st Place
                  </h2>
                  <a
                    onClick={() => {
                      router.push(`/projects/accessibility_controller`);
                    }}
                  >
                    <p className="text-blue cursor-pointer text-lg font-medium">
                      Accessibility Controller
                    </p>
                  </a>
                </div>
                <div className="text-right">
                  <p>Boston University</p>
                  <p className="italic">October 2023</p>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div>
                  <h2 className="text-mush-light text-4xl font-semibold">
                    BU Lutron Competition — 2nd Place
                  </h2>
                </div>
                <div className="text-right">
                  <p>Boston University</p>
                  <p className="italic">2024</p>
                </div>
              </div>
            </section>

            <div className="seq flex justify-center items-center">
              <Button
                onClick={() => download(fileUrl, filename)}
                classes="link mb-[3rem]"
                type="primary"
              >
                <FaDownload /> &nbsp;Download
              </Button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
