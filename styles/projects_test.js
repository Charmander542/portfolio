import { useState, useEffect } from "react";

import Projects from "@/components/ProjectsFilter/Projects/Projects.js";
import { PROJECTS } from "./constants.js";
import Loader from "@/components/Loader/Loader";
import Sidebar from "@/components/ProjectsFilter/Sidebar/Sidebar.js";
import Card from "@/components/ProjectsFilter/Card/Card.js";
import Nav from "@/components/Header/Nav.js"


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  }, []);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = PROJECTS.filter(
    (project) => project.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(PROJECTS, selected, query) {
    let filteredProjects = PROJECTS;

    // Filtering Input Items
    if (query) {
      filteredProjects = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProjects = filteredProjects.filter(
        ({ category, tech, complete }) =>
          category === selected ||
          tech === selected ||
          complete === selected 
      );
    }

    return filteredProjects.map(
      (project) => (
        <Card
          key={Math.random()}
          data={project}
        />
      )
    );
  }

  const result = filteredData(PROJECTS, selectedCategory, query);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
    <>
    <Nav />
      <div className="section-container mt-[4rem]">
      <Sidebar handleChange={handleChange} />
      <Projects result={result} />
      </div>
    </>
  )}
  </>
  );
}

export default App;