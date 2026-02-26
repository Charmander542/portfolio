import { useState, useCallback, useEffect } from 'react';
import Image from "next/image";
import { motion } from "framer-motion";
import { MENULINKS } from "../../constants";

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

    const onScroll = () => {
      const scrollMid = window.scrollY + window.innerHeight * 0.4;

      let active = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMid) {
          active = id;
        }
      }
      setActiveSection(active);
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  let navbarClasses = ['w-full fixed top-0 z-50 select-none bg-gray-dark-5 transition-all duration-300'];
  if (isScrolled) {
    navbarClasses.push('shadow-lg');
  }

    return (
      <nav className={navbarClasses.join(" ")}>  
      <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, ease: "easeOut" }}>
        <div className="flex justify-between section-container py-4">
          <a href="#home" className="link">
            <Image
              src="/cvh.svg"
              alt="CVH"
              width={45}
              height={38}
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
                      className={`p-5 m-0 pb-0 pt-2 border-2 rounded-lg transition-colors duration-200 ${
                        activeSection === el.ref ? 'border-yellow' : 'border-transparent'
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
      </motion.div>
    </nav>
  );
};

export default Header;
