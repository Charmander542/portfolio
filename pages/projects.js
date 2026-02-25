import { PROJECTS } from "../constants.js";
import Card from '@/components/Card/Card.js';
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Loader from "@/components/Loader/Loader";
import { motion } from "framer-motion";
import Nav from "@/components/Header/Nav.js";
import { usePageLoader } from "@/hooks/usePageLoader";

export default function Projects() {
  const { isLoading, animSpeed } = usePageLoader();

  return (
    <>
      {isLoading ? (
        <Loader speed={animSpeed} />
      ) : (
        <div className="min-h-screen bg-gray-dark-5">
          <Nav />
          <ProgressIndicator />

          {/* ── Header ── */}
          <section className="section-container pt-32 pb-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="font-mono text-yellow text-xs tracking-widest uppercase">
                Charles Van Hook · Portfolio
              </span>
              <h1
                className="font-bold text-white mt-3 leading-none"
                style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
              >
                Projects.
              </h1>
            </motion.div>
          </section>

          {/* ── Grid ── */}
          <section className="section-container pb-28">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {PROJECTS.map((project, id) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: id * 0.06 }}
                >
                  <Card data={project} isDesktop={true} />
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      )}
    </>
  );
}
