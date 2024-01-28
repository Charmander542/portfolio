import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Nav from '@/components/Header/Nav.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Loader from "@/components/Loader/Loader";
import { PROJECTS } from "../../constants";
import Button from '@/components/Button/Button';
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";




const Hexapod = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const projectIndex = PROJECTS.findIndex((project) => project.name === "Hexapod");
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
          <video autoPlay playsInline loop muted className="absolute z-0 w-full h-full object-cover">
            <source src="/projects/hexapod/spiderwalk.mp4" type="video/mp4" />
          </video>
          <h1 className="relative z-20 text-4xl font-bold">Hexapod Robot</h1>
        </section>

          {/* Project Overview Section */}
          <section className="pt-8 bg-gray-100">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Project Summary</h2>
              <p className="text-[1.3rem] font-medium mb-4">During my sophomore year of high school, when the Covid pandemic 
              left me with ample free time, I embarked on an ambitious project: a hexapod robot. This was a departure from the 
              wheeled robots I had previously built for clubs and projects, and it presented a unique challenge that I was eager 
              to tackle.</p>

              <p className="text-[1.3rem] font-medium mb-4">I took inspiration from real hexapods and various interpretations by others, 
              and modeled the entire robot myself. The process involved 3D printing the robot, coding its movements, and creating a 
              printed circuit board (PCB) to control it.</p>

              <p className="text-[1.3rem] font-medium mb-4">In addition to the hexapod, I programmed a robotic arm equipped with a camera. 
              This arm was capable of picking up objects automatically, a feature that required me to delve into the realms of computer 
              communication and computer vision. This project not only honed my technical skills but also deepened my understanding of 
              robotics and computer science.</p>

            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Design Process</h2>
            <p className="text-[1.3rem] font-medium">
            The design uses three servos per leg to control the tibia, femur, and coax. It also utilizes an off-the-shelf robotic arm mounted on top. 
            The shell is completly 3D printed. There is an arduino mega that controls all the servos and power managment, while a raspberry PI runs
              a custom computer vision script to move the arm around towards objects to pick them up.
            </p>
            </div>
          <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
            {/* Placeholder for Photo of Part of the Model */}
            <Image
              src="/projects/hexapod/photos/bottom.png" // Replace with the path to your image
              alt="Part of the Model"
              layout="fill"
              objectFit="cover"
            />
            </div>
            </div>
          </section>

          {/* Photo Area 1 */}
          <section className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 1 */}
                <Image
                  src="/projects/spider.png"
                  alt="Hexapod Robot"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 2 */}
                <Image
                  src="/projects/hexapod/photos/spider_arm.png"
                  alt="Hexapod Robot in Action"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
            {/* Placeholder for Photo of Part of the Model */}
            <Image
              src="/projects/hexapod/photos/dof.png" // Replace with the path to your image
              alt="Part of the Model"
              layout="fill"
              objectFit="cover"
              style={{ transform: 'rotate(90deg)' }}
            />
            </div>
              <div>
            <h2 className="text-4xl font-medium text-mush-light w-fit seq">Software</h2>
            <p className="text-[1.3rem] font-medium">
              For the software I used c++ to program the arduino mega and python for the raspberry pi. Solving the inverse kinematics was the most interesting part of the software and 
              I implemented 4 different gaits to emulate how different 6 legged creatures walk in real life.
              The image recognition software uses OpenCV for the object detection and then uses the x and y position of the object on the screen to run a movement algorithm to try to pick up objects.
            </p>
            </div>
            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
          {/* Challenges Section */}
          <section className="py-4">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Challenges Encountered</h2>
              <p className="text-[1.3rem] font-medium">
              Navigating through the project, I encountered a series of significant challenges, especially in developing the actuation technology. 
              My initial approach, utilizing linear actuators, was hindered by their sluggish response and prohibitive cost. This led me to pivot towards servo motors. 
              While servos offered improved efficiency, they brought their own set of issues, notably a tendency to break under strain. To mitigate this, I integrated temperature and current sensors to safeguard the motors from damage. 
              </p>
            </div>
          </section>

          {/* Additional Photos Section */}
          <section className="py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-300 h-64 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 3 */}
                <Image
                  src="/projects/hexapod/photos/1.png"
                  alt="Hexapod Robot Design"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 4 */}
                <Image
                  src="/projects/hexapod/photos/2.png"
                  alt="Hexapod Robot Programming"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64  relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 5 */}
                <Image
                  src="/projects/hexapod/photos/3.png"
                  alt="Hexapod Robot Performance Optimization"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 5 */}
                <Image
                  src="/projects/hexapod/photos/walking.png"
                  alt="Hexapod Robot Performance Optimization"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </section>

        {/* Tools Used Section */}
        <section className="py-4">
          <div className="text-left">
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Tools and Technologies</h2>
            <p className="text-[1.3rem] font-medium">
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {PROJECTS[projectIndex].tech.map((skill) => (
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

export default Hexapod;
