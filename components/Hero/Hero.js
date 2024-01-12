import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Typed from "typed.js";
import { gsap, Linear } from "gsap";
import { MENULINKS, TYPED_STRINGS } from "../../constants";
import styles from "./Hero.module.scss";
import Button from "../Button/Button";
import Profiles from "../Profiles/Profiles";
import useDownloader from "react-use-downloader";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';


function Model({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  const head = useRef();
  const body = useRef();
  const rArm = useRef();
  const lArm = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { camera } = useThree();

  // Track the mouse position
  useEffect(() => {
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX-window.innerWidth/4, y: ev.clientY+window.innerHeight/4});
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Find the head object once the model is loaded
  useEffect(() => {
    console.log(gltf.scene);
    const robot = gltf.scene.children.find(child => child.name === 'robotlightglb');
    const armature = robot.children.find(child => child.name === 'Armature');
    const bodyNode = armature.children.find(child => child.name === 'Body');
    head.current = bodyNode.children.find(child => child.name === 'Head');
    rArm.current = bodyNode.children.find(child => child.name === 'ArmRight');
    lArm.current = bodyNode.children.find(child => child.name === 'ArmLeft');
    body.current = bodyNode;
  }, [gltf]);

  useFrame(({ clock }) => {
    // This will make the model's head face the mouse
    if (head.current && body.current && lArm.current && rArm.current) {
      // Get the position of the head in world space
      const headPosition = new THREE.Vector3();
      head.current.getWorldPosition(headPosition);

      // Project the position to normalized device coordinates
      headPosition.project(camera);

      // Convert to screen coordinates
      const headScreenPosition = new THREE.Vector2(
        (headPosition.x * 0.5 + 0.5) * window.innerWidth,
        (headPosition.y * -0.5 + 0.5) * window.innerHeight
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mousePosition, camera);
      head.current.rotation.y = -(Math.PI - Math.atan2(mousePosition.x - headScreenPosition.width, 1000));
      head.current.rotation.z = Math.PI + -(Math.PI - Math.atan2(mousePosition.y - headScreenPosition.height, 1000));

      // Make the body move up and down
      const speed = 1.5; // Adjust speed as needed
      const amplitude = 0.05; // Adjust amplitude as needed
      body.current.position.y = Math.sin(clock.getElapsedTime() * speed) * amplitude;
      rArm.current.rotation.z = Math.sin(clock.getElapsedTime() * speed) * amplitude;
      lArm.current.rotation.z = Math.sin(clock.getElapsedTime() * speed) * amplitude;
    }
  });

  return (
    <group scale={[2, 2, 2]} position={[0, -5, -2]} rotation={[0,80,0]}>
      <primitive object={gltf.scene} />
    </group>
  );
}

const Hero = () => {
  const typedEl = useRef(null);
  const targetSection = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if window is defined (i.e., if we're in a browser)
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth > 800);

      const handleResize = () => {
        setIsDesktop(window.innerWidth > 800);
      };

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

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

  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = "/resume.pdf";
  const filename = "CharlesVanHookResume.pdf";

  return (
    <section
      ref={targetSection}
      className="w-full flex xs:items-center py-8 2xl:container mx-auto xl:px-20 md:px-12 px-4 min-h-screen relative mb-24"
      id={MENULINKS[0].ref}
      style={{ opacity: 0 }}
    >
      <style>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style>
      <div className="flex flex-col pt-40 md:pt-0 select-none">
        <h1 className={`${styles.intro} font-mono font-bold text-5xl seq`}>
          Hello, <br /> I&apos;m&nbsp;
          <span
            ref={typedEl}
            className="seq text-5xl text-mush-light font-mono leading-relaxed"
          ></span>
        </h1>
        <p></p>
        <div className="seq">
          <Profiles />
        </div>
        <div className="seq flex pt-4">
          <Button href={`#${MENULINKS[3].ref}`} classes="link" type="primary">
            Let&apos;s Talk
          </Button>
          <Button
            onClick={() => download(fileUrl, filename)}
            classes="link ml-5"
            type="primary"
          >
            Resume
          </Button>
        </div>
      </div>

      {isDesktop && <div className="pic pt-2 absolute seq w-1/2 h-[30rem]">
      <Canvas>
        <ambientLight />
          <pointLight position={[10, 10, 10]} />
        <Model url="/scene.gltf" />
    </Canvas>
    </div>}
    </section>
  );
};

export default Hero;

<div className="seq absolute pic -z-1 w-1/2 h-full">
  <Image src="/person.png" layout="fill" />
</div>;
