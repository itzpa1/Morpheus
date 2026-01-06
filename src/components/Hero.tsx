import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Youtube,
} from "lucide-react";
import heroImage from "/assets/hero.png";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#b91c1c] text-white pt-20"
    >
      {/* Background Texture/Grain can be added here via CSS or SVG overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }} // smooth cubic-bezier
              className="text-3xl md:text-5xl font-bold font-['Bebas_Neue'] tracking-wider uppercase block"
            >
              I am
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1],
              }}
              className="text-7xl md:text-9xl font-black text-black font-['Anton'] uppercase drop-shadow-sm block"
            >
              Morpheus
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="h-1 w-12 bg-black"></div>
            <p className="text-xl md:text-2xl font-medium tracking-wide font-['Bebas_Neue']">
              Designer <span className="text-black font-bold">/</span> Developer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-lg text-lg text-white/90 font-['Inter'] leading-relaxed"
          >
            Crafting high-impact digital experiences with a blend of creative
            design and robust engineering. Building the future, one pixel at a
            time.
          </motion.p>

          {/* Stats / Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-8 py-4 border-t border-black/10 mt-4"
          >
            <div>
              <p className="font-bold text-2xl font-['Bebas_Neue']">10+</p>
              <p className="text-sm opacity-80">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-black/20"></div>
            <div>
              <p className="font-bold text-2xl font-['Bebas_Neue']">100%</p>
              <p className="text-sm opacity-80">Trustworthy</p>
            </div>
            <div className="w-px h-10 bg-black/20"></div>
            <div>
              <p className="font-bold text-2xl font-['Bebas_Neue']">Modern</p>
              <p className="text-sm opacity-80">Design Solutions</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-black text-white font-bold tracking-wider uppercase overflow-hidden hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight size={18} />
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-black text-black font-bold tracking-wider uppercase hover:bg-black hover:text-white transition-all"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex gap-6 pb-6"
          >
            <SocialLink
              href="https://github.com/itzpa1"
              target="_blank"
              title="GitHub"
              icon={<Github size={20} />}
            />
            <SocialLink
              href="https://linkedin.com/in/itzpa1"
              title="LinkedIn"
              icon={<Linkedin size={20} />}
            />
            <SocialLink
              href="https://youtube.com/@itz_pa1"
              title="YouTUbe"
              icon={<Youtube size={20} />}
            />
            <SocialLink
              href="https://instagram.com/code.itzpa1"
              title="Instagram"
              icon={<Instagram size={20} />}
            />
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative h-full flex items-end justify-center lg:justify-end"
        >
          {/* Abstract Shapes behind */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-black/20 rounded-full blur-3xl"></div>

          <img
            src={heroImage}
            alt="Morpheus Character"
            className="relative z-10 max-h-[80vh] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const SocialLink = ({
  href,
  icon,
  title,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
}) => (
  <a
    href={href}
    title={title}
    target="_blank"
    className="p-3 bg-white/10 rounded-full hover:bg-black hover:text-white text-black transition-all duration-300 backdrop-blur-sm"
  >
    {icon}
  </a>
);
