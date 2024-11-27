"use client";

import { motion } from 'framer-motion';
import { TypewriterEffect } from "../ui/typewriter-effect";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiMedium } from "react-icons/si";
import ClientOnly from '../ClientOnly';

export default function Hero() {
  const words = [
    {
      text: "Hi",
      className: "text-neutral-800 dark:text-white"
    },
    {
      text: "I&apos;m",
      className: "text-neutral-800 dark:text-white"
    },
    {
      text: "Akhilesh",
      className: "text-neutral-800 dark:text-white font-bold"
    },
    {
      text: "Jadhav",
      className: "text-neutral-800 dark:text-white font-bold"
    }
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-[90vh] w-full relative"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="h-[40rem] w-full flex flex-col items-center justify-center">
          <ClientOnly
            fallback={
              <motion.h1 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-4xl sm:text-5xl font-bold text-neutral-800 dark:text-white"
              >
                Hi, I&apos;m Akhilesh Jadhav
              </motion.h1>
            }
          >
            <TypewriterEffect words={words} className="text-4xl sm:text-5xl" />
          </ClientOnly>
          
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto text-center mt-6">
            Data Engineer specializing in building scalable data pipelines and analytics
            infrastructure. Experienced in transforming complex data challenges into
            efficient, automated solutions.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/asJ26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-900 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <BsGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/akhilesh-jadhav-26/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-900 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <BsLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://medium.com/@akhileshjadhav26"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-900 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <SiMedium className="w-6 h-6" />
            </a>
          </div>

          <a
            href="#projects"
            className="mt-8 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium hover:scale-105 transition-transform duration-200"
          >
            View Projects
          </a>

          <div className="grid grid-cols-3 gap-12 mt-20 text-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">20+</h2>
              <p className="text-sm text-neutral-600 dark:text-white/80">Data Pipelines</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">100TB+</h2>
              <p className="text-sm text-neutral-600 dark:text-white/80">Data Processed</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">99.9%</h2>
              <p className="text-sm text-neutral-600 dark:text-white/80">Pipeline Reliability</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
