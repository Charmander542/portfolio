import { useRouter } from "next/router";
import Nav from "@/components/Header/Nav";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Loader from "@/components/Loader/Loader";
import { PROJECTS } from "../../constants";
import { FaArrowLeft, FaArrowRight, FaTh } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { usePageLoader } from "@/hooks/usePageLoader";

const ProjectLayout = ({ projectName, children }) => {
  const { isLoading, animSpeed } = usePageLoader({ minMs: 400, jitterMs: 400 });
  const router = useRouter();

  const projectIndex = PROJECTS.findIndex((p) => p.name === projectName);
  const prevIndex = (projectIndex - 1 + PROJECTS.length) % PROJECTS.length;
  const nextIndex = (projectIndex + 1) % PROJECTS.length;

  const toUrl = (project) =>
    project.url ?? `/projects/${project.name.toLowerCase().replace(/\s+/g, "_")}`;

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            style={{ position: "fixed", inset: 0, zIndex: 9999 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Loader speed={animSpeed} />
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Nav />
          <ProgressIndicator />
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-gray-dark-5 min-h-screen"
          >
            {children}

            {/* Footer nav */}
            <div className="section-container py-16 border-t border-gray-dark-1">
              {/* All Projects button */}
              <div className="flex justify-center mb-10">
                <button
                  onClick={() => router.push("/projects")}
                  className="flex items-center gap-2 font-mono text-sm px-5 py-2 rounded-full border transition-all duration-200"
                  style={{ color: "#8a8a8a", borderColor: "#323133" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = "#FFFF00";
                    e.currentTarget.style.borderColor = "#FFFF00";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = "#8a8a8a";
                    e.currentTarget.style.borderColor = "#323133";
                  }}
                >
                  <FaTh style={{ fontSize: "0.75rem" }} />
                  All Projects
                </button>
              </div>

              {/* Prev / Next */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => router.push(toUrl(PROJECTS[prevIndex]))}
                  className="group flex items-center gap-3 text-gray-light-3 hover:text-yellow transition-colors duration-200"
                >
                  <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
                  <span className="font-mono text-sm">
                    <span className="block text-xs text-gray-light-4 mb-0.5">Previous</span>
                    {PROJECTS[prevIndex].name}
                  </span>
                </button>

                <button
                  onClick={() => router.push(toUrl(PROJECTS[nextIndex]))}
                  className="group flex items-center gap-3 text-gray-light-3 hover:text-yellow transition-colors duration-200 text-right"
                >
                  <span className="font-mono text-sm">
                    <span className="block text-xs text-gray-light-4 mb-0.5">Next</span>
                    {PROJECTS[nextIndex].name}
                  </span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </motion.main>
        </>
      )}
    </>
  );
};

export default ProjectLayout;
