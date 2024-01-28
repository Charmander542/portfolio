import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Nav from '@/components/Header/Nav.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Loader from "@/components/Loader/Loader";
import { PROJECTS } from "../../constants";
import { useRouter } from 'next/router';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Button from '@/components/Button/Button';



const CNC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isDesktop, setIsDesktop] = useState(true);
    const projectIndex = PROJECTS.findIndex((project) => project.name === "CNC Machine");
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
          <video autoPlay loop playsInline muted className="absolute z-0 w-full h-full object-cover">
            <source src="/projects/cncmachine/firstmoves.mp4" type="video/mp4" />
          </video>
          <h1 className="relative z-20 text-4xl font-bold">CNC Machine</h1>
        </section>

          {/* Project Overview Section */}
          <section className="py-8 bg-gray-100">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Project Summary</h2>
              <p className="text-[1.3rem] font-medium mb-4">The homemade CNC machine project was an endeavor to create a versatile and 
              efficient milling tool. The machine, with a working area of 1 meter by 1 meter, was designed to mill both wood and aluminum. 
              It was constructed using 3D printed parts and 80x20 aluminum v-extrusion. The CNC machine was controlled by custom hardware 
              and ran on open-source software.</p>

            </div>
            <hr className="mt-4 h-1 mx-auto mb-2 border-2 rounded md:mb-10 bg-white"/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Design Process</h2>
            <p className="text-[1.3rem] font-medium mb-4">The CNC machine&apos;s design was centered around functionality and durability. 
            The structure was built using 80x20 aluminum v-extrusion, providing a sturdy frame. The machine featured a spindle for 
            milling, capable of working with both wood and aluminum. All components were 3D printed and designed in Fusion 360.</p>
            </div>
          <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
            {/* Placeholder for Photo of Part of the Model */}
            <Image
              src="/projects/cncmachine/photos/full.png" // Replace with the path to your image
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
                  src="/projects/cncmachine/photos/box.png"
                  alt="Hexapod Robot"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
                {/* Placeholder for Photo 2 */}
                <Image
                  src="/projects/cncmachine/photos/close.png"
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
              src="/projects/cncmachine/photos/open.png" // Replace with the path to your image
              alt="Control Board"
              layout="fill"
              objectFit="cover"
              style={{ transform: 'rotate(90deg)' }}
            />
            </div>
              <div>
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Software and Hardware</h2>
            <p className="text-[1.3rem] font-medium mb-4">The CNC machine was controlled by a custom circuit board running 
            open-source software. This setup allowed for precise control over the milling process. The machine was also equipped 
            with robust motors, and a power managment system to control the entire machine.</p>

            </div>
            </div>
          {/* Challenges Section */}
          <section className="py-8">
            <div className="text-left">
              <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Challenges Encountered</h2>
              <p className="text-[1.3rem] font-medium mb-4">The project presented several challenges, particularly in the areas of 
              motor selection and power management. Ensuring the motors were strong enough to move the mass of the CNC machine while 
              cutting through material was a significant hurdle. Initial attempts with cheaper motors resulted in skipped steps, leading 
              to the decision to invest in larger, more powerful motors. Despite these challenges, the project was a rewarding experience 
              that provided valuable insights into the intricacies of CNC machine design and development.</p>

            </div>
          </section>

          {/* Additional Photos Section */}
          
          <section className="py-8">
          <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Stuff I Made</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-300 h-96 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 3 */}
                <Image
                  src="/projects/cncmachine/photos/caliperscase.png"
                  alt="Calipers Case"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-96 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 4 */}
                <Image
                  src="/projects/cncmachine/photos/costers.png"
                  alt="Coaster Gift"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-96 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 5 */}
                <Image
                  src="/projects/cncmachine/photos/dnddice.png"
                  alt="D and D dice holder"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="bg-gray-300 h-96 relative rounded-xl overflow-hidden">
                {/* Placeholder for Photo 5 */}
                <Image
                  src="/projects/cncmachine/photos/coastercam.png"
                  alt="Cam design for the Coasters"
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
              {PROJECTS[6].tech.map((skill) => (
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

export default CNC;
