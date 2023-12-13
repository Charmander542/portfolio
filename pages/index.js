import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Meta from "@/components/Seo/Meta";
import Loader from "@/components/Loader/Loader";
import Header from "@/components/Header/Header";
import Menu from "@/components/Header/Menu/Menu";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Hero from "@/components/Hero/Hero";
import Skills from "@/components/Skills/Skills";
import Projects from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Scripts from "@/components/Scripts/Scripts";
import { displayFancyLogs } from "utils";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });

  const [isLoading, setIsLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);
  const [clientHeight, setClientHeight] = useState(0);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2600);

    displayFancyLogs();
  }, []);

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

  return (
    <>
      <Meta>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header>
              <Menu />
            </Header>
            <ProgressIndicator />
            <main className="flex flex-col">
              <div className="fixed top-0 left-0 h-screen w-screen -z-1"></div>
              <Hero />
              <Skills />
              <div className="pt-10 sm:pt-16 bg-gray-dark-5"></div>
              <Projects isDesktop={isDesktop} clientHeight={clientHeight} />
              <div className="pt-10 sm:pt-16 bg-gray-dark-5"></div>
              <Contact />
            </main>
            <Scripts />
          </>
        )}
      </Meta>
    </>
  );
}
