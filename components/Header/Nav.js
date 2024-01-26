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

  let navbarClasses = ['fixed top-0 z-50 select-none transition-all duration-300 2xl:container xl:px-20 md:px-12 px-4 mx-auto'];

  return (
    <nav className="w-full fixed top-0 z-50 select-none transition-all duration-300">
      <Fade>
        <div className="flex justify-between section-container">
          <a onClick={() => {router.push(`/`);}} className="link cursor-pointer" >
            <div className="w-16 h-20 bg-gray-dark-5 flex">
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
