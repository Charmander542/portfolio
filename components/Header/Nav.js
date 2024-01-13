import { useState, useEffect } from 'react';
import Image from "next/image";
import Fade from "react-reveal/Fade";
import { useRouter } from 'next/router';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

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

  let navbarClasses = ['fixed top-0 z-50 select-none transition-all duration-300'];

  return (
    <nav className={navbarClasses.join(" ")}>
      <Fade>
        <div className="flex justify-center section-container">
          <a onClick={() => {router.push(`/`);}} className="link cursor-pointer" >
            <div className="w-16 h-16 bg-gray-dark-5 flex items-center justify-center">
              <Image
                src="/cvh.svg"
                alt="CVH"
                width={30*1.5}
                height={25*1.5}
              />
            </div>
          </a>
        </div>
      </Fade>
    </nav>
  );
};

export default Nav;
