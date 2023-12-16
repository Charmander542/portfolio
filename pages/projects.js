import { useState, useEffect } from 'react';
import { PROJECTS } from "../constants.js";
import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card.js';
import Meta from "@/components/Seo/Meta";
import Loader from "@/components/Loader/Loader";

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

    return (
      <>
      <Meta>
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
          <div className="mt-5 margin-auto flex flex-wrap justify-center gap-5">
          {menuItem.map((project) => {
            return (
              <Card
                data={project}
                key={project.name}
              />
            )
          })}
          </div>
    
        </div>
        </>
        )}
        </Meta>
      </>
      );
}