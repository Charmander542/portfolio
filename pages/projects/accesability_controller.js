import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Nav from '@/components/Header/Nav.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Loader from "@/components/Loader/Loader";
import { PROJECTS } from "../../constants";
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from '@/components/Button/Button';



const Controller = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isDesktop, setIsDesktop] = useState(true);
    const projectIndex = PROJECTS.findIndex((project) => project.name === "Accesability Controller");
    const router = useRouter();
  
    const handleNextProject = () => {
      const nextIndex = (projectIndex + 1) % PROJECTS.length;
      router.push(`/projects/${PROJECTS[nextIndex].name.toLowerCase().replace(/\s+/g, '_')}`);
    };
  
    const handlePrevProject = () => {
      const prevIndex = (projectIndex - 1 + PROJECTS.length) % PROJECTS.length;
      router.push(`/projects/${PROJECTS[prevIndex].name.toLowerCase().replace(/\s+/g, '_')}`);
    };
  
    useEffect(() => {
      const { innerWidth, innerHeight, orientation, history } = window;
  
      const result =
        typeof orientation === "undefined" &&
        navigator.userAgent.indexOf("IEMobile") === -1;
      history.scrollRestoration = "manual";
  
      setIsDesktop(result);
    }, [isDesktop]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, []);
  return (
    <>
    {isLoading ? (
        <Loader />
      ) : (
        <>
      <Nav />
      <ProgressIndicator />

      <main className="mx-auto p-4 pt-4 space-y-8 mt-[4rem] section-container">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center text-white">
        <video autoPlay loop muted playsInline className="absolute z-0 w-full h-full object-cover">
            <source src="/projects/controller/controller.mp4" type="video/mp4" />
          </video>
          <h1 className="relative z-20 text-4xl font-bold">Accesability Controller</h1>
        </section>

          {/* Project Overview Section */}
          <section className="py-8 bg-gray-100">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Project Summary</h2>
              <p className="text-[1.3rem] font-medium mb-4">
              This project developed an accessibility controller utilizing the RP240 chip it was designed and fabricated in 24 hours for a school hackathon. It integrates a diverse array 
              of sensors, such as touch, vibration, sound, and heart rate monitors, to cater to the nuanced needs of individuals with 
              limited mobility. Central to its design is the concept of customization; users can personalize the controller by adding 
              sensors that best suit their specific requirements. 
              </p>
              <p className="text-[1.3rem] font-medium mb-4">
              The design is mounted to a Logitech controller, chosen for its ergonomic design and compatibility with various controller 
              programs. The mount is designed to ensure a secure fit and easy access to the controller&apos;s functions. It features dedicated 
              slots for each sensor, allowing them to be securely attached and positioned for optimal performance. The mount&apos;s design 
              also takes into account the need for easy installation and removal of sensors, facilitating maintenance and upgrades. 
              This thoughtful design ensures that the controller maintains its comfort and functionality while expanding its capabilities
               with the added sensors.</p>
            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Software</h2>
            <p className="text-[1.3rem] font-medium">
            In the software framework of our advanced accessibility controller, the TinyUSB library configures the device as a 
            USB Human Interface Device (HID), enabling effective communication with the host computer. Leveraging the dual-core 
            capability of the RP240 chip, one core is dedicated to USB host functions for efficient processing, while the other 
            manages sensor data and user inputs, ensuring smooth operation. The code includes HID callback functions to handle the 
            connection and disconnection of the HID device, alongside a filter_report() function for processing gamepad data, which 
            is crucial for interpreting inputs like joystick movements and button presses. Additionally, detailed gamepad button state 
            definitions ensure precise detection and processing of each input, enhancing the controller&apos;s responsiveness and user control.
            </p>
            </div>
          <div className="bg-gray-300 h-96 relative rounded-md overflow-hidden">
            {/* Placeholder for Photo of Part of the Model */}
            <Image
              src="/projects/controller/photos/controllermount.png" // Replace with the path to your image
              alt="Part of the Model"
              layout="fill"
              objectFit="cover"
            />
            </div>
            </div>
          </section>

          {/* Photo Area 1 */}
          <section className="pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-300 h-80 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 1 */}
                <Image
                  src="/projects/controller/photos/circuits.png"
                  alt="Circuit design"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-80 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 2 */}
                <Image
                  src="/projects/controller/photos/open.png"
                  alt="Open controller"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </section>

          {/* Challenges Section */}
          <section className="py-8">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Challenges Encountered</h2>
              <p className="text-[1.3rem] font-medium mb-4">
              One of the primary challenges in this project was the integration and mounting of the various sensors onto the 
              accessibility controller. To address this, a custom part was designed and 3D printed, made to fit onto the controller. 
              This innovative approach allowed for a seamless and secure mounting of all sensors — including touch, vibration, sound, 
              and heart rate monitor. The 3D printed component ensured that each sensor was accurately positioned for optimal 
              functionality.
              </p>
              <p className="text-[1.3rem] font-medium mb-4">
              Another significant challenge involved the development of a custom USB controller interface. 
              The controller needed to operate in a dual mode: one for sending data from the sensors to the processing unit, 
              and another for receiving input commands. To achieve this, a bit-banged USB controller was developed. This custom 
              solution emulated the functionality of two USB controllers within a single framework, managing the bidirectional flow 
              of data. The implementation of this bit-banged USB controller was crucial for the seamless operation of the device, 
              ensuring that the data from sensors could be accurately processed while simultaneously receiving user inputs. </p>
            </div>
          </section>




        {/* Tools Used Section */}
        <section className="py-8">
          <div className="text-left">
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Tools and Technologies</h2>
            <p className="text-[1.3rem] font-medium">
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {PROJECTS[7].tech.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
            </p>
          </div>
        </section>

        <div className="flex justify-between">
      {!isDesktop ? (
        <>
          <div className="mt-4 "onClick={handlePrevProject}>
            <FaArrowLeft size={70}/>
          </div>
          <div className="mt-4"onClick={handleNextProject}>
            <FaArrowRight size={70}/>
          </div>
        </>
      ) : (
        <>
          <Button
            onClick={handlePrevProject}
            classes="link mt-4 h-10 max-w-45"
            type="primary"
          >
            <FaArrowLeft className='mr-2'/> Previous Project
          </Button>
          <Button
            onClick={handleNextProject}
            classes="link mt-4 h-10 max-w-45"
            type="primary"
          >
            Next Project <FaArrowRight className='ml-2'/>
          </Button>
        </>
      )}
    </div>
      </main>
    </>
    )}
    </>
  );
};

export default Controller;
