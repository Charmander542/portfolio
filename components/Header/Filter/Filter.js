import React, { useEffect } from "react";

const Filter = ({allCategories, filter,}) => {
  useEffect(() => {
    const anchorNodes = document.querySelectorAll('a');
    anchorNodes.forEach((el) => {
      el.addEventListener("click", () => {
        const checkbox = document.querySelector(".checkbox-toggle");
        checkbox.checked = false;
      });
    });
  }, []);

  return (
    <div className="menu fixed top-0 left-0 w-full h-full overflow-hidden invisible pointer-events-none flex items-center justify-center">
      <div className="flex-none overflow-hidden flex items-center justify-center">
        <div className="text-center opacity-0 overflow-y-auto overflow-x-hidden flex flex-none justify-center items-center max-h-screen">
          <ul className="list-none py-4 px-0 m-0 block max-h-screen">
            {allCategories.map((category, index) => (
              <li className="p-0 m-6 text-2xl block" key={index}>
                <a
                  className="link relative inline font-mono font-bold text-5xl duration-300 hover:no-underline"
                  onClick={() => filter(category)}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
