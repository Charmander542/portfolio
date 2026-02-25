import { useEffect, useRef } from "react";
import { MENULINKS, RESEARCH } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ResearchCard = ({ item, index }) => {
  const { title, authors, venue, year, description, tags, links } = item;

  return (
    <article className="research-card group relative flex flex-col gap-4 rounded-2xl border border-gray-dark-1 bg-gray-dark-3 p-6 sm:p-8 transition-all duration-300 hover:border-yellow hover:shadow-[0_0_1.5rem_rgba(255,255,0,0.08)]">
      {/* Index number watermark */}
      <span className="absolute top-6 right-7 text-7xl font-bold text-white opacity-[0.03] select-none leading-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Top row: venue + year */}
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-yellow">
          {venue}
        </span>
        <span className="h-1 w-1 rounded-full bg-gray-light-4" />
        <span className="font-mono text-xs text-gray-light-3">{year}</span>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-semibold leading-snug text-white group-hover:text-yellow transition-colors duration-200">
        {title}
      </h3>

      {/* Authors */}
      <p className="text-sm font-mono text-gray-light-3 leading-relaxed">
        {authors}
      </p>

      {/* Description */}
      <p className="text-base text-gray-light-2 leading-relaxed flex-1">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-gray-dark-1 text-gray-light-2 border border-gray-dark-2"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      {links && (
        <div className="flex flex-wrap gap-3 pt-1">
          {/* External paper link */}
          {links.paper && links.paper !== "#" && (
            <a
              href={links.paper}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium border border-yellow text-yellow hover:bg-yellow hover:text-gray-dark-5 transition-all duration-200"
            >
              {/* Document icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Paper
            </a>
          )}

          {/* Local PDF — view in browser */}
          {links.pdf && (
            <a
              href={links.pdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium border border-yellow text-yellow hover:bg-yellow hover:text-gray-dark-5 transition-all duration-200"
            >
              {/* Eye icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              View PDF
            </a>
          )}

          {/* Local PDF — download */}
          {links.pdf && (
            <a
              href={links.pdf}
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium border border-gray-dark-1 text-gray-light-2 hover:border-yellow hover:text-yellow transition-all duration-200"
            >
              {/* Download icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download
            </a>
          )}

          {/* Code link */}
          {links.code && (
            <a
              href={links.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-mono font-medium border border-gray-dark-1 text-gray-light-2 hover:border-yellow hover:text-yellow transition-all duration-200"
            >
              {/* Code icon */}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
              Code
            </a>
          )}
        </div>
      )}
    </article>
  );
};

const Research = () => {
  const targetSection = useRef(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.4 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: targetSection.current,
      start: "top bottom",
      end: "center bottom",
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
      className="w-full relative select-none bg-gray-dark-5"
      id={MENULINKS[3].ref}
    >
      <div className="section-container py-20 flex flex-col">
        {/* Section header */}
        <div className="flex flex-col mb-12 seq">
          <p className="uppercase tracking-widest text-gray-light-1">
            RESEARCH
          </p>
          <h1 className="text-6xl mt-2 font-medium text-gradient w-fit">
            My Research
          </h1>
          <h2 className="text-[1.65rem] font-medium md:max-w-xl w-full mt-2">
            Academic work, publications, and ongoing investigations at the intersection of robotics, AI, and embedded systems.
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {RESEARCH.map((item, index) => (
            <div key={item.title} className="seq">
              <ResearchCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
