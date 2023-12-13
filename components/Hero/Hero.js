import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import { gsap, Linear } from "gsap";
import { MENULINKS, TYPED_STRINGS } from "../../constants";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";

const Hero = () => {

  const typedEl = useRef(null);
  const targetSection = useRef(null);

  const options = {
    strings: TYPED_STRINGS,
    typeSpeed: 50,
    startDelay: 1500,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  };

  useEffect(() => {
    const typed = new Typed(typedEl.current, options);

    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl
      .to(targetSection.current, { opacity: 1, duration: 2 })
      .from(
        targetSection.current.querySelectorAll(".seq"),
        { opacity: 0, duration: 0.5, stagger: 0.5 },
        "<"
      );

    return () => typed.destroy();
  }, [typedEl, targetSection]);

  return (
    <section
      ref={targetSection}
      className="w-full flex xs:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
      id={MENULINKS[0].ref}
      style={{ opacity: 0 }}
    >
      <style global jsx>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style>
      <div className="flex flex-col pt-40 md:pt-0 select-none">
        <h1
          className={`${styles.intro} font-mono font-bold text-5xl seq`}
        >
          Hello, <br /> I&apos;m&nbsp;
          <span
            ref={typedEl}
            className="seq text-5xl text-mush-light font-mono leading-relaxed"
          ></span>
        </h1>
        <p>
        </p>
        <div className="seq">
          <Profiles />
        </div>
        <div className="seq pt-4">
          <Button href={`#${MENULINKS[3].ref}`} classes="link" type="primary">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
      <div className="seq absolute pic -z-1 w-1/2 h-full">
      <Image 
        src="/person.png"
        layout="fill"
        />
      </div>

    </section>
  );
};

export default Hero;
