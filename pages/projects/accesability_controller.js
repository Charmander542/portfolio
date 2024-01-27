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
              <p className="text-[1.3rem] font-medium">
                During Covid I had another project I was working on alongside the Hexapod. I was attempting to create a robot that could autonomously navigate and map the campus of my school. I had experience making robots that used cameras and tags to map areas but I had never used LiDaR.
                I first constructed a very simple robot that ran on just an arduino as a proof of concept, and it worked great. I then spent many months designing a large scale 3D printed robot that could so the same for more difficult terain. I was able to assemble some of it and get the code working in ROS simulations
                but due to time and budget I was never able to fully finish my robot.
              </p>
            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Design Process</h2>
            <p className="text-[1.3rem] font-medium">
              After the proof of concept I started to design the robot to use parts from my school&apos;s robotics lab that were not being used, and this posed an interesting limit on most of my components. The key design ideas were the LiDaR at the top which shoots lasers out in 360 degrees
              and measures the time it takes to come back to find the distance traveled. And this was on top of a base that contained an overkill power managment board meant for much stronger robots, an arduino teensy, and two CIM motors with encoders attached.
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
          <section className="py-8">
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

          {/* Challenges Section */}
          <section className="py-8">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Challenges Encountered</h2>
              <p className="text-[1.3rem] font-medium">
                The project faced several challenges, particularly in the design of the actuation technology. Initial attempts with linear actuators proved slow and expensive, leading to a shift to servos. However, the servos were prone to breaking, necessitating the addition of temperature and current sensors to prevent motor damage. The control system also posed a challenge, with the project eventually settling on a choice between an Xbox controller or an RC control, depending on the processing unit used.
              </p>
            </div>
          </section>

          {/* Additional Photos Section */}
          <section className="py-8">
            <div className="flex justify-end gap-4">
              <div className="bg-gray-300 h-64 w-1/4 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 3 */}
                <Image
                  src="/projects/hexapod/photos/walking.png"
                  alt="Hexapod Robot Design"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64 w-1/4 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 4 */}
                <Image
                  src="/projects/hexapod/photos/dof.png"
                  alt="Hexapod Robot Programming"
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

          {/* Solutions Section */}
          <section className="py-8 bg-gray-100">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Solutions</h2>
              <p className="text-[1.3rem] font-medium">
                To overcome the challenges, the project implemented several innovative solutions. The actuation technology was improved by integrating temperature and current sensors to protect the servos. The control system was made flexible, allowing for the use of either an Xbox controller or an RC control. The project also expanded its scope by incorporating a Raspberry Pi as an alternative processing unit, enabling the addition of a 6DOF robotic arm. This arm was equipped with a camera and programmed to use computer vision to pick up trained objects, adding a new dimension to the project.
              </p>
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
          <div className="pb-4"onClick={handlePrevProject}>
            <FaArrowLeft size={70}/>
          </div>
          <div className="pb-4"onClick={handleNextProject}>
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
