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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="h-[40rem] w-full flex flex-col items-center justify-center">
          <TypewriterEffect 
            words={words}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-center mb-8"
          />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-4 text-center"
          >
            <h2 className="text-base sm:text-lg text-neutral-800 dark:text-white/90 my-6 max-w-2xl mx-auto leading-relaxed">
              Data Engineer specializing in building scalable data pipelines and 
              analytics infrastructure. Experienced in transforming complex data challenges 
              into efficient, automated solutions.
            </h2>

            <div className="flex flex-col items-center gap-6 mt-8">
              <div className="flex items-center justify-center space-x-6">
                <ButtonLitLink
                  href="https://github.com/asJ26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 p-0 flex items-center justify-center"
                >
                  <BsGithub className="w-5 h-5" />
                </ButtonLitLink>
                <ButtonLitLink
                  href="https://www.linkedin.com/in/akhilesh-s-jadhav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 p-0 flex items-center justify-center"
                >
                  <BsLinkedin className="w-5 h-5" />
                </ButtonLitLink>
                <ButtonLitLink
                  href="https://medium.com/@akhileshjadhav26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 p-0 flex items-center justify-center"
                >
                  <span className="font-serif font-bold text-xl">M</span>
                </ButtonLitLink>
              </div>
              
              <ButtonLitLink
                href="#projects"
                className="px-6 py-2.5"
              >
                View Projects
              </ButtonLitLink>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-16 flex items-center justify-center gap-12"
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
                  <div className="text-2xl font-bold text-neutral-900 dark:text-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-white/80 font-medium">
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
