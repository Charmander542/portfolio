import { useState, useEffect, useRef } from "react";
import useDownloader from "react-use-downloader";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Nav from "@/components/Header/Nav.js"
import Button from "@/components/Button/Button.js"
import { FaDownload } from "react-icons/fa";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from 'next/router';


export default function Resume() {
    gsap.registerPlugin(ScrollTrigger);
    const router = useRouter();
    const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
    const typedEl = useRef(null);
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
    
      }, [typedEl, targetSection]);

    const fileUrl = "/resume.pdf";
    const filename = "CharlesVanHookResume.pdf";
    return (
        <>
        <Nav />
        <ProgressIndicator />
        <section className="w-full relative select-none mt-20"
        ref={targetSection}>
        <main className="flex flex-col resume-wrapper">
            <div className="seq"/>
            <div className="mt-0 w-full relative select-none section-container transform-gpu justify-center">
            <section id="education" className="seq">
                <h1 className="text-5xl font-bold sm:text-left sm:text-7xl">EDUCATION</h1>
                <hr className="h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
                <div className="flex justify-between mb-4">
                    <div>
                        <h2 className="text-mush-light text-4xl font-semibold">Boston University</h2>
                        <p className="text-lg font-medium">Studying Mechanical and Computer Engineering</p>
                    </div>
                    <div className="text-right">
                        <p>Boston, MA</p>
                        <p> 4.0 GPA</p>
                        <p className="italic">May, 2026</p>
                    </div>
                </div>
                <div className="flex justify-between mb-4">
                    <div>
                        <h2 className="text-mush-light text-4xl font-semibold">Windward School</h2>
                        <p className="text-lg font-medium">Dean&apos;s List, 4 Years</p>
                    </div>
                    <div className="text-right">
                        <p>Los Angeles, CA</p>
                        <p className="italic">June, 2023</p>
                    </div>
                </div>
            </section>
            <section id="experience" className="seq">
                <h2 className="text-5xl font-bold sm:text-left sm:text-7xl">EXPERIENCE</h2>
                <hr className="h-1 mx-auto mb-4 border-2 rounded md:mb-10 bg:white"/>
                <div className="flex justify-between mb-4">
                    <div>
                        <h2 className="text-mush-light text-4xl font-semibold">Griffith Observatory</h2>
                        <p className="text-lg font-medium">Engineering Consultant</p>
                    </div>
                    <div className="text-right">
                        <p>Los Angeles, CA</p>
                        <p className="italic">2019-2023</p>
                    </div>
                </div>
                <div className="mb-8">
                    <p>● Devised 3D models of 88 constellations and worked with a foundry to cast the models in bronze</p>
                    <p>● Programmed MATLAB to test and design different mounting ideas to test structural integrity</p>
                    <p>● Coded new algorithms for generating surface area and reducing casting cost of obj files</p>
                </div>
            </section>
            <section id="internships" className="seq">
                <h2 className="text-5xl font-bold sm:text-left sm:text-7xl">INTERNSHIPS</h2>
                <hr className="h-1 mx-auto mb-4 border-2 rounded md:mb-10 bg:white"/>
                <div className="flex justify-between mb-4">
                    <div>
                        <h2 className="text-mush-light text-4xl font-semibold">Boeing</h2>
                        <p className="text-lg font-medium">Technical Intern</p>
                    </div>
                    <div className="text-right">
                        <p>El Segundo, CA</p>
                        <p className="italic">2020-2021</p>
                    </div>
                </div>
                <div className="mb-8">
                    <p>● Modeled helical antennas and ran programs to generate radiation patterns for each antenna
design to find optimal parameters in a team of three</p>
                    <p>● Presented findings on the efficiency of helical antennas and large array satellite disks</p>
                    <p>● Developed equipment to test RF strength from various points around antennas and
communicated with senior engineers to test them in labs</p>
                </div>
            </section>
            <section id="certificates" className="seq">
                <h2 className="text-5xl font-bold sm:text-left sm:text-7xl">CERTIFICATES & AWARDS</h2>
                <hr className="h-1 mx-auto mb-4 border-2 rounded md:mb-10 bg:white"/>
                <div className="flex justify-between mb-8">
                    <div>
                        <h2 className="text-mush-light text-4xl font-semibold">Hackathon First Place</h2>
                        <a onClick={() => {router.push(`/projects/accesability_controller`);}}><p className="text-blue cursor-pointer text-lg font-medium">Accesability Controller</p></a>
                    </div>
                    <div className="text-right">
                        <p>Boston University Hardware Hackathon</p>
                        <p className="italic">2023</p>
                    </div>
                </div>
                <div className="flex justify-between mb-8">
                    <div>
                        <h2 className="text-mush-light text-4xl font-semibold">CREATE Showcase First Place</h2>
                        <a onClick={() => {router.push(`/projects/arcade_cabinet`);}}><p className="text-blue cursor-pointer text-lg font-medium">Arcade Cabinet</p></a>
                    </div>
                    <div className="text-right">
                        <p>Windward Makerspace Competition</p>
                        <p className="italic">2022</p>
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
