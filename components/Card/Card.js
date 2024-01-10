import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';


const Card = ({ data, isDesktop }) => {
  const { name, image, done, category } = data;  
  const router = useRouter();

  const formattedName = name.toLowerCase().replace(/\s+/g, '_');

  return (
    <motion.a
      className="h-[20rem] rounded-3xl"
      style={isDesktop ? {width: "22rem"} : {width: "calc(100vh-1rem)"}}
      layout
      whileHover={isDesktop ? {scale: 1.1} : {  }}
      onClick={() => {
        router.push(`/projects/${formattedName}`);
      }}
    >
      <motion.div className="w-full h-full rounded-3xl relative" style={{ cursor: "pointer" }}>
        <img src={image} className="w-full object-cover overflow-hidden rounded-3xl" style={{ height: "100%" }} />
        {!done && <img src="projects/inprogress.png" className="w-full object-cover overflow-hidden absolute top-20" />}
        <motion.div
          className="absolute top-0 left-0 w-full h-40 rounded-3xl"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,40) 0%, rgba(0,0,0,0) 100%)`,
          }}
        ></motion.div>
        <motion.div className="top-2 left-0 absolute">
          {category
            .sort((a, b) => a.localeCompare(b))
            .map((cat, index) => (
              <motion.span key={index} className="text-md pl-2">
                {cat}
              </motion.span>
            ))}
          <motion.h2
            layout
            className="font-medium text-3xl sm:text-4xl z-10 pl-2 overflow-hidden"
            style={{ transform: "translateZ(3rem)" }}
          >
            {name}
          </motion.h2>
        </motion.div>
      </motion.div>
    </motion.a>
  );
};

export default Card;
