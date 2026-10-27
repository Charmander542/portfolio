import { useEffect, useRef } from "react";
import { MENULINKS, MAINPROJECTS } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectTile from "./ProjectTile/ProjectTile";
import Button from "../Button/Button";

gsap.registerPlugin(ScrollTrigger);

const Projects = ({ isDesktop }) => {
  const targetSection = useRef(null);
  const scrollRef = useRef(null);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const DRAG_THRESHOLD = 6; // px — movement below this is treated as a click

    const onMouseDown = (e) => {
      dragState.current = {
        isDragging: true,
        hasMoved: false,
        startX: e.pageX - el.offsetLeft,
        scrollLeft: el.scrollLeft,
      };
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
    };

    const onMouseMove = (e) => {
      if (!dragState.current.isDragging) return;
      const x = e.pageX - el.offsetLeft;
      const delta = x - dragState.current.startX;
      if (Math.abs(delta) > DRAG_THRESHOLD) {
        dragState.current.hasMoved = true;
        e.preventDefault();
        el.scrollLeft = dragState.current.scrollLeft - delta * 1.2;
      }
    };

    const onMouseUp = () => {
      dragState.current.isDragging = false;
      el.style.cursor = "grab";
      el.style.userSelect = "";
    };

    // If the user dragged, swallow the next click so the card doesn't navigate
    const onClickCapture = (e) => {
      if (dragState.current.hasMoved) {
        e.stopPropagation();
        dragState.current.hasMoved = false;
      }
    };

    el.style.cursor = "grab";
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("click", onClickCapture, true); // capture phase
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

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

        <div className="mt-12 projects-scroll-wrapper seq" ref={scrollRef}>
          <div className="projects-scroll-track">
            {MAINPROJECTS.map((project) => (
              <ProjectTile
                classes={"flex-shrink-0"}
                project={project}
                key={project.name}
                isDesktop={isDesktop}
              />
            ))}
            <div className="more-btn-cell">
              <Button href={`/projects`} classes="link h-10 w-40" type="primary">
                More&nbsp;Projects
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Desktop: horizontal scroll ── */
        .projects-scroll-wrapper {
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scroll-snap-type: x proximity;
          /* Extra vertical padding so tilted cards don’t get clipped */
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }

        .projects-scroll-track {
          display: flex;
          flex-direction: row;
          gap: 2.5rem;
          width: max-content;
          align-items: center;
        }

        .more-btn-cell {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          padding-left: 1.5rem;
          padding-right: 2.5rem;
        }

        .projects-scroll-wrapper::-webkit-scrollbar {
          height: 8px;
        }

        .projects-scroll-wrapper::-webkit-scrollbar-track {
          background: transparent;
        }

        .projects-scroll-wrapper::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 0);
          border-radius: 9999px;
        }

        .projects-scroll-wrapper::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 0, 0.45);
        }

        /* ── Mobile: vertical stack ── */
        @media (max-width: 767px) {
          .projects-scroll-wrapper {
            overflow: visible;
            padding-bottom: 0;
          }

          .projects-scroll-track {
            flex-direction: column;
            width: 100%;
            gap: 1.25rem;
            align-items: stretch;
          }

          .more-btn-cell {
            padding: 0.5rem 0 0 0;
            justify-content: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
