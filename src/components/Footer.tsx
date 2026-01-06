import React from "react";

export const Footer: React.FC = () => {
  const SocialLinks = [
    { name: "GitHub", link: "https://github.com/itzpa1" },
    { name: "LinkedIn", link: "https://linkedin.com/in/itzpa1" },
    { name: "Instagram", link: "https://instagram.com/code.itzpa1" },
  ];
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-100 dark:border-white/10 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold font-['Bebas_Neue'] uppercase tracking-widest text-black dark:text-white">
            Morpheus.
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex gap-8">
            {SocialLinks.map((item, index) => (
              <a
                href={item.link}
                title={item.name}
                key={index}
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors text-sm uppercase tracking-wider font-bold"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="https://instagram.com/code.itzpa1"
            className="text-center text-gray-500 dark:text-gray-400 text-sm mt-2"
          >
            Developed by{" "}
            <span className="font-bold text-white duration-300 transition-colors hover:text-red-600 dark:text-black ">
              Code.Itzpa1
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
