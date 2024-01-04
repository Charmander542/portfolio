import memo from "react";
import { motion } from "framer-motion";
import { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'


const Card = (({data}) => {
    const { name, image, description, gradient, author, category, done, markdown} = data;  
  const [isCardOpened, setIsCardOpened] = useState(false);
  const [cardDimensions, setCardDimensions] = useState({ width: 0, height: 0 });
  const [markdownContent, setMarkdownContent] = useState("");

  const card = useRef(null);

  useEffect(() => {
    if (markdown) {
      fetch(markdown)
        .then((response) => response.text())
        .then((data) => setMarkdownContent(data))
        .catch((error) => console.error("Error fetching Markdown content:", error));
    }
  }, [markdown]);
  console.log(markdownContent)

  return (
    <Fragment>
      <CardLink
        className="w-[22rem] h-[20rem] rounded-3xl"
        ref={card}
        isCardOpened={isCardOpened}
        layout
        whileHover={ isCardOpened ? {} : { scale: 1.1 }}
        onClick={() => {
          setIsCardOpened(!isCardOpened);
          if (!isCardOpened) {
            setCardDimensions({
              width: card.current.clientWidth,
              height: card.current.clientHeight
            });
          }
        }
      }style={isCardOpened ? {backgroundColor: "black"} : {}}
      >
        <motion.div className="w-full h-full rounded-3xl relative" style={{
              cursor: "pointer"
            }}>
              <img src={image} className="w-full object-cover overflow-hidden rounded-3xl" style={isCardOpened ? {height: "30"} : {height: "100%"}}/>
              {!(done || isCardOpened)&& <img src="projects/inprogress.png" className="w-full object-cover overflow-hidden absolute top-20"/>}
            <motion.div
          className="absolute top-0 left-0 w-full h-40 rounded-3xl"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,40) 0%, rgba(0,0,0,0) 100%)`,
          }}
        ></motion.div>
          <motion.div className="top-2 left-0 absolute">
            {category
              .sort((a, b) => a.localeCompare(b)) // Sort categories alphabetically
              .map((cat, index) => (
                <motion.span key={index} className="text-md pl-2" style={isCardOpened ? {opacity: "0"} : {opacity: "1"}}>
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

        {isCardOpened && (
          <CardDescription initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {markdownContent ? (
              <ReactMarkdown className="markdown p-2" remarkPlugins={[gfm]} children={markdownContent} />
            ) : (
              <p>Loading...</p>
            )}
        </CardDescription>
        )}
      </CardLink>
      {isCardOpened && (
        <Fragment>
          <div
            style={{
              width: cardDimensions.width,
              height: cardDimensions.height
            }}
          ></div>
          <CardBackground
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsCardOpened(false)}
          />
        </Fragment>
      )}
    </Fragment>
  );
});

export default Card;

const CardLink = styled(motion.div)`
  ${(props) =>
    props.isCardOpened &&
    css`
      width: min(60rem, 80%);
      height: calc(100% - 2rem);
      overflow-y: auto;
      overflow-x: hidden;
      position: fixed;
      top: 20;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 10;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
    `}
`;


const CardDescription = styled(motion.p)`
  color: #ffffff;
`;

const CardImage = styled(motion.img)`
  width: 100%;
  height: auto;
`;

const CardBackground = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 9;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.7);
`;

const AbsoluteCardContainer = styled.div`
  width: min(50rem, 90vw);
  padding: 1rem;
  position: relative;
`;
