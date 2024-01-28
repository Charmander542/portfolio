import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Nav from '@/components/Header/Nav.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Loader from "@/components/Loader/Loader";
import { PROJECTS } from "../../constants";
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from '@/components/Button/Button';



const LidarRobot = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isDesktop, setIsDesktop] = useState(true);
    const projectIndex = PROJECTS.findIndex((project) => project.name === "LiDaR Robot");
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
              src="/projects/cheesebot/photos/inprogress.png" // Replace with the path to your image
              alt="Part of the Model"
              layout="fill"
              objectFit="cover"
            />
          <h1 className="relative z-20 text-4xl font-bold">LiDaR Robot</h1>
        </section>

          {/* Project Overview Section */}
          <section className="py-8 bg-gray-100">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Project Summary</h2>
              <p className="text-[1.3rem] font-medium mb-4">
              During my junior year of highschool I embarked on a challenging robot design: creating a robot capable of autonomously navigating and mapping 
              my school&apos;s campus.</p>

              <p className="text-[1.3rem] font-medium mb-4">While I had previously built robots that used cameras and tags 
              for mapping, this project introduced me to the world of LiDAR. I began with a simple proof-of-concept robot, 
              powered solely by an Arduino, which performed admirably.</p>

              <p className="text-[1.3rem] font-medium mb-4">Emboldened by this success, I spent several months designing a large-scale, 
              3D-printed robot that could navigate more challenging terrain. I managed to assemble parts of it and successfully ran 
              the code in ROS simulations.</p>

            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Design Process</h2>
            <p className="text-[1.3rem] font-medium mb-4">I designed the robot using spare 
            parts from my school&apos;s robotics lab. This constraint added an interesting challenge to the design process, as I had to work
             within the limitations of the available components.</p>

            <p className="text-[1.3rem] font-medium">The robot&apos;s design was centered around a LiDAR system positioned at the top. 
            This system emits lasers in a 360-degree pattern and measures the time it takes for the lasers to return, 
            thereby determining the distance traveled.</p>
            </div>
          <div className="bg-gray-300 h-80 relative rounded-md overflow-hidden">
            {/* Placeholder for Photo of Part of the Model */}
            <Image
              src="/projects/cheesebot/photos/cadinsides.png" // Replace with the path to your image
              alt="Insides of the Model"
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
                  src="/projects/cheesebot/photos/turtlebot.png"
                  alt="Prototype"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 2 */}
                <Image
                  src="/projects/cheesebot.png"
                  alt="Full CAS"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="bg-gray-300 h-96 relative rounded-md overflow-hidden">
            {/* Placeholder for Photo of Part of the Model */}
            <Image
              src="/projects/cheesebot/photos/map.png" // Replace with the path to your image
              alt="Part of the Model"
              layout="fill"
              objectFit="cover"
              style={{ transform: 'rotate(90deg)' }}
            />
            </div>
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Software</h2>
            <p className="text-[1.3rem] font-medium mb-4">My initial foray into LiDAR and point cloud mapping was a learning curve. 
            I started with little knowledge in these areas, but through various tutorials and a process of trial and error, 
            I was able to successfully implement these technologies.</p>

            <p className="text-[1.3rem] font-medium mb-4">Initially, I attempted to port all the functionalities to an Arduino. 
            However, I later decided to incorporate an Nvidia Jetson Nano into the robot to run the Robot Operating System (ROS) 
            and manage all the navigation tasks.</p>

            <p className="text-[1.3rem] font-medium mb-4">The robot&apos;s location in space is determined by counting the number of wheel
             rotations and integrating this data with readings from an onboard accelerometer. This information is fed into the
              Jetson Nano, which uses it to position the map points in a 2D space accurately.</p>
            </div>
            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
          {/* Challenges Section */}
          <section className="py-8">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Challenges Encountered</h2>
              <p className="text-[1.3rem] font-medium mb-4">In addition to the challenges of sourcing parts, an intriguing design problem
               I encountered was ensuring the robot could navigate ledges and medium-sized rocks without getting stuck. The robot&apos;s design,
                which featured two passive wheels and two powered wheels in a cross orientation, posed a risk of both powered wheels losing
                 contact with the ground.</p>

              <p className="text-[1.3rem] font-medium mb-4">To address this issue, I incorporated springs into the back wheel&apos;s design. 
              This modification ensured that at least one powered wheel would always maintain contact with the ground, enhancing the robot&apos;s
               mobility and stability.</p>

            </div>
          </section>

        {/* Tools Used Section */}
        <section className="py-8">
          <div className="text-left">
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Tools and Technologies</h2>
            <p className="text-[1.3rem] font-medium">
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {PROJECTS[1].tech.map((skill) => (
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

export default LidarRobot;
