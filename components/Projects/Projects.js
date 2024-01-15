import { useEffect, useRef } from "react";
import { MENULINKS, MAINPROJECTS } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";
import Button from "../Button/Button";


const Projects = ({ isDesktop, clientHeight }) => {
  const targetSection = useRef(null);
  const sectionTitle = useRef(null);

  useEffect(() => {
    let projectsScrollTrigger;
    let projectsTimeline;

    if (isDesktop) {
      [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
    } else {
      const projectWrapper =
        targetSection.current.querySelector(".project-wrapper");
        projectWrapper.style.width = "calc(100vw - 1rem)";
        projectWrapper.style.maxWidth = "500px";
        projectWrapper.style.overflowX = "none";
        projectWrapper.style.flexDirection = "column";
        projectWrapper.style.justifyContent = "center";
        projectWrapper.style.gap = "1rem";

    }

    const [revealTimeline, revealScrollTrigger] = getRevealSt();

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [targetSection, sectionTitle, isDesktop]);

  const getRevealSt = () => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );
    let scrollTrigger;
    if (isDesktop) {
      scrollTrigger = ScrollTrigger.create({
      trigger: targetSection.current,
      start: `top bottom`,
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });
  }

    return [revealTl, scrollTrigger];
  };

  const getProjectsSt = () => {
    const timeline = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    const sidePadding =
      document.body.clientWidth -
      targetSection.current.querySelector(".inner-container").clientWidth;
    const elementWidth =
      sidePadding +
      targetSection.current.querySelector(".project-wrapper").clientWidth;
    targetSection.current.style.width = `${elementWidth}px`;
    const width = window.innerWidth - elementWidth;
    const duration = `${(elementWidth / window.innerHeight) * 100}%`;
    timeline
      .to(targetSection.current, { x: width })
      .to(sectionTitle.current, { x: -width }, "<");

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "bottom bottom",
      end: duration,
      scrub: 0,
      markers:0,
      pin: true,
      animation: timeline,
      pinSpacing: "margin",
    });

    return [timeline, scrollTrigger];
  };

  return (
    <section
      ref={targetSection}
      className={`${
        isDesktop && "min-h-screen"
      } w-full relative select-none section-container transform-gpu`}
      id={MENULINKS[2].ref}
    >
      <div className="flex flex-col py- justify-center h-full">
        <div
          className="flex flex-col inner-container transform-gpu"
          ref={sectionTitle}
        >
          <p className="uppercase tracking-widest text-gray-light-1 seq">
            PROJECTS
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
            My Projects
          </h1>
          <h2 className="text-[1.65rem] font-medium max-w-[10rem] xs:max-w-sm w-full sm:max-w-3xl mt-2 seq">
            Delve into some of my various projects, from art to engineering.{" "}
          </h2>
        </div>
        <div
          className={`${
            clientHeight > 650 ? "mt-12" : "mt-4"
          } flex project-wrapper w-fit seq`}
        >
          {MAINPROJECTS.map((project, index) => (
            <ProjectTile
              classes={"mr-10 xs:mr-4 sm:mr-16"}
              project={project}
              key={project.name}
            />
          ))}

            <Button href={`/projects`} classes="link pt-4 mr-20 xs:ml-2 sm:ml10 h-10 w-40 m-auto" type="primary">
            More Projects
            </Button>
          </div>
      </div>
      <style>{`
        .project-wrapper::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Projects;
