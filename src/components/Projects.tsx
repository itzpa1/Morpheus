import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Neon Dashboard",
    category: "Web Application",
    image:
      "https://images.unsplash.com/photo-1592323401640-9c24ed330baf?auto=format&fit=crop&w=800&q=80",
    description:
      "A high-performance analytics dashboard with real-time data visualization.",
    tech: ["React", "D3.js", "Firebase", "Tailwind"],
    demoLink: "https://youtube.com/@itz_pa1",
    repoLink: "https://github.com/itzpa1",
  },
  {
    id: 2,
    title: "Cyberpunk UI Kit",
    category: "Design System",
    image:
      "https://images.unsplash.com/photo-1720962158937-7ea890052166?auto=format&fit=crop&w=800&q=80",
    description:
      "A comprehensive UI component library inspired by futuristic aesthetics.",
    tech: ["Figma", "React", "Storybook", "CSS Modules"],
    demoLink: "https://youtube.com/@itz_pa1",
    repoLink: "https://github.com/itzpa1",
  },
  {
    id: 3,
    title: "Minimal Portfolio",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1613905383527-8994ba2f9896?auto=format&fit=crop&w=800&q=80",
    description: "An award-winning minimal portfolio template for creatives.",
    tech: ["Next.js", "Framer Motion", "Sanity CMS"],
    demoLink: "https://youtube.com/@itz_pa1",
    repoLink: "https://github.com/itzpa1",
  },
];

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4 text-sm font-['Inter']">
              Selected Works
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white font-['Bebas_Neue'] tracking-wide">
              Featured Projects
            </h3>
          </div>

          <a
            href="https://github.com/itzpa1?tab=repositories"
            target="_blank"
            className="text-black dark:text-white font-bold hover:text-red-600 dark:hover:text-red-600 transition-colors flex items-center gap-2 border-b-2 border-black dark:border-white pb-1 hover:border-red-600 dark:hover:border-red-600"
          >
            View All Projects <ExternalLink size={16} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-900"
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
        />
      </div>

      {/* Overlay Content (Always visible or hover? Prompt says Hover reveal overlay) */}
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-red-500 font-bold text-sm mb-2 uppercase tracking-wider">
            {project.category}
          </p>
          <h4 className="text-2xl font-bold text-white mb-2 font-['Manrope']">
            {project.title}
          </h4>
          <p className="text-gray-300 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs text-white/80 border border-white/20 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={project.demoLink}
              className="bg-red-600 text-white px-4 py-2 rounded font-bold text-sm hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              Live Demo <ExternalLink size={14} />
            </a>
            <a
              href={project.repoLink}
              className="bg-white text-black px-4 py-2 rounded font-bold text-sm hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              GitHub <Github size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
