import { useState, useCallback, useEffect } from 'react';
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Button from '@/components/Button/Button';


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

const Nav = ({ children, allCategories, filter }) => {
    const isBreakpoint = useMediaQuery(768)
    return (
        <nav className="w-full fixed top-0 py-4 z-50 select-none bg-gray-dark-5 transition-all duration-300">
            <Fade>
            <div className="flex justify-between section-container">
                <a href="/" className="link" >
                <Image
                    src="/cvh.svg"
                    alt="CVH"
                    width={30*1.5}
                    height={25*1.5}
                />
                </a>
  
            </div>
            </Fade>
        </nav>
        );
    };

    export default Nav;