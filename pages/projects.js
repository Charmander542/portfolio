import { useState, useEffect, useRef } from 'react';
import { PROJECTS } from "../constants.js";
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Loader from "@/components/Loader/Loader";
import styled from "styled-components";
import { motion } from "framer-motion";
import Nav from "@/components/Header/projectsnav.js"
import { gsap } from "gsap";
import Filter from "@/components/Header/Filter/Filter.js";



const allCategories = ['All', ...new Set(PROJECTS.flatMap(project => project.category))];

export default function Projects({}) {
  const [isLoading, setIsLoading] = useState(true);
  const [anyCardOpen, setAnyCardOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);


  const [menuItem, setMenuItem] = useState(PROJECTS);
  const [buttons, setButtons] = useState(allCategories);

  const cardRefs = useRef([]);

  useEffect(() => {
    const { innerWidth, innerHeight, orientation, history } = window;

    const result =
      typeof orientation === "undefined" &&
      navigator.userAgent.indexOf("IEMobile") === -1;
    history.scrollRestoration = "manual";

    setIsDesktop(result);
    setClientHeight(innerHeight);
    setClientWidth(innerWidth);
  }, [isDesktop]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

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
        isDesktop={isDesktop}
      />
    )
  })

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Nav allCategories={allCategories} filter={filter} isDesktop={isDesktop}>
            <Filter allCategories={allCategories} filter={filter}/>
          </ Nav>
          <ProgressIndicator />
          <div className={`${
            isDesktop && "min-h-screen"
          }w-full relative select-none section-container transform-gpu justify-center mt-[6rem]`}>
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
