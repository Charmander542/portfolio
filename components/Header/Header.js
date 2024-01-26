import { useState, useCallback, useEffect } from 'react';
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { MENULINKS } from "../../constants";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);


  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};


const Header = ({ children }) => {
  const isBreakpoint = useMediaQuery(768)
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sections = MENULINKS.map((el) => el.ref);
  
    sections.forEach((section, index) => {
      if (index === sections.length - 1) {
        // Do something else for the last section
        gsap.to(`#${section}`, {
          scrollTrigger: {
            trigger: `#${section}`,
            start: `bottom top-=${document.getElementById('projects').clientWidth + document.getElementById('projects').clientHeight + 100}`,
            markers: 0,
            scrub: true,
            onEnter: () => {
              setActiveSection(section);
              console.log(document.getElementById('projects').clientWidth)
            },
            onEnterBack: () => setActiveSection('projects')
          },
        });
      } else {
        // Apply the scroll effect to all other sections
        gsap.to(`#${section}`, {
          scrollTrigger: {
            trigger: `#${section}`,
            start: "top top+=100",
            end: "bottom bottom-=10",
            markers: 0,
            scrub: true,
            onEnter: () => setActiveSection(section),
            onEnterBack: () => setActiveSection(section)
          },
        });
      }
    });
  }, []);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0 ) {
      setIsScrolled(true);
    }
    else {
      setIsScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  let navbarClasses = ['w-full fixed top-0 py-4 z-50 select-none bg-gray-dark-5  transition-all duration-300'];
  if (isScrolled) {
    navbarClasses.push('shadow-lg');
  }

    return (
      <nav className={navbarClasses.join(" ")}>  
      <Fade>
        <div className="flex justify-between section-container pt-2">
          <a href="#home" className="link">
            <Image
              src="/cvh.svg"
              alt="CVH"
              width={30*1.5}
              height={25*1.5}
            />
          </a>
          <div>
            { isBreakpoint ? (
            <div className="outer-menu relative">
              <input
                aria-labelledby="menu"
                className="checkbox-toggle link absolute top-0 right-0 w-6 h-6 opacity-0"
                type="checkbox"
                aria-label="menu"
              />
              <div className="hamburger absolute top-2 right-0 w-6 h-6 flex items-center justify-center">
                <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
              </div>
              {children}
            </div>
            ) : (
              <div className="desktopMenu">
                <ul className="flex space-x-4 justify-end">
                  {MENULINKS.map((el) => (
                    <li
                      key={el.name}
                      className={`p-5 m-0 pb-0 pt-2 ${
                        activeSection === el.ref ? ' border-2 border-yellow rounded-lg' : ''
                      }`}
                    >
                      <a
                        key={el.ref}
                        className={`link inline font-bold text-xl ${
                          activeSection !== el.ref ? 'hover:border-b-2 hover:border-yellow' : ''}`}
                        href={`#${el.ref}`}
                      >
                        {el.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Fade>
    </nav>
  );
};

export default Header;
