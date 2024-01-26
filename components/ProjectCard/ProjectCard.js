import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project, classes, isDesktop }) => {
    const { name, image, description, gradient, url, tech } = project;
    const projectTile = useRef(null);
    let additionalClasses = "";
    if (classes) {
      additionalClasses = classes;
    }
  

    return (
            <div className={`${styles.card} h-[30rem] lg:w-[18rem] sm:w-[18rem] w-[22rem] rounded-3xl max-w-[22rem] overflow-hidden bg-white`}>
          <div
            className={`h-[15rem] bg-black ${styles.ProjectCard} rounded-t-3xl relative p-6`}
            style={{
              background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
            }}
          >
            <img
              src="/project-bg.svg"
              alt="project"
              className="absolute w-full h-full top-0 left-0 object-cover opacity-30"
            />
            <Image
              src={image}
              alt={name}
              layout="fill"
              className={`${styles.projectImage} z-0`}
            />
            <h1
              className="font-medium text-3xl sm:text-4xl z-10 pl-2 transform-gpu overflow-hidden"
              style={{ transform: "translateZ(3rem)" }}
            >
              {name}
            </h1>
          </div>
          <div
              className={`
                ${styles.techIcons} w-full relative p-1 top-15 sm:flex items-center`}
            >
              <div className="flex justify-between">
                {project.tech.map((el, i) => (
                  <Image
                    className={`flex-none`}
                    src={`/skills/${el}.svg`}
                    alt={el}
                    height={45}
                    width={45}
                    key={el}
                  />
                ))}
              </div>
            </div>
            <h2
              className="text-lg z-10 tracking-wide font-medium text-black transform-gpu"
              style={{ transform: "translateZ(0.8rem)" }}
            >
              {description}
            </h2>
            </div>
      );
}

export default ProjectCard;
