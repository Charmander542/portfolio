import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Nav from '@/components/Header/Nav.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Loader from "@/components/Loader/Loader";
import { PROJECTS } from "../../constants";


const LidarRobot = () => {
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
            TAfter the proof of concept I started to design the robot to use parts from my school's robotics lab that were not being used, and this posed an interesting limit on most of my components. The key design ideas were the LiDaR at the top which shoots lasers out in 360 degrees
              and measures the time it takes to come back to find the distance traveled. And this was on top of a base that contained an overkill power managment board meant for much stronger robots, an arduino teensy, and two CIM motors with encoders attached.
            </p>
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
            <p className="text-[1.3rem] font-medium">
              I didn't know much about LiDaR or mapping with point clouds so I followed various tutorials and through trial and error I was able to implement it. At first I was trying to port it all to an arduino but I later decided to add an nvidia jetson nano to the robot
              to run the ROS and handle all the navigation. The robot knows where it is the space by counting how many times the wheel spins and adds that data to the accelerameter on board these feed into the jetson that can take the current position of the robot and place the
              map points in the 2D space respectively. It then uses some basic linear algebra to fix any gaps or rotation issues.
            </p>
            </div>
            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
          {/* Challenges Section */}
          <section className="py-8">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Challenges Encountered</h2>
              <p className="text-[1.3rem] font-medium">
              Beyond the problems around getting parts, one intersting design problem was making sure the robot wouldn't get stuck on ledges or medium rocks. Using only two passive wheels and two powered wheels in a cross orientation there would be a chance that both the powered wheels
              would not be in contact with the floor. So I added springs to the back wheel to allow the robot to maintain a powered wheel in contact with the ground at all times.
              </p>
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
      </main>
    </>
    )}
    </>
  );
};

export default LidarRobot;
