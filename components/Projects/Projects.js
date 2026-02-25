import { useEffect, useRef } from "react";
import { MENULINKS, MAINPROJECTS } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";
import Button from "../Button/Button";


const Projects = ({ isDesktop }) => {
  const targetSection = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top bottom",
      end: "top 55%",
      scrub: 0,
      animation: revealTl,
    });

    return () => {
      scrollTrigger && scrollTrigger.kill();
      revealTl && revealTl.progress(1);
    };
  }, [targetSection]);

  return (
    <section
      ref={targetSection}
      className="w-full relative select-none section-container"
      id={MENULINKS[2].ref}
    >
      <div className="flex flex-col py-8 justify-center h-full">
        <div className="flex flex-col inner-container">
          <p className="uppercase tracking-widest text-gray-light-1 seq">
            PROJECTS
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
            My Projects
          </h1>
          <h2 className="text-[1.65rem] font-medium max-w-[10rem] xs:max-w-sm w-full sm:max-w-3xl mt-2 seq">
            Delve into some of my various projects, from art to engineering.{" "}
          </h2>
          <Button href={`/projects`} classes="link mt-4 h-10 w-40" type="primary">
            All Projects
          </Button>
        </div>

        <div className="mt-12 projects-scroll-wrapper seq">
          <div className="projects-scroll-track">
            {MAINPROJECTS.map((project) => (
              <ProjectTile
                classes={"flex-shrink-0"}
                project={project}
                key={project.name}
                isDesktop={isDesktop}
              />
            ))}
            <div className="flex-shrink-0 flex items-center pl-6 pr-10">
              <Button href={`/projects`} classes="link h-10 w-40" type="primary">
                More&nbsp;Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .projects-scroll-wrapper {
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x proximity;
          padding-bottom: 0.75rem;
        }

        .projects-scroll-track {
          display: flex;
          flex-direction: row;
          gap: 2.5rem;
          width: max-content;
          align-items: center;
        }

        .projects-scroll-wrapper::-webkit-scrollbar {
          height: 3px;
        }

        .projects-scroll-wrapper::-webkit-scrollbar-track {
          background: transparent;
        }

        .projects-scroll-wrapper::-webkit-scrollbar-thumb {
          background: #FFFF00;
          border-radius: 9999px;
        }

        .projects-scroll-wrapper::-webkit-scrollbar-thumb:hover {
          background: darkgoldenrod;
        }
      `}</style>
    </section>
  );
};

export default Projects;
