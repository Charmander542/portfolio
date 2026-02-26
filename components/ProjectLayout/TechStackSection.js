import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { SKILL_NAMES } from "../../constants";

const SKILL_SIZE_OVERRIDES = { altium: 26 };

const TechStackSection = ({ tech = [] }) => {
  return (
    <SectionWrapper label="Stack" title="Tools & Technologies">
      <div className="flex flex-wrap gap-6">
        {tech.map((skill, i) => {
          const size = SKILL_SIZE_OVERRIDES[skill] ?? 45;
          const label = SKILL_NAMES[skill] ?? skill;
          return (
            <motion.div
              key={skill}
              className="flex flex-col items-center gap-2"
              style={{ width: 64 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <Image src={`/skills/${skill}.svg`} alt={label} width={size} height={size} />
              </div>
              <span className="font-mono text-xs text-gray-light-3 text-center leading-tight">
                {label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default TechStackSection;
