import React from 'react';
import Image from 'next/image';
import Nav from '@/components/Header/Nav.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";

const Chessboard = () => {
  return (
    <>
      <Nav />
      <ProgressIndicator />

      <main className="max-w-6xl mx-auto p-4 space-y-8 mt-[4rem]">
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <div className="absolute top-0 left-0 h-full w-full z-0 bg-opacity-50 bg-black"></div>
          <h1 className="relative z-10 text-4xl font-bold">AI Chessboard</h1>
        </section>

        {/* Project Overview Section */}
        <section className="py-8 bg-gray-100">
          <div className="text-left">
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Project Summary</h2>
            <p className="text-[1.3rem] font-medium">
              This project is about creating an AI Chessboard using a 3D printed core-xy gantry and an electromagnet to move the chess pieces from under the board. The chessboard is controlled by a custom circuit board and connected to the internet for more advanced algorithms. Most of the bots are loaded onto a Raspberry Pi computer, which offers various levels of difficulty. A unique feature of this project is the ability to create a bot based on a player's gameplay if they play on the board enough times.
            </p>
          </div>
        </section>

        {/* Photo Area 1 */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
              {/* Placeholder for Photo 1 */}
              <Image
                src="/projects/chessboard/photos/board.png"
                alt="AI Chessboard"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="bg-gray-300 h-64 relative rounded-md overflow-hidden">
              {/* Placeholder for Photo 2 */}
              <Image
                src="/projects/chessboard/photos/pieces.png"
                alt="Chess Pieces"
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
              The project faced several challenges, particularly in getting the electromagnet to move the pieces without affecting other pieces and activating the reed switches with the magnets in the pieces. These issues were addressed with complex designs that moved the magnets further away while orienting them in the most optimal way to prevent interference with each other's fields.
            </p>
          </div>
        </section>

        {/* Additional Photos Section */}
        <section className="py-8">
          <div className="flex justify-end gap-4">
            <div className="bg-gray-300 h-64 w-1/4 relative rounded-xl overflow-hidden">
              {/* Placeholder for Photo 3 */}
              <Image
                src="/projects/chessboard/photos/gantry.png"
                alt="Core-XY Gantry"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="bg-gray-300 h-64 w-1/4 relative rounded-xl overflow-hidden">
              {/* Placeholder for Photo 4 */}
              <Image
                src="/projects/chessboard/photos/circuit.png"
                alt="Custom Circuit Board"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="bg-gray-300 h-64 w-1/4 relative rounded-xl overflow-hidden">
              {/* Placeholder for Photo 5 */}
              <Image
                src="/projects/chessboard/photos/raspberry.png"
                alt="Raspberry Pi"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-8 bg-gray-100">
          <div className="text-left">
            <h2 className="text-4xl mt-2 font-medium text-mush-light w-fit seq">Solutions Implemented</h2>
            <p className="text-[1.3rem] font-medium">
              To overcome the challenges, the project implemented several innovative solutions. The electromagnet issue was solved by designing a mechanism that moved the magnets further away while orienting them in the most optimal way to prevent interference with each other's fields. The project also made use of a custom circuit board and a Raspberry Pi computer to control the board and run the bots, respectively. A unique feature was added to create a bot based on a player's gameplay if they play on the board enough times.
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

export default Chessboard;
