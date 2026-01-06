import React from "react";
import { motion } from "motion/react";
import { Code2, Palette, Terminal, Zap } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-red-600 font-bold tracking-widest uppercase mb-4 text-sm font-['Inter']">
              Who I Am
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white font-['Bebas_Neue'] tracking-wide">
              Bridging the gap between <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                Design & Engineering
              </span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-['Inter']">
              I’m a creative developer obsessed with building digital products that look as good as they function. 
              With a background in both UI design and full-stack development, I bring a unique perspective to every project.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-['Inter']">
              Whether it's a sleek marketing site, a complex web application, or an immersive interactive experience, 
              I focus on performance, accessibility, and pixel-perfect execution.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <StatCard number="50+" label="Projects Delivered" />
              <StatCard number="5+" label="Years Experience" />
              <StatCard number="20+" label="Happy Clients" />
              <StatCard number="100%" label="Commitment" />
            </div>
          </motion.div>

          {/* Visual / Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <FeatureCard 
              icon={<Code2 size={32} />} 
              title="Clean Code" 
              desc="Scalable, maintainable, and efficient architectures."
              delay={0}
            />
            <FeatureCard 
              icon={<Palette size={32} />} 
              title="Modern Design" 
              desc="Aesthetics that drive engagement and conversion."
              delay={0.2}
            />
            <FeatureCard 
              icon={<Zap size={32} />} 
              title="Fast Performance" 
              desc="Optimized for speed and SEO rankings."
              delay={0.4}
            />
            <FeatureCard 
              icon={<Terminal size={32} />} 
              title="Full Stack" 
              desc="From database design to frontend polish."
              delay={0.6}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="border-l-4 border-red-600 pl-4">
    <h4 className="text-3xl font-bold text-black dark:text-white font-['Bebas_Neue']">{number}</h4>
    <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</p>
  </div>
);

const FeatureCard = ({ icon, title, desc, delay }: { icon: React.ReactNode; title: string; desc: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors border border-gray-100 dark:border-white/10 group"
  >
    <div className="text-red-600 mb-4 group-hover:scale-110 transition-transform">{icon}</div>
    <h4 className="text-xl font-bold text-black dark:text-white mb-2 font-['Manrope']">{title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
  </motion.div>
);
