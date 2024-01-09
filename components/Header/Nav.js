import { useState, useEffect } from 'react';
import Image from "next/image";
import Fade from "react-reveal/Fade";
import Button from '@/components/Button/Button';
import { useRouter } from 'next/router';


const Nav = ({ children, allCategories, filter }) => {
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

  let navbarClasses = ['w-full fixed top-0 py-4 z-50 select-none bg-gray-dark-5  transition-all duration-300'];
  if (isScrolled) {
    navbarClasses.push('shadow-lg');
  }

  return (
    <nav className={navbarClasses.join(" ")}>
      <Fade>
        <div className="flex justify-between section-container">
          <a onClick={() => {router.push(`/`);}} className="link cursor-pointer" >
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
