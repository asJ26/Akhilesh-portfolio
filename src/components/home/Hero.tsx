'use client';

import { motion } from 'framer-motion';
import { TypewriterEffect } from "../ui/aceternity-typewriter";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ButtonLit, ButtonLitLink } from '../ui/button-lit';

export default function Hero() {
  const words = [
    {
      text: "Hi,",
      className: "text-neutral-800 dark:text-white"
    },
    {
      text: "I'm",
      className: "text-neutral-800 dark:text-white"
    },
    {
      text: "Akhilesh",
      className: "text-neutral-800 dark:text-white font-bold"
    },
    {
      text: "Jadhav",
      className: "text-neutral-800 dark:text-white font-bold"
    },
  ];

  return (
    <section className="min-h-[90vh] w-full relative">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="h-auto min-h-[40rem] w-full flex flex-col items-center justify-center">
          <TypewriterEffect 
            words={words}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-center mb-4 sm:mb-8"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-2 sm:mt-4 text-center px-4 sm:px-6"
          >
            <h2 className="text-sm sm:text-base md:text-lg text-neutral-800 dark:text-white/90 my-4 sm:my-6 max-w-2xl mx-auto leading-relaxed">
              Data Engineer specializing in building scalable data pipelines and 
              analytics infrastructure. Experienced in transforming complex data challenges 
              into efficient, automated solutions.
            </h2>

            <div className="flex flex-col items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
              <div className="flex items-center justify-center space-x-4 sm:space-x-6">
                <ButtonLitLink
                  href="https://github.com/asJ26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 p-0 flex items-center justify-center"
                >
                  <BsGithub className="w-4 h-4 sm:w-5 sm:h-5" />
                </ButtonLitLink>
                <ButtonLitLink
                  href="https://www.linkedin.com/in/akhilesh-s-jadhav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 p-0 flex items-center justify-center"
                >
                  <BsLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </ButtonLitLink>
                <ButtonLitLink
                  href="https://medium.com/@akhileshjadhav26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 p-0 flex items-center justify-center"
                >
                  <span className="font-serif font-bold text-lg sm:text-xl">M</span>
                </ButtonLitLink>
              </div>
              
              <ButtonLitLink
                href="#projects"
                className="px-5 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base"
              >
                View Projects
              </ButtonLitLink>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12"
            >
              {[
                { value: "20+", label: "Data Pipelines" },
                { value: "100TB+", label: "Data Processed" },
                { value: "99.9%", label: "Pipeline Reliability" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                  className="text-center group"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-neutral-600 dark:text-white/80 font-medium mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
