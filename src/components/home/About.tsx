"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto">
          Data Engineer | Cloud Solutions Architect | Big Data Evangelist
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-neutral-700 dark:text-white/90 mb-4 text-center">
                I&apos;m a passionate Data Engineer with deep expertise in AWS, Azure, and Big Data technologies like Hadoop. My career has been a dynamic adventure from constructing ETL/ELT pipelines to optimizing cloud storage and processing, always with the goal of transforming raw data into clear, actionable insights. Whether I'm deploying machine learning models or mentoring budding engineers, each day is about pushing boundaries and refining the art of data science.
              </p>
              <p className="text-neutral-700 dark:text-white/90 mb-6 text-center">
              In my toolkit, Python and SQL blend with visualization tools like Power BI and Tableau to not just manage data, but make it meaningful. Having worked at places like PTC and Sigma Infosolutions, I've cultivated a knack for not only solving complex data challenges but also teaching others to navigate this evolving landscape. It's about making data work smarter, and sharing that knowledge to empower teams and enhance our approach to data-driven decision making.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <Stat label="Years Experience" value="3+" />
              <Stat label="Projects Completed" value="15+" />
              <Stat label="Technologies" value="15+" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white dark:bg-[#030712] p-6 rounded-xl
        border border-neutral-200 dark:border-neutral-800
        hover:border-neutral-300 dark:hover:border-purple-500/50
        transition duration-300"
    >
      <div className="text-3xl font-bold text-neutral-900 dark:text-purple-400">
        {value}
      </div>
      <div className="text-sm text-neutral-600 dark:text-white/80 mt-1">
        {label}
      </div>
    </motion.div>
  );
}
