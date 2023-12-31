import { useState, useCallback, useEffect } from 'react';
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { MENULINKS } from "../../constants";
import Button from '@/components/Button/Button';
import { useRouter } from 'next/router';



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
    const [isScrolled, setIsScrolled] = useState(false);

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
            <div className="flex justify-between section-container">
            <a onClick={() => {router.push(`/`);}} className="link" >
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
                    <div className="filter absolute top-2 right-0 w-6 h-6 flex items-center justify-center">
                    <div className="relative flex-none w-full bg-white duration-300 flex items-center justify-center"></div>
                    </div>
                    {children}
                </div>
                ) : (
                  <div className='flex justify-center pt-2' >
                  {allCategories.map((category, index) => (
                    <Button
                      classes={"btn-dark text-white p-1 px-2 mx-5 btn fw-bold"} type="primary" onClick={() => filter(category)} key={index}
                    >{category}</Button>
                  ))}
                </div>
                )}
                </div>
            </div>
            </Fade>
        </nav>
        );
    };

    export default Nav;