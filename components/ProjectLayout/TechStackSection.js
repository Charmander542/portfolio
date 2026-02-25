import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const SKILL_SIZE_OVERRIDES = { altium: 36 };

const TechStackSection = ({ tech = [] }) => {
  return (
    <SectionWrapper label="Stack" title="Tools & Technologies">
      <div className="flex flex-wrap gap-6">
        {tech.map((skill, i) => {
          const size = SKILL_SIZE_OVERRIDES[skill] ?? 50;
          return (
            <motion.div
              key={skill}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <div className="w-14 h-14 flex items-center justify-center">
                <Image src={`/skills/${skill}.svg`} alt={skill} width={size} height={size} />
              </div>
              <span className="font-mono text-xs text-gray-light-3 capitalize">{skill}</span>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default TechStackSection;
