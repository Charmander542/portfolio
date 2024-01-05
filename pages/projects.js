import { useState, useEffect, useRef } from 'react';
import { PROJECTS } from "../constants.js";
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card.js';
import Meta from "@/components/Seo/Meta";
import Loader from "@/components/Loader/Loader";
import styled from "styled-components";
import { motion } from "framer-motion";
import Nav from "@/components/Header/projectsnav.js"
import { gsap } from "gsap";

const allCategories = ['All', ...new Set(PROJECTS.flatMap(project => project.category))];

export default function Projects({ isDesktop}) {
  const [isLoading, setIsLoading] = useState(true);
  const [anyCardOpen, setAnyCardOpen] = useState(false);

  const [menuItem, setMenuItem] = useState(PROJECTS);
  const [buttons, setButtons] = useState(allCategories);

  const cardRefs = useRef([]);

  useEffect(() => {
    // Preload images
    const imagePromises = PROJECTS.map(project => {
      const image = new Image();
      image.src = project.image;
      return new Promise(resolve => {
        image.onload = resolve;
      });
    });

    // Wait for all images to load
    Promise.all(imagePromises).then(() => {
      // Images are loaded, set isLoading to false
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    gsap.to(cardRefs.current, {
      autoAlpha: 1,
      stagger: 0.1,
      ease: 'none',
      delay: 2,
    });
  }, [menuItem]);

  const filter = (button) => {
    if (button === 'All') {
      setMenuItem(PROJECTS);
      return;
    }

    const filteredData = PROJECTS.filter(project => project.category.includes(button));
    setMenuItem(filteredData);
  }

  const cardData = menuItem.map((project, id) => {
    return (
      <Card
        data={project}
        key={`card-${id}`}
        ref={el => cardRefs.current[id] = el}
        style={{ opacity: 0 }}
      />
    )
  })

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav allCategories={allCategories} filter={filter}/>
          <div className={`${
            isDesktop && "min-h-screen"
          }w-full relative select-none section-container transform-gpu justify-center`}>
            <div className='flex justify-center pt-2' >
              {allCategories.map((category, index) => (
                <Button
                  classes={"btn-dark text-white p-1 px-2 mx-5 btn fw-bold"} type="primary" onClick={() => filter(category)}
                >{category}</Button>
              ))}
            </div>
            <MainContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
              }}
            >
              {cardData}
            </MainContainer>

          </div>
        </>
      )}
    </>
  );
}

const MainContainer = styled(motion.main)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  margin: 2rem 0;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 758px) {
    grid-template-columns: 1fr;
    margin: 0;
  }
`;
