import React from 'react';
import Image from 'next/image';
import Nav from '@/components/Header/Nav.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";

const Hexapod = () => {
  return (
    <>
      <Nav />
      <ProgressIndicator />

      <main className="max-w-6xl mx-auto p-4 pt-4 space-y-8 mt-[4rem]">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center text-white">
          <video autoPlay loop muted className="absolute z-0 w-full h-full object-cover">
            <source src="/projects/hexapod/spiderwalk.mp4" type="video/mp4" />
          </video>
          <h1 className="relative z-20 text-4xl font-bold">Hexapod Robot</h1>
        </section>

          {/* Project Overview Section */}
          <section className="py-8 bg-gray-100">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Project Summary</h2>
              <p className="text-[1.3rem] font-medium">
                This project is a self-exploration into the complex motion of legged robots, specifically hexapods. The focus was on working with inverse kinematics to emulate the diverse gaits of insects. The project also delved into the challenges of actuation technology, control systems, and the integration of a 6DOF robotic arm with computer vision capabilities.
              </p>
            </div>
          </section>

          {/* Photo Area 1 */}
          <section className="py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 1 */}
                <Image
                  src="/projects/hexapod/photos/walking.png"
                  alt="Hexapod Robot"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 2 */}
                <Image
                  src="/projects/hexapod/photos/walking.png"
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
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Hexapod;
