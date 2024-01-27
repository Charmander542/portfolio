import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Nav from '@/components/Header/Nav.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import { PROJECTS } from "../../constants";
import Loader from "@/components/Loader/Loader";
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from '@/components/Button/Button';



const Chessboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const projectIndex = PROJECTS.findIndex((project) => project.name === "AI Chessboard");
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
        <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <Image
              src="/projects/chessboard/photos/full.png" // Replace with the path to your image
              alt="Part of the Model"
              layout="fill"
              objectFit="cover"
            />
          <h1 className="relative z-10 text-4xl font-bold">AI Chessboard</h1>
        </section>

        {/* Project Overview Section */}
        <section className="py-8 bg-gray-100">
          <div className="text-left">
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Project Summary</h2>
            <p className="text-[1.3rem] font-medium">
              This project is about creating an AI Chessboard using a 3D printed core-xy gantry and an electromagnet to move the chess pieces from under the board. The chessboard is controlled by a custom circuit board and connected to the internet for more advanced algorithms. Most of the bots are loaded onto a Raspberry Pi computer, which offers various levels of difficulty. A unique feature of this project is the ability to create a bot based on a player&apos;s gameplay if they play on the board enough times.
            </p>
          </div>
        </section>

        <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Design Process</h2>
            <p className="text-[1.3rem] font-medium">
            The design uses three servos per leg to control the tibia, femur, and coax. And has an off the shelf robotic arm mounted on top. The shell is completly 3D printed. 
            There is an arduino mega that controls all the servos and power managment, while a raspberry PI runs
              a custom computer vision script to move the arm around and move towards eggs.
            </p>
            </div>
          <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
            {/* Placeholder for Photo of Part of the Model */}
            <Image
              src="/projects/chessboard/photos/corexy.png" // Replace with the path to your image
              alt="CoreXY explination"
              layout="fill"
              objectFit="fit"
            />
            </div>
            </div>
          

          {/* Photo Area 1 */}
          <section className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 1 */}
                <Image
                  src="/projects/chessboard/photos/gantry.jpg"
                  alt="In progress Gantry"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 2 */}
                <Image
                  src="/projects/chessboard/photos/open.png"
                  alt="The contructed Gantry"
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
              src="/projects/chessboard/photos/board.png" // Replace with the path to your image
              alt="Control PCB"
              layout="fill"
              objectFit="cover"
              style={{ transform: 'rotate(90deg)' }}
            />
            </div>
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Software/Hardware</h2>
            <p className="text-[1.3rem] font-medium">
              For the software I used c++ to program the arduino mega and python for the raspberry pi. Solving the inverse kinematics was the most interesting part of the software and I implemented 4 different gaits to emulate how different 6 legged creatures walk in real life.
              The image recognition software uses OpenCV for the object detection and then uses the x and y position of the center to run a movement algorithm to try to pick up the egg.
            </p>
            </div>
            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
        {/* Challenges Section */}
        <section className="py-8">
          <div className="text-left">
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Challenges Encountered</h2>
            <p className="text-[1.3rem] font-medium">
              The project faced several challenges, particularly in getting the electromagnet to move the pieces without affecting other pieces and activating the reed switches with the magnets in the pieces. These issues were addressed with complex designs that moved the magnets further away while orienting them in the most optimal way to prevent interference with each other&apos;s fields.
            </p>
          </div>
        </section>


        {/* Tools Used Section */}
        <section className="py-8">
          <div className="text-left">
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Tools and Technologies</h2>
            <p className="text-[1.3rem] font-medium">
            </p>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {PROJECTS[3].tech.map((skill) => (
                <Image
                  key={skill}
                  src={`/skills/${skill}.svg`}
                  alt={skill}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="flex justify-between">
      {!isDesktop ? (
        <>
          <div className="mt-4"onClick={handlePrevProject}>
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

export default Chessboard;
