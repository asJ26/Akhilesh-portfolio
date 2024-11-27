'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-3 sm:mb-4">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-white/80 max-w-2xl mx-auto px-4 sm:px-6">
            Data Engineer specializing in building scalable solutions and transforming complex data into actionable insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 sm:space-y-4"
            >
              <p className="text-sm sm:text-base text-neutral-700 dark:text-white/90">
                I&apos;m a Data Engineer with expertise in building scalable data pipelines
                and implementing robust data solutions. With a strong foundation in
                both software engineering and data science, I specialize in
                transforming raw data into actionable insights.
              </p>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-white/90">
                My experience includes working with big data technologies, cloud
                platforms, and modern data stack tools to deliver efficient and
                reliable data infrastructure.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">
              <Stat label="Years Experience" value="3.5+" />
              <Stat label="Projects Completed" value="20+" />
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
      className="bg-white dark:bg-[#030712] p-4 sm:p-6 rounded-xl
        border border-neutral-200 dark:border-neutral-800
        hover:border-neutral-300 dark:hover:border-purple-500/50
        transition duration-300
        flex flex-col items-center justify-center"
    >
      <div className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-purple-400">
        {value}
      </div>
      <div className="text-xs sm:text-sm text-neutral-600 dark:text-white/80 mt-1">
        {label}
      </div>
    </motion.div>
  );
}
