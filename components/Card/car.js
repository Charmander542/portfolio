import { motion } from "framer-motion";
import { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import styled, { css } from "styled-components";
import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm'


export default function Card({ data}) {
    const { name, image, description, gradient, author, category, markdown} = data;  
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
        <motion.div className="w-full h-full rounded-3xl overflow-hidden relative" style={{
              background: `linear-gradient(90deg, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
              cursor: "pointer"
            }}>
        <motion.img
            src="/project-bg.svg"
            alt="project"
            className="w-full h-full top-0 left-0 object-cover opacity-30"
          />
          <motion.div className="absolute top-2 left-0 ">
            <motion.span className="category pl-2">{category}</motion.span>
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
              <ReactMarkdown remarkPlugins={[gfm]} children={markdownContent} />
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
}

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
  font-weight: 100;
  font-size: 1.5em;
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
