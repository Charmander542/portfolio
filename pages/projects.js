import { useState, useEffect } from 'react';
import { PROJECTS } from "../constants.js";
import Button from '@/components/Button/Button';
import Card from '@/components/Card/car.js';
import Meta from "@/components/Seo/Meta";
import Loader from "@/components/Loader/Loader";
import styled from "styled-components";
import { motion } from "framer-motion";



const allCategories = ['All', ...new Set(PROJECTS.map(project => project.category))];


export default function Projects({isDesktop}) {
  const [isLoading, setIsLoading] = useState(true);
  const [anyCardOpen, setAnyCardOpen] = useState(false);

    const [menuItem, setMenuItem] = useState(PROJECTS);
    const [buttons, setButtons] = useState(allCategories);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1300);
  
    }, []);

    const filter = (button) =>{

        if(button === 'All'){
          setMenuItem(PROJECTS);
          return;
        }
    
        const filteredData = PROJECTS.filter(project => project.category ===  button);
        setMenuItem(filteredData)
    }
    const cardData = menuItem.map((project, id) => {
      return (
        <Card
          data={project}
          key={`card-${id}`}
        />
      )
    })

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <>
      <div className={`${
        isDesktop && "min-h-screen"
      }w-full relative select-none section-container transform-gpu justify-center`}>
          <div className='flex justify-center pt-2' >
           {allCategories.map((category, index) => (
            <Button
              classes={"btn-dark text-white p-1 px-2 mx-5 btn fw-bold"} type="primary" onClick={()=> filter(category)}
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
  }
`;
