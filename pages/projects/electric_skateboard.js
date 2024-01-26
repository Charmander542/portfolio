import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Nav from '@/components/Header/Nav.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Loader from "@/components/Loader/Loader";
import { PROJECTS } from "../../constants";


const Skateboard = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          <video autoPlay loop muted className="absolute z-0 w-full h-full object-cover">
            <source src="/projects/skateboard/skateboard.mp4" type="video/mp4" />
          </video>
          <h1 className="relative z-20 text-4xl font-bold">Electric Skateboard</h1>
        </section>

          {/* Project Overview Section */}
          <section className="py-8 bg-gray-100">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Project Summary</h2>
              <p className="text-[1.3rem] font-medium">
                
              </p>
            </div>
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
              src="/projects/skateboard/photos/version1.png" // Replace with the path to your image
              alt="Version 1 with independent suspension"
              layout="fill"
              objectFit="cover"
            />
            </div>
            </div>
          </section>

          {/* Photo Area 1 */}
          <section className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 1 */}
                <Image
                  src="/projects/skateboard/photos/truckclose.png"
                  alt="Closeup of the truck design"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 2 */}
                <Image
                  src="/projects/hexapod/photos/front.png"
                  alt="Front of Skateboard with control board"
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
              src="/projects/hexapod/photos/battery.png" // Replace with the path to your image
              alt="battery"
              layout="fill"
              objectFit="cover"
              style={{ transform: 'rotate(90deg)' }}
            />
            </div>
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Software</h2>
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
              Navigating through the project, I encountered a series of significant challenges, especially in developing the actuation technology. 
              My initial approach, utilizing linear actuators, was hindered by their sluggish response and prohibitive cost. This led me to pivot towards servo motors. 
              While servos offered improved efficiency, they brought their own set of issues, notably a tendency to break under strain. To mitigate this, I integrated temperature and current sensors to safeguard the motors from damage. 
              </p>
            </div>
          </section>

          {/* Additional Photos Section */}
          <section className="py-8">
            <div className="flex justify-end gap-4">
              <div className="bg-gray-300 h-64 w-1/4 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 3 */}
                <Image
                  src="/projects/hexapod/photos/1.jpg"
                  alt="Hexapod Robot Design"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64 w-1/4 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 4 */}
                <Image
                  src="/projects/hexapod/photos/2.jpg"
                  alt="Hexapod Robot Programming"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64 w-1/4 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 5 */}
                <Image
                  src="/projects/hexapod/photos/3.jpg"
                  alt="Hexapod Robot Performance Optimization"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64 w-1/4 relative rounded-xl overflow-hidden">
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
        <section className="py-8">
          <div className="text-left">
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Tools and Technologies</h2>
            <p className="text-[1.3rem] font-medium">
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {PROJECTS[4].tech.map((skill) => (
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
      </main>
    </>
    )}
    </>
  );
};

export default Skateboard;
