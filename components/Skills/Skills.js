import Image from "next/image";
import { motion } from "framer-motion";
import { MENULINKS, SKILLS, SKILL_NAMES } from "../../constants";

const SKILL_SIZE_OVERRIDES = { altium: 26 };

const SkillIcon = ({ skill }) => {
  const size = SKILL_SIZE_OVERRIDES[skill] ?? 45;
  const label = SKILL_NAMES[skill] ?? skill;
  return (
    <div className="flex flex-col items-center gap-2" style={{ width: 64 }}>
      <div className="w-12 h-12 flex items-center justify-center">
        <Image src={`/skills/${skill}.svg`} alt={label} width={size} height={size} />
      </div>
      <span className="font-mono text-xs text-gray-light-3 text-center leading-tight">
        {label}
      </span>
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut", delay: i * 0.07 },
  }),
};

const Skills = () => {
  return (
    <section
      className="w-full relative select-none mt-20"
      id={MENULINKS[1].ref}
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          height={700}
          width={320}
        />
        <motion.div
          className="flex flex-col skills-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.div className="flex flex-col" variants={fadeUp} custom={0}>
            <p className="uppercase tracking-widest text-gray-light-1">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-mush-light w-fit">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-xl w-full mt-2">
              From RTL and EDA tools to robotics stacks and embedded firmware —
              a snapshot of the languages and platforms behind my work.
            </h2>
          </motion.div>

          <motion.div className="mt-10" variants={fadeUp} custom={1}>
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
              LANGUAGES
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu">
              {SKILLS.languagesAndTools.map((skill) => (
                <SkillIcon key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div className="mt-10" variants={fadeUp} custom={2}>
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
              AI, ROBOTICS &amp; WEB
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu">
              {SKILLS.librariesAndFrameworks.map((skill) => (
                <SkillIcon key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>

          <motion.div className="flex flex-wrap mt-10" variants={fadeUp} custom={3}>
            <div className="mr-16 xs:mr-20 mb-6">
              <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4">
                HARDWARE / EDA &amp; CAD
              </h3>
              <div className="flex flex-wrap gap-6 transform-gpu">
                {SKILLS.software.map((skill) => (
                  <SkillIcon key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
