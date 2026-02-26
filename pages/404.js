import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
/* eslint-disable react/no-unknown-property */

const LINES = [
  { text: "[BOOT] UNIT-404 initializing...",                 delay: 400  },
  { text: "[NAV]  plotting course to requested page...",    delay: 900  },
  { text: "[SCAN] sweeping all known directories...",       delay: 1400 },
  { text: "[SCAN] checking alternate timelines...",         delay: 1900 },
  { text: "[COMM] pinging home base... no response",        delay: 2450, warn: true },
  { text: "[ERR]  TARGET PAGE DOES NOT EXIST",              delay: 3050, error: true },
  { text: "[SYS]  servos: OK  |  sensors: OK  |  ego: OK", delay: 3650 },
  { text: "[SYS]  navigation module: CRITICALLY LOST",      delay: 4200, warn: true },
  { text: "[REC]  recommend returning to home base",        delay: 4800, success: true },
];

function SearchingRobot({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  const head = useRef();
  const body = useRef();
  const rArm = useRef();
  const lArm = useRef();

  useEffect(() => {
    const robot = gltf.scene.children.find((c) => c.name === "robotlightglb");
    const armature = robot.children.find((c) => c.name === "Armature");
    const bodyNode = armature.children.find((c) => c.name === "Body");
    head.current = bodyNode.children.find((c) => c.name === "Head");
    rArm.current = bodyNode.children.find((c) => c.name === "ArmRight");
    lArm.current = bodyNode.children.find((c) => c.name === "ArmLeft");
    body.current = bodyNode;
  }, [gltf]);

  useFrame(({ clock }) => {
    if (!head.current || !body.current || !rArm.current || !lArm.current) return;
    const t = clock.getElapsedTime();

    // Base orientation from Hero (y=-PI, z=0) looks forward without flipping.
    // x=-0.4 tilts the face upward; y sweep scans left and right.
    head.current.rotation.x = 0;
    head.current.rotation.y = -Math.PI + Math.sin(t * 0.45) * 0.65;
    head.current.rotation.z = -1;

    // Gentle body bob
    body.current.position.y = Math.sin(t * 1.4) * 0.05;

    // Arm sway

  });

  return (
    <group scale={[2, 2, 2]} position={[0, -5, -2]} rotation={[0, 80, 0]}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export default function Custom404() {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const done = visibleCount >= LINES.length;

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (visibleCount >= LINES.length) return;
    const prev = visibleCount > 0 ? LINES[visibleCount - 1].delay : 0;
    const gap = LINES[visibleCount].delay - prev;
    const t = setTimeout(() => setVisibleCount((v) => v + 1), gap);
    return () => clearTimeout(t);
  }, [visibleCount]);

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-20 select-none overflow-hidden gap-10 md:gap-0"
      style={{ backgroundColor: "#1c0f1f" }}
    >
      {/* ── Left: text + terminal ── */}
      <div className="flex flex-col items-start z-10 w-full md:w-1/2 max-w-lg">

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.35em] text-gray-500 uppercase mb-1">
            unit
          </p>
          <h1
            className="glitch font-black leading-none tracking-tighter text-yellow"
            style={{ fontSize: "clamp(5rem, 14vw, 10rem)" }}
            data-text="404"
          >
            404
          </h1>
          <p className="font-mono text-xs tracking-[0.3em] text-gray-500 uppercase mt-1 mb-6">
            navigation failure
          </p>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="w-full rounded-xl overflow-hidden border border-gray-dark-1"
        >
          <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-dark-3 border-b border-gray-dark-1">
            <span className="w-2.5 h-2.5 rounded-full bg-red" />
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "#f59e0b" }} />
            <span className="w-2.5 h-2.5 rounded-full bg-green" />
            <span className="ml-3 text-xs text-gray-light-4 font-mono">
              UNIT-404 — diagnostic.log
            </span>
          </div>
          <div className="bg-gray-dark-2 px-5 py-4 font-mono text-xs sm:text-sm min-h-[220px] space-y-1.5">
            {LINES.slice(0, visibleCount).map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={
                  line.error
                    ? "text-red font-semibold"
                    : line.warn
                    ? "text-yellow/70"
                    : line.success
                    ? "text-yellow"
                    : "text-gray-light-3"
                }
              >
                {line.text}
              </motion.p>
            ))}
            {!done && (
              <span className="inline-block w-2 h-[1em] bg-yellow align-middle animate-pulse" />
            )}
            {done && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-light-4"
              >
                {"> awaiting command_"}
              </motion.p>
            )}
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={done ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="mt-6"
        >
          <button
            onClick={() => router.push("/")}
            className="group flex items-center gap-3 font-mono text-sm border border-yellow/30 hover:border-yellow/80 text-yellow/60 hover:text-yellow px-6 py-3 rounded-lg transition-all duration-200"
            style={{ boxShadow: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 24px rgba(255,255,0,0.12)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <span className="opacity-50 group-hover:opacity-100 transition-opacity">$</span>
            navigate --to home
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </motion.div>
      </div>

      {/* ── Right: 3D robot ── */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full md:w-1/2 hidden md:block"
          style={{ height: "520px" }}
        >
          <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <SearchingRobot url="/scene.gltf" />
          </Canvas>
        </motion.div>
      )}

      <style>{`
        .glitch { position: relative; color: #FFFF00; }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          color: inherit;
        }
        .glitch::before {
          color: #ff003c;
          animation: glitch-top 3.5s infinite linear;
          clip-path: polygon(0 0, 100% 0, 100% 38%, 0 38%);
        }
        .glitch::after {
          color: #00fff9;
          animation: glitch-bot 3.5s infinite linear;
          clip-path: polygon(0 62%, 100% 62%, 100% 100%, 0 100%);
        }
        @keyframes glitch-top {
          0%, 88%, 100% { transform: translate(0); opacity: 0; }
          90% { transform: translate(-4px, 1px); opacity: 1; }
          94% { transform: translate(3px, -1px); opacity: 1; }
          97% { transform: translate(0); opacity: 0; }
        }
        @keyframes glitch-bot {
          0%, 84%, 100% { transform: translate(0); opacity: 0; }
          86% { transform: translate(4px, 2px); opacity: 1; }
          90% { transform: translate(-3px, -1px); opacity: 1; }
          93% { transform: translate(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
