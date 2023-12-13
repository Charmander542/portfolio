import Image from "next/image";
import Fade from "react-reveal/Fade";

const Header = ({ children }) => {
  return (
    <nav className="w-full fixed top-0 py-4 z-50 select-none bg-gray-dark-5 transition-all duration-300">
      <Fade>
        <div className="flex justify-between section-container">
          <a href="#home" className="link">
            <Image
              src="/cvh.svg"
              alt="CVH"
              width={30*1.5}
              height={25*1.5}
            />
          </a>
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
        </div>
      </Fade>
    </nav>
  );
};

export default Header;
