import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Nav from '@/components/Header/Nav.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Loader from "@/components/Loader/Loader";
import { PROJECTS } from "../../constants";
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from '@/components/Button/Button';



const RobotArm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const projectIndex = PROJECTS.findIndex((project) => project.name === "Robotic Arm");
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
        <Image
              src="/projects/robotarm/photos/parts.png" // Replace with the path to your image
              alt="ARM Design"
              layout="fill"
              objectFit="cover"
            />
          <h1 className="relative z-20 text-4xl font-bold">Robotic Arm</h1>
        </section>

          {/* Project Overview Section */}
          <section className="py-8 bg-gray-100">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Project Summary</h2>
              <p className="text-[1.3rem] font-medium mb-4">In the pursuit of expanding my knowledge in robotics, 
              I concerted and designed a robotic arm. The robotic arm, boasting 7 degrees of freedom (DOF), was
                designed in Fusion 360 and all its components were 3D printed. Although I was unable to secure the necessary
                 funding to purchase the motors required for completion, the project remains a significant milestone in my journey
                  in robotics.</p>

            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Design Process</h2>
            <p className="text-[1.3rem] font-medium mb-4">The robotic arm was designed with 7 DOF, providing it with a wide range of 
              motion and the ability to perform complex tasks. Each joint of the arm was powered by NEMA motors, equipped with encoders for 
              precise control. One of the degrees of freedom was facilitated by a custom linear actuator, adding to the arm&apos;s versatility. 
              The design process was carried out in Fusion 360. Each component of the arm was then brought
               to life through 3D printing. Although the plan was to machine the parts out of aluminum.</p>
            </div>
          <div className="bg-gray-300 h-90 relative rounded-md overflow-hidden">
            {/* Placeholder for Photo of Part of the Model */}
            <Image
              src="/projects/robotarm/photos/armcad.png" // Replace with the path to your image
              alt="Model"
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
                  src="/projects/robotarm/photos/moveit.png"
                  alt="Moveit Example"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 2 */}
                <Image
                  src="/projects/robotarm/photos/dofdiagram.png"
                  alt=""
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
              src="/projects/robotarm/photos/examplecode.png" // Replace with the path to your image
              alt="Control Code"
              layout="fill"
              objectFit="cover"
              style={{ transform: 'rotate(90deg)' }}
            />
            </div>
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Software and Hardware</h2>
            <p className="text-[1.3rem] font-medium mb-4">The robotic arm was programmed to run on an Arduino.
            Despite the lack of motors, I was able to model and program the arm in the Robot Operating System (ROS) to execute various
               commands and even follow G-code instructions. This experience allowed me to delve deeper into
                the world of robotics software and control systems.</p>
            </div>
            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>

          {/* Challenges Section */}
          <section className="py-8">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Challenges Encountered</h2>
              <p className="text-[1.3rem] font-medium mb-4">The project presented several challenges, particularly in the areas of 
            programming and part sourcing. Programming the robotic arm in ROS was a complex task that required a deep understanding
             of robotics software and control systems. Sourcing the necessary parts, especially the NEMA motors and the custom linear
             actuator, was another significant hurdle. Despite these challenges, I was able to design custom programs that allowed the
             arm to execute various commands and follow G-code instructions. These experiences provided valuable insights into the
           intricacies of robotics design and development.</p>
            </div>
          </section>


        {/* Tools Used Section */}
        <section className="py-8">
          <div className="text-left">
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Tools and Technologies</h2>
            <p className="text-[1.3rem] font-medium">
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {PROJECTS[2].tech.map((skill) => (
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

export default RobotArm;
