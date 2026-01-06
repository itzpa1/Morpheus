import React from "react";
import { motion } from "motion/react";

const skillsData = {
  frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 98 },
    { name: "Three.js / WebGL", level: 75 },
    { name: "Framer Motion", level: 85 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "PostgreSQL / SQL", level: 80 },
    { name: "Firebase / Supabase", level: 90 },
    { name: "GraphQL", level: 70 },
    { name: "Python", level: 60 },
  ],
  tools: [
    "Figma", "Git / GitHub", "Docker", "VS Code", "Vercel", "AWS", "Notion", "Linear","Google Cloud", "AntiGravity", "LaTex"
  ]
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4 text-sm font-['Inter']">
            My Arsenal
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white font-['Bebas_Neue'] tracking-wide">
            Skills & Technologies
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Frontend */}
          <SkillCategory title="Frontend Development" delay={0}>
            {skillsData.frontend.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </SkillCategory>

          {/* Backend */}
          <SkillCategory title="Backend & Architecture" delay={0.2}>
            {skillsData.backend.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </SkillCategory>

          {/* Tools */}
          <SkillCategory title="Tools & Workflow" delay={0.4}>
            <div className="flex flex-wrap gap-3">
              {skillsData.tools.map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-red-600 dark:hover:border-red-600 hover:text-red-600 transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </SkillCategory>
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, children, delay }: { title: string; children: React.ReactNode; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white dark:bg-[#111] p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-white/5"
  >
    <h4 className="text-2xl font-bold text-black dark:text-white mb-8 font-['Manrope'] border-b border-gray-100 dark:border-white/10 pb-4">
      {title}
    </h4>
    <div className="space-y-6">
      {children}
    </div>
  </motion.div>
);

const SkillBar = ({ name, level }: { name: string; level: number }) => (
  <div>
    <div className="flex justify-between mb-2">
      <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="h-2 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-red-600"
      />
    </div>
  </div>
);
